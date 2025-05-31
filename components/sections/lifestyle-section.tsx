"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function LifestyleSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0])

  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-[#F8F6F1]" ref={sectionRef}>
      <motion.div className="absolute inset-0 bg-[#F8F6F1]/50" style={{ y, opacity }}></motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-light text-[#5E4B8B] mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Built for the new elite.
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-[#2A2A2A] font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            For those who lead the room and own the moment—without paying for it in the morning.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
