"use client"

import { useEffect, useRef } from "react"
import { Link2, FolderSearch, MessageSquare, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Link2,
    title: "Secure Connection",
    description: "We connect to the file storage your firm already uses, so your team does not have to change how it works.",
    detail: "Client records stay protected and under your control from day one.",
  },
  {
    number: "02",
    icon: FolderSearch,
    title: "Organized Client Files",
    description: "Redbike makes tax returns, PDFs, receipts, and notes searchable by client question, not folder path.",
    detail: "No cleanup project required. Your existing files become easier to use.",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Instant Answers",
    description: "Ask a real client question and get the answer with the source file behind it.",
    detail: "Respond faster, stop guessing, and keep the advisory conversation moving.",
  },
]

export function HowItWorks() {
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
    <section ref={sectionRef} id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">How It Works</span>
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From Scattered Files to Confident Answers
          </h2>
          <p className="reveal opacity-0 stagger-2 mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every quick client question should not turn into a 20-minute scavenger hunt. Redbike gives your team a faster way to find the answer, verify the source, and get back to advising.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="reveal opacity-0" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div className="relative group">
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-border via-primary/30 to-border" />
                      <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50" />
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className="relative h-full">
                  {/* Hover glow */}
                  <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl blur-sm transition-opacity duration-500" />
                  
                  <div className="relative bg-card border border-border group-hover:border-primary/30 rounded-2xl p-8 h-full transition-all duration-300">
                    {/* Step number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-5xl font-bold text-muted/30 group-hover:text-primary/20 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    <p className="text-sm text-muted-foreground/80 italic border-t border-border pt-4">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
