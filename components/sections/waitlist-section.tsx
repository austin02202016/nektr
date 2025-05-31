"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Users, Clock } from "lucide-react"
import { useEmailSubmission } from "@/hooks/use-email-submission"

export function WaitlistSection() {
  const [email, setEmail] = useState("")
  const { submitEmail, isSubmitting, submitted, message, showSuccessAnimation, resetForm } = useEmailSubmission()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      const result = await submitEmail(email, "Main Waitlist")
      if (result.success) {
        setEmail("") // Clear the form
      }
    }
  }

  return (
    <section id="waitlist" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="heading-lg text-amber-900">Join the Waitlist</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto"></div>
            <p className="body-lg text-amber-700 max-w-2xl mx-auto">
              Be among the first to experience Mad Nektr. Limited first batch launching soon.
            </p>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center space-x-8 text-sm text-amber-600">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>100+ on waitlist</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Launching Q2 2025</span>
            </div>
          </div>

          {showSuccessAnimation ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="p-8 rounded-2xl border border-white/30 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f5b2d6, #87c7ff, #c4b7f2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              {/* Animated Background Pulse */}
              <motion.div
                initial={{ scale: 0, opacity: 0.3 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 bg-white/20 rounded-full"
              />

              {/* Animated Checkmark SVG */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
                className="relative z-10 flex justify-center mb-4"
              >
                <svg width="80" height="80" viewBox="0 0 80 80" className="checkmark-svg">
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="35"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.9)"
                    strokeWidth="4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  />
                  <motion.path
                    d="M25 40l10 10 20-20"
                    fill="none"
                    stroke="white"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  />
                </svg>
              </motion.div>

              {/* Success Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="relative z-10 text-center"
              >
                <h3
                  className="text-2xl font-semibold mb-3 text-white"
                  style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}
                >
                  Welcome to the Waitlist!
                </h3>
                <p
                  className="text-white text-lg leading-relaxed"
                  style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}
                >
                  {message}
                </p>

                {/* Subtle success indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                  className="flex items-center justify-center space-x-6 mt-6 text-sm"
                >
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full font-medium backdrop-blur-sm">
                    ✓ Email Confirmed
                  </span>
                  <span className="px-4 py-2 bg-white/20 text-white rounded-full font-medium backdrop-blur-sm">
                    ✓ Notifications On
                  </span>
                </motion.div>

                <button
                  onClick={resetForm}
                  className="mt-6 text-sm text-white/80 hover:text-white underline transition-colors"
                >
                  Add another email
                </button>
              </motion.div>
            </motion.div>
          ) : submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl border border-white/30 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f5b2d6, #87c7ff, #c4b7f2)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CheckCircle className="h-12 w-12 text-white mx-auto mb-4" />
              <h3
                className="text-xl font-semibold mb-2 text-white"
                style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}
              >
                Success!
              </h3>
              <p className="text-white" style={{ textShadow: "0 1px 2px rgba(0, 0, 0, 0.2)" }}>
                {message}
              </p>
              <button onClick={resetForm} className="mt-4 text-sm text-white/80 hover:text-white underline">
                Add another email
              </button>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className={`space-y-4 max-w-md mx-auto transition-all duration-300 ${isSubmitting ? "opacity-70" : "opacity-100"}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-4 rounded-full border-2 border-amber-200 focus:border-amber-400 focus:ring-amber-400 text-lg transition-all duration-200"
                />
                <Button
                  type="submit"
                  className="premium-button whitespace-nowrap relative overflow-hidden"
                  disabled={isSubmitting}
                >
                  {isSubmitting && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2 }}
                      className="absolute top-0 left-0 h-full bg-white/20 rounded-full"
                    />
                  )}
                  <span className="relative z-10">{isSubmitting ? "Joining..." : "Join Waitlist"}</span>
                </Button>
              </div>
              <p className="text-sm text-amber-600">We respect your privacy. No spam, just updates about Mad Nektr.</p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
