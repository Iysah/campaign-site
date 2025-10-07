"use client"

import { useState } from "react"
import { ChevronDown, CheckCircle } from "lucide-react"

const policies = [
  {
    id: "economy",
    title: "Economic Growth & Job Creation",
    icon: "💼",
    color: "bg-[#008000]",
    points: [
      "Create 500,000 new jobs in Benue State through SME support and industrial development",
      "Establish technology hubs in Makurdi, Gboko, and Otukpo to attract tech companies",
      "Provide low-interest loans to entrepreneurs and small businesses",
      "Partner with private sector to build manufacturing facilities",
      "Implement tax incentives for businesses that hire locally",
      "Develop export processing zones to boost international trade",
    ],
    impact: "Projected 40% reduction in unemployment within first term",
  },
  {
    id: "security",
    title: "Security & Peace Building",
    icon: "🛡️",
    color: "bg-[#ff0000]",
    points: [
      "Deploy modern security equipment and technology across all 23 LGAs",
      "Establish community policing units with local oversight",
      "Create conflict resolution centers in flashpoint areas",
      "Provide training and better welfare for security personnel",
      "Install CCTV cameras in major towns and highways",
      "Launch youth engagement programs to prevent recruitment into violence",
    ],
    impact: "Target 60% reduction in security incidents within 2 years",
  },
  {
    id: "education",
    title: "Quality Education for All",
    icon: "🎓",
    color: "bg-[#00bfff]",
    points: [
      "Build 50 new model schools across Benue State",
      "Provide free education materials to all primary school students",
      "Increase teacher salaries by 30% and provide regular training",
      "Establish scholarship programs for 10,000 students annually",
      "Upgrade existing schools with modern facilities and technology",
      "Launch adult literacy programs in rural communities",
    ],
    impact: "Achieve 95% primary school enrollment rate",
  },
  {
    id: "health",
    title: "Accessible Healthcare",
    icon: "❤️",
    color: "bg-[#008000]",
    points: [
      "Build 30 new primary healthcare centers in underserved areas",
      "Provide free maternal and child healthcare services",
      "Establish mobile health clinics for rural communities",
      "Recruit and train 1,000 additional healthcare workers",
      "Subsidize essential medications by 50%",
      "Launch health insurance scheme covering 2 million residents",
    ],
    impact: "Reduce maternal mortality by 50% and improve life expectancy",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development",
    icon: "🏗️",
    color: "bg-[#ff0000]",
    points: [
      "Construct 500km of new roads connecting rural communities",
      "Rehabilitate all major highways in Benue State",
      "Provide electricity to 200 communities currently without power",
      "Build 10 new markets with modern facilities",
      "Establish water treatment plants in all LGA headquarters",
      "Construct affordable housing units for 50,000 families",
    ],
    impact: "Connect every community to state road network by 2030",
  },
  {
    id: "agriculture",
    title: "Agricultural Revolution",
    icon: "🌾",
    color: "bg-[#00bfff]",
    points: [
      "Provide modern farming equipment to 100,000 farmers",
      "Establish agricultural processing facilities in each senatorial zone",
      "Create guaranteed markets for farm produce through government procurement",
      "Provide subsidized fertilizers and improved seedlings",
      "Build irrigation systems to enable year-round farming",
      "Launch agricultural insurance scheme to protect farmers",
    ],
    impact: "Double agricultural output and make Benue Nigeria's food basket",
  },
]

export default function PolicyAccordion() {
  const [openId, setOpenId] = useState<string | null>("economy")

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-4">
          {policies.map((policy) => {
            const isOpen = openId === policy.id
            return (
              <div
                key={policy.id}
                id={policy.id}
                className="bg-white rounded-xl shadow-md border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : policy.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${policy.color} rounded-lg flex items-center justify-center text-2xl`}>
                      {policy.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#333333]">{policy.title}</h3>
                  </div>
                  <ChevronDown
                    className={`text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    size={24}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <h4 className="font-bold text-[#333333] mb-3">Key Initiatives:</h4>
                      <ul className="space-y-3 mb-6">
                        {policy.points.map((point, index) => (
                          <li key={index} className="flex gap-3">
                            <CheckCircle className="text-[#008000] flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-neutral-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-[#008000]/10 border-l-4 border-[#008000] p-4 rounded-r-lg">
                        <p className="text-sm font-medium text-[#333333]">
                          <strong>Expected Impact:</strong> {policy.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
