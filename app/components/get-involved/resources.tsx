import { Download, FileText, ImageIcon, Video } from "lucide-react"
import { Button } from "../ui/button"

const resources = [
  {
    icon: FileText,
    title: "Campaign Flyers",
    description: "Print-ready flyers for distribution in your community",
    format: "PDF",
    size: "3.2 MB",
  },
  {
    icon: ImageIcon,
    title: "Social Media Graphics",
    description: "Shareable images for Facebook, Twitter, and Instagram",
    format: "ZIP",
    size: "12 MB",
  },
  {
    icon: FileText,
    title: "Talking Points",
    description: "Key messages and responses to common questions",
    format: "PDF",
    size: "850 KB",
  },
  {
    icon: Video,
    title: "Campaign Videos",
    description: "Short videos for social media sharing",
    format: "ZIP",
    size: "45 MB",
  },
  {
    icon: FileText,
    title: "Canvassing Scripts",
    description: "Conversation guides for door-to-door outreach",
    format: "PDF",
    size: "1.1 MB",
  },
  {
    icon: FileText,
    title: "Event Planning Guide",
    description: "Step-by-step guide to hosting campaign events",
    format: "PDF",
    size: "2.5 MB",
  },
]

export default function Resources() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Volunteer Resources</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Download materials to help you spread the message and organize in your community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-neutral-200 card-hover">
                <div className="w-14 h-14 bg-[#008000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#008000]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">{resource.title}</h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{resource.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-neutral-500">{resource.format}</span>
                  <span className="text-xs text-neutral-500">{resource.size}</span>
                </div>
                <Button className="w-full bg-[#008000] hover:bg-[#006400] text-white font-medium">
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
