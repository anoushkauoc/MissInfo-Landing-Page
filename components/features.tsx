import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Brain, BookOpen, Shield } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Knowledge Retrieval",
      description: "Accesses and retrieves relevant medical information from trusted databases in real-time.",
      icon: <Database className="h-10 w-10 text-teal-500" />,
    },
    {
      title: "Contextual Understanding",
      description: "Understands the context of your questions to provide more accurate and relevant responses.",
      icon: <Brain className="h-10 w-10 text-teal-500" />,
    },
    {
      title: "Evidence-Based Answers",
      description: "Provides responses backed by the latest medical research and clinical guidelines.",
      icon: <BookOpen className="h-10 w-10 text-teal-500" />,
    },
    {
      title: "Privacy Focused",
      description: "Your health data is protected with enterprise-grade security and privacy measures.",
      icon: <Shield className="h-10 w-10 text-teal-500" />,
    },
  ]

  return (
    <section id="features" className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Powered by <span className="text-yellow-500">Retrieval Augmented Generation</span>
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our healthcare chatbot combines the power of large language models with the precision of medical knowledge
            retrieval.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-yellow-200"
            >
              <CardHeader>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-50 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-medium text-gray-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-500">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
