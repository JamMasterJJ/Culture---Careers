import { syncRSSJobsToDatabase } from "./rss-service"

interface SyncResult {
  timestamp: string
  success: boolean
  jobsAdded: number
  error?: string
}

class JobSyncScheduler {
  private syncInterval: NodeJS.Timeout | null = null
  private lastSync: Date | null = null
  private syncHistory: SyncResult[] = []
  private isRunning = false

  constructor() {
    // Load last sync time from localStorage if available
    if (typeof window !== "undefined") {
      const lastSyncStr = localStorage.getItem("lastJobSync")
      if (lastSyncStr) {
        this.lastSync = new Date(lastSyncStr)
      }

      // Load sync history
      const historyStr = localStorage.getItem("jobSyncHistory")
      if (historyStr) {
        try {
          this.syncHistory = JSON.parse(historyStr)
        } catch (error) {
          console.error("Error loading sync history:", error)
        }
      }
    }
  }

  // Start automatic daily sync
  startDailySync() {
    if (this.isRunning) {
      console.log("RSS Job Sync: Scheduler already running")
      return
    }

    // Clear any existing interval
    this.stopSync()

    // Run initial sync if it's been more than 24 hours or never synced
    this.checkAndSync()

    // Set up daily sync (every 24 hours)
    this.syncInterval = setInterval(
      () => {
        this.checkAndSync()
      },
      24 * 60 * 60 * 1000,
    ) // 24 hours in milliseconds

    this.isRunning = true
    console.log("RSS Job Sync: Daily sync scheduler started")

    // Also run sync every 6 hours for more frequent updates
    setInterval(
      () => {
        this.checkAndSync(6) // Check if 6 hours have passed
      },
      6 * 60 * 60 * 1000,
    ) // 6 hours in milliseconds
  }

  // Stop automatic sync
  stopSync() {
    if (this.syncInterval) {
      clearInterval(this.syncInterval)
      this.syncInterval = null
      this.isRunning = false
      console.log("RSS Job Sync: Scheduler stopped")
    }
  }

  // Check if sync is needed and run it
  private async checkAndSync(hoursThreshold = 24) {
    const now = new Date()
    const shouldSync = !this.lastSync || now.getTime() - this.lastSync.getTime() > hoursThreshold * 60 * 60 * 1000

    if (shouldSync) {
      await this.runSync()
    } else {
      console.log(
        `RSS Job Sync: Last sync was ${Math.round((now.getTime() - this.lastSync.getTime()) / (60 * 60 * 1000))} hours ago, skipping`,
      )
    }
  }

  // Run the actual sync process
  async runSync(): Promise<SyncResult> {
    console.log("RSS Job Sync: Starting sync process...")

    const startTime = new Date()

    try {
      const result = await syncRSSJobsToDatabase()

      const syncResult: SyncResult = {
        timestamp: startTime.toISOString(),
        success: result.success,
        jobsAdded: result.jobsAdded,
        error: result.error,
      }

      // Update last sync time
      this.lastSync = startTime
      if (typeof window !== "undefined") {
        localStorage.setItem("lastJobSync", startTime.toISOString())
      }

      // Add to sync history
      this.syncHistory.unshift(syncResult)
      if (this.syncHistory.length > 20) {
        this.syncHistory = this.syncHistory.slice(0, 20) // Keep last 20 syncs
      }

      // Save sync history
      if (typeof window !== "undefined") {
        localStorage.setItem("jobSyncHistory", JSON.stringify(this.syncHistory))
      }

      if (result.success) {
        console.log(`RSS Job Sync: Completed successfully - ${result.jobsAdded} jobs added`)
      } else {
        console.error(`RSS Job Sync: Failed - ${result.error}`)
      }

      return syncResult
    } catch (error) {
      const syncResult: SyncResult = {
        timestamp: startTime.toISOString(),
        success: false,
        jobsAdded: 0,
        error: error instanceof Error ? error.message : "Unknown error",
      }

      this.syncHistory.unshift(syncResult)
      if (typeof window !== "undefined") {
        localStorage.setItem("jobSyncHistory", JSON.stringify(this.syncHistory))
      }

      console.error("RSS Job Sync: Failed -", error)

      return syncResult
    }
  }

  // Get sync status
  getSyncStatus() {
    const now = new Date()
    const nextSync = this.lastSync ? new Date(this.lastSync.getTime() + 24 * 60 * 60 * 1000) : new Date()

    return {
      lastSync: this.lastSync,
      nextSync,
      isRunning: this.isRunning,
      history: this.syncHistory,
      timeUntilNextSync: this.lastSync ? Math.max(0, nextSync.getTime() - now.getTime()) : 0,
    }
  }

  // Manual sync trigger
  async triggerManualSync(): Promise<SyncResult> {
    console.log("RSS Job Sync: Manual sync triggered")
    return await this.runSync()
  }

  // Get sync statistics
  getSyncStats() {
    const totalJobs = this.syncHistory.reduce((sum, sync) => sum + sync.jobsAdded, 0)
    const successfulSyncs = this.syncHistory.filter((sync) => sync.success).length
    const failedSyncs = this.syncHistory.filter((sync) => !sync.success).length
    const successRate = this.syncHistory.length > 0 ? (successfulSyncs / this.syncHistory.length) * 100 : 0

    return {
      totalJobs,
      totalSyncs: this.syncHistory.length,
      successfulSyncs,
      failedSyncs,
      successRate: Math.round(successRate),
      averageJobsPerSync: this.syncHistory.length > 0 ? Math.round(totalJobs / this.syncHistory.length) : 0,
    }
  }
}

// Export singleton instance
export const jobSyncScheduler = new JobSyncScheduler()

// Auto-start the scheduler when the module is imported
if (typeof window !== "undefined") {
  // Start the scheduler after a short delay to ensure everything is loaded
  setTimeout(() => {
    jobSyncScheduler.startDailySync()
  }, 2000)
}
