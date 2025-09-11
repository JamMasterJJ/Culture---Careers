import { getCompanyBySlug, getJobs, getCompanies } from "@/lib/services/company-service"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function CompanyPage({ params }: { params: { slug: string } }) {
  const company = await getCompanyBySlug(params.slug)

  if (!company) {
    notFound()
  }

  // Get jobs for this company
  const companyJobs = await getJobs({ company_id: company.id })

  // Get other companies for the "Similar Companies" section
  const otherCompanies = await getCompanies()
  const similarCompanies = otherCompanies.filter((c) => c.id !== company.id).slice(0, 3)

  return (
    <div className="flex min-h-screen flex-col bg-white text-forest-950">
      <header className="border-b border-forest-100 bg-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider">CULTURE AND CAREERS</span>
          </div>
          <div className="w-[100px]"></div> {/* Spacer for balance */}
        </div>
      </header>

      <main className="flex-1">
        {/* Company Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-white to-forest-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-md bg-forest-50 flex-shrink-0">
                <Image
                  src={company.logo_url || "/placeholder.svg?height=128&width=128"}
                  alt={company.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-forest-950 mb-2">{company.name}</h1>
                <p className="text-xl text-forest-700 mb-4">
                  {company.tagline || "Creating innovative products and experiences"}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {company.headquarters && (
                    <div className="flex items-center text-sm text-forest-600">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span>{company.headquarters}</span>
                    </div>
                  )}
                  {company.founded && <div className="text-sm text-forest-600">Founded: {company.founded}</div>}
                  {company.employees && (
                    <div className="text-sm text-forest-600">Size: {company.employees} employees</div>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  {company.website && (
                    <Button className="bg-forest-800 text-white hover:bg-forest-900" asChild>
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" className="border-forest-300 text-forest-800 hover:bg-forest-50">
                    Share Company
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-forest-900 mb-4">About {company.name}</h2>
                  <p className="text-forest-700 mb-4">{company.description}</p>
                </div>

                {company.founder_info && (
                  <div>
                    <h2 className="text-2xl font-bold text-forest-900 mb-4">Founder Background</h2>
                    <p className="text-forest-700 mb-4">{company.founder_info}</p>
                  </div>
                )}

                {company.social_impact && (
                  <div>
                    <h2 className="text-2xl font-bold text-forest-900 mb-4">Social Impact</h2>
                    <p className="text-forest-700 mb-4">{company.social_impact}</p>
                  </div>
                )}
              </div>

              <div>
                <div className="bg-forest-50 p-6 rounded-lg border border-forest-100">
                  <h2 className="text-xl font-bold text-forest-900 mb-4">Open Positions</h2>
                  {companyJobs.length > 0 ? (
                    <div className="space-y-4">
                      {companyJobs.map((job) => (
                        <div
                          key={job.id}
                          className="bg-white p-4 rounded border border-forest-200 hover:border-forest-500 transition-all"
                        >
                          <h3 className="font-medium text-forest-900">{job.title}</h3>
                          <p className="text-sm text-forest-600 mb-2">{job.location}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {job.categories.map((cat) => (
                              <span
                                key={cat}
                                className="inline-flex items-center rounded-full bg-forest-100 px-2 py-0.5 text-xs font-medium text-forest-700"
                              >
                                {cat}
                              </span>
                            ))}
                          </div>
                          <Button size="sm" className="w-full bg-forest-800 text-white hover:bg-forest-900" asChild>
                            <Link href={`/jobs/${job.id}`}>View Job</Link>
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-forest-600">No open positions at this time. Check back soon!</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similar Companies */}
        <section className="py-12 bg-forest-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-forest-900 mb-6">Similar Companies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarCompanies.map((similarCompany) => (
                <Link
                  key={similarCompany.id}
                  href={`/companies/${similarCompany.slug}`}
                  className="bg-white p-6 rounded-lg border border-forest-100 hover:border-forest-500 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-md bg-forest-50 flex-shrink-0">
                      <Image
                        src={similarCompany.logo_url || "/placeholder.svg?height=48&width=48"}
                        alt={similarCompany.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-forest-900">{similarCompany.name}</h3>
                      <p className="text-sm text-forest-600 mt-1">
                        {similarCompany.tagline || "Creating innovative products and experiences"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-forest-100 py-8 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-forest-600">
                &copy; {new Date().getFullYear()} Culture and Careers. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-forest-600 hover:text-forest-800">
                Privacy
              </Link>
              <Link href="#" className="text-sm text-forest-600 hover:text-forest-800">
                Terms
              </Link>
              <Link href="#" className="text-sm text-forest-600 hover:text-forest-800">
                About
              </Link>
              <Link href="#" className="text-sm text-forest-600 hover:text-forest-800">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
