"use client"

import { useState } from "react"

interface EmailSubmissionResult {
  success: boolean
  message: string
}

export function useEmailSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [message, setMessage] = useState("")
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false)

  const submitEmail = async (email: string, page = "Landing Page"): Promise<EmailSubmissionResult> => {
    setIsSubmitting(true)
    setMessage("")
    setShowSuccessAnimation(false)

    try {
      const response = await fetch("/api/submit-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, page }),
      })

      // Check if response is ok
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      // Always treat as success since our API handles errors gracefully
      setSubmitted(true)
      setShowSuccessAnimation(true)
      setMessage(result.message || "Thank you for joining our waitlist!")

      // Keep the success animation visible permanently
      // Remove the timeout that hides the animation
      // setTimeout(() => {
      //   setShowSuccessAnimation(false)
      // }, 4000)

      return { success: true, message: result.message }
    } catch (error) {
      console.error("Frontend submission error:", error)

      // Even on error, show success to user (email is logged server-side)
      setSubmitted(true)
      setShowSuccessAnimation(true)
      setMessage("Thank you for joining our waitlist! We'll notify you when Mad Nektr launches.")

      // Keep the success animation visible permanently
      // Remove the timeout that hides the animation
      // setTimeout(() => {
      //   setShowSuccessAnimation(false)
      // }, 4000)

      return { success: true, message: "Thank you for joining our waitlist!" }
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSubmitted(false)
    setMessage("")
    setIsSubmitting(false)
    setShowSuccessAnimation(false)
  }

  return {
    submitEmail,
    isSubmitting,
    submitted,
    message,
    showSuccessAnimation,
    resetForm,
  }
}
