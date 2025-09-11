import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowRight, Video, Newspaper, Mic } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContentPage() {
  // Sample content data
  const featuredContent = [
    {
      id: 1,
      title: "How Top Creators Are Building Sustainable Businesses",
      type: "Article",
      author: "Sarah Johnson",
      imageUrl: "/placeholder.svg?key=vvfgi",
      date: "October 28, 2023",
      icon: <Newspaper className="h-5 w-5" />,
      category: "Business",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "The Future of Brand Partnerships in the Creator Economy",
      type: "Video",
      author: "Mark Williams",
      imageUrl: "/placeholder.svg?key=up0v2",
      date: "November 2, 2023",
      icon: <Video className="h-5 w-5" />,
      category: "Marketing",
      duration: "24:15",
    },
    {
      id: 3,
      title: "Career Transitions: From Corporate to Creator",
      type: "Podcast",
      author: "Alex Chen",
      imageUrl: "/placeholder.svg?key=dkh82",
      date: "October 31, 2023",
      icon: <Mic className="h-5 w-5" />,
      category: "Careers",
      duration: "45:22",
    },
  ]

  // Video content
  const videoContent = [
    {
      id: 1,
      title: "Interview: How I Built a 7-Figure Creator Business",
      type: "Video",
      author: "Ryan Johnson",
      imageUrl: "/placeholder.svg?key=md1aa",
      date: "October 25, 2023",
      icon: <Video className="h-5 w-5" />,
      duration: "32:15",
      category: "Business",
    },
    {
      id: 2,
      title: "Creator Economy Trends for 2024",
      type: "Video",
      author: "Michelle Park",
      imageUrl: "/placeholder.svg?key=fm33c",
      date: "October 20, 2023",
      icon: <Video className="h-5 w-5" />,
      duration: "18:42",
      category: "Industry",
    },
    {
      id: 3,
      title: "How to Negotiate Brand Deals as a Creator",
      type: "Video",
      author: "James Wilson",
      imageUrl: "/placeholder.svg?height=300&width=400&query=brand%20deal%20negotiation",
      date: "October 15, 2023",
      icon: <Video className="h-5 w-5" />,
      duration: "24:30",
      category: "Marketing",
    },
    {
      id: 4,
      title: "Building Your Personal Brand on Social Media",
      type: "Video",
      author: "Emma Rodriguez",
      imageUrl: "/placeholder.svg?height=300&width=400&query=personal%20branding",
      date: "October 10, 2023",
      icon: <Video className="h-5 w-5" />,
      duration: "27:18",
      category: "Marketing",
    },
  ]

  // Article content
  const articleContent = [
    {
      id: 1,
      title: "5 Ways to Monetize Your Personal Brand in 2024",
      type: "Article",
      author: "Jessica Lee",
      imageUrl: "/placeholder.svg?height=300&width=400&query=monetize%20personal%20brand",
      date: "November 5, 2023",
      icon: <Newspaper className="h-5 w-5" />,
      category: "Business",
      readTime: "6 min read",
    },
    {
      id: 2,
      title: "Building a Community Around Your Content",
      type: "Article",
      author: "David Miller",
      imageUrl: "/placeholder.svg?height=300&width=400&query=community%20building",
      date: "November 3, 2023",
      icon: <Newspaper className="h-5 w-5" />,
      category: "Community",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "The Psychology of Viral Content",
      type: "Article",
      author: "Emma Wilson",
      imageUrl: "/placeholder.svg?height=300&width=400&query=viral%20content",
      date: "November 1, 2023",
      icon: <Newspaper className="h-5 w-5" />,
      category: "Content Strategy",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "How to Choose the Right Platform for Your Content",
      type: "Article",
      author: "Michael Brown",
      imageUrl: "/placeholder.svg?height=300&width=400&query=content%20platforms",
      date: "October 29, 2023",
      icon: <Newspaper className="h-5 w-5" />,
      category: "Strategy",
      readTime: "4 min read",
    },
  ]

  // Podcast content
  const podcastContent = [
    {
      id: 1,
      title: "The Creator Economy: Present and Future",
      type: "Podcast",
      author: "Sarah Johnson & Mark Williams",
      imageUrl: "/placeholder.svg?height=300&width=300&query=creator%20economy%20podcast",
      date: "November 7, 2023",
      icon: <Mic className="h-5 w-5" />,
      duration: "52:38",
      category: "Industry",
    },
    {
      id: 2,
      title: "From Side Hustle to Full-Time Creator",
      type: "Podcast",
      author: "Alex Chen",
      imageUrl: "/placeholder.svg?height=300&width=300&query=side%20hustle%20podcast",
      date: "November 1, 2023",
      icon: <Mic className="h-5 w-5" />,
      duration: "48:15",
      category: "Careers",
    },
    {
      id: 3,
      title: "Navigating Algorithm Changes as a Creator",
      type: "Podcast",
      author: "Emma Rodriguez & David Miller",
      imageUrl: "/placeholder.svg?height=300&width=300&query=algorithm%20podcast",
      date: "October 25, 2023",
      icon: <Mic className="h-5 w-5" />,
      duration: "39:42",
      category: "Strategy",
    },
    {
      id: 4,
      title: "Mental Health in the Creator Economy",
      type: "Podcast",
      author: "Dr. Jennifer Smith",
      imageUrl: "/placeholder.svg?height=300&width=300&query=mental%20health%20podcast",
      date: "October 18, 2023",
      icon: <Mic className="h-5 w-5" />,
      duration: "55:10",
      category: "Wellness",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#4D7C4D]/10 to-[#4D7C4D]/5">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Creator Economy Insights
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover articles, videos, podcasts, and more to help you navigate the creator economy and build your
              career.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Content</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredContent.map((content) => (
                <div
                  key={content.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={content.imageUrl || "/placeholder.svg"}
                      alt={content.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
                        {content.icon}
                        <span className="ml-1">{content.type}</span>
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-[#4D7C4D] px-2.5 py-1 text-xs font-medium text-white">
                        {content.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg text-gray-900 mb-2">{content.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>By {content.author}</span>
                      <span>{content.readTime || content.duration}</span>
                    </div>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                      {content.type === "Video" ? "Watch Now" : content.type === "Podcast" ? "Listen Now" : "Read More"}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Content Section with Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Browse All Content</h2>

            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="videos">Videos</TabsTrigger>
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {[...videoContent, ...articleContent, ...podcastContent]
                    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                    .slice(0, 6)
                    .map((content) => (
                      <div
                        key={content.id}
                        className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                      >
                        <div className="relative h-48">
                          <Image
                            src={content.imageUrl || "/placeholder.svg"}
                            alt={content.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
                              {content.icon}
                              <span className="ml-1">{content.type}</span>
                            </span>
                          </div>
                          <div className="absolute top-4 right-4">
                            <span className="inline-flex items-center rounded-full bg-[#4D7C4D] px-2.5 py-1 text-xs font-medium text-white">
                              {content.category}
                            </span>
                          </div>
                          {content.type === "Video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="rounded-full bg-white/80 p-3 shadow-lg">
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
                                  className="h-6 w-6 text-[#4D7C4D]"
                                >
                                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <h3 className="font-medium text-lg text-gray-900 mb-2">{content.title}</h3>
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                            <span>By {content.author}</span>
                            <span>{content.readTime || content.duration}</span>
                          </div>
                          <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                            {content.type === "Video"
                              ? "Watch Now"
                              : content.type === "Podcast"
                                ? "Listen Now"
                                : "Read More"}
                          </Button>
                        </div>
                      </div>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="videos" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {videoContent.map((content) => (
                    <div
                      key={content.id}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="relative h-48">
                        <Image
                          src={content.imageUrl || "/placeholder.svg"}
                          alt={content.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
                            {content.icon}
                            <span className="ml-1">{content.type}</span>
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center rounded-full bg-[#4D7C4D] px-2.5 py-1 text-xs font-medium text-white">
                            {content.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-full bg-white/80 p-3 shadow-lg">
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
                              className="h-6 w-6 text-[#4D7C4D]"
                            >
                              <polygon points="5 3 19 12 5 21 5 3"></polygon>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-medium text-lg text-gray-900 mb-2">{content.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span>By {content.author}</span>
                          <span>{content.duration}</span>
                        </div>
                        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                          Watch Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/content/videos"
                    className="text-[#4D7C4D] hover:text-[#3A5A3A] flex items-center justify-center"
                  >
                    View all videos <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="articles" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {articleContent.map((content) => (
                    <div
                      key={content.id}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="relative h-48">
                        <Image
                          src={content.imageUrl || "/placeholder.svg"}
                          alt={content.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
                            {content.icon}
                            <span className="ml-1">{content.type}</span>
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center rounded-full bg-[#4D7C4D] px-2.5 py-1 text-xs font-medium text-white">
                            {content.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-medium text-lg text-gray-900 mb-2">{content.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span>By {content.author}</span>
                          <span>{content.readTime}</span>
                        </div>
                        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                          Read More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/content/articles"
                    className="text-[#4D7C4D] hover:text-[#3A5A3A] flex items-center justify-center"
                  >
                    View all articles <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="podcasts" className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {podcastContent.map((content) => (
                    <div
                      key={content.id}
                      className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                    >
                      <div className="relative h-48">
                        <Image
                          src={content.imageUrl || "/placeholder.svg"}
                          alt={content.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 text-xs font-medium text-gray-700">
                            {content.icon}
                            <span className="ml-1">{content.type}</span>
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center rounded-full bg-[#4D7C4D] px-2.5 py-1 text-xs font-medium text-white">
                            {content.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-medium text-lg text-gray-900 mb-2">{content.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <span>By {content.author}</span>
                          <span>{content.duration}</span>
                        </div>
                        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                          Listen Now
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link
                    href="/content/podcasts"
                    className="text-[#4D7C4D] hover:text-[#3A5A3A] flex items-center justify-center"
                  >
                    View all podcasts <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter to receive the latest content, events, and opportunities in the creator
              economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D7C4D]"
              />
              <Button className="bg-[#4D7C4D] hover:bg-[#3A5A3A] text-white">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
