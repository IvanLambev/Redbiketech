"use client"

import { useEffect, useRef } from "react"
import { Target, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Purpose-Built",
    description: "Every feature designed specifically for tax and accounting professionals.",
  },
  {
    icon: Lightbulb,
    title: "Built for Relief",
    description: "We turn tedious file hunts into simple answers your team can trust.",
  },
  {
    icon: Users,
    title: "Partner Mindset",
    description: "Your success is our success. We're in this together.",
  },
]

export function About() {
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
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <div className="reveal opacity-0 inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h2 className="reveal opacity-0 stagger-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              We Build Tools That Get Out of Your Way
            </h2>
            
            <div className="reveal opacity-0 stagger-2 mt-8 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We started Redbike Tech because we saw brilliant accountants wasting their expertise on administrative scavenger hunts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are builders focused on the practical, everyday needs of tax professionals. We build tools that get out of your way and let you do what you do best: <span className="text-foreground font-medium">advise your clients.</span>
              </p>
            </div>

            {/* Stats */}
            <div className="reveal opacity-0 stagger-3 mt-10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground mt-1">Minutes saved per inquiry</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">Uptime guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground mt-1">Setup hassle</div>
              </div>
            </div>
          </div>

          {/* Right content - Values cards */}
          <div className="reveal opacity-0 stagger-4 space-y-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/20 via-transparent to-transparent rounded-xl blur-sm transition-opacity duration-300" />
                
                <div className="relative flex items-start gap-5 bg-card border border-border group-hover:border-primary/30 rounded-xl p-6 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
