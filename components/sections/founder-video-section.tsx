"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

export function FounderVideoSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 })

  // Create a dynamic iframe when in view
  useEffect(() => {
    if (isInView && videoContainerRef.current) {
      // Clear any existing content
      while (videoContainerRef.current.firstChild) {
        videoContainerRef.current.removeChild(videoContainerRef.current.firstChild)
      }

      // Create new iframe with autoplay
      const iframe = document.createElement("iframe")
      iframe.src = "https://www.instagram.com/reel/DJMPvxcshhQ/embed/?autoplay=1&muted=1"
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.style.border = "none"
      iframe.style.background = "#F8F6F1"
      iframe.style.position = "absolute"
      iframe.style.inset = "0"
      iframe.frameBorder = "0"
      iframe.scrolling = "no"
      iframe.allowFullscreen = true
      iframe.title = "Our Mission Video"

      // Add load handler
      iframe.onload = () => {
        setIsLoaded(true)
      }

      // Append to container
      videoContainerRef.current.appendChild(iframe)
    }
  }, [isInView])

  return (
    <section className="py-8 bg-[#F8F6F1] text-[#2A2A2A]" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* LEFT column - Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[600px] md:h-[650px] overflow-hidden rounded-xl bg-[#F8F6F1]"
          >
            {!isLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F8F6F1] z-10">
                <div className="w-12 h-12 rounded-full border-2 border-[#5E4B8B] border-t-transparent animate-spin mb-4"></div>
                <p className="text-[#5E4B8B] text-sm font-light">Loading our story</p>
              </div>
            )}

            <motion.div
              ref={videoContainerRef}
              className="w-full h-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* iframe will be dynamically inserted here */}
            </motion.div>
          </motion.div>

          {/* RIGHT column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-md ml-auto"
          >
            <h2 className="text-3xl md:text-4xl font-light mb-3 tracking-tight text-[#5E4B8B]">Our Mission</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D6AF66] to-[#C4B7F2] mb-4"></div>
            <p className="text-[#2A2A2A] text-lg leading-relaxed">
              Our founder personally sources every batch of mad honey from the most authentic, high-quality suppliers
              deep in the Himalayan mountains. These remote cliffside hives produce the rarest and most potent mad honey
              on earth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
