import { createClient } from "@/lib/supabase/client"

export interface Company {
  id: string
  name: string
  slug: string
  description: string
  logo_url?: string
  website_url?: string
  industry: string
  size: string
  location: string
  founded_year?: number
  created_at: string
  updated_at: string
}

export class CompanyService {
  private supabase = createClient()

  async getCompanies(limit = 10, offset = 0): Promise<Company[]> {
    try {
      const { data, error } = await this.supabase
        .from("companies")
        .select("*")
        .range(offset, offset + limit - 1)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error fetching companies:", error)
        return []
      }

      return data || []
    } catch (error) {
      console.error("Error in getCompanies:", error)
      return []
    }
  }

  async getCompanyBySlug(slug: string): Promise<Company | null> {
    try {
      const { data, error } = await this.supabase.from("companies").select("*").eq("slug", slug).single()

      if (error) {
        console.error("Error fetching company by slug:", error)
        return null
      }

      return data
    } catch (error) {
      console.error("Error in getCompanyBySlug:", error)
      return null
    }
  }

  async createCompany(company: Omit<Company, "id" | "created_at" | "updated_at">): Promise<Company | null> {
    try {
      const { data, error } = await this.supabase.from("companies").insert([company]).select().single()

      if (error) {
        console.error("Error creating company:", error)
        return null
      }

      return data
    } catch (error) {
      console.error("Error in createCompany:", error)
      return null
    }
  }

  async updateCompany(id: string, updates: Partial<Company>): Promise<Company | null> {
    try {
      const { data, error } = await this.supabase.from("companies").update(updates).eq("id", id).select().single()

      if (error) {
        console.error("Error updating company:", error)
        return null
      }

      return data
    } catch (error) {
      console.error("Error in updateCompany:", error)
      return null
    }
  }

  async deleteCompany(id: string): Promise<boolean> {
    try {
      const { error } = await this.supabase.from("companies").delete().eq("id", id)

      if (error) {
        console.error("Error deleting company:", error)
        return false
      }

      return true
    } catch (error) {
      console.error("Error in deleteCompany:", error)
      return false
    }
  }

  async searchCompanies(query: string, limit = 10): Promise<Company[]> {
    try {
      const { data, error } = await this.supabase
        .from("companies")
        .select("*")
        .or(`name.ilike.%${query}%,description.ilike.%${query}%,industry.ilike.%${query}%`)
        .limit(limit)
        .order("created_at", { ascending: false })

      if (error) {
        console.error("Error searching companies:", error)
        return []
      }

      return data || []
    } catch (error) {
      console.error("Error in searchCompanies:", error)
      return []
    }
  }
}

export const companyService = new CompanyService()
