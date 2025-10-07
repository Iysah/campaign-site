import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram } from "lucide-react"

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#333333] mb-6">Get in Touch</h2>

      <div className="space-y-6 mb-8">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center flex-shrink-0">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-[#333333] mb-1">Campaign Headquarters</h3>
            <p className="text-neutral-600 leading-relaxed">
              APC Campaign Office
              <br />
              123 Liberation Way, Makurdi
              <br />
              Benue State, Nigeria
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center flex-shrink-0">
            <Phone className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-[#333333] mb-1">Phone</h3>
            <p className="text-neutral-600">
              Main: +234 XXX XXX XXXX
              <br />
              Media: +234 XXX XXX XXXX
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center flex-shrink-0">
            <Mail className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-[#333333] mb-1">Email</h3>
            <p className="text-neutral-600">
              General: info@natat2027.ng
              <br />
              Media: media@natat2027.ng
              <br />
              Volunteer: volunteer@natat2027.ng
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[#008000] rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="text-white" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-[#333333] mb-1">Office Hours</h3>
            <p className="text-neutral-600">
              Monday - Friday: 8:00 AM - 6:00 PM
              <br />
              Saturday: 9:00 AM - 4:00 PM
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-[#008000]/10 rounded-xl p-6 border border-[#008000]/20">
        <h3 className="font-bold text-[#333333] mb-4">Follow Us on Social Media</h3>
        <div className="flex gap-3">
          <a
            href="https://twitter.com/natat2027"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#008000] hover:bg-[#006400] rounded-full flex items-center justify-center transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="text-white" size={20} />
          </a>
          <a
            href="https://facebook.com/natat2027"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#008000] hover:bg-[#006400] rounded-full flex items-center justify-center transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="text-white" size={20} />
          </a>
          <a
            href="https://instagram.com/natat2027"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-[#008000] hover:bg-[#006400] rounded-full flex items-center justify-center transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="text-white" size={20} />
          </a>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-8 bg-neutral-200 rounded-xl h-64 flex items-center justify-center">
        <p className="text-neutral-500">Google Maps Embed Placeholder</p>
      </div>
    </div>
  )
}
