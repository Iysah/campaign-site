export default function ValuesSection() {
  const values = [
    {
      title: "Unity",
      description: "Bringing together Nigerians across ethnicities, religions and regions, because our strength is in our diversity."
    },
    {
      title: "Progress",
      description: "Harnessing innovation and sound policy to create jobs, uplift communities and accelerate growth."
    },
    {
      title: "Security",
      description: "Ensuring safety and peace so every citizen can thrive without fear."
    },
    {
      title: "Education",
      description: "Investing in the minds of the next generation to build the leadership Nigeria needs."
    }
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}