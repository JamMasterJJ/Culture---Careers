"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Bookmark } from "lucide-react"

export function SaveJobButton({ jobId }: { jobId: string }) {
  const [isSaved, setIsSaved] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSaveJob = async () => {
    try {
      setIsLoading(true)
      if (isSaved) {
        await fetch(`/api/saved-jobs/${jobId}`, {
          method: "DELETE",
        })
        setIsSaved(false)
      } else {
        await fetch("/api/saved-jobs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ job_id: jobId }),
        })
        setIsSaved(true)
      }
    } catch (error) {
      console.error("Error saving/unsaving job:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      className="border-forest-300 text-forest-700 hover:bg-forest-50"
      onClick={handleSaveJob}
      disabled={isLoading}
    >
      <Bookmark className={`mr-2 h-4 w-4 ${isSaved ? "fill-forest-700" : ""}`} />
      {isSaved ? "Saved" : "Save Job"}
    </Button>
  )
}
