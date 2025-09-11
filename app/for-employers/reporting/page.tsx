"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown, Eye, MapPin, BarChart3, Download, Users, Target, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SignupPopup } from "@/components/auth/signup-popup"

export default function EmployerReportingPage() {
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

  // Mock analytics data
  const overviewStats = [
    {
      title: "Total Job Views",
      value: "12,847",
      change: "+23%",
      trend: "up",
      icon: Eye,
      description: "vs. last month",
    },
    {
      title: "Applications Received",
      value: "342",
      change: "+18%",
      trend: "up",
      icon: Users,
      description: "vs. last month",
    },
    {
      title: "Application Rate",
      value: "2.7%",
      change: "-0.3%",
      trend: "down",
      icon: Target,
      description: "vs. last month",
    },
    {
      title: "Time to Fill",
      value: "18 days",
      change: "-2 days",
      trend: "up",
      icon: Clock,
      description: "vs. last month",
    },
  ]

  const jobPerformance = [
    {
      title: "Social Media Manager",
      company: "Fenty Beauty",
      views: 2847,
      applications: 89,
      rate: "3.1%",
      status: "Active",
      posted: "5 days ago",
    },
    {
      title: "Brand Partnerships Lead",
      company: "Chamberlain Coffee",
      views: 1923,
      applications: 67,
      rate: "3.5%",
      status: "Active",
      posted: "12 days ago",
    },
    {
      title: "Content Producer",
      company: "100 Thieves",
      views: 3421,
      applications: 124,
      rate: "3.6%",
      status: "Filled",
      posted: "18 days ago",
    },
  ]

  const topLocations = [
    { city: "Los Angeles, CA", percentage: 28, applications: 96 },
    { city: "New York, NY", percentage: 22, applications: 75 },
    { city: "Miami, FL", percentage: 15, applications: 51 },
    { city: "Austin, TX", percentage: 12, applications: 41 },
    { city: "San Francisco, CA", percentage: 10, applications: 34 },
  ]

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-forest-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-forest-50 to-white">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-forest-600 to-forest-700">
            <div className="container mx-auto px-4">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Hiring Analytics Dashboard</h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Get powerful insights to optimize your recruitment strategy
                </p>
              </div>
            </div>
          </section>

          {/* Authentication Required Message */}
          <section className="py-16 bg-gray-50 flex-1 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign In to View Analytics</h2>
                  <p className="text-gray-600 mb-8">
                    Access comprehensive hiring analytics, job performance metrics, and candidate insights to optimize
                    your recruitment process.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Eye className="h-6 w-6 text-blue-600" />
                      </div>
                      <p className="text-sm text-gray-600">Job Performance</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Users className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm text-gray-600">Candidate Analytics</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="h-6 w-6 text-purple-600" />
                      </div>
                      <p className="text-sm text-gray-600">Market Insights</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowSignupPopup(true)}
                    className="bg-forest-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-forest-700 transition-colors"
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
          title="Sign in to view hiring analytics"
        />
      </>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-forest-50 to-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-forest-600 to-forest-700">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hiring Analytics Dashboard</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Get powerful insights to optimize your recruitment strategy
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Tab Navigation */}
              <div className="border-b border-forest-200 bg-forest-50">
                <div className="flex items-center justify-between p-6">
                  <h3 className="text-xl font-semibold text-forest-900">Hiring Analytics Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant={activeTab === "overview" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("overview")}
                      className={activeTab === "overview" ? "bg-forest-600 text-white" : "text-forest-600"}
                    >
                      Overview
                    </Button>
                    <Button
                      variant={activeTab === "performance" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("performance")}
                      className={activeTab === "performance" ? "bg-forest-600 text-white" : "text-forest-600"}
                    >
                      Job Performance
                    </Button>
                    <Button
                      variant={activeTab === "insights" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveTab("insights")}
                      className={activeTab === "insights" ? "bg-forest-600 text-white" : "text-forest-600"}
                    >
                      Market Insights
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    {/* Overview Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {overviewStats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                          <Card key={index} className="border-forest-200">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                                  <div className="flex items-center mt-2">
                                    {stat.trend === "up" ? (
                                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                                    ) : (
                                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                                    )}
                                    <span
                                      className={`text-sm font-medium ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}
                                    >
                                      {stat.change}
                                    </span>
                                    <span className="text-sm text-gray-500 ml-1">{stat.description}</span>
                                  </div>
                                </div>
                                <div className="p-3 bg-forest-100 rounded-lg">
                                  <Icon className="h-6 w-6 text-forest-600" />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                    </div>

                    {/* Top Locations */}
                    <Card className="border-forest-200">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          Top Applicant Locations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {topLocations.map((location, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <div className="flex-1">
                                <p className="font-medium text-gray-900">{location.city}</p>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                  <div
                                    className="bg-forest-600 h-2 rounded-full"
                                    style={{ width: `${location.percentage}%` }}
                                  ></div>
                                </div>
                              </div>
                              <div className="ml-4 text-right">
                                <p className="font-medium text-gray-900">{location.applications}</p>
                                <p className="text-sm text-gray-500">{location.percentage}%</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeTab === "performance" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="text-lg font-semibold text-forest-900">Active Job Postings</h4>
                      <Button variant="outline" size="sm" className="border-forest-300 bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Export Report
                      </Button>
                    </div>
                    {jobPerformance.map((job, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border border-forest-200 rounded-lg hover:bg-forest-50"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-medium text-gray-900">{job.title}</h3>
                            <Badge variant={job.status === "Active" ? "default" : "secondary"}>{job.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600">
                            {job.company} • {job.posted}
                          </p>
                        </div>

                        <div className="flex items-center gap-8 text-sm">
                          <div className="text-center">
                            <p className="font-medium text-gray-900">{job.views.toLocaleString()}</p>
                            <p className="text-gray-500">Views</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-gray-900">{job.applications}</p>
                            <p className="text-gray-500">Applications</p>
                          </div>
                          <div className="text-center">
                            <p className="font-medium text-forest-600">{job.rate}</p>
                            <p className="text-gray-500">Rate</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "insights" && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border-forest-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Market Trends</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Social Media Marketing</span>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-green-600">+15%</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Content Creation</span>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-green-600">+23%</span>
                              </div>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Brand Partnerships</span>
                              <div className="flex items-center gap-2">
                                <TrendingUp className="h-4 w-4 text-green-500" />
                                <span className="text-sm font-medium text-green-600">+8%</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="border-forest-200">
                        <CardHeader>
                          <CardTitle className="text-lg">Salary Benchmarks</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Social Media Manager</span>
                              <span className="text-sm font-medium">$65,000</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Content Producer</span>
                              <span className="text-sm font-medium">$58,000</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Brand Partnerships Lead</span>
                              <span className="text-sm font-medium">$78,000</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="border-forest-200 bg-gradient-to-r from-forest-600 to-forest-700 text-white">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <BarChart3 className="h-6 w-6" />
                          <h4 className="text-lg font-semibold">Performance Tip</h4>
                        </div>
                        <p className="text-forest-100">
                          Jobs with salary ranges get 30% more applications than those without. Consider adding
                          competitive salary information to boost your application rates.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Hiring?</h2>
            <p className="text-xl mb-8 opacity-90">
              Use these insights to improve your job postings and attract top talent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-forest-600 py-3 px-8 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Post a Job
              </button>
              <button className="border-2 border-white text-white py-3 px-8 rounded-lg font-medium hover:bg-white hover:text-forest-600 transition-colors">
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
