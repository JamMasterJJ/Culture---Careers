import { supabase } from "@/lib/supabase/client"
import type { Database } from "@/lib/supabase/database.types"

type User = Database["public"]["Tables"]["users"]["Row"]
type UserInsert = Database["public"]["Tables"]["users"]["Insert"]
type UserUpdate = Database["public"]["Tables"]["users"]["Update"]
type Job = Database["public"]["Tables"]["jobs"]["Row"]
type JobInsert = Database["public"]["Tables"]["jobs"]["Insert"]
type Company = Database["public"]["Tables"]["companies"]["Row"]
type CompanyInsert = Database["public"]["Tables"]["companies"]["Insert"]

export class DatabaseService {
  // User operations
  static async createUser(userData: UserInsert) {
    try {
      const { data, error } = await supabase.from("users").insert(userData).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error creating user:", error)
      return { data: null, error }
    }
  }

  static async getUserById(id: string) {
    try {
      const { data, error } = await supabase.from("users").select("*").eq("id", id).single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching user:", error)
      return { data: null, error }
    }
  }

  static async updateUser(id: string, updates: UserUpdate) {
    try {
      const { data, error } = await supabase.from("users").update(updates).eq("id", id).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error updating user:", error)
      return { data: null, error }
    }
  }

  static async getUserByEmail(email: string) {
    try {
      const { data, error } = await supabase.from("users").select("*").eq("email", email).single()

      if (error && error.code !== "PGRST116") throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching user by email:", error)
      return { data: null, error }
    }
  }

  // Subscription operations
  static async getUserSubscription(userId: string) {
    try {
      const { data, error } = await supabase
        .from("user_subscriptions")
        .select("*")
        .eq("user_id", userId)
        .eq("status", "active")
        .single()

      if (error && error.code !== "PGRST116") throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching subscription:", error)
      return { data: null, error }
    }
  }

  static async createSubscription(subscriptionData: any) {
    try {
      const { data, error } = await supabase.from("user_subscriptions").insert(subscriptionData).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error creating subscription:", error)
      return { data: null, error }
    }
  }

  static async updateSubscription(subscriptionId: string, updates: any) {
    try {
      const { data, error } = await supabase
        .from("user_subscriptions")
        .update(updates)
        .eq("stripe_subscription_id", subscriptionId)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error updating subscription:", error)
      return { data: null, error }
    }
  }

  // Job operations
  static async createJob(jobData: JobInsert) {
    try {
      const { data, error } = await supabase.from("jobs").insert(jobData).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error creating job:", error)
      return { data: null, error }
    }
  }

  static async getJobs(filters: any = {}) {
    try {
      let query = supabase.from("jobs").select(`
          *,
          companies (
            id,
            name,
            logo_url,
            slug,
            description
          ),
          job_categories (
            categories (
              name
            )
          ),
          job_tags (
            tags (
              name
            )
          )
        `)

      // Apply filters
      if (filters.search) {
        query = query.or(`title.ilike.%${filters.search}%,description.ilike.%${filters.search}%`)
      }

      if (filters.location) {
        query = query.ilike("location", `%${filters.location}%`)
      }

      if (filters.remote) {
        query = query.eq("is_remote", true)
      }

      if (filters.featured) {
        query = query.eq("is_featured", true)
      }

      if (filters.company_id) {
        query = query.eq("company_id", filters.company_id)
      }

      if (filters.category) {
        query = query.eq("category", filters.category)
      }

      // Sorting
      if (filters.sort === "newest") {
        query = query.order("created_at", { ascending: false })
      } else if (filters.sort === "oldest") {
        query = query.order("created_at", { ascending: true })
      } else {
        query = query.order("is_featured", { ascending: false }).order("created_at", { ascending: false })
      }

      // Pagination
      const limit = filters.limit || 20
      const offset = filters.offset || 0
      query = query.range(offset, offset + limit - 1)

      const { data, error } = await query

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching jobs:", error)
      return { data: null, error }
    }
  }

  static async getJobById(id: string) {
    try {
      const { data, error } = await supabase
        .from("jobs")
        .select(`
          *,
          companies (
            id,
            name,
            logo_url,
            slug,
            description,
            website,
            founded,
            employees,
            location as company_location
          ),
          job_categories (
            categories (
              name
            )
          ),
          job_tags (
            tags (
              name
            )
          )
        `)
        .eq("id", id)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching job:", error)
      return { data: null, error }
    }
  }

  static async updateJob(id: string, updates: any) {
    try {
      const { data, error } = await supabase.from("jobs").update(updates).eq("id", id).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error updating job:", error)
      return { data: null, error }
    }
  }

  static async deleteJob(id: string) {
    try {
      const { data, error } = await supabase.from("jobs").delete().eq("id", id).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error deleting job:", error)
      return { data: null, error }
    }
  }

  // Company operations
  static async createCompany(companyData: CompanyInsert) {
    try {
      const { data, error } = await supabase.from("companies").insert(companyData).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error creating company:", error)
      return { data: null, error }
    }
  }

  static async getCompanies(limit = 20, offset = 0) {
    try {
      const { data, error } = await supabase
        .from("companies")
        .select(`
          *,
          jobs (
            id,
            title,
            is_featured
          )
        `)
        .range(offset, offset + limit - 1)
        .order("created_at", { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching companies:", error)
      return { data: null, error }
    }
  }

  static async getCompanyBySlug(slug: string) {
    try {
      const { data, error } = await supabase
        .from("companies")
        .select(`
          *,
          jobs (
            id,
            title,
            location,
            is_remote,
            is_featured,
            created_at,
            salary_min,
            salary_max,
            employment_type
          )
        `)
        .eq("slug", slug)
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching company:", error)
      return { data: null, error }
    }
  }

  static async updateCompany(id: string, updates: any) {
    try {
      const { data, error } = await supabase.from("companies").update(updates).eq("id", id).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error updating company:", error)
      return { data: null, error }
    }
  }

  // Application operations
  static async createApplication(applicationData: any) {
    try {
      const { data, error } = await supabase.from("job_applications").insert(applicationData).select().single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error creating application:", error)
      return { data: null, error }
    }
  }

  static async getUserApplications(userId: string) {
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .select(`
          *,
          jobs (
            id,
            title,
            location,
            is_remote,
            companies (
              name,
              logo_url
            )
          )
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching user applications:", error)
      return { data: null, error }
    }
  }

  static async getJobApplications(jobId: string) {
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .select(`
          *,
          users (
            id,
            full_name,
            email,
            profile_image_url
          )
        `)
        .eq("job_id", jobId)
        .order("created_at", { ascending: false })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error fetching job applications:", error)
      return { data: null, error }
    }
  }

  static async updateApplicationStatus(applicationId: string, status: string) {
    try {
      const { data, error } = await supabase
        .from("job_applications")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", applicationId)
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error updating application status:", error)
      return { data: null, error }
    }
  }

  // Newsletter operations
  static async subscribeToNewsletter(email: string, source?: string) {
    try {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email,
          source: source || "website",
          subscribed_at: new Date().toISOString(),
        })
        .select()
        .single()

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error subscribing to newsletter:", error)
      return { data: null, error }
    }
  }

  // Analytics operations
  static async trackJobView(jobId: string, userId?: string) {
    try {
      const { data, error } = await supabase.from("job_views").insert({
        job_id: jobId,
        user_id: userId,
        viewed_at: new Date().toISOString(),
      })

      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error("Error tracking job view:", error)
      return { data: null, error }
    }
  }

  static async getJobStats(jobId: string) {
    try {
      const [viewsResult, applicationsResult] = await Promise.all([
        supabase.from("job_views").select("id").eq("job_id", jobId),
        supabase.from("job_applications").select("id").eq("job_id", jobId),
      ])

      return {
        data: {
          views: viewsResult.data?.length || 0,
          applications: applicationsResult.data?.length || 0,
        },
        error: null,
      }
    } catch (error) {
      console.error("Error fetching job stats:", error)
      return { data: null, error }
    }
  }
}
