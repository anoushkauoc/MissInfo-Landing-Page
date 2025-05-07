"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className={`font-bold text-xl ${isScrolled ? "text-teal-600" : "text-white"}`}>
                Health<span className="text-yellow-300">Chat</span> AI
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#features"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? "text-gray-600 hover:text-teal-600" : "text-white hover:text-yellow-200"
              }`}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? "text-gray-600 hover:text-teal-600" : "text-white hover:text-yellow-200"
              }`}
            >
              How It Works
            </Link>
            <Link
              href="#demo"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isScrolled ? "text-gray-600 hover:text-teal-600" : "text-white hover:text-yellow-200"
              }`}
            >
              Demo
            </Link>
            <Button
              className={`ml-4 ${
                isScrolled ? "bg-teal-600 hover:bg-teal-700" : "bg-yellow-200 text-teal-800 hover:bg-yellow-300"
              }`}
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isScrolled
                  ? "text-gray-400 hover:text-teal-600 hover:bg-gray-100"
                  : "text-white hover:text-yellow-200 hover:bg-white/10"
              } focus:outline-none`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="#features"
              className="text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              How It Works
            </Link>
            <Link
              href="#demo"
              className="text-gray-600 hover:text-teal-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              Demo
            </Link>
            <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}
