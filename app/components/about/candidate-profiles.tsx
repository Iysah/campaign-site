"use client"

import { useState } from "react"
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react"

const candidates = {
  presidential: {
    name: "Bola Ahmed Tinubu",
    title: "Presidential Candidate",
    image: "/presidential-candidate-tinubu-portrait.jpg",
    quote: "Together, we will build a Nigeria that works for all its citizens.",
    bio: "A visionary leader with decades of experience in governance and nation-building. Known for his transformative leadership in Lagos State, Tinubu brings a proven track record of economic development, infrastructure modernization, and inclusive governance.",
    achievements: [
      {
        icon: Award,
        title: "Economic Transformation",
        description: "Increased Lagos State's IGR from ₦600M to ₦51B monthly during tenure as Governor",
      },
      {
        icon: Briefcase,
        title: "Job Creation",
        description: "Created over 2 million jobs through strategic economic policies and private sector partnerships",
      },
      {
        icon: GraduationCap,
        title: "Education Reform",
        description: "Established model schools and increased education budget by 300%",
      },
      {
        icon: Heart,
        title: "Healthcare Access",
        description: "Built 27 new primary healthcare centers and upgraded existing facilities",
      },
    ],
    timeline: [
      { year: "1999-2007", event: "Governor of Lagos State" },
      { year: "2007-2015", event: "National Leader, APC" },
      { year: "2015-2023", event: "Key Architect of APC Government" },
      { year: "2027", event: "Presidential Candidate" },
    ],
  },
  gubernatorial: {
    name: "Rev. Fr. Hyacinth Alia",
    title: "Gubernatorial Candidate - Benue State",
    image: "/gubernatorial-candidate-alia-portrait.jpg",
    quote: "Benue State deserves leadership that puts people first.",
    bio: "A man of the people with deep roots in Benue State. Rev. Fr. Alia combines spiritual wisdom with practical governance experience. His grassroots approach and commitment to agricultural development make him the ideal leader to unlock Benue's potential as Nigeria's food basket.",
    achievements: [
      {
        icon: Award,
        title: "Community Development",
        description: "Led over 50 community development projects across Benue State",
      },
      {
        icon: Briefcase,
        title: "Agricultural Innovation",
        description: "Pioneered modern farming cooperatives supporting 10,000+ farmers",
      },
      {
        icon: GraduationCap,
        title: "Youth Empowerment",
        description: "Trained 5,000+ youths in vocational skills and entrepreneurship",
      },
      {
        icon: Heart,
        title: "Peace Building",
        description: "Mediated conflicts and promoted inter-community harmony",
      },
    ],
    timeline: [
      { year: "1995-2010", event: "Parish Priest, Various Locations" },
      { year: "2010-2020", event: "Community Development Leader" },
      { year: "2020-2023", event: "Political Mobilization" },
      { year: "2027", event: "Gubernatorial Candidate" },
    ],
  },
}

export default function CandidateProfiles() {
  const [activeTab, setActiveTab] = useState<"presidential" | "gubernatorial">("presidential")
  const candidate = candidates[activeTab]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-neutral-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("presidential")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "presidential"
                  ? "bg-[#008000] text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Presidential
            </button>
            <button
              onClick={() => setActiveTab("gubernatorial")}
              className={`px-6 py-3 rounded-md font-medium transition-all ${
                activeTab === "gubernatorial"
                  ? "bg-[#008000] text-white shadow-md"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Gubernatorial
            </button>
          </div>
        </div>

        {/* Profile Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Image & Quote */}
          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-6">
              <img
                src={candidate.image || "/placeholder.svg"}
                alt={candidate.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{candidate.name}</h2>
                <p className="text-white/90 text-lg">{candidate.title}</p>
              </div>
            </div>
            <blockquote className="bg-[#008000]/10 border-l-4 border-[#008000] p-6 rounded-r-lg">
              <p className="text-lg italic text-neutral-700">"{candidate.quote}"</p>
            </blockquote>
          </div>

          {/* Right: Bio & Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">Biography</h3>
            <p className="text-neutral-600 leading-relaxed mb-8">{candidate.bio}</p>

            <h3 className="text-2xl font-bold text-[#333333] mb-4">Career Timeline</h3>
            <div className="space-y-4">
              {candidate.timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-24 font-bold text-[#008000]">{item.year}</div>
                  <div className="flex-1">
                    <div className="h-full border-l-2 border-[#008000] pl-4 pb-4">
                      <p className="text-neutral-700 font-medium">{item.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div>
          <h3 className="text-3xl font-bold text-[#333333] text-center mb-12">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {candidate.achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-neutral-200 card-hover">
                  <div className="w-14 h-14 bg-[#008000] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-lg font-bold text-[#333333] mb-2">{achievement.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{achievement.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
