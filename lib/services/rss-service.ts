interface RSSJob {
  id: string
  title: string
  description: string
  location: string
  type: string
  company: {
    name: string
    logo_url: string
    slug: string
    description?: string
  }
  posted_date: string
  source_url: string
  category: string[]
  tags: string[]
  salary_min?: number
  salary_max?: number
  is_remote: boolean
  requirements?: string[]
}

interface RSSFeedConfig {
  url: string
  name: string
  parser: (item: any) => RSSJob | null
}

// Creator economy companies and their RSS feeds
const CREATOR_ECONOMY_FEEDS: RSSFeedConfig[] = [
  {
    url: "https://jobs.lever.co/beast-philanthropy.rss",
    name: "MrBeast Companies",
    parser: parseGenericRSS,
  },
  {
    url: "https://boards.greenhouse.io/fenty.rss",
    name: "Fenty Beauty",
    parser: parseGreenhouseRSS,
  },
  {
    url: "https://jobs.lever.co/100thieves.rss",
    name: "100 Thieves",
    parser: parseLeverRSS,
  },
  {
    url: "https://boards.greenhouse.io/glossier.rss",
    name: "Glossier",
    parser: parseGreenhouseRSS,
  },
  {
    url: "https://jobs.lever.co/whoop.rss",
    name: "WHOOP",
    parser: parseLeverRSS,
  },
]

// Mock RSS data for creator economy brands (since we can't make external requests in this environment)
const MOCK_CREATOR_JOBS: RSSJob[] = [
  {
    id: "rss-beast-1",
    title: "Senior Social Media Manager",
    description:
      "Lead social media strategy for MrBeast's expanding brand portfolio. Create viral content, manage influencer partnerships, and drive brand awareness across all platforms. Work directly with the MrBeast team on content that reaches millions.",
    location: "Greenville, NC",
    type: "Full-time",
    company: {
      name: "MrBeast",
      logo_url: "/placeholder.svg?height=48&width=48&text=MB",
      slug: "mrbeast",
      description: "The world's largest YouTube creator building a media empire",
    },
    posted_date: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(), // 12 hours ago
    source_url: "https://mrbeast.com/careers",
    category: ["Marketing", "Social Media"],
    tags: ["Creator Economy", "Social Media", "Viral Marketing", "YouTube"],
    salary_min: 80000,
    salary_max: 120000,
    is_remote: false,
    requirements: ["5+ years social media experience", "Experience with viral content", "YouTube knowledge"],
  },
  {
    id: "rss-fenty-1",
    title: "Digital Marketing Specialist",
    description:
      "Join Rihanna's groundbreaking beauty brand that revolutionized inclusivity in cosmetics. Drive digital campaigns, manage influencer partnerships, and create content that resonates with our diverse global audience.",
    location: "Los Angeles, CA",
    type: "Full-time",
    company: {
      name: "Fenty Beauty",
      logo_url: "/placeholder.svg?height=48&width=48&text=FB",
      slug: "fenty-beauty",
      description: "Rihanna's inclusive beauty brand changing the industry",
    },
    posted_date: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(), // 18 hours ago
    source_url: "https://fentybeauty.com/careers",
    category: ["Marketing", "Beauty"],
    tags: ["Creator Economy", "Beauty", "Digital Marketing", "Influencer Marketing"],
    salary_min: 70000,
    salary_max: 95000,
    is_remote: true,
    requirements: ["3+ years digital marketing", "Beauty industry experience", "Influencer marketing knowledge"],
  },
  {
    id: "rss-100t-1",
    title: "Content Producer - Gaming",
    description:
      "Create engaging gaming content for 100 Thieves' massive audience. Work with top streamers and esports athletes to produce videos, streams, and social content that drives engagement and brand growth.",
    location: "Los Angeles, CA",
    type: "Full-time",
    company: {
      name: "100 Thieves",
      logo_url: "/placeholder.svg?height=48&width=48&text=100T",
      slug: "100-thieves",
      description: "Premier lifestyle brand and esports organization",
    },
    posted_date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    source_url: "https://100thieves.com/careers",
    category: ["Content", "Gaming"],
    tags: ["Creator Economy", "Gaming", "Content Creation", "Esports"],
    salary_min: 65000,
    salary_max: 85000,
    is_remote: false,
    requirements: ["Gaming industry experience", "Video production skills", "Understanding of esports"],
  },
  {
    id: "rss-chamberlain-1",
    title: "Brand Partnerships Manager",
    description:
      "Drive strategic partnerships for Emma Chamberlain's coffee brand. Work with creators, influencers, and retail partners to expand our reach and build authentic brand collaborations.",
    location: "San Francisco, CA",
    type: "Full-time",
    company: {
      name: "Chamberlain Coffee",
      logo_url: "/placeholder.svg?height=48&width=48&text=CC",
      slug: "chamberlain-coffee",
      description: "Emma Chamberlain's authentic coffee brand for Gen Z",
    },
    posted_date: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(), // 1.5 days ago
    source_url: "https://chamberlaincoffee.com/careers",
    category: ["Business Development", "Partnerships"],
    tags: ["Creator Economy", "Partnerships", "Coffee", "Brand Collaborations"],
    salary_min: 75000,
    salary_max: 100000,
    is_remote: true,
    requirements: ["Partnership experience", "Creator economy knowledge", "CPG experience preferred"],
  },
  {
    id: "rss-glossier-1",
    title: "Community Manager",
    description:
      "Build and engage Glossier's passionate beauty community. Manage social conversations, creator partnerships, and brand advocacy programs that drive authentic engagement.",
    location: "New York, NY",
    type: "Full-time",
    company: {
      name: "Glossier",
      logo_url: "/placeholder.svg?height=48&width=48&text=GL",
      slug: "glossier",
      description: "Beauty brand built by and for the community",
    },
    posted_date: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), // 2 days ago
    source_url: "https://glossier.com/careers",
    category: ["Community", "Marketing"],
    tags: ["Creator Economy", "Community Management", "Beauty", "Social Media"],
    salary_min: 60000,
    salary_max: 80000,
    is_remote: true,
    requirements: ["Community management experience", "Beauty industry knowledge", "Social media expertise"],
  },
  {
    id: "rss-whoop-1",
    title: "Athlete Partnerships Lead",
    description:
      "Manage partnerships with professional athletes and fitness influencers for WHOOP's wearable technology. Build relationships that drive brand awareness and product adoption.",
    location: "Boston, MA",
    type: "Full-time",
    company: {
      name: "WHOOP",
      logo_url: "/placeholder.svg?height=48&width=48&text=WH",
      slug: "whoop",
      description: "Performance optimization wearable for elite athletes",
    },
    posted_date: new Date(Date.now() - 1000 * 60 * 60 * 60).toISOString(), // 2.5 days ago
    source_url: "https://whoop.com/careers",
    category: ["Partnerships", "Sports"],
    tags: ["Creator Economy", "Sports", "Athlete Partnerships", "Wearable Tech"],
    salary_min: 85000,
    salary_max: 115000,
    is_remote: false,
    requirements: ["Sports industry experience", "Partnership management", "Athlete relationship experience"],
  },
  {
    id: "rss-prime-1",
    title: "Growth Marketing Manager",
    description:
      "Scale Logan Paul and KSI's hydration brand globally. Lead performance marketing, retail partnerships, and creator collaborations to drive explosive growth.",
    location: "New York, NY",
    type: "Full-time",
    company: {
      name: "Prime Hydration",
      logo_url: "/placeholder.svg?height=48&width=48&text=PH",
      slug: "prime-hydration",
      description: "Revolutionary hydration brand by Logan Paul and KSI",
    },
    posted_date: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(), // 3 days ago
    source_url: "https://drinkprime.com/careers",
    category: ["Marketing", "Growth"],
    tags: ["Creator Economy", "Growth Marketing", "Beverage", "Retail"],
    salary_min: 90000,
    salary_max: 130000,
    is_remote: true,
    requirements: ["Growth marketing experience", "CPG background", "Performance marketing skills"],
  },
]

// RSS Parser functions
function parseGenericRSS(item: any): RSSJob | null {
  try {
    return {
      id: `rss-${Date.now()}-${Math.random()}`,
      title: item.title || "Untitled Position",
      description: item.description || item.summary || "No description available",
      location: extractLocation(item.description) || "Remote",
      type: extractJobType(item.description) || "Full-time",
      company: {
        name: extractCompanyName(item.title) || "Creator Company",
        logo_url: `/placeholder.svg?height=48&width=48&text=${extractCompanyName(item.title)?.charAt(0) || "C"}`,
        slug: generateSlug(extractCompanyName(item.title) || "creator-company"),
      },
      posted_date: item.pubDate || item.published || new Date().toISOString(),
      source_url: item.link || item.url || "#",
      category: ["Creator Economy"],
      tags: extractTags(item.description) || ["Remote Work", "Creator Economy"],
      is_remote: (item.description || "").toLowerCase().includes("remote"),
    }
  } catch (error) {
    console.error("Error parsing generic RSS item:", error)
    return null
  }
}

function parseGreenhouseRSS(item: any): RSSJob | null {
  try {
    return {
      id: `greenhouse-${Date.now()}-${Math.random()}`,
      title: item.title || "Untitled Position",
      description: item.description || "No description available",
      location: item.location || extractLocation(item.description) || "Remote",
      type: "Full-time",
      company: {
        name: extractCompanyFromGreenhouse(item.link) || "Creator Company",
        logo_url: `/placeholder.svg?height=48&width=48&text=GH`,
        slug: generateSlug(extractCompanyFromGreenhouse(item.link) || "creator-company"),
      },
      posted_date: item.pubDate || new Date().toISOString(),
      source_url: item.link || "#",
      category: ["Creator Economy"],
      tags: ["Creator Economy", "Full-time"],
      is_remote: (item.description || "").toLowerCase().includes("remote"),
    }
  } catch (error) {
    console.error("Error parsing Greenhouse RSS item:", error)
    return null
  }
}

function parseLeverRSS(item: any): RSSJob | null {
  try {
    return {
      id: `lever-${Date.now()}-${Math.random()}`,
      title: item.title || "Untitled Position",
      description: item.description || "No description available",
      location: item.location || extractLocation(item.description) || "Remote",
      type: extractJobType(item.description) || "Full-time",
      company: {
        name: extractCompanyFromLever(item.link) || "Creator Company",
        logo_url: `/placeholder.svg?height=48&width=48&text=LV`,
        slug: generateSlug(extractCompanyFromLever(item.link) || "creator-company"),
      },
      posted_date: item.pubDate || new Date().toISOString(),
      source_url: item.link || "#",
      category: ["Creator Economy"],
      tags: ["Creator Economy", "Startup"],
      is_remote: (item.description || "").toLowerCase().includes("remote"),
    }
  } catch (error) {
    console.error("Error parsing Lever RSS item:", error)
    return null
  }
}

// Helper functions
function extractLocation(content: string): string {
  const locationPatterns = [
    /location[:\s]+([^,\n]+)/i,
    /based in ([^,\n]+)/i,
    /(remote|hybrid|on-site)/i,
    /(new york|los angeles|san francisco|chicago|austin|seattle|boston|miami|greenville)/i,
  ]

  for (const pattern of locationPatterns) {
    const match = content.match(pattern)
    if (match) return match[1].trim()
  }

  return "Remote"
}

function extractJobType(content: string): string {
  const typePatterns = [/(full-time|part-time|contract|freelance|internship)/i]

  for (const pattern of typePatterns) {
    const match = content.match(pattern)
    if (match) return match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase()
  }

  return "Full-time"
}

function extractCompanyName(title: string): string {
  const companyPatterns = [/at ([^-,\n]+)/i, /- ([^-,\n]+)$/i, /\| ([^-,\n]+)$/i]

  for (const pattern of companyPatterns) {
    const match = title.match(pattern)
    if (match) return match[1].trim()
  }

  return "Creator Company"
}

function extractCompanyFromGreenhouse(url: string): string {
  const match = url.match(/boards\.greenhouse\.io\/([^/]+)/)
  return match ? match[1].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "Creator Company"
}

function extractCompanyFromLever(url: string): string {
  const match = url.match(/jobs\.lever\.co\/([^/]+)/)
  return match ? match[1].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()) : "Creator Company"
}

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

function extractTags(content: string): string[] {
  const tagPatterns = [/skills?[:\s]+([^.\n]+)/i, /requirements?[:\s]+([^.\n]+)/i, /technologies?[:\s]+([^.\n]+)/i]

  const tags = ["Creator Economy"]

  for (const pattern of tagPatterns) {
    const match = content.match(pattern)
    if (match) {
      const extractedTags = match[1]
        .split(/[,;]/)
        .map((tag) => tag.trim())
        .slice(0, 3)
      tags.push(...extractedTags)
    }
  }

  return tags.slice(0, 5)
}

// Main RSS fetching function
export async function fetchRSSJobs(): Promise<RSSJob[]> {
  try {
    // In a real implementation, you would fetch from actual RSS feeds
    // For now, we'll return mock data that simulates fresh RSS content

    console.log("Fetching jobs from creator economy RSS feeds...")

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate fresh jobs by randomizing the posted dates
    const freshJobs = MOCK_CREATOR_JOBS.map((job) => ({
      ...job,
      posted_date: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(), // Random within last 7 days
      id: `rss-${Date.now()}-${Math.random()}`, // New ID each time
    }))

    // Return a random subset to simulate new jobs
    const shuffledJobs = freshJobs.sort(() => Math.random() - 0.5)
    return shuffledJobs.slice(0, 5) // Return 5 random jobs
  } catch (error) {
    console.error("Error fetching RSS jobs:", error)
    return []
  }
}

// Sync RSS jobs to database
export async function syncRSSJobsToDatabase(): Promise<{ success: boolean; jobsAdded: number; error?: string }> {
  try {
    console.log("Starting RSS job sync to database...")

    const rssJobs = await fetchRSSJobs()
    let jobsAdded = 0

    // For now, we'll simulate the database operations since we're using mock data
    // In a real implementation, this would interact with the actual database

    for (const rssJob of rssJobs) {
      try {
        // Simulate database operations
        console.log(`Processing job: ${rssJob.title} at ${rssJob.company.name}`)
        jobsAdded++
      } catch (jobError) {
        console.error(`Error processing job ${rssJob.title}:`, jobError)
        // Continue with other jobs
      }
    }

    console.log(`RSS sync completed: ${jobsAdded} jobs processed`)

    return {
      success: true,
      jobsAdded,
    }
  } catch (error) {
    console.error("RSS sync failed:", error)
    return {
      success: false,
      jobsAdded: 0,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Get trending jobs (RSS + database jobs)
export async function getTrendingJobs(limit = 10): Promise<any[]> {
  try {
    // For now, return the mock RSS jobs as trending jobs
    const rssJobs = await fetchRSSJobs()

    // Transform to match the expected format
    const trendingJobs = rssJobs.slice(0, limit).map((job) => ({
      id: job.id,
      title: job.title,
      company: {
        name: job.company.name,
        logo_url: job.company.logo_url,
        slug: job.company.slug,
      },
      location: job.location,
      is_remote: job.is_remote,
      is_featured: Math.random() > 0.5, // Random featured status
      created_at: job.posted_date,
      job_type: job.type.toLowerCase().replace("-", "_"),
    }))

    return trendingJobs
  } catch (error) {
    console.error("Error getting trending jobs:", error)
    return []
  }
}
