import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Calendar, ArrowRight, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter/newsletter-form"

export default function NewsletterPage() {
  // Mock data for newsletter issues
  const newsletterIssues = [
    {
      id: 1,
      title: "The Rise of Creator-Led Brands",
      date: "May 5, 2023",
      excerpt:
        "This week we explore how content creators are building successful consumer brands and the job opportunities they're creating.",
      featuredJobs: ["Social Media Manager at Chamberlain Coffee", "E-Commerce Lead at Prime Hydration"],
    },
    {
      id: 2,
      title: "Sports Media's Digital Transformation",
      date: "April 28, 2023",
      excerpt:
        "How digital-first sports media companies are changing the game and the skills they're looking for in new hires.",
      featuredJobs: ["Community Manager at Overtime", "Video Editor at The Ringer"],
    },
    {
      id: 3,
      title: "Beauty Industry Disruption",
      date: "April 21, 2023",
      excerpt:
        "Celebrity and influencer beauty brands are reshaping the industry. We look at the career opportunities in this growing sector.",
      featuredJobs: ["Product Designer at Fenty Beauty", "Marketing Coordinator at Rare Beauty"],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-forest-100 bg-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-medium text-forest-600 hover:text-forest-800 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-wider">CULTURE AND CAREERS</span>
          </div>
          <div className="w-[100px]"></div> {/* Spacer for balance */}
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-forest-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="px-4 py-1.5 text-sm bg-[#4ECDC4] hover:bg-[#4ECDC4] text-white mb-4">
                Weekly Newsletter
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">The Drop: Culture × Careers</h1>
              <p className="text-xl text-forest-700 mb-8">
                The insider's guide to jobs in the creator economy. Delivered to your inbox every Friday.
              </p>

              <div className="bg-white p-8 rounded-lg border border-forest-200 shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#4ECDC4] mr-2" />
                  <span className="text-forest-800 font-medium">Join 10,000+ professionals</span>
                </div>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-8 text-center">What to Expect</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-forest-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-forest-700" />
                  </div>
                  <h3 className="text-lg font-bold text-forest-800 mb-2">Exclusive Jobs</h3>
                  <p className="text-forest-600">
                    First access to opportunities at creator-backed brands before they're posted publicly.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-forest-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-forest-700"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-forest-800 mb-2">Industry Insights</h3>
                  <p className="text-forest-600">
                    Analysis and trends shaping the creator economy and what it means for your career.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-forest-50 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8 text-forest-700"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-forest-800 mb-2">Career Advice</h3>
                  <p className="text-forest-600">
                    Practical tips and guidance for navigating your career in the creator economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Archive */}
        <section className="py-16 bg-forest-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-8">Previous Issues</h2>

              <div className="space-y-6">
                {newsletterIssues.map((issue) => (
                  <div
                    key={issue.id}
                    className="bg-white p-6 rounded-lg border border-forest-200 hover:border-forest-500 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-forest-100 rounded-md p-2 text-center min-w-[60px]">
                        <Calendar className="h-5 w-5 mx-auto mb-1 text-forest-700" />
                        <span className="text-xs text-forest-700">{issue.date}</span>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-forest-900 mb-2">{issue.title}</h3>
                        <p className="text-forest-700 mb-4">{issue.excerpt}</p>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-forest-800 mb-2">Featured Jobs:</h4>
                          <ul className="space-y-1">
                            {issue.featuredJobs.map((job, index) => (
                              <li key={index} className="text-sm text-forest-600 flex items-center">
                                <span className="text-[#4ECDC4] mr-2">•</span>
                                {job}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          variant="outline"
                          size="sm"
                          className="border-forest-300 text-forest-700 hover:bg-forest-50"
                        >
                          Read Issue <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-forest-700 hover:bg-forest-800 text-white">View All Issues</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-forest-900 mb-8">What Our Readers Say</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-forest-50 p-6 rounded-lg border border-forest-100">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Sarah J." fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-forest-900">Sarah J.</h3>
                      <p className="text-sm text-forest-600">Marketing Manager</p>
                    </div>
                  </div>
                  <p className="text-forest-700 text-left">
                    "The Drop has been instrumental in my career transition into the creator economy. I found my current
                    role through one of their exclusive job listings!"
                  </p>
                </div>

                <div className="bg-forest-50 p-6 rounded-lg border border-forest-100">
                  <div className="flex items-center mb-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                      <Image src="/placeholder.svg?height=48&width=48" alt="Michael T." fill className="object-cover" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-forest-900">Michael T.</h3>
                      <p className="text-sm text-forest-600">Content Strategist</p>
                    </div>
                  </div>
                  <p className="text-forest-700 text-left">
                    "I look forward to The Drop every Friday. The industry insights are always spot-on and have helped
                    me stay ahead of trends in my field."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-forest-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join The Drop?</h2>
              <p className="text-forest-100 mb-8">
                Don't miss out on the latest opportunities and insights in the creator economy.
              </p>

              <div className="bg-white p-6 rounded-lg max-w-md mx-auto">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>

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
