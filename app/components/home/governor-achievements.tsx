"use client";
import { Card } from "../ui/card";
import Image from "next/image";

const governorAchievements = [
  {
    title: "Civil Service Reform",
    description: "Implementation of comprehensive civil service reforms, ensuring prompt payment of salaries and pensions to civil servants.",
    impact: "Improved workforce morale and efficiency in public service delivery"
  },
  {
    title: "Infrastructure Development",
    description: "Initiated and completed several road construction projects across Benue State, improving connectivity and commerce.",
    impact: "Enhanced transportation network and economic growth"
  },
  {
    title: "Agriculture Revolution",
    description: "Modernization of agricultural practices and support for farmers through various initiatives and programs.",
    impact: "Increased food production and farmer empowerment"
  },
  {
    title: "Healthcare Improvement",
    description: "Renovation and equipping of healthcare facilities across the state, improving access to quality healthcare.",
    impact: "Better healthcare delivery and improved public health"
  },
  {
    title: "Education Enhancement",
    description: "Investment in education infrastructure and teacher training programs.",
    impact: "Improved quality of education across the state"
  }
];

export default function GovernorAchievements() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/Alia.jpg"
              alt="Governor Hyacinth Iormem Alia"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-4">Governor Alia&apos;s Achievements</h2>
            <p className="text-gray-600 mb-6">
              Under the leadership of Governor Hyacinth Iormem Alia, Benue State has witnessed significant
              progress across various sectors. His administration has brought transformative changes
              focusing on sustainable development and people-oriented policies.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {governorAchievements.map((achievement, index) => (
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