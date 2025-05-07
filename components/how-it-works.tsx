import Image from "next/image"

export default function HowItWorks() {
  const steps = [
    {
      title: "Ask a Question",
      description: "Type your health-related question in natural language.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Information Retrieval",
      description: "Our system searches through trusted medical databases to find relevant information.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Context Analysis",
      description: "The AI analyzes the retrieved information in context with your question.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Accurate Response",
      description: "You receive a precise, evidence-based answer to your question.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The <span className="text-yellow-500">RAG</span> Process Explained
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Retrieval Augmented Generation combines the power of AI with access to specialized knowledge.
          </p>
        </div>

        <div className="mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:px-10">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 text-teal-600 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="ml-4 text-2xl leading-6 font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="mt-4 text-lg text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
