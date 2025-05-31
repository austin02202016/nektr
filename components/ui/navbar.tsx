"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault()
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
    if (isOpen) {
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      className={cn(
        "navbar navigation fixed w-full left-0 right-0 transition-all duration-500 ease-out",
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-gray-100 navbar-scrolled"
          : "bg-transparent py-6",
      )}
      style={{
        position: "fixed",
        top: scrolled ? "0px" : "48px",
        zIndex: scrolled ? 10000 : 100,
        width: "100%",
        left: 0,
        right: 0,
        ...(scrolled
          ? { backgroundColor: "rgba(248, 246, 241, 0.95)", borderBottomColor: "rgba(214, 175, 102, 0.2)" }
          : {}),
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link href="/" className="text-slate-900 font-bold text-2xl tracking-tight">
              MAD NEKTR
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="premium-button-outline" onClick={scrollToWaitlist}>
                Join the Waitlist
              </Button>
            </motion.div>
          </div>

          <motion.button
            className="md:hidden text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-white z-50 pt-20"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center space-y-8 p-8">
            <NavLinks mobile onClick={() => setIsOpen(false)} />
            <Button className="premium-button w-full" onClick={scrollToWaitlist}>
              Join the Waitlist
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLinks({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) {
  const links = [
    { name: "Story", href: "#story" },
    { name: "Benefits", href: "#benefits" },
  ]

  return (
    <>
      {links.map((link) => (
        <motion.div key={link.name} className="relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <Link
            href={link.href}
            className={cn(
              "text-slate-700 hover:text-slate-900 transition-colors font-medium",
              mobile ? "text-2xl py-2" : "text-sm tracking-wide",
            )}
            onClick={onClick}
          >
            {link.name}
            {!mobile && (
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        </motion.div>
      ))}
    </>
  )
}
