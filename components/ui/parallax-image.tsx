"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  overlayClassName?: string
  speed?: number
}

export function ParallaxImage({ src, alt, className, overlayClassName, speed = 0.3 }: ParallaxImageProps) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${offset * speed}px)`,
        }}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" sizes="100vw" />
      </div>
      <div className={cn("absolute inset-0 bg-black/40", overlayClassName)} />
    </div>
  )
}
