"use client"

import { useEffect, useRef } from "react"
import { FolderSearch, Clock, Frown, Zap, Smile, FileSearch } from "lucide-react"

export function ProblemSolution() {
  const sectionRef = useRef<HTMLElement>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="reveal opacity-0 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            The Problem vs. The Solution
          </h2>
          <p className="reveal opacity-0 stagger-1 mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We transform how accountants access client information
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* The Old Way */}
          <div className="reveal opacity-0 stagger-2">
            <div className="relative h-full">
              {/* Card */}
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg">
                {/* Icon badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted border border-border rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/50" />
                  <span className="text-sm font-medium text-muted-foreground">The Old Way</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  20+ Minutes of Searching
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Spending 20+ billable minutes hunting through endless PDFs and disorganized folders every time a client calls with a quick question.
                </p>

                {/* Pain points */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <FolderSearch className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Endless folder diving</p>
                      <p className="text-sm text-muted-foreground">Clicking through dozens of directories</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Lost billable hours</p>
                      <p className="text-sm text-muted-foreground">Time you can never charge for</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <Frown className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Frustrated clients</p>
                      <p className="text-sm text-muted-foreground">Waiting on hold for simple answers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* The Redbike Way */}
          <div className="reveal opacity-0 stagger-3">
            <div className="relative h-full">
              {/* Glow effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-primary/50 via-primary/20 to-transparent rounded-2xl blur-sm" />
              
              {/* Card */}
              <div className="relative bg-card border border-primary/30 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                {/* Icon badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">The Redbike Way</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Instant Client File Search
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Type {"\"Why was this client's vehicle expense lower in 2024 than 2023?\""} into your secure dashboard and get an instant, accurate answer sourced directly from the client file.
                </p>

                {/* Benefits */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <FileSearch className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Smart document retrieval</p>
                      <p className="text-sm text-muted-foreground">Find exactly what you need</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Answers in seconds</p>
                      <p className="text-sm text-muted-foreground">Not minutes, not hours, seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Smile className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Delighted clients</p>
                      <p className="text-sm text-muted-foreground">Impressive speed builds trust</p>
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
