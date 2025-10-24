"use client";
import { Card } from "../ui/card";
import Image from "next/image";

const presidentAchievements = [
  {
    title: "Economic Reforms",
    description: "Implementation of key economic reforms including fuel subsidy removal and exchange rate harmonization.",
    impact: "Long-term economic stability initiatives"
  },
  {
    title: "Foreign Investment",
    description: "Attraction of significant foreign investments and strengthening of international relations.",
    impact: "Enhanced economic opportunities"
  },
  {
    title: "National Security",
    description: "Strategic improvements in national security architecture and coordination.",
    impact: "Enhanced national security framework"
  }
];

export default function PresidentAchievements() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">President Tinubu&apos;s Impact</h2>
            <p className="text-gray-600 mb-6">
              Under President Bola Tinubu&apos;s administration, Nigeria has embarked on 
              bold reforms and initiatives aimed at transforming the nation&apos;s economy 
              and strengthening its position on the global stage.
            </p>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden order-1 md:order-2">
            <Image
              src="/tinubu-a.jpg"
              alt="President Bola Tinubu"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {presidentAchievements.map((achievement, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              <div className="text-sm font-medium text-primary">
                Impact: {achievement.impact}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}