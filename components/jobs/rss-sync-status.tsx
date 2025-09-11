"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, CheckCircle, XCircle, Clock, TrendingUp, Briefcase, Calendar, Activity } from "lucide-react"
import { jobSyncScheduler } from "@/lib/services/job-sync-scheduler"
import { formatDistanceToNow } from "date-fns"

export function RSSyncStatus() {
  const [syncStatus, setSyncStatus] = useState(jobSyncScheduler.getSyncStatus())
  const [syncStats, setSyncStats] = useState(jobSyncScheduler.getSyncStats())
  const [isManualSyncing, setIsManualSyncing] = useState(false)
  const [timeUntilNext, setTimeUntilNext] = useState("")

  // Update status every minute
  useEffect(() => {
    const interval = setInterval(() => {
      const status = jobSyncScheduler.getSyncStatus()
      const stats = jobSyncScheduler.getSyncStats()
      setSyncStatus(status)
      setSyncStats(stats)

      // Update countdown
      if (status.timeUntilNextSync > 0) {
        const hours = Math.floor(status.timeUntilNextSync / (1000 * 60 * 60))
        const minutes = Math.floor((status.timeUntilNextSync % (1000 * 60 * 60)) / (1000 * 60))
        setTimeUntilNext(`${hours}h ${minutes}m`)
      } else {
        setTimeUntilNext("Soon")
      }
    }, 60000) // Update every minute

    // Initial update
    const status = jobSyncScheduler.getSyncStatus()
    if (status.timeUntilNextSync > 0) {
      const hours = Math.floor(status.timeUntilNextSync / (1000 * 60 * 60))
      const minutes = Math.floor((status.timeUntilNextSync % (1000 * 60 * 60)) / (1000 * 60))
      setTimeUntilNext(`${hours}h ${minutes}m`)
    } else {
      setTimeUntilNext("Soon")
    }

    return () => clearInterval(interval)
  }, [])

  const handleManualSync = async () => {
    setIsManualSyncing(true)
    try {
      await jobSyncScheduler.triggerManualSync()
      // Update status after sync
      setSyncStatus(jobSyncScheduler.getSyncStatus())
      setSyncStats(jobSyncScheduler.getSyncStats())
    } catch (error) {
      console.error("Manual sync failed:", error)
    } finally {
      setIsManualSyncing(false)
    }
  }

  const getStatusColor = (success: boolean) => {
    return success ? "text-green-600" : "text-red-600"
  }

  const getStatusIcon = (success: boolean) => {
    return success ? CheckCircle : XCircle
  }

  return (
    <div className="space-y-6">
      {/* Main Status Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-forest-600" />
                RSS Job Feed Status
              </CardTitle>
              <CardDescription>Automatic daily sync from creator economy job boards</CardDescription>
            </div>
            <Badge
              variant={syncStatus.isRunning ? "default" : "secondary"}
              className={syncStatus.isRunning ? "bg-green-100 text-green-800" : ""}
            >
              {syncStatus.isRunning ? "Active" : "Inactive"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Last Sync Info */}
          <div className="flex items-center justify-between p-4 bg-forest-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-forest-600" />
              <div>
                <p className="font-medium text-forest-900">Last Sync</p>
                <p className="text-sm text-forest-600">
                  {syncStatus.lastSync ? formatDistanceToNow(syncStatus.lastSync, { addSuffix: true }) : "Never"}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-forest-900">Next Sync</p>
              <p className="text-sm text-forest-600">{timeUntilNext}</p>
            </div>
          </div>

          {/* Sync Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <Briefcase className="h-6 w-6 text-blue-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-blue-900">{syncStats.totalJobs}</p>
              <p className="text-sm text-blue-600">Total Jobs Added</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-green-900">{syncStats.successRate}%</p>
              <p className="text-sm text-green-600">Success Rate</p>
            </div>
            <div className="text-center p-3 bg-purple-50 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-purple-900">{syncStats.totalSyncs}</p>
              <p className="text-sm text-purple-600">Total Syncs</p>
            </div>
            <div className="text-center p-3 bg-orange-50 rounded-lg">
              <Activity className="h-6 w-6 text-orange-600 mx-auto mb-1" />
              <p className="text-2xl font-bold text-orange-900">{syncStats.averageJobsPerSync}</p>
              <p className="text-sm text-orange-600">Avg Jobs/Sync</p>
            </div>
          </div>

          {/* Manual Sync Button */}
          <div className="flex justify-center">
            <Button onClick={handleManualSync} disabled={isManualSyncing} className="bg-forest-700 hover:bg-forest-800">
              <RefreshCw className={`h-4 w-4 mr-2 ${isManualSyncing ? "animate-spin" : ""}`} />
              {isManualSyncing ? "Syncing..." : "Sync Now"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Sync History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Sync History</CardTitle>
          <CardDescription>Last {Math.min(syncStatus.history.length, 10)} sync attempts</CardDescription>
        </CardHeader>
        <CardContent>
          {syncStatus.history.length > 0 ? (
            <div className="space-y-3">
              {syncStatus.history.slice(0, 10).map((sync, index) => {
                const StatusIcon = getStatusIcon(sync.success)
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border border-forest-100 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <StatusIcon className={`h-5 w-5 ${getStatusColor(sync.success)}`} />
                      <div>
                        <p className="font-medium text-forest-900">
                          {formatDistanceToNow(new Date(sync.timestamp), { addSuffix: true })}
                        </p>
                        {sync.error && <p className="text-sm text-red-600">{sync.error}</p>}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={sync.success ? "default" : "destructive"}
                        className={sync.success ? "bg-green-100 text-green-800" : ""}
                      >
                        {sync.jobsAdded} jobs added
                      </Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-forest-600">
              <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No sync history available</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Creator Economy Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Creator Economy Job Sources</CardTitle>
          <CardDescription>RSS feeds we monitor for new opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "MrBeast Companies", status: "Active", jobs: "12 jobs this week" },
              { name: "Fenty Beauty", status: "Active", jobs: "8 jobs this week" },
              { name: "100 Thieves", status: "Active", jobs: "15 jobs this week" },
              { name: "Glossier", status: "Active", jobs: "6 jobs this week" },
              { name: "WHOOP", status: "Active", jobs: "9 jobs this week" },
              { name: "Prime Hydration", status: "Active", jobs: "4 jobs this week" },
            ].map((source, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-forest-100 rounded-lg">
                <div>
                  <p className="font-medium text-forest-900">{source.name}</p>
                  <p className="text-sm text-forest-600">{source.jobs}</p>
                </div>
                <Badge className="bg-green-100 text-green-800">{source.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
