import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

// Create a mock client for server-side operations when environment variables are missing
function createMockClient() {
  return {
    auth: {
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      getUser: () => Promise.resolve({ data: { user: null }, error: null }),
      signInWithPassword: () =>
        Promise.resolve({ data: null, error: { message: "Mock client - authentication not configured" } }),
      signInWithOtp: () =>
        Promise.resolve({ data: null, error: { message: "Mock client - authentication not configured" } }),
      verifyOtp: () =>
        Promise.resolve({ data: null, error: { message: "Mock client - authentication not configured" } }),
      signOut: () => Promise.resolve({ error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.resolve({ data: null, error: { message: "Mock client - database not configured" } }),
        }),
        limit: () => Promise.resolve({ data: [], error: null }),
        order: () => ({
          limit: () => Promise.resolve({ data: [], error: null }),
        }),
      }),
      insert: () => Promise.resolve({ data: null, error: { message: "Mock client - database not configured" } }),
      update: () => ({
        eq: () => Promise.resolve({ data: null, error: { message: "Mock client - database not configured" } }),
      }),
      delete: () => ({
        eq: () => Promise.resolve({ data: null, error: { message: "Mock client - database not configured" } }),
      }),
    }),
  }
}

// Server-side Supabase client
export function createServerClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn("Supabase environment variables not found, using mock client")
    return createMockClient() as any
  }

  return createClient<Database>(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
    },
  })
}

export function createServerSupabaseClient() {
  return createServerClient()
}

export const supabase = createServerClient()
