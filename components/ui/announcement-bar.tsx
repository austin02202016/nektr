"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="announcement-bar banner"
      style={{
        background: "linear-gradient(135deg, #5e4b8b, #87c7ff, #f5b2d6)",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: 9999,
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontSize: "14px",
        padding: "0 16px",
      }}
    >
      <div className="flex items-center justify-center">
        <span className="mr-3 font-medium tracking-wide">LAUNCHING SOON — JOIN THE WAITLIST</span>
        <Link
          href="#waitlist"
          className="underline underline-offset-2 font-semibold hover:text-gray-200 transition-colors"
        >
          SIGN UP HERE
        </Link>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:text-gray-200 transition-colors"
        aria-label="Close announcement"
        style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)" }}
      >
        <X className="h-4 w-4" />
      </button>
    </motion.div>
  )
}
