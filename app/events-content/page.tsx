import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Video, Newspaper, Mic, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EventsContentPage() {
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Creator Economy Summit 2023",
      date: "November 15-16, 2023",
      location: "New York, NY",
      imageUrl: "/conference-event.png",
      category: "Conference",
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      date: "December 5, 2023",
      location: "Virtual",
      imageUrl: "/marketing-workshop.png",
      category: "Workshop",
    },
    {
      id: 3,
      title: "Networking Mixer: Brands & Creators",
      date: "November 28, 2023",
      location: "Los Angeles, CA",
      imageUrl: "/networking-event.png",
      category: "Networking",
    },
  ]

  // Sample content data
  const featuredContent = [
    {
      id: 1,
      title: "How Top Creators Are Building Sustainable Businesses",
      type: "Article",
      author: "Sarah Johnson",
      imageUrl: "/placeholder.svg?key=w6vyp",
      date: "October 28, 2023",
      icon: <Newspaper className="h-5 w-5" />,
    },
    {
      id: 2,
      title: "The Future of Brand Partnerships in the Creator Economy",
      type: "Video",
      author: "Mark Williams",
      imageUrl: "/placeholder.svg?key=d420a",
      date: "November 2, 2023",
      icon: <Video className="h-5 w-5" />,
    },
    {
      id: 3,
      title: "Career Transitions: From Corporate to Creator",
      type: "Podcast",
      author: "Alex Chen",
      imageUrl: "/placeholder.svg?key=l0192",
      date: "October 31, 2023",
      icon: <Mic className="h-5 w-5" />,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#FF5A5F]/10 to-[#00BCD4]/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Events & Content
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover industry events, workshops, and exclusive content to help you navigate the creator economy and
              build your career.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-[#FF5A5F]" />
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
              </div>
              <Link href="/events" className="text-[#00BCD4] hover:text-[#00ACC1] flex items-center">
                View all events <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="relative h-48">
                    <Image src={event.imageUrl || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-gray-700">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg text-gray-900 mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Calendar className="mr-2 h-4 w-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {event.location}
                    </div>
                    <Button className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white">Register Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 mr-2 text-[#FF5A5F]"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <h2 className="text-2xl font-bold text-gray-900">Featured Content</h2>
              </div>
              <Link href="/content" className="text-[#00BCD4] hover:text-[#00ACC1] flex items-center">
                View all content <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
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
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg text-gray-900 mb-2">{content.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>By {content.author}</span>
                      <span>{content.date}</span>
                    </div>
                    <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50">
                      Read More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#00BCD4]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Stay Updated</h2>
            <p className="text-white/80 mb-8">
              Get notified about upcoming events and new content directly in your inbox.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
                />
                <Button className="bg-[#FF5A5F] hover:bg-[#FF4146] text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
