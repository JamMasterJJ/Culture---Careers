import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowRight, Briefcase, Clock, Settings, BookmarkIcon, FileText, MapPin, Calendar, Eye } from "lucide-react"
import Image from "next/image"

export default function JobSeekerDashboard() {
  // Mock data - in a real app, this would come from your database
  const userProfile = {
    name: "John Doe",
    email: "john.doe@email.com",
    profileCompletion: 75,
    location: "Los Angeles, CA",
    experience: "3-5 years",
    skills: ["Social Media", "Content Creation", "Brand Management"],
  }

  const applicationStats = {
    totalApplications: 12,
    pending: 8,
    reviewed: 3,
    interviews: 1,
    rejected: 0,
  }

  const applications = [
    {
      id: 1,
      title: "Social Media Manager",
      company: "Fenty Beauty",
      logo: "/placeholder-nrrng.png",
      status: "Interview Scheduled",
      appliedAt: "2 days ago",
      statusColor: "bg-green-100 text-green-800",
      nextStep: "Interview on Jan 25th",
    },
    {
      id: 2,
      title: "Content Creator",
      company: "Chamberlain Coffee",
      logo: "/placeholder-d2wnk.png",
      status: "Under Review",
      appliedAt: "5 days ago",
      statusColor: "bg-blue-100 text-blue-800",
      nextStep: "Waiting for response",
    },
    {
      id: 3,
      title: "Brand Partnerships Lead",
      company: "100 Thieves",
      logo: "/placeholder-3oq2j.png",
      status: "Application Sent",
      appliedAt: "1 week ago",
      statusColor: "bg-yellow-100 text-yellow-800",
      nextStep: "Application submitted",
    },
  ]

  const recommendedJobs = [
    {
      id: 1,
      title: "Community Manager",
      company: "Prime Hydration",
      logo: "/placeholder.svg?height=48&width=48",
      location: "Remote",
      type: "Full-time",
      matchScore: 95,
      postedDays: 2,
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      company: "Rare Beauty",
      logo: "/placeholder.svg?height=48&width=48",
      location: "Los Angeles, CA",
      type: "Full-time",
      matchScore: 88,
      postedDays: 4,
    },
    {
      id: 3,
      title: "Content Strategy Lead",
      company: "Glossier",
      logo: "/placeholder.svg?height=48&width=48",
      location: "New York, NY",
      type: "Full-time",
      matchScore: 82,
      postedDays: 6,
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
            <Link href="/dashboard/job-seeker" className="text-sm font-medium text-[#4D7C4D] hover:text-[#3A5A3A]">
              Dashboard
            </Link>
            <Link href="/jobs" className="text-sm font-medium text-gray-600 hover:text-gray-800">
              Browse Jobs
            </Link>
            <Link
              href="/dashboard/job-seeker/profile"
              className="text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Profile
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
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {userProfile.name}!</h1>
            <p className="text-gray-600">Here's what's happening with your job search</p>
          </div>

          {/* Profile Completion Card */}
          <Card className="mb-8 border-l-4 border-l-[#4D7C4D]">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Complete Your Profile</h3>
                  <p className="text-gray-600">Boost your visibility to employers</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#4D7C4D]">{userProfile.profileCompletion}%</div>
                  <div className="text-sm text-gray-500">Complete</div>
                </div>
              </div>
              <Progress value={userProfile.profileCompletion} className="mb-4" />
              <div className="flex gap-4">
                <Button size="sm" className="bg-[#4D7C4D] hover:bg-[#3A5A3A]" asChild>
                  <Link href="/dashboard/job-seeker/profile">Complete Profile</Link>
                </Button>
                <Button size="sm" variant="outline">
                  Upload Resume
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-[#4D7C4D] mr-2" />
                  <span className="text-2xl font-bold text-gray-900">{applicationStats.totalApplications}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Under Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Eye className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">{applicationStats.reviewed}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Interviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">{applicationStats.interviews}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Saved Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center">
                  <BookmarkIcon className="h-5 w-5 text-purple-600 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">7</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Applications */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Applications</h2>
                <Link
                  href="/dashboard/job-seeker/applications"
                  className="text-[#4D7C4D] hover:text-[#3A5A3A] text-sm font-medium flex items-center"
                >
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {applications.map((application) => (
                  <Card key={application.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src={application.logo || "/placeholder.svg"}
                            alt={application.company}
                            fill
                            className="object-contain rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900">{application.title}</h3>
                              <p className="text-gray-600">{application.company}</p>
                            </div>
                            <Badge className={application.statusColor}>{application.status}</Badge>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Clock className="mr-1 h-4 w-4" />
                            <span>Applied {application.appliedAt}</span>
                          </div>
                          <p className="text-sm text-gray-600">{application.nextStep}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Recommended Jobs */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recommended for You</h2>
                <Link
                  href="/jobs"
                  className="text-[#4D7C4D] hover:text-[#3A5A3A] text-sm font-medium flex items-center"
                >
                  View all <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {recommendedJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 relative flex-shrink-0">
                          <Image
                            src={job.logo || "/placeholder.svg"}
                            alt={job.company}
                            fill
                            className="object-contain rounded"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900">{job.title}</h3>
                              <p className="text-gray-600">{job.company}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-sm font-medium text-[#4D7C4D]">{job.matchScore}% match</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <div className="flex items-center">
                              <MapPin className="mr-1 h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="mr-1 h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-4 w-4" />
                              <span>{job.postedDays}d ago</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-[#4D7C4D] hover:bg-[#3A5A3A]">
                              Apply Now
                            </Button>
                            <Button size="sm" variant="outline">
                              Save Job
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
