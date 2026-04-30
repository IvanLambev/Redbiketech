"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const storageOptions = [
  "Google Drive",
  "Dropbox",
  "OneDrive",
  "Local Server",
  "Other",
]

const employeeRanges = [
  "1-5",
  "6-15",
  "16-50",
  "50+",
]

export function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    firmName: "",
    email: "",
    phone: "",
    employees: "",
    storage: "",
  })

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground">
              We&apos;ve received your demo request. Our team will reach out within 24 hours to schedule your personalized walkthrough.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
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
              Fill out the form and we&apos;ll show you how fast file retrieval can transform your practice. No commitment, no pressure, just a personalized demo.
            </p>

            {/* What to expect */}
            <div className="reveal opacity-0 stagger-3 mt-10 space-y-4">
              <p className="text-sm font-semibold text-foreground uppercase tracking-wider">What to expect</p>
              <ul className="space-y-3">
                {[
                  "15-minute personalized walkthrough",
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

          {/* Right content - Form */}
          <div className="reveal opacity-0 stagger-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-3xl blur-2xl" />
              
              <form 
                onSubmit={handleSubmit}
                className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-xl"
              >
                <div className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Firm Name */}
                  <div>
                    <label htmlFor="firmName" className="block text-sm font-medium text-foreground mb-2">
                      Firm Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="text"
                      id="firmName"
                      name="firmName"
                      required
                      value={formData.firmName}
                      onChange={handleChange}
                      placeholder="Smith & Associates CPA"
                      className="bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Work Email <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@smithcpa.com"
                      className="bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="bg-muted/50 border-border focus:border-primary transition-colors"
                    />
                  </div>

                  {/* Two columns */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Number of Employees */}
                    <div>
                      <label htmlFor="employees" className="block text-sm font-medium text-foreground mb-2">
                        Firm Size <span className="text-primary">*</span>
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        required
                        value={formData.employees}
                        onChange={handleChange}
                        className={cn(
                          "w-full h-10 px-3 rounded-md border border-border bg-muted/50 text-sm",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                          "transition-colors appearance-none cursor-pointer",
                          !formData.employees && "text-muted-foreground"
                        )}
                      >
                        <option value="" disabled>Select range</option>
                        {employeeRanges.map((range) => (
                          <option key={range} value={range}>{range} employees</option>
                        ))}
                      </select>
                    </div>

                    {/* Current Storage */}
                    <div>
                      <label htmlFor="storage" className="block text-sm font-medium text-foreground mb-2">
                        File Storage <span className="text-primary">*</span>
                      </label>
                      <select
                        id="storage"
                        name="storage"
                        required
                        value={formData.storage}
                        onChange={handleChange}
                        className={cn(
                          "w-full h-10 px-3 rounded-md border border-border bg-muted/50 text-sm",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                          "transition-colors appearance-none cursor-pointer",
                          !formData.storage && "text-muted-foreground"
                        )}
                      >
                        <option value="" disabled>Select storage</option>
                        {storageOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 group mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Accelerate My Firm
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    We&apos;ll only use your information to follow up about your demo.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
