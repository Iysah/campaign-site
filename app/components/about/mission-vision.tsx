import { Target, Eye, Heart } from "lucide-react"

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#008000] rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">Our Mission</h3>
            <p className="text-neutral-600 leading-relaxed">
              To unite all Nigerians under a vision of prosperity, security, and progress. We are committed to
              delivering transparent, accountable governance that puts people first.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#ff0000] rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">Our Vision</h3>
            <p className="text-neutral-600 leading-relaxed">
              A Nigeria where every citizen has access to quality education, healthcare, and economic opportunities. A
              Benue State that leads the nation in agricultural innovation and community development.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#00bfff] rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">Our Values</h3>
            <p className="text-neutral-600 leading-relaxed">
              Integrity, unity, and service. We believe in inclusive governance that respects diversity, promotes peace,
              and empowers every Nigerian to achieve their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
