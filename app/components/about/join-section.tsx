import Link from 'next/link'

export default function JoinSection() {
  return (
    <section className="py-12 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Join the Movement</h2>
        <div className="prose max-w-none mb-8 text-gray-700">
          <p>
            This is not just a campaign—it&apos;s a national movement. If you believe Nigeria 
            deserves better; if you believe in being part of tangible change; if you want 
            to see your voice heard and your town transformed—then you belong here.
          </p>
          <p>
            Join us, engage with us, and help chart the course for the future we all deserve. 
            Because for us, there is truly No Alternative to Alia Tinubu 2027.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Link 
            href="/get-involved" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Involved
          </Link>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}