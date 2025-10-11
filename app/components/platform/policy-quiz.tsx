"use client"

import { useState } from "react"
import { Button } from "../ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "What is your top priority for Benue State?",
    options: [
      { text: "Job creation and economic growth", policy: "economy" },
      { text: "Security and peace", policy: "security" },
      { text: "Education improvement", policy: "education" },
      { text: "Healthcare access", policy: "health" },
    ],
  },
  {
    question: "Which sector needs the most investment?",
    options: [
      { text: "Agriculture and food production", policy: "agriculture" },
      { text: "Roads and infrastructure", policy: "infrastructure" },
      { text: "Schools and education", policy: "education" },
      { text: "Security forces", policy: "security" },
    ],
  },
  {
    question: "What would improve your daily life most?",
    options: [
      { text: "Better roads and electricity", policy: "infrastructure" },
      { text: "More job opportunities", policy: "economy" },
      { text: "Affordable healthcare", policy: "health" },
      { text: "Support for farmers", policy: "agriculture" },
    ],
  },
  {
    question: "What's most important for Benue's future?",
    options: [
      { text: "Youth empowerment and education", policy: "education" },
      { text: "Agricultural modernization", policy: "agriculture" },
      { text: "Business development", policy: "economy" },
      { text: "Community safety", policy: "security" },
    ],
  },
  {
    question: "Which service should be prioritized?",
    options: [
      { text: "Free maternal healthcare", policy: "health" },
      { text: "Rural road construction", policy: "infrastructure" },
      { text: "Farmer support programs", policy: "agriculture" },
      { text: "School infrastructure", policy: "education" },
    ],
  },
]

const policyResults = {
  economy: {
    title: "Economic Growth & Job Creation",
    description:
      "You care deeply about creating opportunities and prosperity for all. Our economic policies focus on job creation, SME support, and attracting investment to Benue State.",
    cta: "Learn about our economic plan",
    href: "/platform#economy",
  },
  security: {
    title: "Security & Peace Building",
    description:
      "Safety is your priority. Our security policies emphasize modern equipment, community policing, and conflict resolution to ensure peace across Benue State.",
    cta: "Explore our security strategy",
    href: "/platform#security",
  },
  education: {
    title: "Quality Education for All",
    description:
      "You believe in the power of education. Our policies focus on building schools, training teachers, and ensuring every child has access to quality learning.",
    cta: "See our education initiatives",
    href: "/platform#education",
  },
  health: {
    title: "Accessible Healthcare",
    description:
      "Healthcare access matters to you. Our policies provide free maternal care, build health centers, and make essential medications affordable for all.",
    cta: "Review our healthcare plan",
    href: "/platform#health",
  },
  infrastructure: {
    title: "Infrastructure Development",
    description:
      "You understand that infrastructure drives progress. Our policies focus on roads, electricity, water, and housing to connect and empower communities.",
    cta: "Discover our infrastructure projects",
    href: "/platform#infrastructure",
  },
  agriculture: {
    title: "Agricultural Revolution",
    description:
      "You recognize agriculture's importance to Benue. Our policies support farmers with equipment, markets, and insurance to make Benue Nigeria's food basket.",
    cta: "Learn about agricultural programs",
    href: "/platform#agriculture",
  },
}

export default function PolicyQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (policy: string) => {
    const newAnswers = [...answers, policy]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const getTopPolicy = () => {
    const counts: Record<string, number> = {}
    answers.forEach((answer) => {
      counts[answer] = (counts[answer] || 0) + 1
    })
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as keyof typeof policyResults
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers([])
    setShowResult(false)
  }

  if (showResult) {
    const topPolicy = getTopPolicy()
    const result = policyResults[topPolicy]

    return (
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-[#008000] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-[#333333] mb-4">Your Top Priority:</h3>
            <h4 className="text-2xl font-bold text-[#008000] mb-6">{result.title}</h4>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">{result.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#008000] hover:bg-[#006400] text-white font-bold">
                <Link href={result.href}>
                  {result.cta}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button onClick={resetQuiz} size="lg" variant="outline" className="font-bold bg-transparent">
                Retake Quiz
              </Button>
            </div>
            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-600 mb-4">Ready to make a difference?</p>
              <Button asChild className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold">
                <Link href="/get-involved">Join the Movement</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">Where Do You Stand?</h2>
          <p className="text-neutral-600">Answer 5 quick questions to find your policy match</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-neutral-600 mb-2">
              <span>
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#008000] transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          {/* Question */}
          <h3 className="text-2xl font-bold text-[#333333] mb-6 text-balance">{question.question}</h3>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.policy)}
                className="w-full text-left p-4 rounded-lg border-2 border-neutral-200 hover:border-[#008000] hover:bg-[#008000]/5 transition-all group"
              >
                <span className="text-neutral-700 group-hover:text-[#008000] font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
