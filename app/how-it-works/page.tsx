import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, MessageSquare, Search, ShieldCheck } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"

const steps = [
  {
    title: "The client asks",
    description:
      "A client calls with a specific question about a prior return, missing receipt, deduction, W-2, or expense history.",
  },
  {
    title: "You ask Redbike",
    description:
      "Instead of opening a dozen folders, your team asks the question in plain English from a secure dashboard.",
  },
  {
    title: "You verify the source",
    description:
      "Redbike returns the answer with the supporting client file context, so your team can confirm the fact before responding.",
  },
  {
    title: "You move back to billable work",
    description:
      "The client gets a faster answer and your team avoids turning one small question into a workflow interruption.",
  },
]

const setupPoints = [
  "No IT degree required",
  "No folder cleanup project first",
  "No new filing system to teach the whole firm",
]

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Redbike Tech helps accounting teams answer client file questions faster with a simple ask, verify, and respond workflow.",
  alternates: {
    canonical: "/how-it-works",
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
                <MessageSquare className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Plain English workflow</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
                Ask. Verify. Answer. Get back to work.
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                Redbike is built for the moment your client needs a precise answer and your team does not have time to hunt through old files. The workflow is direct because the problem is direct.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How it works for your team</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The process follows the same path your firm already knows: client question, file check, confident answer.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {steps.map((step, index) => (
                <div key={step.title} className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
                  <span className="text-5xl font-bold text-primary/15">0{index + 1}</span>
                  <h3 className="mt-6 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Search className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  No complex setup story required
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Your team should not need to understand the machinery behind the product. They should be able to ask a client-file question and get a useful answer with source context.
                </p>
                <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/book-demo">
                    Book a Demo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="border border-border bg-card rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">What you do not need first</h3>
                </div>
                <ul className="space-y-4">
                  {setupPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
