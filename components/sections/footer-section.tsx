"use client"

import type React from "react"
import Link from "next/link"
import { Instagram, Youtube, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { TikTok } from "./tiktok-icon"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <h3 className="text-2xl font-bold text-amber-200 tracking-tight">MAD NEKTR</h3>
            <p className="text-amber-300 max-w-md leading-relaxed">
              Natural euphoria in a can. Sourced from the Himalayas, designed for those who seek authentic experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <SocialLink href="https://instagram.com/logan.nektr" icon={<Instagram className="h-5 w-5" />} />
              <SocialLink href="https://tiktok.com/@logan.nektr" icon={<TikTok className="h-5 w-5" />} />
              <SocialLink href="https://youtube.com/@logan_nektr" icon={<Youtube className="h-5 w-5" />} />
              <SocialLink href="mailto:hello@madnektr.com" icon={<Mail className="h-5 w-5" />} />
            </div>
          </motion.div>

          {/* REMOVED: Navigation section */}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-amber-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-amber-400 text-sm">&copy; {currentYear} Mad Nektr. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <FooterLink href="#" className="text-amber-400 hover:text-amber-200">
              Privacy Policy
            </FooterLink>
            <FooterLink href="#" className="text-amber-400 hover:text-amber-200">
              Terms of Service
            </FooterLink>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Link
        href={href}
        className="w-10 h-10 bg-amber-800 hover:bg-amber-700 rounded-full flex items-center justify-center text-amber-200 hover:text-amber-100 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </Link>
    </motion.div>
  )
}

function FooterLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
      <Link href={href} className={`text-amber-300 hover:text-amber-100 transition-colors ${className || ""}`}>
        {children}
      </Link>
    </motion.div>
  )
}
