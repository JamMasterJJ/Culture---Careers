import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Video, ExternalLink, Clock } from "lucide-react"
import Image from "next/image"

export default function EventsPage() {
  // Sample upcoming conferences data
  const upcomingConferences = [
    {
      id: 1,
      title: "Creator Economy Summit 2023",
      date: "November 15-16, 2023",
      time: "9:00 AM - 5:00 PM PST",
      location: "New York, NY",
      platform: "In Person",
      imageUrl: "/conference-event.png",
      organizer: "Creator Economy Ventures",
      organizerLogo: "/placeholder.svg?key=ega7r",
      description:
        "Join top creators, brands, and platforms to explore the future of the creator economy. Network with industry leaders and discover new opportunities in this rapidly evolving space.",
      ticketUrl: "https://creatoreconomysummit.com",
      featured: true,
    },
    {
      id: 2,
      title: "VidCon 2023",
      date: "December 5-8, 2023",
      time: "10:00 AM - 6:00 PM PST",
      location: "Los Angeles, CA",
      platform: "In Person",
      imageUrl: "/placeholder.svg?key=2vvi1",
      organizer: "VidCon",
      organizerLogo: "/placeholder.svg?key=s7v17",
      description:
        "The world's largest celebration of digital creators and their communities. Meet your favorite creators, learn from industry experts, and connect with brands looking to partner with talent.",
      ticketUrl: "https://vidcon.com",
      featured: true,
    },
    {
      id: 3,
      title: "Creator World Online Conference",
      date: "January 20-21, 2024",
      time: "8:00 AM - 4:00 PM EST",
      location: "Virtual",
      platform: "Zoom",
      imageUrl: "/placeholder.svg?key=5nv8f",
      organizer: "Creator World",
      organizerLogo: "/placeholder.svg?key=glo1g",
      description:
        "A virtual conference dedicated to helping creators monetize their content, build sustainable businesses, and connect with brands. Perfect for creators at any stage of their journey.",
      ticketUrl: "https://creatorworldconference.com",
      featured: false,
    },
    {
      id: 4,
      title: "Podcast Movement 2024",
      date: "February 15-17, 2024",
      time: "9:00 AM - 7:00 PM CST",
      location: "Dallas, TX",
      platform: "In Person",
      imageUrl: "/placeholder.svg?height=600&width=800&query=Podcast+Movement+Conference",
      organizer: "Podcast Movement",
      organizerLogo: "/placeholder.svg?height=40&width=40&query=Podcast+Movement+Logo",
      description:
        "The world's largest gathering of podcasters and industry professionals. Learn from the best in the business, discover new technologies, and network with potential sponsors and collaborators.",
      ticketUrl: "https://podcastmovement.com",
      featured: false,
    },
    {
      id: 5,
      title: "TikTok Creator Conference",
      date: "March 10-12, 2024",
      time: "10:00 AM - 5:00 PM EST",
      location: "Miami, FL",
      platform: "In Person",
      imageUrl: "/placeholder.svg?height=600&width=800&query=TikTok+Creator+Conference",
      organizer: "TikTok",
      organizerLogo: "/placeholder.svg?height=40&width=40&query=TikTok+Logo",
      description:
        "An exclusive conference for TikTok creators to learn platform strategies, connect with brands, and network with other successful creators. Special workshops on monetization and audience growth.",
      ticketUrl: "https://tiktokconference.com",
      featured: false,
    },
    {
      id: 6,
      title: "Creator Economy Expo",
      date: "April 5-7, 2024",
      time: "9:00 AM - 6:00 PM PDT",
      location: "San Francisco, CA",
      platform: "In Person",
      imageUrl: "/placeholder.svg?height=600&width=800&query=Creator+Economy+Expo",
      organizer: "Creator Economy Association",
      organizerLogo: "/placeholder.svg?height=40&width=40&query=Creator+Economy+Association+Logo",
      description:
        "The largest expo dedicated to the creator economy. Discover new tools, platforms, and services to help grow your creator business. Connect with brands looking for partnerships and sponsorships.",
      ticketUrl: "https://creatoreconomyexpo.com",
      featured: false,
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc]">
      <main className="flex-1">
        {/* Featured Events Section */}
        <section className="py-12">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Creator Events</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {upcomingConferences
                .filter((conf) => conf.featured)
                .map((conference) => (
                  <div
                    key={conference.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 relative h-48 md:h-auto">
                        <Image
                          src={conference.imageUrl || "/placeholder.svg"}
                          alt={conference.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-8 h-8 relative mr-2">
                            <Image
                              src={conference.organizerLogo || "/placeholder.svg"}
                              alt={`${conference.organizer} logo`}
                              fill
                              className="object-contain rounded-full"
                            />
                          </div>
                          <span className="text-sm text-gray-600">{conference.organizer}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-3">{conference.title}</h2>

                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Calendar className="mr-2 h-4 w-4" />
                          {conference.date}
                        </div>

                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Clock className="mr-2 h-4 w-4" />
                          {conference.time}
                        </div>

                        <div className="flex items-center text-sm text-gray-600 mb-4">
                          {conference.platform === "Virtual" ? (
                            <Video className="mr-2 h-4 w-4" />
                          ) : (
                            <MapPin className="mr-2 h-4 w-4" />
                          )}
                          {conference.location}
                        </div>

                        <a
                          href={conference.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-[#4D7C4D] text-white rounded-md hover:bg-[#3A5A3A] transition-colors"
                        >
                          Get Tickets
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* All Conferences Section */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Creator Events</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingConferences
                .filter((conf) => !conf.featured)
                .map((conference) => (
                  <div
                    key={conference.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="relative h-48">
                      <Image
                        src={conference.imageUrl || "/placeholder.svg"}
                        alt={conference.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="w-6 h-6 relative mr-2">
                          <Image
                            src={conference.organizerLogo || "/placeholder.svg"}
                            alt={`${conference.organizer} logo`}
                            fill
                            className="object-contain rounded-full"
                          />
                        </div>
                        <span className="text-xs text-gray-600">{conference.organizer}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2">{conference.title}</h3>

                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        {conference.date}
                      </div>

                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Clock className="mr-2 h-4 w-4" />
                        {conference.time}
                      </div>

                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        {conference.platform === "Virtual" ? (
                          <Video className="mr-2 h-4 w-4" />
                        ) : (
                          <MapPin className="mr-2 h-4 w-4" />
                        )}
                        {conference.location}
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{conference.description}</p>

                      <a
                        href={conference.ticketUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-[#4D7C4D] text-white rounded-md hover:bg-[#3A5A3A] transition-colors"
                      >
                        Get Tickets
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Submit Event Section */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hosting a Creator Event?</h2>
                <p className="text-gray-600 mb-6">
                  Submit your event to be featured on our platform and reach thousands of creators and industry
                  professionals.
                </p>
                <Button className="bg-[#4D7C4D] hover:bg-[#3A5A3A] text-white">Submit Your Event</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
