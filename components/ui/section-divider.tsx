import { cn } from "@/lib/utils"

interface SectionDividerProps {
  className?: string
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("w-full flex justify-center py-4", className)}>
      <div className="w-16 h-px bg-gradient-to-r from-[#D6AF66]/30 to-[#C4B7F2]/30"></div>
    </div>
  )
}
