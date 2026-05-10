import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Brain, Clock, DollarSign, Smile, TrendingUp } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

const benefits = [
  {
    icon: DollarSign,
    title: "Stop leaking profit through admin work",
    description:
      "Unpaid search time is easy to ignore because it happens in small pieces. Across a firm, those minutes compound into real margin loss.",
  },
  {
    icon: Smile,
    title: "Answer while the client still cares",
    description:
      "Fast, source-backed answers make your firm feel organized and responsive instead of buried in old folders.",
  },
  {
    icon: Brain,
    title: "Protect your best people from low-value work",
    description:
      "Your team should not burn energy on repetitive document hunts when they could be reviewing, advising, and moving work forward.",
  },
]

const comparison = [
  {
    label: "Without Redbike",
    items: ["Open folders manually", "Interrupt another team member", "Put the client on hold", "Lose billable momentum"],
  },
  {
    label: "With Redbike",
    items: ["Ask one clear question", "Find the relevant file context", "Verify before responding", "Move to the next paid task"],
  },
]

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "Redbike Tech helps accounting firms reclaim billable time, reduce document search frustration, and deliver faster client answers.",
  alternates: {
    canonical: "/benefits",
  },
}

export default function BenefitsPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <section className="py-20 lg:py-28 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Benefits</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
                Give your firm back the hours clients never see
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                Manual document retrieval is one of the quietest drains in an accounting firm. It slows calls, breaks focus, frustrates staff, and turns small client questions into unpaid work.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-card border border-border rounded-2xl p-7">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{benefit.title}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="flex items-center gap-3 text-primary mb-4">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Workflow impact</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                The difference shows up in every client question
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              {comparison.map((group) => (
                <div key={group.label} className="bg-card border border-border rounded-2xl p-7">
                  <h3 className="text-xl font-bold text-foreground">{group.label}</h3>
                  <ul className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link href={siteConfig.bookingUrl}>
                  See the Workflow
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
