import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

export default function TalentEventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1 py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl font-bold mb-6">Events for Talent</h1>
            <p className="text-lg text-gray-600">
              Connect with top brands, learn from industry experts, and network with fellow professionals at our
              exclusive events for talent in the creator economy.
            </p>
          </div>

          {/* Featured Event */}
          <div className="bg-gradient-to-r from-[#3E6E50] to-[#2E5E40] rounded-lg overflow-hidden mb-16">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/creator-economy-conference.png"
                  alt="Virtual Creator Economy Job Fair"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 text-white">
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  FEATURED EVENT
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Virtual Creator Economy Job Fair</h2>
                <p className="mb-6">
                  Connect with leading creator-backed brands actively hiring for various roles. Attend virtual booths,
                  participate in on-the-spot interviews, and network with industry professionals.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>June 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-3" />
                    <span>10:00 AM - 4:00 PM PT</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>Virtual Event (Zoom)</span>
                  </div>
                </div>
                <Button className="bg-white text-[#3E6E50] hover:bg-gray-100">Register Now</Button>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image src="/networking-event.png" alt="Networking Mixer" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#3E6E50] text-white text-xs font-bold px-2 py-1 rounded">
                    IN-PERSON
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Creator Economy Networking Mixer</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>July 8, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>6:30 PM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Los Angeles, CA</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Limited to 50 attendees</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#3E6E50] hover:bg-[#2E5E40]">Register</Button>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image src="/resume-workshop.png" alt="Resume Workshop" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#008080] text-white text-xs font-bold px-2 py-1 rounded">
                    VIRTUAL
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Resume & Portfolio Workshop</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>July 15, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>1:00 PM - 3:00 PM PT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Zoom Webinar</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Unlimited attendees</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#3E6E50] hover:bg-[#2E5E40]">Register</Button>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all">
                <div className="relative h-48">
                  <Image src="/panel-discussion.png" alt="Industry Panel" fill className="object-cover" />
                  <div className="absolute top-4 left-4 bg-[#008080] text-white text-xs font-bold px-2 py-1 rounded">
                    VIRTUAL
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Breaking Into Creator-Backed Brands Panel
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>July 22, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>5:00 PM - 6:30 PM PT</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>YouTube Live</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      <span>Unlimited attendees</span>
                    </div>
                  </div>
                  <Button className="w-full bg-[#3E6E50] hover:bg-[#2E5E40]">Set Reminder</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Past Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all opacity-75">
                <div className="relative h-48">
                  <Image
                    src="/placeholder-x9425.png"
                    alt="Career Fair"
                    fill
                    className="object-cover filter grayscale"
                  />
                  <div className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    PAST EVENT
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Spring Creator Economy Career Fair</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>May 15, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Virtual Event</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Recording
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all opacity-75">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=192&width=384&query=interview workshop"
                    alt="Interview Workshop"
                    fill
                    className="object-cover filter grayscale"
                  />
                  <div className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    PAST EVENT
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">Interview Skills Workshop</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>April 28, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Zoom Webinar</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Resources
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-all opacity-75">
                <div className="relative h-48">
                  <Image
                    src="/networking-event.png"
                    alt="Networking Event"
                    fill
                    className="object-cover filter grayscale"
                  />
                  <div className="absolute top-4 left-4 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    PAST EVENT
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">NYC Creator Economy Mixer</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>April 10, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>New York, NY</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    View Photos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
