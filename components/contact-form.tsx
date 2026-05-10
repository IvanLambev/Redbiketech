"use client"

import { useEffect, useRef } from "react"
import Script from "next/script"
import { CheckCircle2 } from "lucide-react"
import { siteConfig } from "@/lib/site"

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget?: (options: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const calendlyRef = useRef<HTMLDivElement>(null)

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

  const initCalendly = () => {
    if (!calendlyRef.current || !window.Calendly?.initInlineWidget) {
      return
    }

    calendlyRef.current.innerHTML = ""
    window.Calendly.initInlineWidget({
      url: siteConfig.bookingEmbedUrl,
      parentElement: calendlyRef.current,
    })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={initCalendly}
        onReady={initCalendly}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Left content */}
          <div>
            <div className="reveal opacity-0 inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">Book a Demo</span>
            </div>
            
            <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              Ready to Transform Your Firm?
            </h2>
            
            <p className="reveal opacity-0 stagger-2 mt-6 text-lg text-muted-foreground leading-relaxed">
              Choose a time that works for you and we&apos;ll show you how fast file retrieval can transform your practice. No commitment, no pressure, just a personalized demo.
            </p>

            {/* What to expect */}
            <div className="reveal opacity-0 stagger-3 mt-10 space-y-4">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">What to expect</p>
              <ul className="space-y-3">
                {[
                  "30-minute personalized walkthrough",
                  "See your actual use case in action",
                  "Get pricing tailored to your firm size",
                  "Ask anything, we're here to help",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right content - Calendly */}
          <div className="reveal opacity-0 stagger-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl" />

              <div className="relative bg-card border border-border rounded-2xl p-2 shadow-xl overflow-hidden">
                <div
                  ref={calendlyRef}
                  className="calendly-inline-widget"
                  data-url={siteConfig.bookingEmbedUrl}
                  style={{ minWidth: "320px", height: "700px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
