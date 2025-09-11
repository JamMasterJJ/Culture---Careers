"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Star, MessageCircle, Search, Users } from "lucide-react"

interface TalentProfile {
  id: string
  name: string
  title: string
  location: string
  avatar: string
  bio: string
  skills: string[]
  experience: string
  rate: string
  availability: string
  rating: number
  reviewCount: number
  verified: boolean
  portfolio: string[]
  socialFollowing: {
    platform: string
    followers: string
  }[]
}

export default function TalentSearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All categories")
  const [selectedLocation, setSelectedLocation] = useState("All locations")
  const [selectedExperience, setSelectedExperience] = useState("All levels")
  const [availableOnly, setAvailableOnly] = useState(false)
  const [verifiedOnly, setVerifiedOnly] = useState(false)

  // Mock talent data
  const talents: TalentProfile[] = [
    {
      id: "1",
      name: "Sarah Chen",
      title: "Social Media Strategist & Content Creator",
      location: "Los Angeles, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Specialized in building authentic brand communities for lifestyle and beauty brands. 5+ years experience growing social media presence for creator-backed companies.",
      skills: [
        "Instagram Marketing",
        "TikTok Strategy",
        "Brand Partnerships",
        "Content Creation",
        "Community Management",
      ],
      experience: "5+ years",
      rate: "$75-100/hr",
      availability: "Available now",
      rating: 4.9,
      reviewCount: 23,
      verified: true,
      portfolio: ["Fenty Beauty Campaign", "Glossier UGC Strategy", "Rare Beauty Launch"],
      socialFollowing: [
        { platform: "Instagram", followers: "45K" },
        { platform: "TikTok", followers: "120K" },
      ],
    },
    {
      id: "2",
      name: "Marcus Rodriguez",
      title: "Brand Partnership Manager",
      location: "New York, NY",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Expert in negotiating and managing creator partnerships for consumer brands. Track record of 200+ successful collaborations with micro and macro influencers.",
      skills: [
        "Partnership Strategy",
        "Contract Negotiation",
        "Influencer Relations",
        "Campaign Management",
        "ROI Analysis",
      ],
      experience: "4+ years",
      rate: "$85-120/hr",
      availability: "Available in 2 weeks",
      rating: 4.8,
      reviewCount: 31,
      verified: true,
      portfolio: ["Prime Hydration Partnerships", "MrBeast Burger Campaigns", "Chamberlain Coffee Collabs"],
      socialFollowing: [{ platform: "LinkedIn", followers: "12K" }],
    },
    {
      id: "3",
      name: "Emma Thompson",
      title: "Creative Director & Video Producer",
      location: "Remote (UK)",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Award-winning creative director specializing in video content for creator economy brands. Expert in viral content strategy and production.",
      skills: ["Video Production", "Creative Strategy", "YouTube Optimization", "Viral Content", "Brand Storytelling"],
      experience: "6+ years",
      rate: "$90-150/hr",
      availability: "Available now",
      rating: 5.0,
      reviewCount: 18,
      verified: true,
      portfolio: ["Logan Paul Podcast Visuals", "KSI Music Videos", "Sidemen Brand Content"],
      socialFollowing: [
        { platform: "YouTube", followers: "85K" },
        { platform: "Instagram", followers: "32K" },
      ],
    },
    {
      id: "4",
      name: "David Kim",
      title: "Performance Marketing Specialist",
      location: "San Francisco, CA",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Data-driven marketer focused on scaling creator-backed brands through paid social and influencer marketing. Expertise in TikTok and Instagram ads.",
      skills: ["Paid Social", "TikTok Ads", "Instagram Ads", "Analytics", "Growth Marketing", "A/B Testing"],
      experience: "3+ years",
      rate: "$70-95/hr",
      availability: "Available in 1 week",
      rating: 4.7,
      reviewCount: 27,
      verified: false,
      portfolio: ["Beast Burger Growth", "Honey App Campaigns", "Gymshark Influencer Ads"],
      socialFollowing: [{ platform: "LinkedIn", followers: "8K" }],
    },
    {
      id: "5",
      name: "Zoe Martinez",
      title: "Community Manager & Brand Strategist",
      location: "Miami, FL",
      avatar: "/placeholder.svg?height=80&width=80",
      bio: "Building engaged communities for creator brands. Specialized in Discord, Reddit, and social media community management with focus on Gen Z audiences.",
      skills: ["Community Building", "Discord Management", "Brand Strategy", "Social Listening", "Crisis Management"],
      experience: "4+ years",
      rate: "$60-85/hr",
      availability: "Available now",
      rating: 4.9,
      reviewCount: 35,
      verified: true,
      portfolio: ["100 Thieves Community", "FaZe Clan Discord", "Offline TV Fan Engagement"],
      socialFollowing: [
        { platform: "Twitter", followers: "28K" },
        { platform: "Discord", followers: "50K+" },
      ],
    },
  ]

  const categories = [
    "Social Media Marketing",
    "Content Creation",
    "Brand Partnerships",
    "Video Production",
    "Community Management",
    "Performance Marketing",
    "Creative Strategy",
    "Influencer Relations",
  ]

  const locations = [
    "Remote",
    "Los Angeles, CA",
    "New York, NY",
    "San Francisco, CA",
    "Miami, FL",
    "Chicago, IL",
    "Austin, TX",
  ]
  const experienceLevels = ["1-2 years", "3-4 years", "5+ years", "10+ years"]

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch =
      !searchQuery ||
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory =
      !selectedCategory || talent.skills.some((skill) => skill.toLowerCase().includes(selectedCategory.toLowerCase()))

    const matchesLocation = !selectedLocation || talent.location.includes(selectedLocation)
    const matchesExperience = !selectedExperience || talent.experience.includes(selectedExperience.split("-")[0])
    const matchesAvailability = !availableOnly || talent.availability === "Available now"
    const matchesVerified = !verifiedOnly || talent.verified

    return (
      matchesSearch && matchesCategory && matchesLocation && matchesExperience && matchesAvailability && matchesVerified
    )
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Search Talent</h1>
            <p className="text-lg text-gray-600">
              Find and hire top talent from the creator economy. Connect with verified professionals.
            </p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by name, skills, or expertise..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Filters */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="All categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All categories">All categories</SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Location</Label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="All locations" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All locations">All locations</SelectItem>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Experience</Label>
                    <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                      <SelectTrigger>
                        <SelectValue placeholder="All levels" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="All levels">All levels</SelectItem>
                        {experienceLevels.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label>Filters</Label>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="available" checked={availableOnly} onCheckedChange={setAvailableOnly} />
                        <Label htmlFor="available" className="text-sm">
                          Available now
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="verified" checked={verifiedOnly} onCheckedChange={setVerifiedOnly} />
                        <Label htmlFor="verified" className="text-sm">
                          Verified only
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Header */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              {filteredTalents.length} talent{filteredTalents.length !== 1 ? "s" : ""} found
            </p>
            <Select defaultValue="rating">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest rated</SelectItem>
                <SelectItem value="experience">Most experienced</SelectItem>
                <SelectItem value="availability">Available first</SelectItem>
                <SelectItem value="rate-low">Lowest rate</SelectItem>
                <SelectItem value="rate-high">Highest rate</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Talent Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredTalents.map((talent) => (
              <Card key={talent.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={talent.avatar || "/placeholder.svg"} alt={talent.name} />
                      <AvatarFallback>
                        {talent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-lg text-gray-900">{talent.name}</h3>
                        {talent.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>

                      <p className="text-[#2E4756] font-medium mb-2">{talent.title}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {talent.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {talent.rating} ({talent.reviewCount} reviews)
                        </div>
                      </div>

                      <p className="text-gray-700 text-sm mb-4 line-clamp-2">{talent.bio}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {talent.skills.slice(0, 4).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {talent.skills.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{talent.skills.length - 4} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <div className="font-medium text-gray-900">{talent.rate}</div>
                          <div>{talent.availability}</div>
                        </div>

                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                          <Button size="sm" className="bg-[#4D7C4D] hover:bg-[#3A5A3A]">
                            View Profile
                          </Button>
                        </div>
                      </div>

                      {talent.socialFollowing.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4 text-xs text-gray-600">
                            <span className="font-medium">Social Reach:</span>
                            {talent.socialFollowing.map((social) => (
                              <span key={social.platform}>
                                {social.platform}: {social.followers}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTalents.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No talent found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or filters.</p>
              </CardContent>
            </Card>
          )}

          {/* Load More */}
          {filteredTalents.length > 0 && (
            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Load More Talent
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
