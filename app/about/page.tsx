import { Metadata } from 'next'
import MissionSection from '../components/about/mission-section'
import ValuesSection from '../components/about/values-section'
import ContentSection from '../components/about/content-section'
import JoinSection from '../components/about/join-section'

export const metadata: Metadata = {
  title: 'About Us | NATAT2027',
  description: 'Learn about our mission, values, and vision for a stronger Nigeria under the NATAT2027 campaign.',
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto text-lg mb-16 text-center">
          <p>
            At NATAT2027 – "No Alternative To Alia Tinubu 2027", we are united under a singular vision: 
            to build a stronger Nigeria by empowering the states and uplifting our people. We believe 
            that the future of our nation lies in bold, inclusive transformation anchored in unity, 
            progress, security, and quality education.
          </p>
        </div>
        
        <MissionSection />
        <ValuesSection />
        <ContentSection />
        <JoinSection />
      </div>
    </main>
  )
}