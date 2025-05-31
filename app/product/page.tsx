"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { useEmailSubmission } from "@/hooks/use-email-submission"

export default function ProductPage() {
  const [email, setEmail] = useState("")
  const [quantity, setQuantity] = useState(1)

  const { submitEmail, isSubmitting, submitted, message, resetForm } = useEmailSubmission()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      const result = await submitEmail(email, "Pre-Order Page")
      if (result.success) {
        setEmail("") // Clear the form
      }
    }
  }

  const ingredients = [
    "Himalayan Mad Honey",
    "Sparkling Water",
    "Natural Flavoring",
    "Citric Acid",
    "Natural Preservatives",
  ]

  const faqs = [
    {
      question: "What is mad honey?",
      answer:
        "Mad honey is a rare type of honey produced by bees that feed on rhododendron flowers in the Himalayas. It contains natural compounds that create a euphoric effect.",
    },
    {
      question: "Is it legal?",
      answer:
        "Yes, mad honey is completely legal in the United States and most countries worldwide. It's a natural product that has been consumed for centuries.",
    },
    {
      question: "How does it feel?",
      answer:
        "Users report a gentle euphoria, enhanced social confidence, and mental clarity without the negative effects of alcohol like hangovers or impaired judgment.",
    },
  ]

  return (
    <div className="min-h-screen bg-white product-page" style={{ backgroundColor: "#f8f6f1" }}>
      {/* Header */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <Link href="/" className="text-slate-900 font-bold text-xl tracking-tight">
              MAD NEKTR
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative product-can-container"
          >
            <div className="sticky top-24">
              <div className="relative w-full max-w-lg mx-auto">
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

                {/* Product Image */}
                <motion.div className="relative z-10" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/images/can-mockup.png"
                    alt="Mad Nektr Can"
                    width={500}
                    height={750}
                    className="w-full h-auto object-contain drop-shadow-2xl"
                    style={{ transform: "scale(1.4)" }}
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Product Info */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-light text-slate-900 tracking-tight">Mad Nektr</h1>
              <p className="text-xl text-slate-600 font-light">Microdosed Mad Honey</p>
              <div className="w-24 h-1 bg-slate-900"></div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="text-3xl font-bold text-slate-900">$25.00</div>
              <p className="text-sm text-slate-500">per 4-pack</p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">60</div>
                <div className="text-sm text-slate-600 font-medium">Calories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">0g</div>
                <div className="text-sm text-slate-600 font-medium">Added Sugar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">5</div>
                <div className="text-sm text-slate-600 font-medium">Ingredients</div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900">Product Description</h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Experience natural euphoria with our carefully crafted blend of Himalayan mad honey. Each can delivers
                  the perfect microdose for enhanced social confidence, mental clarity, and a gentle mood lift without
                  the negative effects of alcohol.
                </p>
                <p>
                  Sourced directly from remote cliffside hives in the Himalayan mountains, our mad honey is the rarest
                  and most potent on earth. Combined with sparkling water and natural flavoring, Mad Nektr offers a
                  sophisticated alternative for the modern social experience.
                </p>
              </div>
            </div>

            {/* Pre-Order Section */}
            <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-slate-900">Pre-Order - Coming Soon</h3>
                <p className="text-slate-600">Be the first to experience Mad Nektr</p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center space-y-4 p-6 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #f5b2d6, #87c7ff, #c4b7f2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CheckCircle className="h-12 w-12 text-white mx-auto" />
                  <h4
                    className="text-xl font-semibold text-white"
                    style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}
                  >
                    You're on the list!
                  </h4>
                  <p className="text-white" style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}>
                    {message}
                  </p>
                  <button onClick={resetForm} className="mt-4 text-sm text-white/80 hover:text-white underline">
                    Add another email
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-900">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="px-4 py-3 rounded-lg border border-gray-200 focus:border-slate-900 focus:ring-slate-900/20 bg-white"
                    />
                  </div>
                  <Button type="submit" className="premium-button w-full text-lg py-3" disabled={isSubmitting}>
                    {isSubmitting ? "Joining..." : "Join Waitlist"}
                  </Button>
                  <div className="text-center space-y-1">
                    <p className="text-xs text-slate-500">
                      Enter your email to reserve your spot and be notified when Mad Nektr launches
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      No payment required. Pre-order notifications only.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Ingredients */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">Ingredients</h3>
              <ul className="space-y-3">
                {ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center space-x-3 text-slate-700">
                    <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nutritional Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">Nutritional Information</h3>
              <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-700">Calories</span>
                  <span className="font-semibold text-slate-900">60</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Total Carbohydrates</span>
                  <span className="font-semibold text-slate-900">10g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Sugars</span>
                  <span className="font-semibold text-slate-900">8g (natural)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Sodium</span>
                  <span className="font-semibold text-slate-900">5mg</span>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{faq.question}</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
