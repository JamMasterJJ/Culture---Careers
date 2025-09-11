export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          user_type: "job_seeker" | "employer" | "admin"
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          user_type: "job_seeker" | "employer" | "admin"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          user_type?: "job_seeker" | "employer" | "admin"
          created_at?: string
          updated_at?: string
        }
      }
      companies: {
        Row: {
          id: string
          name: string
          slug: string
          logo_url: string | null
          description: string | null
          tagline: string | null
          website: string | null
          founded: string | null
          headquarters: string | null
          employees: string | null
          social_impact: string | null
          founder_info: string | null
          owner_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          logo_url?: string | null
          description?: string | null
          tagline?: string | null
          website?: string | null
          founded?: string | null
          headquarters?: string | null
          employees?: string | null
          social_impact?: string | null
          founder_info?: string | null
          owner_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          logo_url?: string | null
          description?: string | null
          tagline?: string | null
          website?: string | null
          founded?: string | null
          headquarters?: string | null
          employees?: string | null
          social_impact?: string | null
          founder_info?: string | null
          owner_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      jobs: {
        Row: {
          id: string
          title: string
          company_id: string
          location: string
          description: string
          responsibilities: string[] | null
          requirements: string[] | null
          benefits: string[] | null
          is_remote: boolean
          is_featured: boolean
          apply_url: string | null
          salary_min: number | null
          salary_max: number | null
          salary_currency: string | null
          job_type: "full_time" | "part_time" | "contract" | "internship" | null
          status: "draft" | "active" | "expired" | "filled"
          posted_by: string | null
          expires_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          company_id: string
          location: string
          description: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          is_remote?: boolean
          is_featured?: boolean
          apply_url?: string | null
          salary_min?: number | null
          salary_max?: number | null
          salary_currency?: string | null
          job_type?: "full_time" | "part_time" | "contract" | "internship" | null
          status?: "draft" | "active" | "expired" | "filled"
          posted_by?: string | null
          expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          company_id?: string
          location?: string
          description?: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          is_remote?: boolean
          is_featured?: boolean
          apply_url?: string | null
          salary_min?: number | null
          salary_max?: number | null
          salary_currency?: string | null
          job_type?: "full_time" | "part_time" | "contract" | "internship" | null
          status?: "draft" | "active" | "expired" | "filled"
          posted_by?: string | null
          expires_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      tags: {
        Row: {
          id: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          created_at?: string
        }
      }
      job_categories: {
        Row: {
          job_id: string
          category_id: string
        }
        Insert: {
          job_id: string
          category_id: string
        }
        Update: {
          job_id?: string
          category_id?: string
        }
      }
      job_tags: {
        Row: {
          job_id: string
          tag_id: string
        }
        Insert: {
          job_id: string
          tag_id: string
        }
        Update: {
          job_id?: string
          tag_id?: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          is_verified: boolean
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          is_verified?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          is_verified?: boolean
          created_at?: string
        }
      }
      job_applications: {
        Row: {
          id: string
          job_id: string
          user_id: string | null
          full_name: string
          email: string
          phone: string | null
          resume_url: string | null
          cover_letter: string | null
          status: "submitted" | "reviewed" | "interviewing" | "rejected" | "hired"
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          job_id: string
          user_id?: string | null
          full_name: string
          email: string
          phone?: string | null
          resume_url?: string | null
          cover_letter?: string | null
          status?: "submitted" | "reviewed" | "interviewing" | "rejected" | "hired"
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          job_id?: string
          user_id?: string | null
          full_name?: string
          email?: string
          phone?: string | null
          resume_url?: string | null
          cover_letter?: string | null
          status?: "submitted" | "reviewed" | "interviewing" | "rejected" | "hired"
          created_at?: string
          updated_at?: string
        }
      }
      job_seeker_profiles: {
        Row: {
          user_id: string
          headline: string | null
          bio: string | null
          resume_url: string | null
          linkedin_url: string | null
          portfolio_url: string | null
          skills: string[] | null
          experience_years: number | null
          education: string[] | null
          preferred_job_types: string[] | null
          preferred_locations: string[] | null
          is_remote_preferred: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          headline?: string | null
          bio?: string | null
          resume_url?: string | null
          linkedin_url?: string | null
          portfolio_url?: string | null
          skills?: string[] | null
          experience_years?: number | null
          education?: string[] | null
          preferred_job_types?: string[] | null
          preferred_locations?: string[] | null
          is_remote_preferred?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          user_id?: string
          headline?: string | null
          bio?: string | null
          resume_url?: string | null
          linkedin_url?: string | null
          portfolio_url?: string | null
          skills?: string[] | null
          experience_years?: number | null
          education?: string[] | null
          preferred_job_types?: string[] | null
          preferred_locations?: string[] | null
          is_remote_preferred?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      saved_jobs: {
        Row: {
          user_id: string
          job_id: string
          created_at: string
        }
        Insert: {
          user_id: string
          job_id: string
          created_at?: string
        }
        Update: {
          user_id?: string
          job_id?: string
          created_at?: string
        }
      }
    }
  }
}
