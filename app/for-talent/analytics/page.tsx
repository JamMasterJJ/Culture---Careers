"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Users, Eye, Target, FileText, Calendar, MapPin, Briefcase } from "lucide-react"
import { SignupPopup } from "@/components/auth/signup-popup"

export default function TalentAnalyticsPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showSignupPopup, setShowSignupPopup] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate checking authentication status
    const checkAuth = async () => {
      // In a real app, you would check if user is authenticated
      // For demo purposes, we'll assume user is not authenticated
      await new Promise((resolve) => setTimeout(resolve, 500))
      setIsAuthenticated(false) // Change to true to simulate authenticated user
      setIsLoading(false)

      if (!isAuthenticated) {
        setShowSignupPopup(true)
      }
    }

    checkAuth()
  }, [isAuthenticated])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#3E6E50]"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="flex min-h-screen flex-col bg-white">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-[#3E6E50] to-[#2A4A37]">
            <div className="container mx-auto px-4">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Career Analytics</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Track your job search progress and optimize your career strategy
                </p>
              </div>
            </div>
          </section>

          {/* Authentication Required Message */}
          <section className="py-16 bg-gray-50 flex-1 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="w-16 h-16 bg-[#3E6E50] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign In to View Your Analytics</h2>
                  <p className="text-gray-600 mb-8">
                    Get personalized insights about your job search progress, application success rates, and career
                    optimization tips.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600">Track Applications</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600">Monitor Progress</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Target className="h-6 w-6 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-600">Optimize Strategy</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowSignupPopup(true)}
                    className="bg-[#3E6E50] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#2A4A37] transition-colors"
                  >
                    Sign In to Continue
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <SignupPopup
          isOpen={showSignupPopup}
          onClose={() => setShowSignupPopup(false)}
          title="Sign in to view your analytics"
        />
      </>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[#3E6E50] to-[#2A4A37]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Your Career Analytics</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Track your job search progress and optimize your career strategy
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "overview"
                        ? "border-[#3E6E50] text-[#3E6E50]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Application Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("matching")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "matching"
                        ? "border-[#3E6E50] text-[#3E6E50]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Job Match Analytics
                  </button>
                  <button
                    onClick={() => setActiveTab("insights")}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === "insights"
                        ? "border-[#3E6E50] text-[#3E6E50]"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Career Insights
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === "overview" && (
                  <div>
                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-blue-600">Applications Sent</p>
                            <p className="text-2xl font-bold text-blue-900">24</p>
                            <div className="flex items-center mt-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm text-green-600">+15% this month</span>
                            </div>
                          </div>
                          <FileText className="h-8 w-8 text-blue-600" />
                        </div>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-green-600">Interview Invites</p>
                            <p className="text-2xl font-bold text-green-900">7</p>
                            <div className="flex items-center mt-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm text-green-600">+40% this month</span>
                            </div>
                          </div>
                          <Users className="h-8 w-8 text-green-600" />
                        </div>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-purple-600">Profile Views</p>
                            <p className="text-2xl font-bold text-purple-900">156</p>
                            <div className="flex items-center mt-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm text-green-600">+28% this month</span>
                            </div>
                          </div>
                          <Eye className="h-8 w-8 text-purple-600" />
                        </div>
                      </div>

                      <div className="bg-orange-50 p-6 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-orange-600">Response Rate</p>
                            <p className="text-2xl font-bold text-orange-900">29%</p>
                            <div className="flex items-center mt-2">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm text-green-600">+5% this month</span>
                            </div>
                          </div>
                          <Target className="h-8 w-8 text-orange-600" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Application Status Chart */}
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Status</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                              <span className="text-sm text-gray-600">Under Review</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-2">12</span>
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                              <span className="text-sm text-gray-600">Interviewing</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-2">7</span>
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "29%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                              <span className="text-sm text-gray-600">Pending Response</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-2">3</span>
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "12%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                              <span className="text-sm text-gray-600">Not Selected</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-gray-900 mr-2">2</span>
                              <div className="w-20 bg-gray-200 rounded-full h-2">
                                <div className="bg-red-500 h-2 rounded-full" style={{ width: "8%" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Recent Applications */}
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Social Media Manager</p>
                                <p className="text-xs text-gray-500">MrBeast</p>
                              </div>
                            </div>
                            <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                              Interviewing
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Content Creator</p>
                                <p className="text-xs text-gray-500">Dude Perfect</p>
                              </div>
                            </div>
                            <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                              Under Review
                            </span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <Briefcase className="h-5 w-5 text-gray-400 mr-3" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">Brand Manager</p>
                                <p className="text-xs text-gray-500">Emma Chamberlain</p>
                              </div>
                            </div>
                            <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                              Pending
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "matching" && (
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Skills Match Analysis */}
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills Match Analysis</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Social Media Marketing</span>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-green-600 mr-2">95%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Content Creation</span>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-green-600 mr-2">88%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Brand Management</span>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-blue-600 mr-2">82%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Influencer Relations</span>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-blue-600 mr-2">76%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "76%" }}></div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Analytics & Reporting</span>
                            <div className="flex items-center">
                              <span className="text-sm font-medium text-yellow-600 mr-2">68%</span>
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Job Match Recommendations */}
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Jobs</h3>
                        <div className="space-y-4">
                          <div className="p-4 border border-green-200 bg-green-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">Marketing Coordinator</h4>
                              <span className="text-sm font-medium text-green-600">92% Match</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Gymshark • Remote</p>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-xs text-gray-500">$55,000 - $70,000</span>
                            </div>
                          </div>
                          <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">Content Strategist</h4>
                              <span className="text-sm font-medium text-blue-600">87% Match</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Glossier • New York, NY</p>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-xs text-gray-500">$60,000 - $75,000</span>
                            </div>
                          </div>
                          <div className="p-4 border border-purple-200 bg-purple-50 rounded-lg">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-gray-900">Social Media Specialist</h4>
                              <span className="text-sm font-medium text-purple-600">84% Match</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">Fenty Beauty • Los Angeles, CA</p>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                              <span className="text-xs text-gray-500">$50,000 - $65,000</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "insights" && (
                  <div>
                    {/* Career Insights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Target className="h-6 w-6 text-blue-600 mr-2" />
                          <h4 className="font-medium text-blue-900">Optimize Your Profile</h4>
                        </div>
                        <p className="text-sm text-blue-700">Add 2 more skills to increase your match rate by 15%</p>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <div className="flex items-center mb-3">
                          <Calendar className="h-6 w-6 text-green-600 mr-2" />
                          <h4 className="font-medium text-green-900">Peak Application Time</h4>
                        </div>
                        <p className="text-sm text-green-700">Tuesday mornings show 40% higher response rates</p>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <div className="flex items-center mb-3">
                          <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                          <h4 className="font-medium text-purple-900">Salary Insights</h4>
                        </div>
                        <p className="text-sm text-purple-700">Your target roles average $72K in your location</p>
                      </div>
                    </div>

                    {/* Market Trends */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Industry Trends</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Creator Economy Growth</span>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm font-medium text-green-600">+45%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Remote Work Opportunities</span>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm font-medium text-green-600">+32%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Social Media Marketing Roles</span>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm font-medium text-green-600">+28%</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Content Creation Positions</span>
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                              <span className="text-sm font-medium text-green-600">+25%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Salary Benchmarks</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Entry Level (0-2 years)</span>
                            <span className="text-sm font-medium text-gray-900">$45K - $55K</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Mid Level (3-5 years)</span>
                            <span className="text-sm font-medium text-gray-900">$60K - $80K</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Senior Level (6+ years)</span>
                            <span className="text-sm font-medium text-gray-900">$85K - $120K</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Leadership Roles</span>
                            <span className="text-sm font-medium text-gray-900">$100K - $150K+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#3E6E50]">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Job Search?</h2>
            <p className="text-xl mb-8 opacity-90">
              Use these insights to improve your applications and land your dream job
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#3E6E50] py-3 px-8 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Update Profile
              </button>
              <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-[#3E6E50] transition-colors">
                Browse Jobs
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
