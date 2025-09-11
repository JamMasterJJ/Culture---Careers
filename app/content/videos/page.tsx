"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, User, X } from "lucide-react"

interface Video {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: string
  author: string
  category: string
  views: string
  publishedAt: string
  videoUrl?: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "Building a Creator Brand: From Zero to Million Followers",
    description:
      "Learn the strategies top creators use to build authentic brands that resonate with audiences and drive business growth.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Creator+Brand+Building",
    duration: "12:34",
    author: "Sarah Chen",
    category: "Brand Building",
    views: "125K",
    publishedAt: "2 days ago",
  },
  {
    id: "2",
    title: "The Future of Creator Economy: Trends for 2024",
    description:
      "Industry experts discuss emerging trends, new platforms, and opportunities shaping the creator economy landscape.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Creator+Economy+2024",
    duration: "18:45",
    author: "Marcus Rodriguez",
    category: "Industry Insights",
    views: "89K",
    publishedAt: "1 week ago",
  },
  {
    id: "3",
    title: "Monetization Strategies for Content Creators",
    description: "Explore diverse revenue streams including sponsorships, products, courses, and subscription models.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Creator+Monetization",
    duration: "15:22",
    author: "Emma Thompson",
    category: "Monetization",
    views: "203K",
    publishedAt: "3 days ago",
  },
  {
    id: "4",
    title: "Behind the Scenes: Day in the Life of a YouTuber",
    description:
      "Get an exclusive look at the daily routine, challenges, and creative process of a successful content creator.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=YouTuber+Life",
    duration: "22:10",
    author: "Jake Wilson",
    category: "Lifestyle",
    views: "156K",
    publishedAt: "5 days ago",
  },
  {
    id: "5",
    title: "Social Media Algorithm Secrets Revealed",
    description:
      "Understanding how algorithms work across platforms and how to optimize your content for maximum reach.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Algorithm+Secrets",
    duration: "14:56",
    author: "Lisa Park",
    category: "Strategy",
    views: "312K",
    publishedAt: "1 week ago",
  },
  {
    id: "6",
    title: "Collaborating with Brands: A Creator's Guide",
    description: "Navigate brand partnerships, negotiate deals, and maintain authenticity while working with sponsors.",
    thumbnail: "/placeholder.svg?height=200&width=350&text=Brand+Collaborations",
    duration: "16:33",
    author: "David Kim",
    category: "Business",
    views: "94K",
    publishedAt: "4 days ago",
  },
]

export default function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-50 to-forest-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-forest-900 mb-4">Creator Videos</h1>
          <p className="text-lg text-forest-700 max-w-2xl">
            Watch exclusive content from top creators, industry experts, and thought leaders in the creator economy
            space.
          </p>
        </div>
      </div>

      {/* Videos Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Button onClick={() => openVideoModal(video)} className="bg-white text-forest-900 hover:bg-forest-50">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Now
                  </Button>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="bg-forest-100 text-forest-800">
                    {video.category}
                  </Badge>
                  <span className="text-sm text-gray-500">{video.publishedAt}</span>
                </div>

                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">{video.title}</h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{video.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {video.author}
                  </div>
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">{selectedVideo.title}</h2>
              <Button variant="ghost" size="sm" onClick={closeVideoModal} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Video Player */}
            <div className="p-6">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <Play className="w-16 h-16 mx-auto mb-4 opacity-75" />
                  <p className="text-lg font-medium">{selectedVideo.title}</p>
                  <p className="text-sm opacity-75">Duration: {selectedVideo.duration}</p>
                </div>
              </div>

              {/* Video Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Badge variant="secondary" className="bg-forest-100 text-forest-800">
                      {selectedVideo.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{selectedVideo.views} views</span>
                    <span className="text-sm text-gray-500">{selectedVideo.publishedAt}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="font-medium text-gray-900">{selectedVideo.author}</span>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">About this video</h3>
                  <p className="text-gray-600 leading-relaxed">{selectedVideo.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
