import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  markClassName?: string
  textClassName?: string
}

export function Logo({ className, markClassName, textClassName }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-3 group", className)} aria-label="Redbike Tech home">
      <span
        className={cn(
          "relative flex h-11 w-16 items-center justify-center overflow-hidden rounded-md bg-white shadow-sm ring-1 ring-border/70 transition-transform group-hover:-translate-y-0.5",
          markClassName
        )}
      >
        <Image
          src="/redbiketech-logo.png"
          alt=""
          width={1536}
          height={1024}
          priority
          sizes="64px"
          className="h-full w-full object-contain p-1"
        />
      </span>
      <span className={cn("font-semibold text-lg tracking-tight", textClassName)}>
        Redbike<span className="text-primary">Tech</span>
      </span>
    </Link>
  )
}
