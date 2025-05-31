"use client"

import { motion } from "framer-motion"

export function ExperienceSection() {
  return (
    <section className="section-padding bg-white experience-section">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="heading-lg text-slate-900">What Does it Feel Like?</h2>

          <div className="w-24 h-1 bg-slate-900 mx-auto"></div>

          <div className="space-y-8">
            <p className="body-lg text-slate-700 leading-relaxed">
              Experience a gentle euphoria and enhanced social confidence, similar to alcohol but without the negative
              effects. Mad honey has been used for centuries in traditional wellness practices.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 quote-to-hide"
              style={{ display: "none" }}
            >
              <p className="text-xl italic text-slate-800 mb-6 leading-relaxed">
                "This isn't about getting drunk. It's about getting dialed in."
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">100% Legal</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">All Natural</span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">No Hangover</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
