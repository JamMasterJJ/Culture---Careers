import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Building, Calendar, Briefcase, Share2, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatDistanceToNow } from "date-fns"
import { EnhancedApplicationForm } from "@/components/applications/enhanced-application-form"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { SaveJobButton } from "@/components/jobs/save-job-button"

export default async function JobDetailPage({ params }: { params: { id: string } }) {
  // Fetch job data from API
  const jobResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/jobs/${params.id}`, {
    cache: "no-store",
  })

  if (!jobResponse.ok) {
    notFound()
  }

  const { job } = await jobResponse.json()

  // Fetch similar jobs (same category or tags)
  const similarJobsResponse = await fetch(
    `/api/jobs?${new URLSearchParams({
      ...(job.categories.length > 0 ? { category: job.categories[0] } : {}),
      ...(job.tags.length > 0 ? { tag: job.tags[0] } : {}),
      limit: "3",
    })}`,
    { cache: "no-store" },
  )

  const { jobs: allJobs } = await similarJobsResponse.json()
  const similarJobs = allJobs.filter((j) => j.id !== job.id).slice(0, 3)

  const postedDate = new Date(job.created_at)
  const timeAgo = formatDistanceToNow(postedDate, { addSuffix: true })

  return (
    <div className="flex min-h-screen flex-col bg-white text-forest-950">
      <Navbar />

      <main className="flex-1">
        {/* Job Header */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-forest-50">
          <div className="container px-4 md:px-6">
            <div className="mb-6">
              <Link
                href="/jobs"
                className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
              </Link>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative h-20 w-20 md:h-24 md:w-24 overflow-hidden rounded-md bg-forest-50 flex-shrink-0">
                <Image
                  src={
                    job.company.logo_url ||
                    `/placeholder.svg?height=96&width=96&query=${encodeURIComponent(job.company.name) || "/placeholder.svg"}`
                  }
                  alt={job.company.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {job.is_featured && (
                    <Badge className="bg-[#FFD166] hover:bg-[#FFD166] text-forest-900">Featured</Badge>
                  )}
                  {job.tags.map((tag) => (
                    <Badge key={tag} className="bg-forest-100 hover:bg-forest-200 text-forest-800">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-forest-950 mb-2">{job.title}</h1>
                <p className="text-xl text-forest-700 mb-4">{job.company.name}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center text-sm text-forest-600">
                    <MapPin className="mr-1 h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  {job.job_type && (
                    <div className="flex items-center text-sm text-forest-600">
                      <Briefcase className="mr-1 h-4 w-4" />
                      <span>{job.job_type.replace("_", " ")}</span>
                    </div>
                  )}
                  <div className="flex items-center text-sm text-forest-600">
                    <Calendar className="mr-1 h-4 w-4" />
                    <span>Posted {timeAgo}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button className="bg-forest-700 text-white hover:bg-forest-800" asChild>
                    <a href="#apply-section">Apply Now</a>
                  </Button>
                  <SaveJobButton jobId={job.id} />
                  <Button
                    variant="outline"
                    className="border-forest-300 text-forest-700 hover:bg-forest-50 bg-transparent"
                  >
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-forest-900 mb-4">About This Role</h2>
                  <div className="prose text-forest-700 max-w-none">{job.description}</div>
                </div>

                {job.responsibilities && job.responsibilities.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-forest-900 mb-4">Responsibilities</h2>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4ECDC4] mr-2">•</span>
                          <span className="text-forest-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {job.requirements && job.requirements.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-forest-900 mb-4">Requirements</h2>
                    <ul className="space-y-2">
                      {job.requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4ECDC4] mr-2">•</span>
                          <span className="text-forest-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {job.benefits && job.benefits.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-forest-900 mb-4">Benefits</h2>
                    <ul className="space-y-2">
                      {job.benefits.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-[#4ECDC4] mr-2">•</span>
                          <span className="text-forest-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div id="apply-section" className="pt-6 border-t border-forest-100">
                  <h2 className="text-2xl font-bold text-forest-900 mb-6">Apply for this position</h2>
                  <div className="bg-forest-50 p-6 rounded-lg border border-forest-100">
                    <EnhancedApplicationForm job={job} />
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-forest-50 p-6 rounded-lg border border-forest-100 sticky top-24">
                  <h2 className="text-xl font-bold text-forest-900 mb-4">About {job.company.name}</h2>

                  {/* Company Badge */}
                  {job.tags[0] && (
                    <Badge className="mb-4 bg-[#4ECDC4] hover:bg-[#4ECDC4] text-white">{job.tags[0]}</Badge>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-md bg-forest-50 flex-shrink-0">
                      <Image
                        src={
                          job.company.logo_url ||
                          `/placeholder.svg?height=48&width=48&query=${encodeURIComponent(job.company.name) || "/placeholder.svg"}`
                        }
                        alt={job.company.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-forest-900">{job.company.name}</h3>
                      <p className="text-sm text-forest-600">{job.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-forest-700 mb-4">
                    {job.company.description ||
                      `${job.company.name} is a culture-defining brand creating innovative products and experiences.`}
                  </p>

                  {/* Founder Info */}
                  {job.company.founder_info && (
                    <div className="mb-4 p-3 bg-white rounded-md border border-forest-200">
                      <div className="flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-forest-50 flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Founder"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-forest-900 text-sm">Founder</h4>
                          <p className="text-xs text-forest-600">{job.company.founder_info}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button
                    className="w-full mb-4 bg-white text-forest-700 hover:bg-forest-50 border border-forest-200"
                    asChild
                  >
                    <Link href={`/companies/${job.company.slug}`}>
                      <Building className="mr-2 h-4 w-4" /> View Company Profile
                    </Link>
                  </Button>

                  {job.apply_url && (
                    <Button className="w-full bg-forest-700 text-white hover:bg-forest-800" asChild>
                      <a href={job.apply_url} target="_blank" rel="noopener noreferrer">
                        Apply on Company Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Jobs */}
        {similarJobs.length > 0 && (
          <section className="py-12 bg-forest-50">
            <div className="container px-4 md:px-6">
              <h2 className="text-2xl font-bold text-forest-900 mb-6">Similar Jobs</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarJobs.map((similarJob) => (
                  <Link
                    key={similarJob.id}
                    href={`/jobs/${similarJob.id}`}
                    className="bg-white p-6 rounded-lg border border-forest-100 hover:border-forest-500 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative h-12 w-12 overflow-hidden rounded-md bg-forest-50 flex-shrink-0">
                        <Image
                          src={
                            similarJob.company.logo_url ||
                            `/placeholder.svg?height=48&width=48&query=${encodeURIComponent(similarJob.company.name) || "/placeholder.svg"}`
                          }
                          alt={similarJob.company.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-forest-900">{similarJob.title}</h3>
                        <p className="text-sm text-forest-600">{similarJob.company.name}</p>
                        <div className="flex items-center text-sm text-forest-600 mt-1">
                          <MapPin className="mr-1 h-4 w-4" />
                          <span>{similarJob.location}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
