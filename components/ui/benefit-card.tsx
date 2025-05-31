"use client"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export function BenefitCard({ icon: Icon, title, description, className }: BenefitCardProps) {
  return (
    <motion.div
      className={cn(
        "p-6 rounded-lg border border-[#D6AF66]/30 bg-white shadow-sm transition-all duration-300 h-full flex flex-col",
        className,
      )}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
        borderColor: "rgba(214, 175, 102, 0.5)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="mb-4"
      >
        <Icon className="h-8 w-8 text-[#5E4B8B]" />
      </motion.div>
      <h3 className="text-xl font-medium mb-2 text-[#5E4B8B]">{title}</h3>
      <p className="text-[#2A2A2A] text-sm leading-relaxed mt-auto">{description}</p>
    </motion.div>
  )
}
