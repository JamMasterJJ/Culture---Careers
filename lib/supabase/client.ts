import { createClient as createSupabaseClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a mock client for development when env vars are missing
const createMockClient = () => ({
  auth: {
    signUp: async () => ({ data: null, error: { message: "Mock client - no Supabase configured" } }),
    signInWithPassword: async () => ({ data: null, error: { message: "Mock client - no Supabase configured" } }),
    signInWithOAuth: async () => ({ data: null, error: { message: "Mock client - no Supabase configured" } }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ data: { session: null }, error: null }),
    onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
    updateUser: async () => ({ data: null, error: { message: "Mock client - no Supabase configured" } }),
  },
  from: () => ({
    select: () => ({
      eq: () => ({
        single: () => Promise.resolve({ data: null, error: null }),
        data: [],
        error: null,
      }),
      data: [],
      error: null,
    }),
    insert: () => ({ data: null, error: null }),
    update: () => ({ data: null, error: null }),
    delete: () => ({ data: null, error: null }),
  }),
})

export function createClient() {
  if (supabaseUrl && supabaseAnonKey) {
    return createSupabaseClient<Database>(supabaseUrl, supabaseAnonKey)
  }
  return createMockClient() as any
}

export const supabase = createClient()
