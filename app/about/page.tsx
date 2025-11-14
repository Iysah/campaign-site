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
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-4 mb-12">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto text-lg mb-16 text-center space-y-6">
          <p>
            No Alternative to Alia/Tinubu 2027 is not just a slogan — it is a movement born out of conviction,
            passion, and belief in purposeful leadership.
          </p>
          <p>
            We stand firm with Rev. Fr. Dr. Hyacinth Iormem Alia and President Bola Ahmed Tinubu, two leaders whose
            commitment to service, transformation, and progress continues to inspire millions of Nigerians. From Abuja
            to Makurdi, from our communities to the grassroots, their leadership is redefining governance and
            rekindling hope.
          </p>
          <p>
            This movement is the voice of the people — men and women, youths and elders — who believe that continuity is
            the key to sustained progress. We are united by a shared vision of a greater Nigeria and a revived Benue,
            where development is not just promised, but delivered.
          </p>
          <p>
            We believe that leadership is about impact, and with Alia and Tinubu, Nigeria and Benue are on the right
            path. Together, we are building a movement that transcends politics, a movement of hope, development, and
            destiny.
          </p>
          <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-xl">
            There is truly No Alternative to Alia/Tinubu 2027! 🇳🇬
          </blockquote>
        </div>
        
        <MissionSection />
        <ValuesSection />
        {/* <ContentSection /> */}
        <JoinSection />
      </div>
    </main>
  )
}