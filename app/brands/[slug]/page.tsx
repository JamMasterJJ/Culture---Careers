import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { getCompanyBySlug, getCompanies } from "@/lib/services/company-service"
import { getJobs } from "@/lib/services/job-service"
import { ArrowRight, Briefcase, MapPin, Calendar, Users, Globe, Quote } from "lucide-react"

// Define special category slugs
const CATEGORY_SLUGS = ["athlete", "celebrity", "creator"]

export default async function BrandProfilePage({ params }: { params: { slug: string } }) {
  // Check if this is a category page
  const isCategory = CATEGORY_SLUGS.includes(params.slug)

  if (isCategory) {
    return <BrandCategoryPage category={params.slug} />
  }

  // Regular company profile
  const company = await getCompanyBySlug(params.slug)

  if (!company) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Brand not found</h1>
        <p className="text-gray-600 mb-6">The brand you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/brands">Browse Brands</Link>
        </Button>
      </div>
    )
  }

  // Fetch jobs for this company
  const jobs = await getJobs(company.id)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Brand Header */}
        <section className="bg-white border-b border-gray-100">
          <div className="container px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-lg border border-gray-200 overflow-hidden bg-white flex-shrink-0">
                {company.logo_url ? (
                  <Image
                    src={company.logo_url || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    fill
                    className="object-contain p-2"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <span className="text-2xl font-bold text-gray-300">{company.name.charAt(0)}</span>
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{company.name}</h1>
                    {company.tagline && <p className="text-lg text-gray-600 mt-1">{company.tagline}</p>}
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-[#FF5A5F] hover:bg-[#FF4146] text-white" asChild>
                      <Link href={`/jobs?company=${company.slug}`}>
                        <Briefcase className="mr-2 h-4 w-4" /> View Jobs
                      </Link>
                    </Button>

                    {company.website && (
                      <Button variant="outline" className="border-gray-200" asChild>
                        <Link href={company.website} target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2 h-4 w-4" /> Website
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  {company.headquarters && (
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                      <MapPin className="mr-1 h-3 w-3" /> {company.headquarters}
                    </Badge>
                  )}

                  {company.founded && (
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                      <Calendar className="mr-1 h-3 w-3" /> Founded {company.founded}
                    </Badge>
                  )}

                  {company.employees && (
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                      <Users className="mr-1 h-3 w-3" /> {company.employees} employees
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Content */}
        <section className="py-8 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="about" className="w-full">
              <TabsList className="mb-8 bg-white border border-gray-200">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="behind-the-brand">Behind the Brand</TabsTrigger>
                <TabsTrigger value="jobs">Open Positions</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">About {company.name}</h2>
                        <div className="prose max-w-none text-gray-700">
                          <p>{company.description}</p>
                        </div>
                      </CardContent>
                    </Card>

                    {company.social_impact && (
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">Social Impact</h2>
                          <div className="prose max-w-none text-gray-700">
                            <p>{company.social_impact}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div className="space-y-8">
                    {company.founder_info && (
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-lg font-semibold text-gray-900 mb-4">Founder Story</h2>
                          <div className="prose max-w-none text-gray-700">
                            <p>{company.founder_info}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h2>
                        <dl className="space-y-3">
                          {company.website && (
                            <div>
                              <dt className="text-sm font-medium text-gray-500">Website</dt>
                              <dd className="mt-1">
                                <a
                                  href={company.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#00BCD4] hover:text-[#00ACC1]"
                                >
                                  {company.website.replace(/^https?:\/\/(www\.)?/, "")}
                                </a>
                              </dd>
                            </div>
                          )}

                          {company.headquarters && (
                            <div>
                              <dt className="text-sm font-medium text-gray-500">Headquarters</dt>
                              <dd className="mt-1 text-gray-900">{company.headquarters}</dd>
                            </div>
                          )}

                          {company.founded && (
                            <div>
                              <dt className="text-sm font-medium text-gray-500">Founded</dt>
                              <dd className="mt-1 text-gray-900">{company.founded}</dd>
                            </div>
                          )}

                          {company.employees && (
                            <div>
                              <dt className="text-sm font-medium text-gray-500">Company Size</dt>
                              <dd className="mt-1 text-gray-900">{company.employees} employees</dd>
                            </div>
                          )}
                        </dl>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="behind-the-brand" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    {company.culture_statement ? (
                      <Card>
                        <CardContent className="p-6">
                          <h2 className="text-xl font-semibold text-gray-900 mb-4">Company Culture</h2>
                          <div className="prose max-w-none text-gray-700">
                            <p>{company.culture_statement}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card>
                        <CardContent className="p-6 text-center">
                          <h2 className="text-xl font-semibold text-gray-900 mb-2">Company Culture</h2>
                          <p className="text-gray-500">This brand hasn't shared their culture statement yet.</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  <div>
                    <Card>
                      <CardContent className="p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Interview Insights</h2>

                        {company.interview_questions && company.interview_questions.length > 0 ? (
                          <div className="space-y-4">
                            <p className="text-sm text-gray-500">Top questions this company asks candidates:</p>

                            {company.interview_questions.map((question, index) => (
                              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-start gap-2">
                                  <Quote className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                                  <p className="text-gray-700">{question}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-500 text-center py-4">
                            This brand hasn't shared their interview questions yet.
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="jobs" className="mt-0">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">Open Positions</h2>
                      <Button variant="outline" className="text-[#00BCD4] border-[#00BCD4]" asChild>
                        <Link href={`/jobs?company=${company.slug}`}>
                          View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>

                    {jobs && jobs.length > 0 ? (
                      <div className="space-y-4">
                        {jobs.map((job) => (
                          <Link
                            key={job.id}
                            href={`/jobs/${job.id}`}
                            className="block p-4 border border-gray-100 rounded-lg hover:border-[#00BCD4] hover:shadow-sm transition-all"
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div>
                                <h3 className="font-medium text-gray-900">{job.title}</h3>
                                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                                  <div className="flex items-center">
                                    <MapPin className="mr-1 h-4 w-4" />
                                    <span>{job.location}</span>
                                  </div>
                                  {job.job_type && (
                                    <div className="flex items-center">
                                      <Briefcase className="mr-1 h-4 w-4" />
                                      <span>{job.job_type.replace("_", " ")}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <Button size="sm" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white">
                                Apply Now
                              </Button>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500 mb-4">No open positions at the moment.</p>
                        <p className="text-sm text-gray-400">Check back later or browse other opportunities.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Brand Category Page Component
async function BrandCategoryPage({ category }: { category: string }) {
  // Get all companies
  const companies = await getCompanies()

  // Format category name for display
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section className="bg-white border-b border-gray-100">
          <div className="container px-4 md:px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{categoryName} Brands</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover top {category} brands in the creator economy and explore career opportunities.
            </p>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {companies.length > 0 ? (
                companies.map((company) => (
                  <Link key={company.id} href={`/brands/${company.slug}`} className="block group">
                    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-40 bg-gray-100 relative">
                        {company.cover_image ? (
                          <Image
                            src={company.cover_image || "/placeholder.svg"}
                            alt={company.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
                            <Image
                              src={company.logo_url || `/placeholder.svg?height=80&width=80&query=${company.name} logo`}
                              alt={company.name}
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#00BCD4] transition-colors">
                          {company.name}
                        </h3>
                        {company.tagline && <p className="text-gray-600 mt-2">{company.tagline}</p>}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {company.headquarters && (
                            <Badge variant="outline" className="bg-gray-50">
                              <MapPin className="mr-1 h-3 w-3" /> {company.headquarters}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 mb-4">No brands found in this category.</p>
                  <Button asChild>
                    <Link href="/brands">View All Brands</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
