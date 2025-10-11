"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle } from "lucide-react"
import { Button } from "../ui/button"

const inquiryTypes = [
  "General Inquiry",
  "Volunteer Opportunities",
  "Media Request",
  "Event Information",
  "Policy Questions",
  "Donation Support",
  "Partnership Proposal",
  "Other",
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Integrate with backend API
    console.log("Contact form submission:", formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 text-center">
        <div className="w-16 h-16 bg-[#008000] rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="text-white" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-[#333333] mb-4">Message Sent!</h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">
          Thank you for contacting us. Our team will respond to your inquiry within 24-48 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)} className="bg-[#008000] hover:bg-[#006400] text-white font-bold">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#333333] mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8">
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
              placeholder="Enter your full name"
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
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
              placeholder="+234 XXX XXX XXXX"
            />
          </div>

          <div>
            <label htmlFor="inquiryType" className="block text-sm font-medium text-neutral-700 mb-2">
              Inquiry Type *
            </label>
            <select
              id="inquiryType"
              required
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
            >
              <option value="">Select an inquiry type</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={6}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000]"
              placeholder="Tell us how we can help..."
            />
          </div>

          <Button type="submit" className="w-full bg-[#ff0000] hover:bg-[#cc0000] text-white font-bold text-lg py-6">
            Send Message
          </Button>

          <p className="text-xs text-neutral-500 text-center">
            We respect your privacy and will never share your information.
          </p>
        </div>
      </form>
    </div>
  )
}
