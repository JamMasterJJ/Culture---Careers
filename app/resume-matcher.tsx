"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Upload, FileText, Check, AlertCircle, Lock } from "lucide-react"
import Link from "next/link"

export default function ResumeMatcherPage() {
  const [step, setStep] = useState<"upload" | "analyzing" | "results">("upload")
  const [file, setFile] = useState<File | null>(null)
  const [remainingFreeTrials, setRemainingFreeTrials] = useState(3)
  const [matchScore, setMatchScore] = useState(0)
  const [jobTitle, setJobTitle] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [showSubscribe, setShowSubscribe] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!file) return

    // Start analysis animation
    setStep("analyzing")

    // Simulate analysis (would be a real API call in production)
    setTimeout(() => {
      // Generate a random score between 45 and 95 for demo purposes
      const score = Math.floor(Math.random() * 51) + 45
      setMatchScore(score)

      // Set a sample job title
      setJobTitle("Social Media Manager")

      // Decrement remaining trials
      setRemainingFreeTrials((prev) => prev - 1)

      // Show results
      setStep("results")

      // If user has used all free trials, show subscription prompt
      if (remainingFreeTrials <= 1) {
        setShowSubscribe(true)
      }
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto pt-12 pb-20 px-4">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-[#3E6E50] hover:text-[#2E5E40]">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-200">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Resume Match Analysis</h1>
            <p className="text-gray-600 mt-2">
              Upload your resume to see how well it matches with job descriptions. Get a detailed score and
              recommendations to improve your chances.
            </p>

            {remainingFreeTrials > 0 && !showSubscribe && (
              <div className="mt-4 text-sm text-gray-500 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" />
                <span>
                  You have <span className="font-semibold">{remainingFreeTrials} free trials</span> remaining
                </span>
              </div>
            )}
          </div>

          <div className="p-6 md:p-8">
            {step === "upload" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div
                  className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#3E6E50] transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                  />

                  <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />

                  <h3 className="text-lg font-medium text-gray-900 mb-1">{file ? file.name : "Upload your resume"}</h3>

                  <p className="text-sm text-gray-500">
                    {file
                      ? "File selected. Click analyze to continue."
                      : "Drag and drop or click to select a file (PDF, DOC, DOCX)"}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Job title or description (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#3E6E50] focus:border-[#3E6E50]"
                    placeholder="e.g., Social Media Manager"
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    If left blank, we'll analyze your resume against common job requirements
                  </p>
                </div>

                <Button type="submit" className="w-full bg-[#3E6E50] hover:bg-[#2E5E40] text-white" disabled={!file}>
                  Analyze My Resume
                </Button>
              </form>
            )}

            {step === "analyzing" && (
              <div className="text-center py-8">
                <div className="relative h-20 w-20 mx-auto mb-6">
                  <div className="absolute inset-0 border-4 border-[#8DD3C7] border-opacity-25 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-[#3E6E50] border-r-transparent rounded-full animate-spin"></div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing your resume...</h3>
                <p className="text-gray-600">
                  We're comparing your resume against industry standards and job requirements
                </p>
              </div>
            )}

            {step === "results" && (
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Analysis Results</h3>
                    <p className="text-gray-600 text-sm">For: {jobTitle || "General Assessment"}</p>
                  </div>

                  <Button
                    variant="outline"
                    className="text-[#3E6E50] border-[#3E6E50]"
                    onClick={() => setStep("upload")}
                  >
                    Try Another Resume
                  </Button>
                </div>

                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="bg-gray-50 rounded-lg p-6 flex-1">
                    <div className="mb-2 text-center">
                      <p className="text-sm font-medium text-gray-500">Match Score</p>
                      <div className="text-4xl font-bold text-[#3E6E50]">{matchScore}%</div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div
                        className={`h-2.5 rounded-full ${
                          matchScore >= 80 ? "bg-green-500" : matchScore >= 60 ? "bg-yellow-500" : "bg-red-500"
                        }`}
                        style={{ width: `${matchScore}%` }}
                      ></div>
                    </div>

                    <p className="text-sm text-gray-600 text-center">
                      {matchScore >= 80
                        ? "Excellent match!"
                        : matchScore >= 60
                          ? "Good match with room for improvement"
                          : "Your resume needs some work to match this position"}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 mb-3">Key Findings</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          Your experience aligns with 7 out of 10 key requirements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">Strong match on technical skills</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">
                          Consider highlighting more quantifiable achievements
                        </span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">Missing keywords: growth strategy, analytics</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {showSubscribe && (
                  <div className="bg-[#3E6E50] bg-opacity-10 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <Lock className="h-5 w-5 text-[#3E6E50] mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-gray-900 mb-1">Unlock Unlimited Resume Analysis</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          You've used all your free trials. Subscribe for just $2.99/month to get unlimited resume
                          analysis, detailed recommendations, and keyword optimization.
                        </p>
                        <Button className="bg-[#3E6E50] hover:bg-[#2E5E40] text-white">Subscribe Now</Button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Recommended Improvements</h4>

                  <div className="border border-gray-200 rounded-lg divide-y divide-gray-200">
                    <div className="p-4">
                      <h5 className="font-medium text-gray-900 mb-1">Skills Section</h5>
                      <p className="text-sm text-gray-700">
                        Add specific industry skills like "content strategy" and "audience growth" to better match job
                        requirements.
                      </p>
                    </div>

                    <div className="p-4">
                      <h5 className="font-medium text-gray-900 mb-1">Work Experience</h5>
                      <p className="text-sm text-gray-700">
                        Quantify your achievements with metrics and results (e.g., "increased engagement by 45%").
                      </p>
                    </div>

                    <div className="p-4">
                      <h5 className="font-medium text-gray-900 mb-1">Education</h5>
                      <p className="text-sm text-gray-700">
                        Add relevant coursework or certifications to strengthen your qualifications.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-[#3E6E50] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Upload className="h-6 w-6 text-[#3E6E50]" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">1. Upload Your Resume</h3>
              <p className="text-sm text-gray-600">Upload your current resume or CV in PDF, DOC, or DOCX format.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-[#3E6E50] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[#3E6E50]" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">2. Select Job Description</h3>
              <p className="text-sm text-gray-600">
                Enter a job title or leave blank for a general assessment of your resume.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-[#3E6E50] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-[#3E6E50]" />
              </div>
              <h3 className="font-medium text-gray-900 mb-2">3. Get Detailed Analysis</h3>
              <p className="text-sm text-gray-600">
                Receive a match score and specific recommendations to improve your resume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
