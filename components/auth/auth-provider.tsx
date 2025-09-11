"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import type { User, AuthError } from "@supabase/supabase-js"
import { DatabaseService } from "@/lib/services/database-service"

interface AuthContextType {
  user: User | null
  loading: boolean
  subscription: any | null
  signIn: (email: string, password: string) => Promise<{ data: any; error: AuthError | null }>
  signUp: (email: string, password: string, userData?: any) => Promise<{ data: any; error: AuthError | null }>
  signInWithOAuth: (provider: "google" | "linkedin_oidc") => Promise<{ data: any; error: AuthError | null }>
  signOut: () => Promise<void>
  updateProfile: (updates: any) => Promise<{ data: any; error: any }>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  subscription: null,
  signIn: async () => ({ data: null, error: null }),
  signUp: async () => ({ data: null, error: null }),
  signInWithOAuth: async () => ({ data: null, error: null }),
  signOut: async () => {},
  updateProfile: async () => ({ data: null, error: null }),
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [subscription, setSubscription] = useState<any | null>(null)

  useEffect(() => {
    // Get initial session
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession()
        if (error) {
          console.error("Error getting session:", error)
        } else {
          setUser(session?.user ?? null)
          if (session?.user) {
            await loadUserSubscription(session.user.id)
          }
        }
      } catch (error) {
        console.error("Error in getInitialSession:", error)
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Listen for auth changes
    const {
      data: { subscription: authSubscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session?.user?.id)
      setUser(session?.user ?? null)

      if (session?.user) {
        await loadUserSubscription(session.user.id)
      } else {
        setSubscription(null)
      }

      setLoading(false)
    })

    return () => authSubscription.unsubscribe()
  }, [])

  const loadUserSubscription = async (userId: string) => {
    try {
      const { data, error } = await DatabaseService.getUserSubscription(userId)
      if (error) {
        console.error("Error loading subscription:", error)
      } else {
        setSubscription(data)
      }
    } catch (error) {
      console.error("Error in loadUserSubscription:", error)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      return { data, error }
    } catch (error) {
      console.error("Sign in error:", error)
      return { data: null, error: error as AuthError }
    }
  }

  const signUp = async (email: string, password: string, userData?: any) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: userData,
        },
      })

      // Create user profile in database
      if (data.user && !error) {
        await DatabaseService.createUser({
          id: data.user.id,
          email: data.user.email!,
          full_name: userData?.full_name || "",
          user_type: userData?.user_type || "job_seeker",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
      }

      return { data, error }
    } catch (error) {
      console.error("Sign up error:", error)
      return { data: null, error: error as AuthError }
    }
  }

  const signInWithOAuth = async (provider: "google" | "linkedin_oidc") => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      return { data, error }
    } catch (error) {
      console.error("OAuth sign in error:", error)
      return { data: null, error: error as AuthError }
    }
  }

  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error("Sign out error:", error)
      }
    } catch (error) {
      console.error("Sign out error:", error)
    }
  }

  const updateProfile = async (updates: any) => {
    try {
      if (!user) {
        return { data: null, error: { message: "No user logged in" } }
      }

      const { data, error } = await DatabaseService.updateUser(user.id, updates)
      return { data, error }
    } catch (error) {
      console.error("Update profile error:", error)
      return { data: null, error }
    }
  }

  const value = {
    user,
    loading,
    subscription,
    signIn,
    signUp,
    signInWithOAuth,
    signOut,
    updateProfile,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
