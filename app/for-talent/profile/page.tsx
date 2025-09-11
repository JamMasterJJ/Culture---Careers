import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"

export default function TalentProfilePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6">Create Your Profile</h1>
          <p className="text-lg text-gray-600 mb-8">
            Build a professional profile to showcase your skills and experience to top brands in the creator economy.
          </p>

          <div className="bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
                  placeholder="Write a brief summary of your professional experience and goals..."
                ></textarea>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Add a skill"
                    />
                    <Button className="bg-[#3E6E50] hover:bg-[#2E5E40]">Add</Button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                      Content Creation
                      <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                      Social Media
                      <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
                      Brand Partnerships
                      <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Resume Upload</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                  <div className="space-y-2">
                    <div className="text-gray-600">Drag and drop your resume here, or click to browse</div>
                    <Button variant="outline">Browse Files</Button>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button className="w-full bg-[#3E6E50] hover:bg-[#2E5E40] text-white py-3">Create Profile</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
