"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, User, X, Pause } from "lucide-react"

interface Podcast {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  host: string
  category: string
  episode: number
  publishedAt: string
  audioUrl?: string
}

const podcasts: Podcast[] = [
  {
    id: "1",
    title: "The Creator Mindset: Building Sustainable Content Businesses",
    description:
      "Join us as we dive deep into the psychology and strategies behind successful content creation. Our guest shares insights on maintaining creativity while scaling a business.",
    thumbnail: "/placeholder.svg?height=200&width=200&text=Creator+Mindset",
    duration: "45:23",
    host: "Alex Rivera",
    category: "Business",
    episode: 127,
    publishedAt: "2 days ago",
  },
  {
    id: "2",
    title: "From Hobby to Full-Time: Making the Creator Economy Leap",
    description:
      "A candid conversation about transitioning from part-time content creation to building a full-time career in the creator economy.",
    thumbnail: "/placeholder.svg?height=200&width=200&text=Creator+Leap",
    duration: "38:15",
    host: "Maria Santos",
    category: "Career",
    episode: 89,
    publishedAt: "5 days ago",
  },
  {
    id: "3",
    title: "Platform Diversification: Why Creators Need Multiple Revenue Streams",
    description:
      "Exploring the importance of not putting all your eggs in one basket and how to effectively manage content across multiple platforms.",
    thumbnail: "/placeholder.svg?height=200&width=200&text=Platform+Diversification",
    duration: "52:41",
    host: "Jordan Lee",
    category: "Strategy",
    episode: 203,
    publishedAt: "1 week ago",
  },
  {
    id: "4",
    title: "The Psychology of Viral Content: What Makes Content Shareable",
    description:
      "A deep dive into the psychological triggers that make content go viral and how creators can ethically leverage these insights.",
    thumbnail: "/placeholder.svg?height=200&width=200&text=Viral+Content",
    duration: "41:18",
    host: "Dr. Sarah Kim",
    category: "Psychology",
    episode: 156,
    publishedAt: "3 days ago",
  },
  {
    id: "5",
    title: "Brand Partnerships Done Right: Maintaining Authenticity",
    description:
      "How to navigate brand partnerships while staying true to your audience and maintaining the trust you've built with your community.",
    thumbnail: "/placeholder.svg?height=200&width=200&text=Brand+Partnerships",
    duration: "36:29",
    host: "Chris Taylor",
    category: "Partnerships",
    episode: 178,
    publishedAt: "4 days ago",
  },
  {
    id: "6",
    title: "The Future of Creator Tools: AI and Automation",
    description:
      "Exploring how artificial intelligence and automation tools are changing the creator landscape and what it means for content creators.",
    thumbnail: "/placeholder.svg?height=200&width=200&text=Creator+AI+Tools",
    duration: "49:55",
    host: "Tech Talk with Sam",
    category: "Technology",
    episode: 92,
    publishedAt: "6 days ago",
  },
]

export default function PodcastsPage() {
  const [selectedPodcast, setSelectedPodcast] = useState<Podcast | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const openPodcastModal = (podcast: Podcast) => {
    setSelectedPodcast(podcast)
    setIsPlaying(false)
  }

  const closePodcastModal = () => {
    setSelectedPodcast(null)
    setIsPlaying(false)
  }

  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-50 to-forest-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Creator Podcasts</h1>
          <p className="text-lg text-forest-700 max-w-2xl">
            Listen to in-depth conversations with successful creators, industry experts, and thought leaders sharing
            their insights and experiences.
          </p>
        </div>
      </div>

      {/* Podcasts Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {podcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={podcast.thumbnail || "/placeholder.svg"}
                  alt={podcast.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button
                    onClick={() => openPodcastModal(podcast)}
                    className="bg-white text-forest-900 hover:bg-forest-50"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Listen Now
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {podcast.duration}
                </div>
                <div className="absolute top-2 left-2 bg-forest-700 text-white px-2 py-1 rounded text-sm">
                  Episode {podcast.episode}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-forest-100 text-forest-800">
                    {podcast.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{podcast.publishedAt}</span>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{podcast.title}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{podcast.description}</p>

                <div className="flex items-center text-sm text-gray-500">
                  <User className="w-4 h-4 mr-1" />
                  Hosted by {podcast.host}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Podcast Modal */}
      {selectedPodcast && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Episode {selectedPodcast.episode}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={closePodcastModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Podcast Player */}
            <div className="p-6">
              {/* Album Art */}
              <div className="flex items-center space-x-6 mb-6">
                <img
                  src={selectedPodcast.thumbnail || "/placeholder.svg"}
                  alt={selectedPodcast.title}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{selectedPodcast.title}</h3>
                  <p className="text-gray-600 mb-2">Hosted by {selectedPodcast.host}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{selectedPodcast.duration}</span>
                    <span>{selectedPodcast.publishedAt}</span>
                    <Badge variant="secondary" className="bg-forest-100 text-forest-800">
                      {selectedPodcast.category}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Audio Player Controls */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Button
                    onClick={togglePlayback}
                    className="bg-forest-700 hover:bg-forest-800 text-white rounded-full w-12 h-12"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-forest-700 h-2 rounded-full transition-all duration-300"
                      style={{ width: isPlaying ? "25%" : "0%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{isPlaying ? "11:23" : "0:00"}</span>
                    <span>{selectedPodcast.duration}</span>
                  </div>
                </div>
              </div>

              {/* Episode Description */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">About this episode</h4>
                <p className="text-gray-600 leading-relaxed mb-4">{selectedPodcast.description}</p>

                <div className="bg-forest-50 rounded-lg p-4">
                  <h5 className="font-medium text-forest-900 mb-2">Episode Highlights:</h5>
                  <ul className="text-sm text-forest-700 space-y-1">
                    <li>• Key strategies for sustainable content creation</li>
                    <li>• Common mistakes to avoid when scaling</li>
                    <li>• Tools and resources mentioned in the episode</li>
                    <li>• Actionable tips you can implement today</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
