"use client"

import { useEffect, useRef } from "react"
import { DollarSign, Shield, Heart, Wrench, CheckCircle2 } from "lucide-react"

const benefits = [
  {
    icon: DollarSign,
    title: "Eliminate Unpaid Admin Time",
    description: "Stop doing free research for quick client calls. Find the answer before the phone rings twice.",
    highlights: ["Reclaim 20+ minutes per inquiry", "Bill more hours", "Boost firm profitability"],
  },
  {
    icon: Shield,
    title: "Ironclad Security",
    description: "Built with accountants in mind, so sensitive client financial data stays protected, private, and under your control.",
    highlights: ["Private by design", "Secure file access", "Data stays under your control"],
  },
  {
    icon: Heart,
    title: "Happier Clients",
    description: "Provide lightning-fast responses to client inquiries, elevating your firm's reputation for customer service.",
    highlights: ["Instant answers impress clients", "Build trust and loyalty", "Stand out from competitors"],
  },
  {
    icon: Wrench,
    title: "No IT Degree Required",
    description: "We handle the setup, the maintenance, and the hosting. You just log in and search.",
    highlights: ["Full white-glove setup", "Ongoing support included", "Zero technical hassle"],
  },
]

export function Benefits() {
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
    <section ref={sectionRef} id="benefits" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="reveal opacity-0 inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Benefits</span>
          </div>
          <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Reclaim Your Billable Hours
          </h2>
          <p className="reveal opacity-0 stagger-2 mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Make the painful parts of client service faster, calmer, and easier to bill
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="reveal opacity-0" 
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="group relative h-full">
                {/* Hover glow */}
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-2xl blur-sm transition-opacity duration-500" />
                
                <div className="relative bg-card border border-border group-hover:border-primary/30 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {benefit.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
