import { createClient } from "@supabase/supabase-js"
import type { Database } from "./database.types"

// Create a server-side Supabase client that doesn't rely on next/headers
export function createServerSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Check if environment variables are available
  const hasValidConfig = Boolean(supabaseUrl && supabaseAnonKey)

  // If we don't have valid config, return a mock client
  if (!hasValidConfig) {
    return createMockServerClient()
  }

  // Create a standard Supabase client without cookies
  return createClient<Database>(supabaseUrl!, supabaseAnonKey!, {
    auth: {
      persistSession: false,
    },
  })
}

// Create a mock server client that returns empty data
function createMockServerClient() {
  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
    },
    from: () => ({
      select: () => ({
        eq: () => ({
          single: async () => ({ data: null, error: null }),
          maybeSingle: async () => ({ data: null, error: null }),
          order: () => ({
            limit: () => ({
              range: () => ({
                data: [],
                error: null,
              }),
            }),
          }),
        }),
      }),
    }),
  } as any
}
