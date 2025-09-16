export type Company = {
  id: string
  name: string
  description: string | null
  logo_url: string | null
  industry: string | null
  category: string | null
  size: string | null
  location: string | null
  slug: string
  website: string | null
  founded: string | null
  employees: string | null
  tagline: string | null
  founder_info: string | null
  social_impact: string | null
  culture_statement: string | null
  interview_questions: string[] | null
  headquarters: string | null
  cover_image: string | null
  owner_id: string | null
  created_at: string
  updated_at: string
}

export async function getCompanies(): Promise<Company[]> {
  // Return mock data for now
  return [
    {
      id: "1",
      name: "Fenty Beauty",
      slug: "fenty-beauty",
      description: "Revolutionary beauty brand founded by Rihanna",
      logo_url: "/placeholder-nrrng.png",
      cover_image: "/placeholder-yxno2.png",
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
      category: "Consumer Goods",
      size: "500-1000",
      location: "Los Angeles, CA",
      owner_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "2",
      name: "Chamberlain Coffee",
      slug: "chamberlain-coffee",
      description: "Premium coffee brand by Emma Chamberlain",
      logo_url: "/placeholder-d2wnk.png",
      cover_image: "/placeholder-3oq2j.png",
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
      category: "Consumer Goods",
      size: "50-100",
      location: "Los Angeles, CA",
      owner_id: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]
}

export async function getCompanyBySlug(slug: string): Promise<Company | null> {
  const companies = await getCompanies()
  return companies.find((company) => company.slug === slug) || null
}

export async function createCompany(companyData: Partial<Company>) {
  // Mock implementation
  return { data: null, error: { message: "Mock implementation" } }
}

export async function getJobs(companyId: string) {
  // Return mock jobs for a company
  return [
    {
      id: "1",
      title: "Social Media Manager",
      company_id: companyId,
    },
  ]
}
