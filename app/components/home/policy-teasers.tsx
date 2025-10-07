import Link from "next/link"
import { ArrowRight, Briefcase, Shield, GraduationCap, Heart, Building, Sprout } from "lucide-react"
import { Button } from "../ui/button"

const policies = [
  {
    icon: Briefcase,
    title: "Economic Growth",
    description: "Creating jobs and opportunities for all Nigerians through sustainable economic policies.",
    color: "bg-[#008000]",
    href: "/platform#economy",
  },
  {
    icon: Shield,
    title: "Security & Peace",
    description: "Ensuring the safety of all citizens with modern security infrastructure and community policing.",
    color: "bg-[#ff0000]",
    href: "/platform#security",
  },
  {
    icon: GraduationCap,
    title: "Quality Education",
    description: "Investing in schools, teachers, and students to build a knowledgeable generation.",
    color: "bg-[#00bfff]",
    href: "/platform#education",
  },
  {
    icon: Heart,
    title: "Healthcare Access",
    description: "Providing affordable, quality healthcare to every Nigerian, especially in rural areas.",
    color: "bg-[#008000]",
    href: "/platform#health",
  },
  {
    icon: Building,
    title: "Infrastructure",
    description: "Building roads, bridges, and facilities that connect communities and drive progress.",
    color: "bg-[#ff0000]",
    href: "/platform#infrastructure",
  },
  {
    icon: Sprout,
    title: "Agriculture",
    description: "Supporting farmers with modern tools, training, and markets to feed the nation.",
    color: "bg-[#00bfff]",
    href: "/platform#agriculture",
  },
]

export default function PolicyTeasers() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Our Platform for Progress</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive policies designed to transform Benue State and Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {policies.map((policy, index) => {
            const Icon = policy.icon
            return (
              <Link
                key={index}
                href={policy.href}
                className="group bg-white rounded-xl p-6 shadow-md border border-neutral-200 hover:shadow-xl transition-all card-hover"
              >
                <div className={`w-14 h-14 ${policy.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#333333] mb-3 group-hover:text-[#008000] transition-colors">
                  {policy.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">{policy.description}</p>
                <div className="flex items-center text-[#008000] font-medium group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-[#008000] hover:bg-[#006400] text-white font-bold px-8">
            <Link href="/platform">
              View Full Platform
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
