export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      jobs: {
        Row: {
          id: number
          title: string
          company_id: number
          location: string
          description: string
          responsibilities: string[] | null
          requirements: string[] | null
          benefits: string[] | null
          is_remote: boolean
          is_featured: boolean
          apply_url: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          company_id: number
          location: string
          description: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          is_remote?: boolean
          is_featured?: boolean
          apply_url: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          company_id?: number
          location?: string
          description?: string
          responsibilities?: string[] | null
          requirements?: string[] | null
          benefits?: string[] | null
          is_remote?: boolean
          is_featured?: boolean
          apply_url?: string
          created_at?: string
          updated_at?: string
        }
      }
      companies: {
        Row: {
          id: number
          name: string
          logo_url: string | null
          description: string
          tagline: string | null
          website: string
          founded: string | null
          headquarters: string | null
          employees: string | null
          social_impact: string | null
          founder_info: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          name: string
          logo_url?: string | null
          description: string
          tagline?: string | null
          website: string
          founded?: string | null
          headquarters?: string | null
          employees?: string | null
          social_impact?: string | null
          founder_info?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          name?: string
          logo_url?: string | null
          description?: string
          tagline?: string | null
          website?: string
          founded?: string | null
          headquarters?: string | null
          employees?: string | null
          social_impact?: string | null
          founder_info?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      tags: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
      }
      job_categories: {
        Row: {
          job_id: number
          category_id: number
        }
        Insert: {
          job_id: number
          category_id: number
        }
        Update: {
          job_id?: number
          category_id?: number
        }
      }
      job_tags: {
        Row: {
          job_id: number
          tag_id: number
        }
        Insert: {
          job_id: number
          tag_id: number
        }
        Update: {
          job_id?: number
          tag_id?: number
        }
      }
      newsletter_subscribers: {
        Row: {
          id: number
          email: string
          created_at: string
        }
        Insert: {
          id?: number
          email: string
          created_at?: string
        }
        Update: {
          id?: number
          email?: string
          created_at?: string
        }
      }
    }
  }
}
