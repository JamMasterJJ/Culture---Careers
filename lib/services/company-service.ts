export type Company = {
  id: string
  name: string
  description: string | null
  logo_url: string | null
  industry: string | null
  category: string | null
  size: string | null
  location: string | null
}

export async function getCompanies(): Promise<Company[]> {
  // Return mock data for now
  return [
    {
      id: "1",
      name: "Fenty Beauty",
      description: "Revolutionary beauty brand founded by Rihanna",
      logo_url: "/placeholder-nrrng.png",
      industry: "Beauty",
      category: "Consumer Goods",
      size: "500-1000",
      location: "Los Angeles, CA",
    },
    {
      id: "2",
      name: "Chamberlain Coffee",
      description: "Premium coffee brand by Emma Chamberlain",
      logo_url: "/placeholder-d2wnk.png",
      industry: "Food & Beverage",
      category: "Consumer Goods",
      size: "50-100",
      location: "Los Angeles, CA",
    },
  ]
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
