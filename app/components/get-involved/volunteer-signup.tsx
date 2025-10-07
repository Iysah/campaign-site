"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const skills = [
  "Canvassing & Door-to-Door",
  "Event Organization",
  "Social Media Management",
  "Graphic Design",
  "Content Writing",
  "Photography/Videography",
  "Data Entry",
  "Phone Banking",
  "Translation (Hausa/Igbo)",
  "Community Outreach",
  "Fundraising",
  "Legal Support",
]

const availability = ["Weekdays", "Weekends", "Evenings", "Flexible"]

export default function VolunteerSignup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    lga: "",
    skills: [] as string[],
    availability: [] as string[],
    experience: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter((s) => s !== skill) : [...prev.skills, skill],
    }))
  }

  const handleAvailabilityToggle = (time: string) => {
    setFormData((prev) => ({
      ...prev,
      availability: prev.availability.includes(time)
        ? prev.availability.filter((a) => a !== time)
        : [...prev.availability, time],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with backend API
    console.log("Volunteer signup:", formData)
    setIsSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (isSubmitted) {
    return (
      <section id="volunteer-signup" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-[#008000] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-bold text-[#333333] mb-4">Welcome to the Team!</h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Thank you for joining the NATAT2027 movement! Our volunteer coordinator will contact you within 48 hours
              with next steps and opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#008000] hover:bg-[#006400] text-white font-bold">
                <Link href="/events">View Upcoming Events</Link>
              </Button>
              <Button asChild variant="outline" className="font-bold bg-transparent">
                <Link href="/platform">Learn About Our Platform</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="volunteer-signup" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Volunteer Signup</h2>
            <p className="text-lg text-neutral-600">
              Join our team of dedicated volunteers working to bring positive change to Benue State
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Personal Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="lga" className="block text-sm font-medium text-neutral-700 mb-2">
                    Local Government Area *
                  </label>
                  <input
                    type="text"
                    id="lga"
                    required
                    value={formData.lga}
                    onChange={(e) => setFormData({ ...formData, lga: e.target.value })}
                    placeholder="e.g., Makurdi, Gboko, Otukpo"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
                  />
                </div>
              </div>
            </div>

            {/* Skills & Interests */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Skills & Interests</h3>
              <p className="text-sm text-neutral-600 mb-4">Select all that apply</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => handleSkillToggle(skill)}
                    className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.skills.includes(skill)
                        ? "border-[#008000] bg-[#008000]/10 text-[#008000]"
                        : "border-neutral-300 text-neutral-700 hover:border-[#008000]/50"
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Availability</h3>
              <p className="text-sm text-neutral-600 mb-4">When can you volunteer?</p>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                {availability.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => handleAvailabilityToggle(time)}
                    className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                      formData.availability.includes(time)
                        ? "border-[#008000] bg-[#008000]/10 text-[#008000]"
                        : "border-neutral-300 text-neutral-700 hover:border-[#008000]/50"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <label htmlFor="experience" className="block text-xl font-bold text-[#333333] mb-4">
                Previous Experience (Optional)
              </label>
              <textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                rows={4}
                placeholder="Tell us about any previous volunteer or campaign experience..."
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-lg py-6">
              Submit Volunteer Application
            </Button>

            <p className="text-xs text-neutral-500 text-center mt-4">
              By submitting this form, you agree to receive campaign updates and volunteer opportunities.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
