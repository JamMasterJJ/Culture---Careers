"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

interface ApplicationStatusButtonProps {
  application: {
    id: string
    status: string
  }
}

export function ApplicationStatusButton({ application }: ApplicationStatusButtonProps) {
  const [status, setStatus] = useState(application.status)
  const [isUpdating, setIsUpdating] = useState(false)

  const updateStatus = async (newStatus: string) => {
    if (newStatus === status) return

    try {
      setIsUpdating(true)

      const response = await fetch(`/api/applications/${application.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setStatus(newStatus)
      } else {
        console.error("Failed to update application status")
      }
    } catch (error) {
      console.error("Error updating application status:", error)
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-forest-300 text-forest-700 hover:bg-forest-50"
          disabled={isUpdating}
        >
          {isUpdating ? "Updating..." : `Status: ${status.charAt(0).toUpperCase() + status.slice(1)}`}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => updateStatus("submitted")}>Submitted</DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateStatus("reviewed")}>Reviewed</DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateStatus("interviewing")}>Interviewing</DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateStatus("hired")}>Hired</DropdownMenuItem>
        <DropdownMenuItem onClick={() => updateStatus("rejected")}>Rejected</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
