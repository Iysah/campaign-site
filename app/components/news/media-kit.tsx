import { Download, FileText, ImageIcon, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

const mediaAssets = [
  {
    icon: FileText,
    title: "Press Kit",
    description: "Official campaign materials, fact sheets, and press releases",
    size: "2.5 MB",
    format: "PDF",
  },
  {
    icon: ImageIcon,
    title: "Logo Package",
    description: "High-resolution logos in various formats and color schemes",
    size: "5.1 MB",
    format: "ZIP",
  },
  {
    icon: FileText,
    title: "Candidate Bios",
    description: "Detailed biographies and achievements of Alia and Tinubu",
    size: "1.2 MB",
    format: "PDF",
  },
  {
    icon: Video,
    title: "Campaign Videos",
    description: "Official campaign videos and promotional materials",
    size: "150 MB",
    format: "ZIP",
  },
]

export default function MediaKit() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Media Kit</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Download official campaign materials, logos, and resources for media coverage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaAssets.map((asset, index) => {
            const Icon = asset.icon
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-neutral-200 card-hover">
                <div className="w-14 h-14 bg-[#008000]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-[#008000]" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#333333] mb-2">{asset.title}</h3>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">{asset.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-neutral-500">{asset.format}</span>
                  <span className="text-xs text-neutral-500">{asset.size}</span>
                </div>
                <Button className="w-full bg-[#008000] hover:bg-[#006400] text-white font-medium">
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-600 mb-4">For media inquiries, please contact our communications team</p>
          <Button asChild variant="outline" size="lg" className="font-bold bg-transparent">
            <a href="mailto:media@natat2027.ng">media@natat2027.ng</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
