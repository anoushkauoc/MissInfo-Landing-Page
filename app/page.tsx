import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import ChatDemo from "@/components/chat-demo"
import Footer from "@/components/footer"
import VideoHero from "@/components/video-hero"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <VideoHero />
      <div id="main-content">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <ChatDemo />
        </main>
        <Footer />
      </div>
    </div>
  )
}
