"use client"

import { useEffect, useState } from "react"
import { Users, Calendar, MapPin, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1M+",
    label: "Supporters",
    color: "bg-[#008000]",
  },
  {
    icon: Calendar,
    value: "50+",
    label: "Events Held",
    color: "bg-[#ff0000]",
  },
  {
    icon: MapPin,
    value: "23",
    label: "LGAs Covered",
    color: "bg-[#00bfff]",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Voter Confidence",
    color: "bg-[#008000]",
  },
]

export default function StatsCarousel() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Our Impact in Numbers</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join millions of Nigerians who believe in the APC vision for 2027
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border border-neutral-200 card-hover ${
                  isVisible ? "stat-animate" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 ${stat.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <Icon className="text-white" size={28} />
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#333333] mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-neutral-600">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
