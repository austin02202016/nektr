"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function ProductSection() {
  const features = ["Mad Honey Infused", "100% Natural", "Crafted for Clarity", "Matte White / Luxe Gradient"]

  return (
    <section id="product" className="py-24 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <Image
              src="/images/can-mockup.png"
              alt="Mad Nektr Can"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light mb-8 tracking-tight">Crafted for the Moment</h2>

            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="h-px w-12 bg-gradient-to-r from-indigo-500 to-purple-500 mr-4" />
                  <span className="text-xl font-light">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-12 p-6 border border-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-white/80 italic">
                "Mad Nektr changed how I approach social events. I get the confidence boost without the foggy mind. It's
                the perfect balance."
              </p>
              <p className="mt-4 text-white/60 text-sm">— Sean P., Tech Founder</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
