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
    description:
      "Revolutionary beauty brand founded by Rihanna, committed to inclusive beauty for all skin tones and types.",
    logo_url: "/fenty-beauty-logo.jpg",
    website: "https://fentybeauty.com",
    headquarters: "Los Angeles, CA",
    founded: "2017",
    employees: "500-1000",
    tagline: "Beauty for All",
    founder_info: "Founded by global superstar Rihanna with a mission to create inclusive beauty products.",
    social_impact: "Committed to diversity and inclusion in the beauty industry.",
    culture_statement: "We believe beauty is for everyone, regardless of skin tone, gender, or background.",
    interview_questions: [
      "What does inclusive beauty mean to you?",
      "How would you contribute to our mission of beauty for all?",
      "Describe a time when you championed diversity and inclusion.",
    ],
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
    description: "Premium coffee brand by Emma Chamberlain, focused on sustainable sourcing and exceptional quality.",
    logo_url: "/chamberlain-coffee-logo.jpg",
    website: "https://chamberlaincoffee.com",
    headquarters: "Los Angeles, CA",
    founded: "2020",
    employees: "50-100",
    tagline: "Coffee that doesn't suck",
    founder_info: "Created by YouTuber and entrepreneur Emma Chamberlain, bringing her passion for coffee to life.",
    social_impact: "Committed to sustainable sourcing and supporting coffee farmers worldwide.",
    culture_statement: "We're passionate about great coffee and creating a positive impact in the coffee industry.",
    interview_questions: [
      "What's your relationship with coffee?",
      "How do you approach sustainability in your work?",
      "What attracts you to the creator economy?",
    ],
    industry: "Food & Beverage",
    size: "50-100",
    location: "Los Angeles, CA",
    cover_image: "/chamberlain-coffee-cover.jpg",
    owner_id: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    name: "MrBeast",
    slug: "mrbeast",
    description:
      "Entertainment and philanthropy empire built by Jimmy Donaldson, creating viral content and positive impact.",
    logo_url: "/mrbeast-logo.jpg",
    website: "https://mrbeast.com",
    headquarters: "Greenville, NC",
    founded: "2012",
    employees: "200-500",
    tagline: "Making the world a better place",
    founder_info: "Built by Jimmy Donaldson (MrBeast), one of the most successful YouTubers and philanthropists.",
    social_impact: "Dedicated to large-scale philanthropy and environmental initiatives.",
    culture_statement: "We're obsessed with creating amazing content while making a positive impact on the world.",
    interview_questions: [
      "How do you handle high-pressure, fast-paced environments?",
      "What's your approach to creative problem-solving?",
      "How would you contribute to our philanthropic mission?",
    ],
    industry: "Entertainment",
    size: "200-500",
    location: "Greenville, NC",
    cover_image: "/mrbeast-entertainment-studio.jpg",
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
  // Mock implementation for development
  const newCompany: Company = {
    id: Math.random().toString(36).substr(2, 9),
    name: companyData.name || "",
    slug: companyData.slug || "",
    description: companyData.description || "",
    logo_url: companyData.logo_url,
    website: companyData.website,
    industry: companyData.industry,
    size: companyData.size,
    location: companyData.location,
    founded: companyData.founded,
    employees: companyData.employees,
    tagline: companyData.tagline,
    founder_info: companyData.founder_info,
    social_impact: companyData.social_impact,
    culture_statement: companyData.culture_statement,
    interview_questions: companyData.interview_questions,
    headquarters: companyData.headquarters,
    cover_image: companyData.cover_image,
    owner_id: companyData.owner_id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  return { data: newCompany, error: null }
}

export async function getJobs(companyId?: string) {
  // Mock jobs data
  const mockJobs = [
    {
      id: "1",
      title: "Social Media Manager",
      company_id: companyId || "1",
      location: "Los Angeles, CA",
      job_type: "full_time",
      categories: ["Marketing", "Social Media"],
      is_remote: false,
      company: mockCompanies.find((c) => c.id === (companyId || "1")) || mockCompanies[0],
    },
    {
      id: "2",
      title: "Content Creator",
      company_id: companyId || "2",
      location: "Remote",
      job_type: "contract",
      categories: ["Content", "Creative"],
      is_remote: true,
      company: mockCompanies.find((c) => c.id === (companyId || "2")) || mockCompanies[1],
    },
  ]

  if (companyId) {
    return mockJobs.filter((job) => job.company_id === companyId)
  }

  return mockJobs
}
