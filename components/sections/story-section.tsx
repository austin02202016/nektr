"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function StorySection() {
  return (
    <section id="story" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="heading-lg text-slate-900">From the Cliffs of the Himalayas</h2>
              <div className="w-24 h-1 bg-slate-900"></div>
            </div>

            <p className="body-lg text-slate-700 leading-relaxed">
              Our founder sources raw mad honey directly from villages in the Himalayan Mountains known for the highest
              quality supply. These remote cliffside hives produce the rarest and most potent mad honey on earth.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/founder.jpeg"
                alt="Founder in the Himalayas sourcing mad honey"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Overlay text */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium uppercase tracking-wider mb-2 opacity-90">The Source</p>
                <h3 className="text-2xl font-semibold">Himalayan Cliffs, Nepal</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
