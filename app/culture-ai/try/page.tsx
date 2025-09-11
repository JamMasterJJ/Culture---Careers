import { ResumeMatcher } from "@/components/culture-ai/resume-matcher"

export default function TryCultureAIPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Try Culture AI</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload your resume and a job description to see how well you match.
          </p>
        </div>

        <ResumeMatcher />
      </div>
    </div>
  )
}
