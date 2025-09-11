import { supabase } from "@/lib/supabase/client"
import type { Database } from "@/lib/supabase/database.types"

type User = Database["public"]["Tables"]["users"]["Row"]
type UserInsert = Database["public"]["Tables"]["users"]["Insert"]
type UserUpdate = Database["public"]["Tables"]["users"]["Update"]

export class UserService {
  static async createUser(userData: UserInsert): Promise<{ user: User | null; error: any }> {
    try {
      const { data, error } = await supabase.from("users").insert(userData).select().single()

      return { user: data, error }
    } catch (error) {
      console.error("Error creating user:", error)
      return { user: null, error }
    }
  }

  static async getUserById(id: string): Promise<{ user: User | null; error: any }> {
    try {
      const { data, error } = await supabase.from("users").select("*").eq("id", id).single()

      return { user: data, error }
    } catch (error) {
      console.error("Error fetching user:", error)
      return { user: null, error }
    }
  }

  static async getUserByEmail(email: string): Promise<{ user: User | null; error: any }> {
    try {
      const { data, error } = await supabase.from("users").select("*").eq("email", email).single()

      return { user: data, error }
    } catch (error) {
      console.error("Error fetching user by email:", error)
      return { user: null, error }
    }
  }

  static async updateUser(id: string, updates: UserUpdate): Promise<{ user: User | null; error: any }> {
    try {
      const { data, error } = await supabase
        .from("users")
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq("id", id)
        .select()
        .single()

      return { user: data, error }
    } catch (error) {
      console.error("Error updating user:", error)
      return { user: null, error }
    }
  }

  static async updateUserProfile(
    id: string,
    profileData: Partial<UserUpdate>,
  ): Promise<{ success: boolean; error: any }> {
    try {
      const { error } = await supabase
        .from("users")
        .update({
          ...profileData,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)

      return { success: !error, error }
    } catch (error) {
      console.error("Error updating user profile:", error)
      return { success: false, error }
    }
  }

  static async verifyEmail(userId: string): Promise<{ success: boolean; error: any }> {
    try {
      const { error } = await supabase
        .from("users")
        .update({
          email_verified: true,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      return { success: !error, error }
    } catch (error) {
      console.error("Error verifying email:", error)
      return { success: false, error }
    }
  }

  static async verifyPhone(userId: string): Promise<{ success: boolean; error: any }> {
    try {
      const { error } = await supabase
        .from("users")
        .update({
          phone_verified: true,
          updated_at: new Date().toISOString(),
        })
        .eq("id", userId)

      return { success: !error, error }
    } catch (error) {
      console.error("Error verifying phone:", error)
      return { success: false, error }
    }
  }

  static async getUserApplications(userId: string) {
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .select(`
          *,
          jobs:job_id (
            id,
            title,
            company_name,
            location,
            salary_range
          )
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      return { applications: data || [], error }
    } catch (error) {
      console.error("Error fetching user applications:", error)
      return { applications: [], error }
    }
  }

  static async getUserSavedJobs(userId: string) {
    try {
      const { data, error } = await supabase
        .from("saved_jobs")
        .select(`
          *,
          jobs:job_id (
            id,
            title,
            company_name,
            location,
            salary_range,
            job_type,
            created_at
          )
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      return { savedJobs: data || [], error }
    } catch (error) {
      console.error("Error fetching saved jobs:", error)
      return { savedJobs: [], error }
    }
  }
}
