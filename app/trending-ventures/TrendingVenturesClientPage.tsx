"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, DollarSign, Calendar, ExternalLink } from "lucide-react"

interface Venture {
  id: string
  name: string
  description: string
  category: string
  stage: string
  funding: string
  employees: string
  founded: string
  logo: string
  website: string
  tags: string[]
  growth: string
}

const allVentures: Venture[] = [
  {
    id: "1",
    name: "CreatorSpace",
    description: "All-in-one platform for content creators to manage their business, from analytics to payments.",
    category: "Creator Tools",
    stage: "Series A",
    funding: "$12M",
    employees: "25-50",
    founded: "2022",
    logo: "/placeholder.svg?height=80&width=80&text=CS",
    website: "creatorspace.com",
    tags: ["SaaS", "Creator Economy", "Analytics"],
    growth: "+150%",
  },
  {
    id: "2",
    name: "StreamLive",
    description: "Next-generation live streaming platform with integrated monetization and audience engagement tools.",
    category: "Live Streaming",
    stage: "Seed",
    funding: "$3.5M",
    employees: "10-25",
    founded: "2023",
    logo: "/placeholder.svg?height=80&width=80&text=SL",
    website: "streamlive.io",
    tags: ["Live Streaming", "Monetization", "Engagement"],
    growth: "+200%",
  },
  {
    id: "3",
    name: "BrandMatch",
    description: "AI-powered platform connecting brands with the perfect content creators for authentic partnerships.",
    category: "Brand Partnerships",
    stage: "Pre-Seed",
    funding: "$1.2M",
    employees: "5-10",
    founded: "2023",
    logo: "/placeholder.svg?height=80&width=80&text=BM",
    website: "brandmatch.ai",
    tags: ["AI", "Brand Partnerships", "Matching"],
    growth: "+300%",
  },
  {
    id: "4",
    name: "ContentVault",
    description: "Secure digital asset management and licensing platform for creators and media companies.",
    category: "Digital Assets",
    stage: "Series B",
    funding: "$25M",
    employees: "50-100",
    founded: "2021",
    logo: "/placeholder.svg?height=80&width=80&text=CV",
    website: "contentvault.com",
    tags: ["Digital Assets", "Licensing", "Security"],
    growth: "+80%",
  },
  {
    id: "5",
    name: "FanConnect",
    description:
      "Direct-to-fan platform enabling creators to build deeper relationships with their most engaged followers.",
    category: "Fan Engagement",
    stage: "Seed",
    funding: "$5M",
    employees: "15-30",
    founded: "2022",
    logo: "/placeholder.svg?height=80&width=80&text=FC",
    website: "fanconnect.app",
    tags: ["Fan Engagement", "Community", "Subscription"],
    growth: "+120%",
  },
  {
    id: "6",
    name: "CreatorCoin",
    description:
      "Blockchain-based platform for creators to tokenize their content and build decentralized communities.",
    category: "Web3",
    stage: "Pre-Seed",
    funding: "$2M",
    employees: "8-15",
    founded: "2023",
    logo: "/placeholder.svg?height=80&width=80&text=CC",
    website: "creatorcoin.xyz",
    tags: ["Web3", "Blockchain", "Tokenization"],
    growth: "+400%",
  },
  {
    id: "7",
    name: "VideoAI",
    description: "AI-powered video editing and optimization tools specifically designed for content creators.",
    category: "AI Tools",
    stage: "Seed",
    funding: "$8M",
    employees: "20-40",
    founded: "2022",
    logo: "/placeholder.svg?height=80&width=80&text=VA",
    website: "videoai.studio",
    tags: ["AI", "Video Editing", "Automation"],
    growth: "+180%",
  },
  {
    id: "8",
    name: "CreatorMarket",
    description: "Marketplace for creators to buy, sell, and trade digital products, templates, and resources.",
    category: "Marketplace",
    stage: "Series A",
    funding: "$15M",
    employees: "30-60",
    founded: "2021",
    logo: "/placeholder.svg?height=80&width=80&text=CM",
    website: "creatormarket.co",
    tags: ["Marketplace", "Digital Products", "Templates"],
    growth: "+90%",
  },
  {
    id: "9",
    name: "InfluenceMetrics",
    description: "Advanced analytics and performance tracking platform for influencers and content creators.",
    category: "Analytics",
    stage: "Seed",
    funding: "$4M",
    employees: "12-25",
    founded: "2022",
    logo: "/placeholder.svg?height=80&width=80&text=IM",
    website: "influencemetrics.com",
    tags: ["Analytics", "Performance", "Insights"],
    growth: "+160%",
  },
  {
    id: "10",
    name: "CreatorLegal",
    description: "Legal services and contract management platform tailored for content creators and influencers.",
    category: "Legal Services",
    stage: "Pre-Seed",
    funding: "$800K",
    employees: "5-10",
    founded: "2023",
    logo: "/placeholder.svg?height=80&width=80&text=CL",
    website: "creatorlegal.com",
    tags: ["Legal", "Contracts", "Compliance"],
    growth: "+250%",
  },
  {
    id: "11",
    name: "SocialScheduler",
    description: "Smart social media scheduling and automation platform with AI-powered content optimization.",
    category: "Social Media",
    stage: "Seed",
    funding: "$6M",
    employees: "18-35",
    founded: "2022",
    logo: "/placeholder.svg?height=80&width=80&text=SS",
    website: "socialscheduler.ai",
    tags: ["Social Media", "Scheduling", "AI"],
    growth: "+140%",
  },
  {
    id: "12",
    name: "CreatorFinance",
    description: "Financial services platform offering banking, loans, and investment options for content creators.",
    category: "Fintech",
    stage: "Series A",
    funding: "$20M",
    employees: "40-80",
    founded: "2021",
    logo: "/placeholder.svg?height=80&width=80&text=CF",
    website: "creatorfinance.com",
    tags: ["Fintech", "Banking", "Loans"],
    growth: "+110%",
  },
]

export default function TrendingVenturesClientPage() {
  const [visibleCount, setVisibleCount] = useState(6)
  const [isLoading, setIsLoading] = useState(false)

  const loadMoreVentures = async () => {
    setIsLoading(true)
    // Simulate loading delay
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setVisibleCount((prev) => Math.min(prev + 6, allVentures.length))
    setIsLoading(false)
  }

  const visibleVentures = allVentures.slice(0, visibleCount)
  const hasMoreVentures = visibleCount < allVentures.length

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-forest-50 to-forest-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4">Trending Ventures</h1>
            <p className="text-xl text-forest-700 max-w-3xl mx-auto mb-8">
              Discover the hottest startups and companies shaping the future of the creator economy. From AI-powered
              tools to innovative platforms, these ventures are revolutionizing how creators work and monetize.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-forest-600">
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>{allVentures.length} Active Ventures</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                <span>$100M+ Total Funding</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ventures Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleVentures.map((venture) => (
            <div
              key={venture.id}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={venture.logo || "/placeholder.svg"}
                      alt={`${venture.name} logo`}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{venture.name}</h3>
                      <p className="text-sm text-gray-500">{venture.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {venture.growth}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{venture.description}</p>
              </div>

              {/* Stats */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-forest-600 mb-1">
                      <DollarSign className="w-4 h-4 mr-1" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{venture.funding}</p>
                    <p className="text-xs text-gray-500">Funding</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-forest-600 mb-1">
                      <Users className="w-4 h-4 mr-1" />
                    </div>
                    <p className="text-sm font-medium text-gray-900">{venture.employees}</p>
                    <p className="text-xs text-gray-500">Employees</p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    Founded {venture.founded}
                  </div>
                  <Badge
                    variant="secondary"
                    className={`
                      ${venture.stage === "Pre-Seed" ? "bg-blue-100 text-blue-800" : ""}
                      ${venture.stage === "Seed" ? "bg-green-100 text-green-800" : ""}
                      ${venture.stage === "Series A" ? "bg-purple-100 text-purple-800" : ""}
                      ${venture.stage === "Series B" ? "bg-orange-100 text-orange-800" : ""}
                    `}
                  >
                    {venture.stage}
                  </Badge>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {venture.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Button
                  className="w-full bg-forest-700 hover:bg-forest-800 text-white"
                  onClick={() => window.open(`https://${venture.website}`, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="mt-12 text-center">
          {hasMoreVentures ? (
            <button
              onClick={loadMoreVentures}
              disabled={isLoading}
              className="bg-[#4D7C4D] hover:bg-[#3A5A3A] text-white px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Loading..." : "Load More Ventures"}
            </button>
          ) : (
            <p className="text-gray-500 font-medium">All ventures loaded!</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Showing {visibleCount} of {allVentures.length} ventures
          </p>
        </div>
      </div>
    </div>
  )
}
