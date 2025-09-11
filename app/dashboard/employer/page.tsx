import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  Plus,
  Users,
  Briefcase,
  Eye,
  Clock,
  Settings,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
} from "lucide-react"

export default function EmployerDashboard() {
  // Mock data - in a real app, this would come from your database
  const companyStats = {
    activeJobs: 5,
    totalApplications: 47,
    totalViews: 1250,
    interviewsScheduled: 8,
  }

  const activeJobs = [
    {
      id: 1,
      title: "Social Media Manager",
      applications: 12,
      views: 340,
      daysLeft: 25,
      status: "active",
      postedDays: 5,
    },
    {
      id: 2,
      title: "Content Creator",
      applications: 8,
      views: 280,
      daysLeft: 18,
      status: "active",
      postedDays: 12,
    },
    {
      id: 3,
      title: "Brand Partnerships Lead",
      applications: 15,
      views: 420,
      daysLeft: 30,
      status: "active",
      postedDays: 3,
    },
  ]

  const trendingTalent = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Social Media Strategist",
      experience: "4 years",
      skills: ["Instagram", "TikTok", "Content Strategy"],
      location: "Los Angeles, CA",
      matchScore: 95,
      followers: "125K",
      engagement: "8.5%",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      title: "Video Content Creator",
      experience: "3 years",
      skills: ["Video Editing", "YouTube", "Brand Partnerships"],
      location: "New York, NY",
      matchScore: 88,
      followers: "89K",
      engagement: "12.3%",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      title: "Community Manager",
      experience: "5 years",
      skills: ["Community Building", "Discord", "Events"],
      location: "Remote",
      matchScore: 82,
      followers: "67K",
      engagement: "15.2%",
    },
  ]

  const industryNews = [
    {
      id: 1,
      title: "Creator Economy Hiring Surges 45% in Q4 2024",
      source: "TechCrunch",
      time: "2 hours ago",
      type: "positive",
      summary: "Demand for creator economy roles reaches all-time high as brands invest in digital presence.",
    },
    {
      id: 2,
      title: "Meta Announces 15% Workforce Reduction in Creator Tools Division",
      source: "The Verge",
      time: "6 hours ago",
      type: "negative",
      summary: "Latest round of layoffs affects 2,000 employees in creator-focused departments.",
    },
    {
      id: 3,
      title: "TikTok Creator Fund Expands to Include Brand Partnership Roles",
      source: "Social Media Today",
      time: "1 day ago",
      type: "positive",
      summary: "New initiative creates 10,000+ jobs for content creators and brand managers.",
    },
    {
      id: 4,
      title: "Unemployment in Digital Marketing Drops to 2.1%",
      source: "Bureau of Labor Statistics",
      time: "2 days ago",
      type: "neutral",
      summary: "Creator economy continues to drive employment growth in marketing sector.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold tracking-wider">
              CULTURE AND CAREERS
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/dashboard/employer" className="text-sm font-medium text-[#4D7C4D] hover:text-[#3A5A3A]">
              Dashboard
            </Link>
            <Link href="/for-employers/post-job" className="text-sm font-medium text-gray-600 hover:text-gray-800">
              Post Job
            </Link>
            <Link href="/for-employers/talent-search" className="text-sm font-medium text-gray-600 hover:text-gray-800">
              Search Talent
            </Link>
            <Link href="/for-employers/reporting" className="text-sm font-medium text-gray-600 hover:text-gray-800">
              Reporting
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex border-gray-300 text-gray-700 hover:bg-gray-50">
              <Settings className="h-4 w-4 mr-2" /> Settings
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Employer Dashboard</h1>
              <p className="text-gray-600">Manage your hiring and track talent trends</p>
            </div>
            <Button className="bg-[#4D7C4D] hover:bg-[#3A5A3A] text-white" asChild>
              <Link href="/for-employers/post-job">
                <Plus className="h-4 w-4 mr-2" /> Post a New Job
              </Link>
            </Button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Active Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 text-[#4D7C4D] mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{companyStats.activeJobs}</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+2</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{companyStats.totalApplications}</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Job Views</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{companyStats.totalViews.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Interviews Scheduled</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-600 mr-2" />
                    <span className="text-2xl font-bold text-gray-900">{companyStats.interviewsScheduled}</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+3</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Active Jobs */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Active Job Listings</h2>
                <Link
                  href="/for-employers/reporting"
                  className="text-[#4D7C4D] hover:text-[#3A5A3A] text-sm font-medium flex items-center"
                >
                  View details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {activeJobs.map((job) => (
                  <Card key={job.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                            <span>{job.applications} applications</span>
                            <span>{job.views} views</span>
                            <span>{job.daysLeft} days left</span>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          View Applications
                        </Button>
                        <Button size="sm" variant="outline">
                          Edit Job
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Trending Talent */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Trending Talent</h2>
                <Link
                  href="/for-employers/talent-search"
                  className="text-[#4D7C4D] hover:text-[#3A5A3A] text-sm font-medium flex items-center"
                >
                  Search all <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {trendingTalent.map((talent) => (
                  <Card key={talent.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{talent.name}</h3>
                          <p className="text-gray-600">{talent.title}</p>
                          <p className="text-sm text-gray-500">
                            {talent.location} • {talent.experience}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-[#4D7C4D]">{talent.matchScore}% match</div>
                          <div className="text-xs text-gray-500">{talent.followers} followers</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {talent.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="bg-[#4D7C4D] hover:bg-[#3A5A3A]">
                          Message
                        </Button>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Industry News */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Industry News & Insights</h2>
              <Link
                href="/trending-ventures"
                className="text-[#4D7C4D] hover:text-[#3A5A3A] text-sm font-medium flex items-center"
              >
                View all news <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industryNews.map((news) => (
                <Card key={news.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {news.type === "positive" && <TrendingUp className="h-5 w-5 text-green-600" />}
                        {news.type === "negative" && <TrendingDown className="h-5 w-5 text-red-600" />}
                        {news.type === "neutral" && <AlertTriangle className="h-5 w-5 text-yellow-600" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{news.title}</h3>
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{news.summary}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{news.source}</span>
                          <span>{news.time}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
