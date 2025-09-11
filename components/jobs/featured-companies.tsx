import Image from "next/image"
import Link from "next/link"

type FeaturedCompany = {
  id: string
  name: string
  logo: string
  slug: string
  jobCount: number
}

export function FeaturedCompanies() {
  // This would typically come from an API or database
  const featuredCompanies: FeaturedCompany[] = [
    {
      id: "1",
      name: "TechVision",
      logo: "/abstract-tech-logo.png",
      slug: "techvision",
      jobCount: 12,
    },
    {
      id: "2",
      name: "MediaPulse",
      logo: "/generic-media-logo.png",
      slug: "mediapulse",
      jobCount: 8,
    },
    {
      id: "3",
      name: "FashionForward",
      logo: "/fashion-company-logo.png",
      slug: "fashionforward",
      jobCount: 5,
    },
    {
      id: "4",
      name: "CreativeMinds",
      logo: "/generic-placeholder-icon.png",
      slug: "creativeminds",
      jobCount: 7,
    },
    {
      id: "5",
      name: "InnovateNow",
      logo: "/generic-placeholder-icon.png",
      slug: "innovatenow",
      jobCount: 9,
    },
    {
      id: "6",
      name: "DigitalFlow",
      logo: "/generic-placeholder-icon.png",
      slug: "digitalflow",
      jobCount: 6,
    },
    {
      id: "7",
      name: "BrandStudio",
      logo: "/generic-placeholder-icon.png",
      slug: "brandstudio",
      jobCount: 4,
    },
    {
      id: "8",
      name: "ContentLab",
      logo: "/generic-placeholder-icon.png",
      slug: "contentlab",
      jobCount: 11,
    },
  ]

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Companies Hiring Now</h2>
        <Link
          href="/companies"
          className="text-[#3E6E50] hover:text-[#2A4A37] font-medium text-sm flex items-center gap-1"
        >
          View all companies
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {featuredCompanies.map((company) => (
          <Link
            href={`/companies/${company.slug}`}
            key={company.id}
            className="group bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#3E6E50] hover:shadow-lg transition-all duration-200 min-h-[120px]"
          >
            <div className="w-12 h-12 relative mb-3 group-hover:scale-105 transition-transform duration-200">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <h3 className="font-medium text-center text-sm text-gray-900 group-hover:text-[#3E6E50] transition-colors">
              {company.name}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {company.jobCount} {company.jobCount === 1 ? "job" : "jobs"}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
