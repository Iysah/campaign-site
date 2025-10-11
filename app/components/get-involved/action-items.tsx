"use client"

import { useState } from "react"
import { UserPlus, Share2, Calendar, DollarSign, MessageSquare, FileText } from "lucide-react"
import { Button } from "../ui/button"

const actions = [
  {
    icon: UserPlus,
    title: "Become a Volunteer",
    description: "Join our team and help organize events, canvass neighborhoods, and spread the message.",
    cta: "Sign Up to Volunteer",
    color: "bg-[#008000]",
    action: "volunteer",
  },
  {
    icon: Share2,
    title: "Share on Social Media",
    description: "Amplify our message by sharing campaign content with your friends and family online.",
    cta: "Get Social Media Kit",
    color: "bg-[#00bfff]",
    action: "share",
  },
  {
    icon: Calendar,
    title: "Host an Event",
    description: "Organize a town hall, house party, or community meeting in your area.",
    cta: "Request Event Kit",
    color: "bg-[#ff0000]",
    action: "host",
  },
  {
    icon: DollarSign,
    title: "Make a Donation",
    description: "Support the campaign financially to help us reach more communities.",
    cta: "Donate Now",
    color: "bg-[#008000]",
    action: "donate",
  },
  {
    icon: MessageSquare,
    title: "Join the Conversation",
    description: "Participate in policy discussions and share your ideas for Benue's future.",
    cta: "Join Community Forum",
    color: "bg-[#00bfff]",
    action: "forum",
  },
  {
    icon: FileText,
    title: "Register Voters",
    description: "Help ensure every eligible Nigerian is registered and ready to vote in 2027.",
    cta: "Get Registration Materials",
    color: "bg-[#ff0000]",
    action: "register",
  },
]

export default function ActionItems() {
  const [selectedAction, setSelectedAction] = useState<string | null>(null)

  const handleAction = (action: string) => {
    if (action === "volunteer") {
      document.getElementById("volunteer-signup")?.scrollIntoView({ behavior: "smooth" })
    } else if (action === "donate") {
      window.location.href = "/donate"
    } else {
      setSelectedAction(action)
      // TODO: Implement modals for other actions
      console.log("Action selected:", action)
    }
  }

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Ways to Get Involved</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose how you want to contribute to the movement. Every action makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-neutral-200 card-hover flex flex-col"
              >
                <div className={`w-14 h-14 ${action.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-3">{action.title}</h3>
                <p className="text-neutral-600 leading-relaxed mb-6 flex-1">{action.description}</p>
                <Button
                  onClick={() => handleAction(action.action)}
                  className={`w-full ${action.color} hover:opacity-90 text-white font-bold`}
                >
                  {action.cta}
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
