"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function JobSearch() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")

  const categories = [
    { id: "marketing", name: "Marketing" },
    { id: "design", name: "Design" },
    { id: "engineering", name: "Engineering" },
    { id: "product", name: "Product" },
    { id: "operations", name: "Operations" },
    { id: "sales", name: "Sales" },
    { id: "customer-service", name: "Customer Service" },
    { id: "finance", name: "Finance" },
    { id: "hr", name: "Human Resources" },
    { id: "legal", name: "Legal" },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const searchParams = new URLSearchParams()

    if (query) searchParams.set("q", query)
    if (category) searchParams.set("category", category)

    router.push(`/jobs?${searchParams.toString()}`)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Find Your Dream Job</h2>
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-1">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-1 md:col-span-2">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              Job Title or Keywords
            </label>
            <input
              type="text"
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for jobs..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
            />
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#FF5A5F] hover:bg-[#FF4146] text-white">
          Search Jobs
        </Button>
      </form>
    </div>
  )
}
