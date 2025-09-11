import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Play, FileText, BookOpen } from "lucide-react"

export default function TalentResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl font-bold mb-6">Career Resources</h1>
            <p className="text-lg text-gray-600">
              Access our comprehensive library of resources designed to help you succeed in the creator economy. From
              resume templates to interview guides, we've got you covered.
            </p>
          </div>

          {/* Featured Resources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
              <div className="relative h-48 w-full">
                <Image src="/resume-writing-guide.png" alt="Resume Writing Guide" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume Writing Guide</h3>
                <p className="text-gray-600 mb-4">
                  Learn how to craft a standout resume that gets noticed by top brands in the creator economy.
                </p>
                <Button className="w-full bg-[#3E6E50] hover:bg-[#2E5E40] flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Guide
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
              <div className="relative h-48 w-full">
                <Image src="/interview-preparation-concept.png" alt="Interview Preparation" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interview Masterclass</h3>
                <p className="text-gray-600 mb-4">
                  Video tutorials and tips to help you ace your interviews with creator-backed brands.
                </p>
                <Button className="w-full bg-[#3E6E50] hover:bg-[#2E5E40] flex items-center justify-center">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Videos
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
              <div className="relative h-48 w-full">
                <Image src="/portfolio-building.png" alt="Portfolio Building" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Portfolio Building</h3>
                <p className="text-gray-600 mb-4">
                  Templates and guides to help you create an impressive portfolio that showcases your talents.
                </p>
                <Button className="w-full bg-[#3E6E50] hover:bg-[#2E5E40] flex items-center justify-center">
                  <FileText className="mr-2 h-4 w-4" />
                  Get Templates
                </Button>
              </div>
            </div>
          </div>

          {/* Resource Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Resource Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="#" className="group">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#f0f5f1] transition-all">
                  <div className="w-16 h-16 bg-[#e6f0e9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-8 w-8 text-[#3E6E50]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Resume & Cover Letters</h3>
                  <p className="text-gray-600 text-sm">Templates, examples, and writing guides</p>
                </div>
              </Link>

              <Link href="#" className="group">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#f0f5f1] transition-all">
                  <div className="w-16 h-16 bg-[#e6f0e9] rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-[#3E6E50]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Career Development</h3>
                  <p className="text-gray-600 text-sm">Growth strategies and skill building</p>
                </div>
              </Link>

              <Link href="#" className="group">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#f0f5f1] transition-all">
                  <div className="w-16 h-16 bg-[#e6f0e9] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8 text-[#3E6E50]"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Interview Preparation</h3>
                  <p className="text-gray-600 text-sm">Tips, common questions, and practice guides</p>
                </div>
              </Link>

              <Link href="#" className="group">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-[#f0f5f1] transition-all">
                  <div className="w-16 h-16 bg-[#e6f0e9] rounded-full flex items-center justify-center mx-auto mb-4">
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
                      className="h-8 w-8 text-[#3E6E50]"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Industry Insights</h3>
                  <p className="text-gray-600 text-sm">Trends, reports, and market analysis</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Premium Resources Banner */}
          <div className="bg-gradient-to-r from-[#3E6E50] to-[#2E5E40] rounded-lg p-8 text-white mb-16">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-2">Unlock Premium Resources</h3>
                <p className="text-white/80">
                  Subscribe to our Professional or Elite membership plans to access our full library of premium
                  resources, including personalized career coaching and exclusive industry reports.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button className="bg-white text-[#3E6E50] hover:bg-gray-100">View Membership Plans</Button>
              </div>
            </div>
          </div>

          {/* Latest Articles */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Latest Career Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full mb-3">
                    Career Growth
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Navigating the Creator Economy Job Market in 2025
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Key trends, opportunities, and strategies for finding your dream role in the evolving creator
                    economy landscape.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">May 15, 2025</span>
                    <Link href="#" className="text-[#3E6E50] font-medium hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full mb-3">
                    Interviews
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    5 Questions You Should Ask in Every Creator Brand Interview
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Stand out from other candidates by asking these insightful questions that demonstrate your
                    understanding of the creator economy.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">May 10, 2025</span>
                    <Link href="#" className="text-[#3E6E50] font-medium hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                <div className="p-6">
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full mb-3">
                    Skill Building
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Essential Skills for Working with Creator-Backed Brands
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Develop these key competencies to thrive in the unique environment of creator-led companies and
                    brands.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">May 5, 2025</span>
                    <Link href="#" className="text-[#3E6E50] font-medium hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
