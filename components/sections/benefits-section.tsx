"use client"

import { motion } from "framer-motion"
import { Zap, Leaf, Droplets } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: "60 Calories",
      description: "Low calorie natural energy without the crash",
    },
    {
      icon: Droplets, // Changed from Leaf to Droplets (honey-themed)
      title: "No Added Sugars",
      description: "Pure, natural sweetness from wild honey",
    },
    {
      icon: Leaf, // Changed from Hash to Leaf (plant icon)
      title: "Five Ingredients",
      description: "Simple, clean formula you can trust",
    },
  ]

  return (
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="heading-lg text-slate-900 mb-6">Get the feeling from alcohol without the hangover</h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
              >
                <benefit.icon className="w-10 h-10 text-slate-700" />
              </motion.div>

              <h3 className="heading-md text-slate-900 mb-4">{benefit.title}</h3>
              <p className="body-md text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
