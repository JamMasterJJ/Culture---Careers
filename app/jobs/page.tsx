import { JobCard } from "@/components/jobs/job-card"
import { JobFilter } from "@/components/jobs/job-filter"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/layout/footer"
import { FeaturedCompanies } from "@/components/jobs/featured-companies"

// Mock data with 25 example jobs
const mockJobs = [
  {
    id: "1",
    title: "Senior Content Creator",
    description: "Lead content strategy and creation for a fast-growing lifestyle brand with millions of followers.",
    location: "Los Angeles, CA",
    is_remote: false,
    is_featured: true,
    job_type: "full_time",
    created_at: "2024-01-15T10:00:00Z",
    companies: {
      id: "1",
      name: "Glow Beauty Co.",
      logo_url: "/placeholder.svg?height=48&width=48&text=GB",
      slug: "glow-beauty-co",
      description: "Beauty brand focused on clean, sustainable products",
      founded: "2019",
      employees: "50-200",
    },
    job_categories: [{ categories: { name: "Content Creation" } }],
    job_tags: [{ tags: { name: "Video Production" } }, { tags: { name: "Social Media" } }],
  },
  {
    id: "2",
    title: "Social Media Manager",
    description: "Manage social media presence for a celebrity-backed fitness brand expanding globally.",
    location: "New York, NY",
    is_remote: true,
    is_featured: true,
    job_type: "full_time",
    created_at: "2024-01-14T09:00:00Z",
    companies: {
      id: "2",
      name: "FitLife Studios",
      logo_url: "/placeholder.svg?height=48&width=48&text=FL",
      slug: "fitlife-studios",
      description: "Celebrity-backed fitness brand",
      founded: "2020",
      employees: "100-500",
    },
    job_categories: [{ categories: { name: "Marketing" } }],
    job_tags: [{ tags: { name: "Instagram" } }, { tags: { name: "TikTok" } }],
  },
  {
    id: "3",
    title: "Brand Partnership Manager",
    description: "Build strategic partnerships between creators and brands in the sustainable fashion space.",
    location: "Remote",
    is_remote: true,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-13T14:00:00Z",
    companies: {
      id: "3",
      name: "EcoStyle Collective",
      logo_url: "/placeholder.svg?height=48&width=48&text=EC",
      slug: "ecostyle-collective",
      description: "Sustainable fashion marketplace",
      founded: "2021",
      employees: "20-50",
    },
    job_categories: [{ categories: { name: "Business Development" } }],
    job_tags: [{ tags: { name: "Partnerships" } }, { tags: { name: "Fashion" } }],
  },
  {
    id: "4",
    title: "Video Editor",
    description: "Edit engaging video content for YouTube and TikTok channels with 10M+ subscribers.",
    location: "Miami, FL",
    is_remote: false,
    is_featured: true,
    job_type: "full_time",
    created_at: "2024-01-12T11:00:00Z",
    companies: {
      id: "4",
      name: "Viral Media House",
      logo_url: "/placeholder.svg?height=48&width=48&text=VM",
      slug: "viral-media-house",
      description: "Multi-channel network for creators",
      founded: "2018",
      employees: "200-500",
    },
    job_categories: [{ categories: { name: "Video Production" } }],
    job_tags: [{ tags: { name: "Adobe Premiere" } }, { tags: { name: "After Effects" } }],
  },
  {
    id: "5",
    title: "Community Manager",
    description: "Build and engage online communities for a gaming-focused creator collective.",
    location: "Austin, TX",
    is_remote: true,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-11T16:00:00Z",
    companies: {
      id: "5",
      name: "GameOn Collective",
      logo_url: "/placeholder.svg?height=48&width=48&text=GO",
      slug: "gameon-collective",
      description: "Gaming creator network",
      founded: "2020",
      employees: "30-100",
    },
    job_categories: [{ categories: { name: "Community" } }],
    job_tags: [{ tags: { name: "Discord" } }, { tags: { name: "Gaming" } }],
  },
  {
    id: "6",
    title: "Influencer Marketing Coordinator",
    description: "Coordinate influencer campaigns for beauty and lifestyle brands.",
    location: "Chicago, IL",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-10T13:00:00Z",
    companies: {
      id: "6",
      name: "Influence Agency",
      logo_url: "/placeholder.svg?height=48&width=48&text=IA",
      slug: "influence-agency",
      description: "Full-service influencer marketing agency",
      founded: "2017",
      employees: "100-200",
    },
    job_categories: [{ categories: { name: "Marketing" } }],
    job_tags: [{ tags: { name: "Influencer Marketing" } }, { tags: { name: "Campaign Management" } }],
  },
  {
    id: "7",
    title: "Podcast Producer",
    description: "Produce and edit podcasts for top creators in the business and entrepreneurship space.",
    location: "San Francisco, CA",
    is_remote: true,
    is_featured: true,
    job_type: "contract",
    created_at: "2024-01-09T10:00:00Z",
    companies: {
      id: "7",
      name: "PodCast Network",
      logo_url: "/placeholder.svg?height=48&width=48&text=PN",
      slug: "podcast-network",
      description: "Podcast production and distribution network",
      founded: "2019",
      employees: "50-100",
    },
    job_categories: [{ categories: { name: "Audio Production" } }],
    job_tags: [{ tags: { name: "Podcast" } }, { tags: { name: "Audio Editing" } }],
  },
  {
    id: "8",
    title: "E-commerce Manager",
    description: "Manage online store operations for a creator-owned fashion brand.",
    location: "Los Angeles, CA",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-08T15:00:00Z",
    companies: {
      id: "8",
      name: "Creator Fashion Co.",
      logo_url: "/placeholder.svg?height=48&width=48&text=CF",
      slug: "creator-fashion-co",
      description: "Fashion brand by top creators",
      founded: "2021",
      employees: "20-50",
    },
    job_categories: [{ categories: { name: "E-commerce" } }],
    job_tags: [{ tags: { name: "Shopify" } }, { tags: { name: "Fashion" } }],
  },
  {
    id: "9",
    title: "Data Analyst",
    description: "Analyze creator performance metrics and audience insights for optimization.",
    location: "New York, NY",
    is_remote: true,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-07T12:00:00Z",
    companies: {
      id: "9",
      name: "Creator Analytics",
      logo_url: "/placeholder.svg?height=48&width=48&text=CA",
      slug: "creator-analytics",
      description: "Analytics platform for creators",
      founded: "2020",
      employees: "100-200",
    },
    job_categories: [{ categories: { name: "Analytics" } }],
    job_tags: [{ tags: { name: "SQL" } }, { tags: { name: "Python" } }],
  },
  {
    id: "10",
    title: "Graphic Designer",
    description: "Create visual content for social media campaigns and brand partnerships.",
    location: "Remote",
    is_remote: true,
    is_featured: true,
    job_type: "full_time",
    created_at: "2024-01-06T09:00:00Z",
    companies: {
      id: "10",
      name: "Visual Creators Studio",
      logo_url: "/placeholder.svg?height=48&width=48&text=VC",
      slug: "visual-creators-studio",
      description: "Design studio for creator brands",
      founded: "2019",
      employees: "10-50",
    },
    job_categories: [{ categories: { name: "Design" } }],
    job_tags: [{ tags: { name: "Adobe Creative Suite" } }, { tags: { name: "Branding" } }],
  },
  {
    id: "11",
    title: "Talent Manager",
    description: "Manage and develop emerging creators in the lifestyle and wellness space.",
    location: "Miami, FL",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-05T14:00:00Z",
    companies: {
      id: "11",
      name: "Talent Collective",
      logo_url: "/placeholder.svg?height=48&width=48&text=TC",
      slug: "talent-collective",
      description: "Talent management for creators",
      founded: "2018",
      employees: "50-100",
    },
    job_categories: [{ categories: { name: "Talent Management" } }],
    job_tags: [{ tags: { name: "Creator Development" } }, { tags: { name: "Wellness" } }],
  },
  {
    id: "12",
    title: "Marketing Coordinator",
    description: "Support marketing campaigns for athlete-backed supplement brand.",
    location: "Austin, TX",
    is_remote: true,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-04T11:00:00Z",
    companies: {
      id: "12",
      name: "Peak Performance",
      logo_url: "/placeholder.svg?height=48&width=48&text=PP",
      slug: "peak-performance",
      description: "Athlete-backed supplement brand",
      founded: "2020",
      employees: "30-100",
    },
    job_categories: [{ categories: { name: "Marketing" } }],
    job_tags: [{ tags: { name: "Sports Marketing" } }, { tags: { name: "Supplements" } }],
  },
  {
    id: "13",
    title: "Content Strategist",
    description: "Develop content strategies for multiple creator channels across platforms.",
    location: "Los Angeles, CA",
    is_remote: true,
    is_featured: true,
    job_type: "full_time",
    created_at: "2024-01-03T16:00:00Z",
    companies: {
      id: "13",
      name: "Strategy Studios",
      logo_url: "/placeholder.svg?height=48&width=48&text=SS",
      slug: "strategy-studios",
      description: "Content strategy for creators",
      founded: "2019",
      employees: "20-50",
    },
    job_categories: [{ categories: { name: "Content Strategy" } }],
    job_tags: [{ tags: { name: "Multi-platform" } }, { tags: { name: "Strategy" } }],
  },
  {
    id: "14",
    title: "Operations Manager",
    description: "Streamline operations for a fast-growing creator economy startup.",
    location: "San Francisco, CA",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-02T13:00:00Z",
    companies: {
      id: "14",
      name: "Creator Tools Inc.",
      logo_url: "/placeholder.svg?height=48&width=48&text=CT",
      slug: "creator-tools-inc",
      description: "Tools and services for creators",
      founded: "2021",
      employees: "100-200",
    },
    job_categories: [{ categories: { name: "Operations" } }],
    job_tags: [{ tags: { name: "Process Optimization" } }, { tags: { name: "Startup" } }],
  },
  {
    id: "15",
    title: "PR Specialist",
    description: "Handle public relations for celebrity-endorsed beauty brands.",
    location: "New York, NY",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2024-01-01T10:00:00Z",
    companies: {
      id: "15",
      name: "Celebrity Beauty Brands",
      logo_url: "/placeholder.svg?height=48&width=48&text=CB",
      slug: "celebrity-beauty-brands",
      description: "Celebrity-endorsed beauty products",
      founded: "2018",
      employees: "200-500",
    },
    job_categories: [{ categories: { name: "Public Relations" } }],
    job_tags: [{ tags: { name: "Media Relations" } }, { tags: { name: "Beauty" } }],
  },
  {
    id: "16",
    title: "UX/UI Designer",
    description: "Design user experiences for creator monetization platform.",
    location: "Remote",
    is_remote: true,
    is_featured: true,
    job_type: "full_time",
    created_at: "2023-12-31T15:00:00Z",
    companies: {
      id: "16",
      name: "Creator Platform",
      logo_url: "/placeholder.svg?height=48&width=48&text=CP",
      slug: "creator-platform",
      description: "Monetization platform for creators",
      founded: "2020",
      employees: "50-100",
    },
    job_categories: [{ categories: { name: "Design" } }],
    job_tags: [{ tags: { name: "Figma" } }, { tags: { name: "User Research" } }],
  },
  {
    id: "17",
    title: "Account Executive",
    description: "Manage client relationships for influencer marketing campaigns.",
    location: "Chicago, IL",
    is_remote: true,
    is_featured: false,
    job_type: "full_time",
    created_at: "2023-12-30T12:00:00Z",
    companies: {
      id: "17",
      name: "Influence Partners",
      logo_url: "/placeholder.svg?height=48&width=48&text=IP",
      slug: "influence-partners",
      description: "Influencer marketing agency",
      founded: "2017",
      employees: "100-200",
    },
    job_categories: [{ categories: { name: "Account Management" } }],
    job_tags: [{ tags: { name: "Client Relations" } }, { tags: { name: "Sales" } }],
  },
  {
    id: "18",
    title: "Event Coordinator",
    description: "Plan and execute creator meetups and brand activation events.",
    location: "Miami, FL",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2023-12-29T09:00:00Z",
    companies: {
      id: "18",
      name: "Event Creators",
      logo_url: "/placeholder.svg?height=48&width=48&text=EC",
      slug: "event-creators",
      description: "Event planning for creator brands",
      founded: "2019",
      employees: "20-50",
    },
    job_categories: [{ categories: { name: "Event Planning" } }],
    job_tags: [{ tags: { name: "Event Management" } }, { tags: { name: "Brand Activations" } }],
  },
  {
    id: "19",
    title: "Business Development Manager",
    description: "Drive growth and partnerships for VC-backed creator tools startup.",
    location: "San Francisco, CA",
    is_remote: true,
    is_featured: true,
    job_type: "full_time",
    created_at: "2023-12-28T14:00:00Z",
    companies: {
      id: "19",
      name: "Creator Growth Co.",
      logo_url: "/placeholder.svg?height=48&width=48&text=CG",
      slug: "creator-growth-co",
      description: "VC-backed creator tools",
      founded: "2021",
      employees: "50-100",
    },
    job_categories: [{ categories: { name: "Business Development" } }],
    job_tags: [{ tags: { name: "Partnerships" } }, { tags: { name: "SaaS" } }],
  },
  {
    id: "20",
    title: "Customer Success Manager",
    description: "Ensure creator success on our platform and drive retention.",
    location: "Austin, TX",
    is_remote: true,
    is_featured: false,
    job_type: "full_time",
    created_at: "2023-12-27T11:00:00Z",
    companies: {
      id: "20",
      name: "Creator Success Platform",
      logo_url: "/placeholder.svg?height=48&width=48&text=CS",
      slug: "creator-success-platform",
      description: "Creator success and analytics platform",
      founded: "2020",
      employees: "100-200",
    },
    job_categories: [{ categories: { name: "Customer Success" } }],
    job_tags: [{ tags: { name: "Customer Support" } }, { tags: { name: "Retention" } }],
  },
  {
    id: "21",
    title: "Legal Counsel",
    description: "Handle contracts and legal matters for creator partnerships and deals.",
    location: "New York, NY",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2023-12-26T16:00:00Z",
    companies: {
      id: "21",
      name: "Creator Legal Services",
      logo_url: "/placeholder.svg?height=48&width=48&text=CL",
      slug: "creator-legal-services",
      description: "Legal services for creators",
      founded: "2018",
      employees: "10-50",
    },
    job_categories: [{ categories: { name: "Legal" } }],
    job_tags: [{ tags: { name: "Contract Law" } }, { tags: { name: "Entertainment Law" } }],
  },
  {
    id: "22",
    title: "Finance Manager",
    description: "Manage finances and budgeting for multi-million dollar creator brand.",
    location: "Los Angeles, CA",
    is_remote: false,
    is_featured: false,
    job_type: "full_time",
    created_at: "2023-12-25T13:00:00Z",
    companies: {
      id: "22",
      name: "Mega Creator Brand",
      logo_url: "/placeholder.svg?height=48&width=48&text=MC",
      slug: "mega-creator-brand",
      description: "Multi-million dollar creator brand",
      founded: "2017",
      employees: "200-500",
    },
    job_categories: [{ categories: { name: "Finance" } }],
    job_tags: [{ tags: { name: "Financial Planning" } }, { tags: { name: "Budgeting" } }],
  },
  {
    id: "23",
    title: "Product Manager",
    description: "Lead product development for creator monetization features.",
    location: "Remote",
    is_remote: true,
    is_featured: true,
    job_type: "full_time",
    created_at: "2023-12-24T10:00:00Z",
    companies: {
      id: "23",
      name: "Creator Product Co.",
      logo_url: "/placeholder.svg?height=48&width=48&text=PC",
      slug: "creator-product-co",
      description: "Product development for creators",
      founded: "2020",
      employees: "100-200",
    },
    job_categories: [{ categories: { name: "Product Management" } }],
    job_tags: [{ tags: { name: "Product Strategy" } }, { tags: { name: "Monetization" } }],
  },
  {
    id: "24",
    title: "HR Generalist",
    description: "Support HR functions for rapidly growing creator economy company.",
    location: "Chicago, IL",
    is_remote: true,
    is_featured: false,
    job_type: "full_time",
    created_at: "2023-12-23T15:00:00Z",
    companies: {
      id: "24",
      name: "Creator HR Solutions",
      logo_url: "/placeholder.svg?height=48&width=48&text=HR",
      slug: "creator-hr-solutions",
      description: "HR services for creator companies",
      founded: "2019",
      employees: "50-100",
    },
    job_categories: [{ categories: { name: "Human Resources" } }],
    job_tags: [{ tags: { name: "Recruiting" } }, { tags: { name: "Employee Relations" } }],
  },
  {
    id: "25",
    title: "Software Engineer",
    description: "Build scalable backend systems for creator analytics platform.",
    location: "San Francisco, CA",
    is_remote: true,
    is_featured: true,
    job_type: "full_time",
    created_at: "2023-12-22T12:00:00Z",
    companies: {
      id: "25",
      name: "Creator Tech Solutions",
      logo_url: "/placeholder.svg?height=48&width=48&text=TS",
      slug: "creator-tech-solutions",
      description: "Technology solutions for creators",
      founded: "2021",
      employees: "50-100",
    },
    job_categories: [{ categories: { name: "Engineering" } }],
    job_tags: [{ tags: { name: "Node.js" } }, { tags: { name: "React" } }],
  },
]

export default async function JobsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Extract filter parameters
  const search = typeof searchParams.search === "string" ? searchParams.search : undefined
  const location = typeof searchParams.location === "string" ? searchParams.location : undefined
  const categories = Array.isArray(searchParams.category)
    ? searchParams.category
    : typeof searchParams.category === "string"
      ? [searchParams.category]
      : []
  const tags = Array.isArray(searchParams.tag)
    ? searchParams.tag
    : typeof searchParams.tag === "string"
      ? [searchParams.tag]
      : []
  const affiliations = Array.isArray(searchParams.affiliation)
    ? searchParams.affiliation
    : typeof searchParams.affiliation === "string"
      ? [searchParams.affiliation]
      : []
  const isRemote = searchParams.remote === "true"
  const page = typeof searchParams.page === "string" ? Number.parseInt(searchParams.page) : 1

  // Filter jobs based on search parameters
  let filteredJobs = mockJobs

  if (search) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.companies.name.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase()),
    )
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
  }

  if (categories.length > 0) {
    filteredJobs = filteredJobs.filter((job) =>
      job.job_categories.some((jc) => categories.includes(jc.categories.name)),
    )
  }

  if (tags.length > 0) {
    filteredJobs = filteredJobs.filter((job) => job.job_tags.some((jt) => tags.includes(jt.tags.name)))
  }

  if (isRemote) {
    filteredJobs = filteredJobs.filter((job) => job.is_remote)
  }

  // Pagination
  const limit = 10
  const offset = (page - 1) * limit
  const paginatedJobs = filteredJobs.slice(offset, offset + limit)
  const total = filteredJobs.length

  const pagination = {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
  }

  // Get unique values for filters
  const allCategories = [...new Set(mockJobs.flatMap((job) => job.job_categories.map((jc) => jc.categories.name)))]
  const allTags = [...new Set(mockJobs.flatMap((job) => job.job_tags.map((jt) => jt.tags.name)))]
  const allLocations = [...new Set(mockJobs.map((job) => job.location))]

  // Transform data for JobCard component
  const transformedJobs = paginatedJobs.map((job) => ({
    id: job.id,
    title: job.title,
    company: {
      id: job.companies.id,
      name: job.companies.name,
      logo_url: job.companies.logo_url,
      slug: job.companies.slug,
      affiliation: "creator-led", // You can add this field to your database
      story: job.companies.description,
      founded: job.companies.founded,
      employees: job.companies.employees,
      valuation: "$50M+", // You can add this field to your database
      backers: ["Sample Backer"], // You can add this field to your database
    },
    location: job.location,
    is_remote: job.is_remote,
    is_featured: job.is_featured,
    categories: job.job_categories.map((jc) => jc.categories.name),
    tags: job.job_tags.map((jt) => jt.tags.name),
    created_at: job.created_at,
    job_type: job.job_type,
  }))

  return (
    <div className="flex min-h-screen flex-col bg-white text-forest-950">
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8">
          <FeaturedCompanies />

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-forest-900 mb-2">Find Your Dream Job</h1>
            <p className="text-forest-600 mb-6">
              Discover opportunities at the most innovative creator economy companies
            </p>

            {/* Applied filters */}
            {(categories.length > 0 ||
              tags.length > 0 ||
              affiliations.length > 0 ||
              isRemote ||
              search ||
              location) && (
              <div className="flex flex-wrap gap-2 items-center mb-4">
                <span className="text-sm text-forest-600">Active filters:</span>
                {categories.map((cat) => (
                  <span key={cat} className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">
                    {cat}
                  </span>
                ))}
                {tags.map((tag) => (
                  <span key={tag} className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {affiliations.map((affiliation) => (
                  <span key={affiliation} className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">
                    {affiliation}
                  </span>
                ))}
                {isRemote && (
                  <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">Remote</span>
                )}
                {search && (
                  <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">"{search}"</span>
                )}
                {location && (
                  <span className="text-xs bg-forest-100 text-forest-700 px-2 py-1 rounded-full">{location}</span>
                )}
                <Link href="/jobs" className="text-xs text-forest-600 hover:text-forest-800 underline">
                  Clear all
                </Link>
              </div>
            )}

            <div className="text-lg font-medium text-forest-800">{total} jobs found</div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <JobFilter categories={allCategories} tags={allTags} locations={allLocations} />
            </div>

            {/* Job Listings */}
            <div className="lg:w-3/4">
              <div className="space-y-4">
                {transformedJobs.length > 0 ? (
                  transformedJobs.map((job) => <JobCard key={job.id} job={job} />)
                ) : (
                  <div className="text-center py-12 bg-forest-50 rounded-lg border border-forest-100">
                    <h3 className="text-lg font-medium text-forest-800 mb-2">No jobs found</h3>
                    <p className="text-forest-600 mb-4">Try adjusting your filters or search criteria.</p>
                    <Button asChild>
                      <Link href="/jobs">View All Jobs</Link>
                    </Button>
                  </div>
                )}
              </div>

              {/* Pagination */}
              {transformedJobs.length > 0 && pagination.pages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-forest-300 text-forest-700 hover:bg-forest-50 bg-transparent"
                      disabled={page <= 1}
                      asChild
                    >
                      <Link
                        href={{
                          pathname: "/jobs",
                          query: {
                            ...searchParams,
                            page: page > 1 ? page - 1 : 1,
                          },
                        }}
                      >
                        <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                      </Link>
                    </Button>

                    {Array.from({ length: Math.min(5, pagination.pages) }, (_, i) => {
                      // Show pages around the current page
                      let pageNum = page
                      if (page <= 3) {
                        pageNum = i + 1
                      } else if (page >= pagination.pages - 2) {
                        pageNum = pagination.pages - 4 + i
                      } else {
                        pageNum = page - 2 + i
                      }

                      if (pageNum > 0 && pageNum <= pagination.pages) {
                        return (
                          <Button
                            key={pageNum}
                            variant="outline"
                            size="sm"
                            className={
                              pageNum === page
                                ? "border-forest-300 bg-forest-100 text-forest-800 hover:bg-forest-200"
                                : "border-forest-300 text-forest-700 hover:bg-forest-50"
                            }
                            asChild
                          >
                            <Link
                              href={{
                                pathname: "/jobs",
                                query: {
                                  ...searchParams,
                                  page: pageNum,
                                },
                              }}
                            >
                              {pageNum}
                            </Link>
                          </Button>
                        )
                      }
                      return null
                    })}

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-forest-300 text-forest-700 hover:bg-forest-50 bg-transparent"
                      disabled={page >= pagination.pages}
                      asChild
                    >
                      <Link
                        href={{
                          pathname: "/jobs",
                          query: {
                            ...searchParams,
                            page: page < pagination.pages ? page + 1 : pagination.pages,
                          },
                        }}
                      >
                        Next <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
