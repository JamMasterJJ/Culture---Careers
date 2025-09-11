"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

type FeedItem = {
  title: string
  link: string
  pubDate: string
  description: string
  category: string
  imageUrl?: string
  source?: string
  sourceLogo?: string
}

// Enhanced sample data with source and sourceLogo fields
const sampleData: FeedItem[] = [
  {
    title: "Logan Paul and KSI Expand Prime Hydration with New Flavors",
    link: "https://example.com/prime-hydration-new-flavors",
    pubDate: "2023-05-10T14:30:00Z",
    description:
      "YouTube stars Logan Paul and KSI announce three new flavors for their popular Prime Hydration drink, now available in major retailers.",
    category: "creator",
    imageUrl: "/logan-paul-ksi.png",
    source: "Business Insider",
    sourceLogo: "/placeholder.svg?key=47yiw",
  },
  {
    title: "Emma Chamberlain's Coffee Brand Secures $7M in Funding",
    link: "https://example.com/chamberlain-coffee-funding",
    pubDate: "2023-05-08T09:15:00Z",
    description:
      "Chamberlain Coffee, founded by YouTube star Emma Chamberlain, announces new funding round to expand product line and retail presence.",
    category: "creator",
    imageUrl: "/emma-chamberlain-inspired.png",
    source: "TechCrunch",
    sourceLogo: "/placeholder.svg?key=q0rva",
  },
  {
    title: "Serena Williams Launches Recovery-Focused Wellness Brand",
    link: "https://example.com/serena-williams-wellness-brand",
    pubDate: "2023-05-05T11:45:00Z",
    description:
      "Tennis legend Serena Williams unveils new wellness company focused on recovery products for athletes and active individuals.",
    category: "athlete",
    imageUrl: "/placeholder.svg?key=sz3ep",
    source: "Forbes",
    sourceLogo: "/placeholder.svg?key=xm8zm",
  },
  {
    title: "WHOOP Fitness Tracker, Backed by Patrick Mahomes, Releases New Features",
    link: "https://example.com/whoop-new-features",
    pubDate: "2023-05-03T16:20:00Z",
    description:
      "Fitness wearable company WHOOP, with investment from NFL star Patrick Mahomes, announces new health monitoring capabilities.",
    category: "athlete",
    imageUrl: "/will-ahmed.png",
    source: "CNBC",
    sourceLogo: "/placeholder.svg?key=ep5zz",
  },
  {
    title: "Rihanna's Fenty Beauty Expands into Skincare for Athletes",
    link: "https://example.com/fenty-beauty-athlete-skincare",
    pubDate: "2023-05-01T10:00:00Z",
    description:
      "Fenty Beauty launches new skincare line specifically formulated for post-workout recovery and sweat-resistant protection.",
    category: "celebrity",
    imageUrl: "/placeholder.svg?height=350&width=500&query=Fenty+Beauty+Athlete+Skincare",
    source: "Vogue",
    sourceLogo: "/placeholder.svg?height=30&width=30&query=Vogue+Logo",
  },
  {
    title: "NTWRK, Backed by LeBron James, Launches Exclusive Collectibles Marketplace",
    link: "https://example.com/ntwrk-collectibles-marketplace",
    pubDate: "2023-04-28T13:10:00Z",
    description:
      "E-commerce platform NTWRK expands with new marketplace for limited-edition collectibles and merchandise from top athletes and artists.",
    category: "athlete",
    imageUrl: "/placeholder.svg?height=350&width=500&query=NTWRK+Collectibles+Marketplace",
    source: "Wall Street Journal",
    sourceLogo: "/placeholder.svg?height=30&width=30&query=WSJ+Logo",
  },
]

export default function RssFeed() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems = activeTab === "all" ? sampleData : sampleData.filter((item) => item.category === activeTab)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="all">All Ventures</TabsTrigger>
          <TabsTrigger value="celebrity">Celebrity</TabsTrigger>
          <TabsTrigger value="creator">Creator</TabsTrigger>
          <TabsTrigger value="athlete">Athlete</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48 w-full bg-gray-100">
                    <Image
                      src={
                        item.imageUrl ||
                        `/placeholder.svg?height=200&width=300&query=${encodeURIComponent(item.title) || "/placeholder.svg"}`
                      }
                      alt={item.title}
                      fill
                      className="object-cover"
                      priority={index < 2}
                    />
                    <Badge className="absolute top-3 right-3 bg-white text-gray-800">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </Badge>

                    {/* Source logo thumbnail overlay */}
                    {item.sourceLogo && (
                      <div className="absolute bottom-3 left-3 bg-white rounded-full p-1 shadow-md">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={item.sourceLogo || "/placeholder.svg"}
                            alt={item.source || "Source"}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(item.pubDate)}</span>
                      </div>
                      {item.source && <span className="font-medium text-gray-600">via {item.source}</span>}
                    </div>
                    <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                    <Link
                      href={item.link}
                      className="text-[#FF5A5F] hover:text-[#FF4146] text-sm font-medium flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more <ExternalLink className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
