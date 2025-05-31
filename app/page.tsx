"use client"

import { AnnouncementBar } from "@/components/ui/announcement-bar"
import { Navbar } from "@/components/ui/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { PurchaseSection } from "@/components/sections/purchase-section"
import { StorySection } from "@/components/sections/story-section"
import { WaitlistSection } from "@/components/sections/waitlist-section"
import { FooterSection } from "@/components/sections/footer-section"
import { CustomCursor } from "@/components/ui/custom-cursor"

export default function Home() {
  return (
    <main className="min-h-screen">
      <CustomCursor />
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ExperienceSection />
      <PurchaseSection />
      <StorySection />
      <WaitlistSection />
      <FooterSection />
    </main>
  )
}
