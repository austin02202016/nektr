"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function QuoteSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1.05])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.5, 1])

  return (
    <section className="relative h-[40vh] flex items-center justify-center bg-[#F8F6F1]" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div style={{ scale, opacity }} className="max-w-3xl mx-auto">
          <motion.blockquote
            className="text-2xl md:text-4xl font-light text-[#5E4B8B] italic leading-relaxed"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            "This isn't about getting drunk. It's about getting <span className="gradient-text">dialed in</span>."
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  )
}
