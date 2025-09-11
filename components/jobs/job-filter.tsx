"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Search, MapPin, X, Star, Trophy, Users, TrendingUp } from "lucide-react"

interface JobFilterProps {
  categories: string[]
  tags: string[]
  locations: string[]
}

export function JobFilter({ categories, tags, locations }: JobFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    location: searchParams.get("location") || "",
    categories: searchParams.getAll("category") || [],
    tags: searchParams.getAll("tag") || [],
    affiliations: searchParams.getAll("affiliation") || [],
    remote: searchParams.has("remote") ? true : false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  // Affiliation options with icons
  const affiliationOptions = [
    { id: "athlete-backed", label: "Athlete-backed", icon: Trophy, color: "text-blue-600" },
    { id: "creator-led", label: "Creator-led", icon: Star, color: "text-purple-600" },
    { id: "celebrity-endorsed", label: "Celebrity-endorsed", icon: Users, color: "text-pink-600" },
    { id: "vc-backed", label: "VC-backed", icon: TrendingUp, color: "text-green-600" },
  ]

  const applyFilters = () => {
    setIsSubmitting(true)
    const params = new URLSearchParams()

    if (filters.search) params.append("search", filters.search)
    if (filters.location) params.append("location", filters.location)
    if (filters.remote) params.append("remote", "true")

    filters.categories.forEach((category) => {
      params.append("category", category)
    })

    filters.tags.forEach((tag) => {
      params.append("tag", tag)
    })

    filters.affiliations.forEach((affiliation) => {
      params.append("affiliation", affiliation)
    })

    router.push(`/jobs?${params.toString()}`)
    setIsSubmitting(false)
  }

  const clearFilters = () => {
    setFilters({
      search: "",
      location: "",
      categories: [],
      tags: [],
      affiliations: [],
      remote: false,
    })
    router.push("/jobs")
  }

  const toggleCategory = (category: string) => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const toggleTag = (tag: string) => {
    setFilters((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag) ? prev.tags.filter((t) => t !== tag) : [...prev.tags, tag],
    }))
  }

  const toggleAffiliation = (affiliation: string) => {
    setFilters((prev) => ({
      ...prev,
      affiliations: prev.affiliations.includes(affiliation)
        ? prev.affiliations.filter((a) => a !== affiliation)
        : [...prev.affiliations, affiliation],
    }))
  }

  return (
    <div className="bg-white rounded-lg border border-forest-200 p-6 sticky top-8 max-h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-forest-900">Filters</h2>
        <Button variant="ghost" size="sm" className="text-forest-600 hover:text-forest-800" onClick={clearFilters}>
          <X className="h-4 w-4 mr-1" /> Clear All
        </Button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-forest-400" />
          <Input
            type="search"
            placeholder="Search jobs"
            className="pl-10 bg-white border-forest-200 text-forest-900 placeholder:text-forest-400"
            value={filters.search}
            onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
          />
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-forest-400" />
          <Input
            type="text"
            placeholder="Location"
            className="pl-10 bg-white border-forest-200 text-forest-900 placeholder:text-forest-400"
            value={filters.location}
            onChange={(e) => setFilters((prev) => ({ ...prev, location: e.target.value }))}
            list="locations"
          />
          <datalist id="locations">
            {locations.map((location) => (
              <option key={location} value={location} />
            ))}
          </datalist>
        </div>
      </div>

      {/* Remote */}
      <div className="mb-6">
        <div className="flex items-center">
          <Checkbox
            id="remote"
            checked={filters.remote}
            onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, remote: checked === true }))}
          />
          <Label htmlFor="remote" className="ml-2 text-sm text-forest-700">
            Remote Jobs Only
          </Label>
        </div>
      </div>

      {/* Brand Affiliations - NEW FEATURE */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-forest-800 mb-3 flex items-center">
          <Star className="h-4 w-4 mr-2 text-yellow-500" />
          Brand Affiliations
        </h3>
        <div className="space-y-3">
          {affiliationOptions.map((affiliation) => {
            const IconComponent = affiliation.icon
            return (
              <div key={affiliation.id} className="flex items-center">
                <Checkbox
                  id={`affiliation-${affiliation.id}`}
                  checked={filters.affiliations.includes(affiliation.id)}
                  onCheckedChange={() => toggleAffiliation(affiliation.id)}
                />
                <Label
                  htmlFor={`affiliation-${affiliation.id}`}
                  className="ml-2 text-sm text-forest-700 flex items-center cursor-pointer"
                >
                  <IconComponent className={`h-4 w-4 mr-2 ${affiliation.color}`} />
                  {affiliation.label}
                </Label>
              </div>
            )
          })}
        </div>
        <div className="mt-2 text-xs text-forest-500 italic">
          Find jobs at brands backed by your favorite creators, athletes, and celebrities
        </div>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-forest-800 mb-3">Categories</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              />
              <Label htmlFor={`category-${category}`} className="ml-2 text-sm text-forest-700">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-forest-800 mb-3">Tags</h3>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {tags.map((tag) => (
            <div key={tag} className="flex items-center">
              <Checkbox id={`tag-${tag}`} checked={filters.tags.includes(tag)} onCheckedChange={() => toggleTag(tag)} />
              <Label htmlFor={`tag-${tag}`} className="ml-2 text-sm text-forest-700">
                {tag}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Button
        className="w-full bg-forest-700 hover:bg-forest-800 text-white"
        onClick={applyFilters}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Applying..." : "Apply Filters"}
      </Button>
    </div>
  )
}
