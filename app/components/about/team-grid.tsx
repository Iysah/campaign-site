import { Mail, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Amina Bello",
    role: "Campaign Director",
    image: "/team-member-campaign-director.jpg",
    bio: "Strategic political consultant with 15+ years experience",
    email: "amina@natat2027.ng",
  },
  {
    name: "Chidi Okonkwo",
    role: "Communications Lead",
    image: "/team-member-communications-lead.jpg",
    bio: "Award-winning journalist and media strategist",
    email: "chidi@natat2027.ng",
  },
  {
    name: "Fatima Yusuf",
    role: "Youth Coordinator",
    image: "/team-member-youth-coordinator.jpg",
    bio: "Youth advocate and community organizer",
    email: "fatima@natat2027.ng",
  },
  {
    name: "Emmanuel Adeyemi",
    role: "Policy Advisor",
    image: "/team-member-policy-advisor.jpg",
    bio: "Economist specializing in development policy",
    email: "emmanuel@natat2027.ng",
  },
  {
    name: "Grace Okoro",
    role: "Volunteer Manager",
    image: "/team-member-volunteer-manager.jpg",
    bio: "Grassroots mobilization expert",
    email: "grace@natat2027.ng",
  },
  {
    name: "Ibrahim Musa",
    role: "Digital Strategy",
    image: "/team-member-digital-strategy.jpg",
    bio: "Tech entrepreneur and digital marketing specialist",
    email: "ibrahim@natat2027.ng",
  },
]

export default function TeamGrid() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Our Campaign Team</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Meet the dedicated professionals working tirelessly to bring the NATAT2027 vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md card-hover">
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-1">{member.name}</h3>
                <p className="text-[#008000] font-medium mb-3">{member.role}</p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 bg-neutral-100 hover:bg-[#008000] hover:text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="Email"
                  >
                    <Mail size={18} />
                  </a>
                  <a
                    href="#"
                    className="w-9 h-9 bg-neutral-100 hover:bg-[#008000] hover:text-white rounded-full flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
