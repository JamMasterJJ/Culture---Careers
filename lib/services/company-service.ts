export interface Company {
  id: string
  name: string
  slug: string
  description: string
  logo_url?: string
  website?: string
  industry?: string
  size?: string
  location?: string
  founded?: string
  employees?: string
  tagline?: string
  founder_info?: string
  social_impact?: string
  culture_statement?: string
  interview_questions?: string[]
  headquarters?: string
  cover_image?: string
  owner_id?: string
  created_at: string
  updated_at: string
}

// Mock data for development
const mockCompanies: Company[] = [
  {
    id: "1",
    name: "Fenty Beauty",
    slug: "fenty-beauty",
    description: "Revolutionary beauty brand founded by Rihanna",
    logo_url: "/fenty-beauty-logo.jpg",
    website: "https://fentybeauty.com",
    headquarters: "Los Angeles, CA",
    founded: "2017",
    employees: "500-1000",
    tagline: "Beauty for All",
    founder_info: "Founded by global superstar Rihanna",
    social_impact: "Committed to diversity and inclusion",
    culture_statement: "We believe beauty is for everyone",
    interview_questions: ["What does inclusive beauty mean to you?"],
    industry: "Beauty",
    size: "500-1000",
    location: "Los Angeles, CA",
    cover_image: "/fenty-beauty-cover.jpg",
    owner_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    name: "Chamberlain Coffee",
    slug: "chamberlain-coffee",
    description: "Premium coffee brand by Emma Chamberlain",
    logo_url: "/chamberlain-coffee-logo.jpg",
    website: "https://chamberlaincoffee.com",
    headquarters: "Los Angeles, CA",
    founded: "2020",
    employees: "50-100",
    tagline: "Coffee that doesn't suck",
    founder_info: "Created by YouTuber Emma Chamberlain",
    social_impact: "Committed to sustainable sourcing",
    culture_statement: "We're passionate about great coffee",
    interview_questions: ["What's your relationship with coffee?"],
    industry: "Food & Beverage",
    size: "50-100",
    location: "Los Angeles, CA",
    cover_image: "/chamberlain-coffee-cover.jpg",
    owner_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
]

export async function getCompanies(): Promise<Company[]> {
  return mockCompanies
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  return mockCompanies.find((company) => company.slug === slug) || null
}

export async function createCompany(companyData: Partial<Company>) {
  return { data: null, error: { message: "Mock implementation" } }
}

export async function getJobs(companyId?: string) {
  return [
    {
      id: "1",
      title: "Social Media Manager",
      company_id: companyId || "1",
      location: "Los Angeles, CA",
      job_type: "full_time",
      categories: ["Marketing", "Social Media"],
      company: mockCompanies[0],
    },
  ]
}
