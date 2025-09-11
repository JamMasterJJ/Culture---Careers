"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, CheckCircle, AlertCircle, Info } from "lucide-react"

export function ResumeMatcher() {
  const [step, setStep] = useState(1)
  const [fileName, setFileName] = useState("")
  const [matchScore, setMatchScore] = useState<number | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  const handleSubmitResume = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  const handleSubmitJob = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAnalyzing(true)

    // Simulate API call with timeout
    setTimeout(() => {
      setIsAnalyzing(false)
      setMatchScore(Math.floor(Math.random() * 30) + 70) // Random score between 70-99
      setStep(3)
    }, 3000)
  }

  const handleReset = () => {
    setStep(1)
    setFileName("")
    setMatchScore(null)
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex justify-between">
          <div className={`text-center ${step >= 1 ? "text-teal-600" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${step >= 1 ? "bg-teal-100" : "bg-gray-100"}`}
            >
              <FileText className={`h-5 w-5 ${step >= 1 ? "text-teal-600" : "text-gray-400"}`} />
            </div>
            <span className="text-sm">Upload Resume</span>
          </div>
          <div className={`text-center ${step >= 2 ? "text-teal-600" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${step >= 2 ? "bg-teal-100" : "bg-gray-100"}`}
            >
              <Upload className={`h-5 w-5 ${step >= 2 ? "text-teal-600" : "text-gray-400"}`} />
            </div>
            <span className="text-sm">Job Description</span>
          </div>
          <div className={`text-center ${step >= 3 ? "text-teal-600" : "text-gray-400"}`}>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${step >= 3 ? "bg-teal-100" : "bg-gray-100"}`}
            >
              <CheckCircle className={`h-5 w-5 ${step >= 3 ? "text-teal-600" : "text-gray-400"}`} />
            </div>
            <span className="text-sm">Match Results</span>
          </div>
        </div>
        <Progress value={step === 1 ? 33 : step === 2 ? 66 : 100} className="h-2 mt-4" />
      </div>

      {/* Step 1: Upload Resume */}
      {step === 1 && (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmitResume} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="resume">Upload Your Resume</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 mb-2">Drag and drop your resume file, or click to browse</p>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("resume")?.click()}
                    className="mt-2"
                  >
                    Browse Files
                  </Button>
                  {fileName && (
                    <p className="mt-2 text-sm text-teal-600 flex items-center justify-center">
                      <FileText className="h-4 w-4 mr-1" />
                      {fileName}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">Or paste your LinkedIn profile URL</Label>
                <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" />
              </div>

              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={!fileName && true}>
                Continue
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Step 2: Job Description */}
      {step === 2 && (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmitJob} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input id="jobTitle" placeholder="e.g. Marketing Manager" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="e.g. Acme Inc." required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="jobDescription">Job Description</Label>
                <Textarea id="jobDescription" placeholder="Paste the full job description here..." rows={8} required />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="button" variant="outline" className="flex-1" onClick={() => setStep(1)}>
                  Back
                </Button>
                <Button type="submit" className="flex-1 bg-teal-600 hover:bg-teal-700">
                  {isAnalyzing ? "Analyzing..." : "Get Match Score"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Step 3: Results */}
      {step === 3 && matchScore !== null && (
        <Card>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Your Match Results</h3>
              <p className="text-gray-600">Here's how well your profile matches this job opportunity</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="font-medium">Overall Match Score</span>
                <span className="font-bold">{matchScore}%</span>
              </div>
              <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${
                    matchScore >= 90
                      ? "bg-green-500"
                      : matchScore >= 75
                        ? "bg-teal-500"
                        : matchScore >= 60
                          ? "bg-yellow-500"
                          : "bg-red-500"
                  }`}
                  style={{ width: `${matchScore}%` }}
                ></div>
              </div>
              <div className="mt-2 flex items-start">
                <Info className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  {matchScore >= 90
                    ? "Excellent match! You're highly qualified for this position."
                    : matchScore >= 75
                      ? "Good match! You meet most of the key requirements."
                      : matchScore >= 60
                        ? "Moderate match. Consider highlighting your relevant skills more prominently."
                        : "This role may not be the best fit for your current profile."}
                </p>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-bold mb-2">Skills Match</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Technical Skills</span>
                      <span className="text-sm font-medium">{Math.min(matchScore + 5, 100)}%</span>
                    </div>
                    <Progress value={Math.min(matchScore + 5, 100)} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Soft Skills</span>
                      <span className="text-sm font-medium">{Math.max(matchScore - 5, 50)}%</span>
                    </div>
                    <Progress value={Math.max(matchScore - 5, 50)} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Experience</span>
                      <span className="text-sm font-medium">{matchScore}%</span>
                    </div>
                    <Progress value={matchScore} className="h-2" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold mb-2">Culture Fit</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Work Style</span>
                      <span className="text-sm font-medium">{Math.min(matchScore + 10, 100)}%</span>
                    </div>
                    <Progress value={Math.min(matchScore + 10, 100)} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Company Values</span>
                      <span className="text-sm font-medium">{Math.max(matchScore - 8, 60)}%</span>
                    </div>
                    <Progress value={Math.max(matchScore - 8, 60)} className="h-2" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="font-bold mb-2 flex items-center">
                <AlertCircle className="h-5 w-5 text-teal-600 mr-2" />
                Improvement Suggestions
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Add more details about your experience with project management tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Highlight your team leadership skills more prominently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">•</span>
                  <span>Include specific metrics or results from your previous roles</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="button" variant="outline" className="flex-1" onClick={handleReset}>
                Try Another Job
              </Button>
              <Button type="button" className="flex-1 bg-teal-600 hover:bg-teal-700">
                Download Full Report
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
