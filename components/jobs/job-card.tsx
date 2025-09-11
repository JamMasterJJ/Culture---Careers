"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Briefcase, Calendar, Star, Trophy, Users, TrendingUp, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { useState } from "react"

interface JobCardProps {
  job: {
    id: string
    title: string
    company: {
      id: string
      name: string
      logo_url: string | null
      slug: string
      affiliation?: string
      story?: string
      founded?: string
      employees?: string
      valuation?: string
      backers?: string[]
    }
    location: string
    is_remote: boolean
    is_featured: boolean
    categories: string[]
    tags: string[]
    created_at: string
    job_type: string | null
  }
  showCompany?: boolean
}

export function JobCard({ job, showCompany = true }: JobCardProps) {
  const [showProfile, setShowProfile] = useState(false)

  // Safely handle date parsing
  let timeAgo = "Recently posted"
  try {
    const postedDate = new Date(job.created_at)
    if (!isNaN(postedDate.getTime())) {
      timeAgo = formatDistanceToNow(postedDate, { addSuffix: true })
    }
  } catch (error) {
    console.warn("Invalid date format for job:", job.id, job.created_at)
  }

  // Get affiliation badge info
  const getAffiliationBadge = (affiliation?: string) => {
    switch (affiliation) {
      case "athlete-backed":
        return { icon: Trophy, label: "Athlete-backed", color: "bg-blue-100 text-blue-800", iconColor: "text-blue-600" }
      case "creator-led":
        return {
          icon: Star,
          label: "Creator-led",
          color: "bg-purple-100 text-purple-800",
          iconColor: "text-purple-600",
        }
      case "celebrity-endorsed":
        return {
          icon: Users,
          label: "Celebrity-endorsed",
          color: "bg-pink-100 text-pink-800",
          iconColor: "text-pink-600",
        }
      case "vc-backed":
        return {
          icon: TrendingUp,
          label: "VC-backed",
          color: "bg-green-100 text-green-800",
          iconColor: "text-green-600",
        }
      default:
        return null
    }
  }

  const affiliationBadge = getAffiliationBadge(job.company.affiliation)

  return (
    <div className="group relative rounded-md border border-forest-100 bg-white p-4 hover:border-forest-500 hover:shadow-md transition-all">
      {job.is_featured && (
        <Badge className="absolute top-4 right-4 bg-[#FFD166] hover:bg-[#FFD166] text-forest-900">Featured</Badge>
      )}

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-4">
          {/* Company Logo with Hover Profile */}
          <div
            className="relative h-12 w-12 overflow-hidden rounded-md bg-forest-50 flex-shrink-0 cursor-pointer"
            onMouseEnter={() => setShowProfile(true)}
            onMouseLeave={() => setShowProfile(false)}
          >
            <Image
              src={
                job.company.logo_url ||
                `/placeholder.svg?height=48&width=48&query=${encodeURIComponent(job.company.name) || "/placeholder.svg"}`
              }
              alt={job.company.name}
              fill
              className="object-cover"
            />

            {/* Company Profile Popup */}
            {showProfile && (
              <div className="absolute top-14 left-0 z-50 w-80 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden bg-gray-50">
                    <Image
                      src={job.company.logo_url || "/placeholder.svg"}
                      alt={job.company.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{job.company.name}</h3>
                    {affiliationBadge && (
                      <div
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-1 ${affiliationBadge.color}`}
                      >
                        <affiliationBadge.icon className={`h-3 w-3 mr-1 ${affiliationBadge.iconColor}`} />
                        {affiliationBadge.label}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {job.company.story ||
                    "Innovative brand in the creator economy space, building products that resonate with modern culture and values."}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-3">
                  <div>Founded: {job.company.founded || "2020"}</div>
                  <div>Employees: {job.company.employees || "50-200"}</div>
                  <div>Valuation: {job.company.valuation || "$50M+"}</div>
                  <div>Stage: {job.company.affiliation === "vc-backed" ? "Series A" : "Bootstrapped"}</div>
                </div>

                {job.company.backers && (
                  <div className="mb-3">
                    <div className="text-xs font-medium text-gray-700 mb-1">Notable Backers:</div>
                    <div className="flex flex-wrap gap-1">
                      {job.company.backers.map((backer, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {backer}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Button size="sm" variant="outline" className="w-full" asChild>
                  <Link href={`/companies/${job.company.slug}`}>
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Full Profile
                  </Link>
                </Button>
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg font-medium text-forest-950">{job.title}</h3>
            {showCompany && (
              <div className="flex items-center gap-2">
                <p className="text-sm text-forest-600">{job.company.name}</p>
                {affiliationBadge && (
                  <div
                    className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${affiliationBadge.color}`}
                  >
                    <affiliationBadge.icon className={`h-3 w-3 mr-1 ${affiliationBadge.iconColor}`} />
                    {affiliationBadge.label}
                  </div>
                )}
              </div>
            )}
            <div className="flex items-center text-sm text-forest-600 mt-1">
              <MapPin className="mr-1 h-4 w-4" />
              <span>{job.location}</span>
              {job.is_remote && <Badge className="ml-2 bg-forest-100 text-forest-700">Remote</Badge>}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-forest-300 bg-forest-50 px-2 py-0.5 text-xs font-medium text-forest-800"
                >
                  {tag}
                </span>
              ))}
              {job.categories.slice(0, 1).map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center rounded-full bg-forest-100 px-2 py-0.5 text-xs font-medium text-forest-700"
                >
                  {cat}
                </span>
              ))}
              {job.job_type && (
                <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 px-2 py-0.5 text-xs font-medium text-forest-700">
                  <Briefcase className="h-3 w-3" />
                  {job.job_type.replace("_", " ")}
                </span>
              )}
              <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 px-2 py-0.5 text-xs font-medium text-forest-700">
                <Calendar className="h-3 w-3" />
                {timeAgo}
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:ml-auto">
          <Button variant="outline" size="sm" className="border-forest-300 text-forest-700 hover:bg-forest-50" asChild>
            <Link href={`/companies/${job.company.slug}`}>View Company</Link>
          </Button>
          <Button size="sm" className="bg-forest-700 hover:bg-forest-800 text-white" asChild>
            <Link href={`/jobs/${job.id}`}>View Job</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
