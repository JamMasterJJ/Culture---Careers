import { Footer } from "@/components/layout/footer"

export default function TalentJobsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Find Jobs</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover exciting career opportunities with culture-defining brands in the creator economy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {/* Job listings would go here */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media Manager</h3>
              <p className="text-[#3E6E50] font-medium mb-3">Fenty Beauty</p>
              <p className="text-gray-600 mb-4">
                Create and manage social media content for a leading beauty brand, working with influencers and
                celebrities.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <span className="mr-3">Los Angeles, CA</span>
                <span>Full-time</span>
              </div>
              <a href="#" className="text-[#3E6E50] font-medium hover:underline">
                View Details →
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Partnerships Lead</h3>
              <p className="text-[#3E6E50] font-medium mb-3">Chamberlain Coffee</p>
              <p className="text-gray-600 mb-4">
                Develop and execute strategic partnerships with brands, retailers, and influencers to grow our coffee
                business.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <span className="mr-3">Remote</span>
                <span>Full-time</span>
              </div>
              <a href="#" className="text-[#3E6E50] font-medium hover:underline">
                View Details →
              </a>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Content Producer</h3>
              <p className="text-[#3E6E50] font-medium mb-3">100 Thieves</p>
              <p className="text-gray-600 mb-4">
                Create engaging video content for our esports teams and lifestyle brand across multiple platforms.
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <span className="mr-3">Los Angeles, CA</span>
                <span>Full-time</span>
              </div>
              <a href="#" className="text-[#3E6E50] font-medium hover:underline">
                View Details →
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/jobs"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3E6E50] hover:bg-[#2E5E40]"
            >
              View All Jobs
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
