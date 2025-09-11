"use client"

import { useEffect, useState } from "react"
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid"

const AuthSetupChecker = () => {
  const [emailSetup, setEmailSetup] = useState<boolean | null>(null)
  const [phoneSetup, setPhoneSetup] = useState<boolean | null>(null)
  const [linkedInSetup, setLinkedInSetup] = useState<boolean | null>(null)
  const [status, setStatus] = useState("checking")

  useEffect(() => {
    // Simulate checking Email setup status
    setTimeout(() => {
      setEmailSetup(true) // Replace with actual check
    }, 500)

    // Simulate checking Phone setup status
    setTimeout(() => {
      setPhoneSetup(false) // Replace with actual check
    }, 1000)

    // Simulate checking LinkedIn setup status
    setTimeout(() => {
      setLinkedInSetup(true) // Replace with actual check
    }, 1500)

    // Update status based on setup checks
    setTimeout(() => {
      if (emailSetup === true && phoneSetup === true && linkedInSetup === true) {
        setStatus("All authentication methods are properly set up.")
      } else if (emailSetup === false || phoneSetup === false || linkedInSetup === false) {
        setStatus("Some authentication methods are not properly set up.")
      }
    }, 2000)
  }, [])

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-lg font-semibold">Authentication Setup</h2>
      <p>Status: {status}</p>

      {/* Email Setup */}
      <div className="flex items-center space-x-2">
        <span>Email Authentication:</span>
        {emailSetup === null ? (
          <span>Checking...</span>
        ) : emailSetup ? (
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
        ) : (
          <XCircleIcon className="h-5 w-5 text-red-500" />
        )}
      </div>

      {/* Phone Setup */}
      <div className="flex items-center space-x-2">
        <span>Phone Authentication:</span>
        {phoneSetup === null ? (
          <span>Checking...</span>
        ) : phoneSetup ? (
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
        ) : (
          <XCircleIcon className="h-5 w-5 text-red-500" />
        )}
      </div>

      {/* LinkedIn Setup */}
      <div className="flex items-center space-x-2">
        <span>LinkedIn Authentication:</span>
        {linkedInSetup === null ? (
          <span>Checking...</span>
        ) : linkedInSetup ? (
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
        ) : (
          <XCircleIcon className="h-5 w-5 text-red-500" />
        )}
      </div>
    </div>
  )
}

export { AuthSetupChecker }
export default AuthSetupChecker
