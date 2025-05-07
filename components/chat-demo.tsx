"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Send, Bot, User } from "lucide-react"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function ChatDemo() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello! I'm your healthcare assistant. Ask me any health-related question, and I'll provide evidence-based information using RAG technology.",
    },
  ])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      let response = ""

      if (input.toLowerCase().includes("headache")) {
        response =
          "Headaches can have various causes including stress, dehydration, lack of sleep, or underlying medical conditions. For occasional headaches, rest, hydration, and over-the-counter pain relievers may help. If you experience severe or recurring headaches, it's advisable to consult with a healthcare professional for proper evaluation."
      } else if (input.toLowerCase().includes("cold") || input.toLowerCase().includes("flu")) {
        response =
          "Common colds and flu are viral infections affecting the respiratory system. Rest, hydration, and over-the-counter medications can help manage symptoms. Most cases resolve within 7-10 days. If symptoms are severe or persistent, consult a healthcare provider, especially if you're in a high-risk group."
      } else {
        response =
          "Based on the medical information I've retrieved, I can provide some general guidance on your question. However, for personalized medical advice, it's always best to consult with a healthcare professional who can consider your specific health history and circumstances."
      }

      const aiMessage: Message = { role: "assistant", content: response }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section id="demo" className="py-20 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Try It Out</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Experience <span className="text-yellow-500">RAG</span> in Action
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Ask our healthcare chatbot a question and see how Retrieval Augmented Generation works.
          </p>
        </div>

        <Card className="border-gray-200 shadow-xl">
          <CardContent className="p-6">
            <div className="h-96 overflow-y-auto mb-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div className={`p-2 rounded-full ${message.role === "user" ? "bg-teal-100" : "bg-yellow-100"}`}>
                      {message.role === "user" ? (
                        <User className="h-5 w-5 text-teal-600" />
                      ) : (
                        <Bot className="h-5 w-5 text-teal-600" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.role === "user" ? "bg-teal-600 text-white" : "bg-yellow-100 text-gray-800"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="p-2 rounded-full bg-yellow-100">
                      <Bot className="h-5 w-5 text-teal-600" />
                    </div>
                    <div className="p-3 rounded-lg bg-yellow-100">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                          style={{ animationDelay: "150ms" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"
                          style={{ animationDelay: "300ms" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex space-x-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a health question..."
                className="flex-grow border-yellow-200 focus:ring-yellow-300 focus:border-yellow-300"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading} className="bg-teal-600 hover:bg-teal-700">
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
