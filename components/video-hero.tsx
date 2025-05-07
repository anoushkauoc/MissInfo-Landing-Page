"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Volume2, VolumeX, Play, Pause, ChevronDown } from "lucide-react"

export default function VideoHero() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Auto-play video when component mounts (muted by default for browser policies)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((e) => {
        console.log("Auto-play was prevented:", e)
      })
      setIsPlaying(true)
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const scrollToContent = () => {
    document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-teal-900/70 flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Healthcare <span className="text-yellow-200">Reimagined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Experience the future of healthcare assistance powered by Retrieval Augmented Generation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg"
              onClick={scrollToContent}
            >
              Discover More
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-200 text-yellow-100 hover:bg-yellow-200/10 px-8 py-6 text-lg"
              onClick={scrollToContent}
            >
              Try the Demo
            </Button>
          </div>
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 left-8 flex space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/30 border-yellow-200/50 hover:bg-black/50 text-yellow-100"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-black/30 border-yellow-200/50 hover:bg-black/50 text-yellow-100"
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-yellow-200 hover:bg-yellow-200/10"
            onClick={scrollToContent}
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  )
}
