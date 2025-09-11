import { Footer } from "@/components/layout/footer"
import { Calendar, MapPin, Video, ExternalLink, Clock, Users, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface EventPageProps {
  params: {
    id: string
  }
}

export default function EventPage({ params }: EventPageProps) {
  // In a real app, you would fetch this data from an API or database
  const event = {
    id: Number.parseInt(params.id),
    title: "Creator Economy Summit 2023",
    date: "November 15-16, 2023",
    time: "9:00 AM - 5:00 PM PST",
    location: "Javits Center, New York, NY",
    platform: "In Person",
    imageUrl: "/conference-event.png",
    organizer: "Creator Economy Ventures",
    organizerLogo: "/placeholder.svg?key=fwcdx",
    description:
      "Join top creators, brands, and platforms to explore the future of the creator economy. Network with industry leaders and discover new opportunities in this rapidly evolving space. The Creator Economy Summit brings together the brightest minds in the industry for two days of insightful panels, workshops, and networking opportunities.",
    longDescription:
      "The Creator Economy Summit is the premier event for creators, brands, and platforms looking to navigate the rapidly evolving creator landscape. Over two days, attendees will have access to keynote speeches from industry leaders, panel discussions on emerging trends, hands-on workshops, and exclusive networking opportunities.\n\nDay 1 focuses on creator strategies, monetization models, and platform insights. Day 2 dives into brand partnerships, audience building, and future trends. Whether you're an established creator, a brand looking to connect with talent, or a platform serving the creator ecosystem, this summit offers valuable insights and connections to help you thrive in the creator economy.",
    ticketUrl: "https://creatoreconomysummit.com",
    featured: true,
    attendees: 1500,
    speakers: [
      {
        name: "Emma Johnson",
        role: "CEO, Creator Platform",
        imageUrl: "/placeholder.svg?height=100&width=100&query=Professional+Woman+Headshot",
      },
      {
        name: "Michael Chen",
        role: "Top YouTube Creator",
        imageUrl: "/placeholder.svg?height=100&width=100&query=Asian+Man+Professional+Headshot",
      },
      {
        name: "Sophia Williams",
        role: "Head of Creator Partnerships, Major Brand",
        imageUrl: "/placeholder.svg?height=100&width=100&query=Black+Woman+Executive+Headshot",
      },
    ],
    tags: ["Creator Economy", "Digital Media", "Networking", "Professional Development"],
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-80 md:h-96 lg:h-[500px]">
          <Image
            src={event.imageUrl || "/placeholder.svg?height=500&width=1200&query=Conference+Event"}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
            <div className="container px-4 md:px-6 max-w-6xl mx-auto pb-12">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-3 bg-white rounded-full p-1">
                  <Image
                    src={event.organizerLogo || "/placeholder.svg"}
                    alt={`${event.organizer} logo`}
                    fill
                    className="object-contain rounded-full"
                  />
                </div>
                <span className="text-white text-lg">{event.organizer}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-4 text-white">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  {event.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  {event.time}
                </div>
                <div className="flex items-center">
                  {event.platform === "Virtual" ? (
                    <Video className="mr-2 h-5 w-5" />
                  ) : (
                    <MapPin className="mr-2 h-5 w-5" />
                  )}
                  {event.location}
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 h-5 w-5" />
                  {event.attendees} Expected Attendees
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-12">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
                  <p className="text-gray-700 mb-6">{event.description}</p>
                  <p className="text-gray-700 whitespace-pre-line">{event.longDescription}</p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 relative mb-3">
                          <Image
                            src={speaker.imageUrl || "/placeholder.svg"}
                            alt={speaker.name}
                            fill
                            className="object-cover rounded-full"
                          />
                        </div>
                        <h3 className="font-bold text-gray-900">{speaker.name}</h3>
                        <p className="text-sm text-gray-600">{speaker.role}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Event Details</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <Calendar className="mr-3 h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Date</p>
                        <p className="text-gray-600">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mr-3 h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Time</p>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      {event.platform === "Virtual" ? (
                        <Video className="mr-3 h-5 w-5 text-gray-500 mt-0.5" />
                      ) : (
                        <MapPin className="mr-3 h-5 w-5 text-gray-500 mt-0.5" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">Location</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="mr-3 h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Attendees</p>
                        <p className="text-gray-600">{event.attendees} Expected</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Tag className="mr-3 h-5 w-5 text-gray-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">Categories</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {event.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href={event.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#4D7C4D] text-white rounded-md hover:bg-[#3A5A3A] transition-colors font-medium"
                  >
                    Get Tickets
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <button className="inline-flex items-center justify-center w-full px-4 py-3 bg-white text-[#4D7C4D] border border-[#4D7C4D] rounded-md hover:bg-gray-50 transition-colors font-medium mt-3">
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Events */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Similar Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Link href={`/events/${i}`} key={i}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                    <div className="relative h-48">
                      <Image
                        src={`/placeholder.svg?height=400&width=600&query=Conference+Event+${i}`}
                        alt={`Similar event ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Creator Workshop {i}</h3>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        December {i + 10}, 2023
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="mr-2 h-4 w-4" />
                        {["Chicago, IL", "Boston, MA", "Austin, TX"][i - 1]}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
