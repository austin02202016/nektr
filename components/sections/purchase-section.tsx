"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PurchaseSection() {
  return (
    <section className="section-padding bg-gray-50 purchase-section">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center order-2 lg:order-1 purchase-can-container"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Subtle background glow */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
              />

              {/* Product Image with original size */}
              <motion.div
                className="relative z-10 float-animation purchase-can-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/can-mockup.png"
                  alt="Mad Nektr Can"
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-4">
              <h2 className="heading-lg text-slate-900">Mad Nektr</h2>
              <p className="text-xl text-slate-600 font-light">Microdosed Mad Honey</p>
              <div className="w-24 h-1 bg-slate-900"></div>
            </div>

            <p className="body-lg text-slate-700 leading-relaxed">
              Experience natural euphoria with our carefully crafted blend of Himalayan mad honey. Each can delivers the
              perfect microdose for enhanced social confidence without the negative effects of alcohol.
            </p>

            {/* Product highlights */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">60</div>
                <div className="text-sm text-slate-600 font-medium">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">0g</div>
                <div className="text-sm text-slate-600 font-medium">Added Sugar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">5</div>
                <div className="text-sm text-slate-600 font-medium">Ingredients</div>
              </div>
            </div>

            {/* Exclusivity messaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <p className="text-slate-900 font-semibold mb-2">Limited First Batch</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Only 1,250 4-pack boxes available for our inaugural launch. Reserve yours now.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href="/product">
                <Button size="lg" className="premium-button text-lg w-full">
                  Join the Waitlist
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
