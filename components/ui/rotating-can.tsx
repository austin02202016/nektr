"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function RotatingCan() {
  const [rotation, setRotation] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("rotating-can")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    let animationFrame: number

    const animate = () => {
      if (isInView) {
        setRotation((prev) => {
          // Slower rotation when not hovered
          const speed = isHovered ? 0.5 : 0.2
          return (prev + speed) % 360
        })
      }
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isHovered, isInView])

  return (
    <div
      id="rotating-can"
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative w-[600px] h-[800px] md:w-[900px] md:h-[1200px] transition-transform duration-500 ease-out"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        <Image
          src="/images/can-mockup.png"
          alt="Mad Nektr Can"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 600px, 900px"
          priority
        />
      </motion.div>
    </div>
  )
}
