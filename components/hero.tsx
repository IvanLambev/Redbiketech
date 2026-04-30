"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, Clock, Search, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll(".reveal")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="reveal opacity-0 inline-flex items-center gap-2 bg-accent/50 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">3 onboarding spots left this month</span>
          </div>

          {/* Headline */}
          <h1 className="reveal opacity-0 stagger-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance">
            Stop Searching.{" "}
            <span className="relative">
              <span className="text-primary">Start Advising.</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/40" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="reveal opacity-0 stagger-2 mt-6 sm:mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Your clients ask quick questions. Your team loses billable time digging. Redbike finds the right file and answer in seconds, so you can respond with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="reveal opacity-0 stagger-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base shadow-xl shadow-primary/25 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 group"
            >
              <Link href="#contact">
                Book a Free Demo
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base border-2 hover:bg-muted transition-all duration-300"
            >
              <Link href="#how-it-works">
                See How It Works
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="reveal opacity-0 stagger-4 mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">20+ minutes saved per inquiry</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Private client data</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Answers in seconds</span>
            </div>
          </div>
        </div>

        {/* Interactive Demo Preview */}
        <div ref={searchRef} className="reveal opacity-0 mt-16 lg:mt-20 max-w-3xl mx-auto">
          <div className="relative">
            {/* Glow effect behind */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-2xl opacity-50" />
            
            {/* Main card */}
            <div className="relative bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-medium text-muted-foreground">Redbike Client File Dashboard</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Search bar mockup */}
                <div className="flex items-center gap-3 bg-muted/50 border border-border rounded-xl px-4 py-4">
                  <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {"\"Why didn't John Doe get the $5 deduction in 2024?\""}
                  </span>
                </div>
                
                {/* Response mockup */}
                <div className="mt-6 p-4 bg-accent/30 border border-primary/20 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">Answer found in 0.3 seconds</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Based on John Doe&apos;s 2024 tax return (page 12), the $5 office supplies deduction was disallowed due to insufficient documentation. Receipt was not attached.
                      </p>
                      <div className="mt-3 inline-flex items-center gap-2 text-xs text-primary font-medium">
                        <span className="px-2 py-1 bg-primary/10 rounded">JohnDoe_2024_Return.pdf</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
