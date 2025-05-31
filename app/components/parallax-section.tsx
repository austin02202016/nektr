"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/founder.jpeg')",
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundPosition: "center 30%",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex flex-col items-center justify-end text-white p-8 md:p-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-light mb-6 tracking-wide"
        >
          FROM THE PEAKS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-light text-center max-w-2xl mb-16"
        >
          Every can of Mad Nektr is born in the high cliffs of Nepal, where rare rhododendron-fed bees create a honey
          unlike any other.
        </motion.p>
      </div>
    </section>
  )
}
