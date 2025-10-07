import { Users, Heart, Calendar, MapPin } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "12,500+",
    label: "Active Volunteers",
    description: "Dedicated supporters across all 23 LGAs",
  },
  {
    icon: Heart,
    value: "₦250M+",
    label: "Raised for Campaign",
    description: "Transparent funding from supporters",
  },
  {
    icon: Calendar,
    value: "150+",
    label: "Events Organized",
    description: "Town halls, rallies, and community meetings",
  },
  {
    icon: MapPin,
    value: "500+",
    label: "Communities Reached",
    description: "Grassroots engagement across Benue",
  },
]

export default function ImpactStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333333] mb-4">Our Movement's Impact</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Together, we're building a powerful grassroots movement for change
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#008000] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold text-[#008000] mb-2">{stat.value}</div>
                <div className="text-lg font-bold text-[#333333] mb-1">{stat.label}</div>
                <p className="text-sm text-neutral-600">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
