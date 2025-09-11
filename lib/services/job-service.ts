// Mock job service for demonstration
interface Job {
  id: string
  title: string
  description: string
  location: string
  type: string
  posted_days_ago: number
  company: {
    name: string
    logo_url: string
  }
}

interface GetJobsParams {
  is_featured?: boolean
  limit?: number
}

interface GetJobsResponse {
  jobs: Job[]
  total: number
}

const mockJobs: Job[] = [
  {
    id: "1",
    title: "Senior Content Creator",
    description: "Lead content strategy and creation for a fast-growing lifestyle brand with millions of followers.",
    location: "Los Angeles, CA",
    type: "Full-time",
    posted_days_ago: 2,
    company: {
      name: "Glow Beauty Co.",
      logo_url: "/placeholder.svg?height=48&width=48&text=GB",
    },
  },
  {
    id: "2",
    title: "Social Media Manager",
    description: "Manage social media presence for a celebrity-backed fitness brand expanding globally.",
    location: "New York, NY",
    type: "Full-time",
    posted_days_ago: 1,
    company: {
      name: "FitLife Studios",
      logo_url: "/placeholder.svg?height=48&width=48&text=FL",
    },
  },
  {
    id: "3",
    title: "Brand Partnership Manager",
    description: "Build strategic partnerships between creators and brands in the sustainable fashion space.",
    location: "Remote",
    type: "Full-time",
    posted_days_ago: 3,
    company: {
      name: "EcoStyle Collective",
      logo_url: "/placeholder.svg?height=48&width=48&text=EC",
    },
  },
]

export async function getJobs(params: GetJobsParams = {}): Promise<GetJobsResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 100))

  let filteredJobs = mockJobs

  if (params.is_featured) {
    filteredJobs = mockJobs // All mock jobs are featured for demo
  }

  if (params.limit) {
    filteredJobs = filteredJobs.slice(0, params.limit)
  }

  return {
    jobs: filteredJobs,
    total: filteredJobs.length,
  }
}
