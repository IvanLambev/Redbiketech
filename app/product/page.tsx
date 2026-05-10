import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Clock, FileSearch, FolderOpen, Shield } from "lucide-react"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

const productFeatures = [
  {
    icon: FileSearch,
    title: "Search by client question",
    description:
      "Ask for the file, fact, deduction, receipt, or note the way a client would ask for it. Redbike is built around real firm workflows, not perfect folder names.",
  },
  {
    icon: FolderOpen,
    title: "Use the documents you already have",
    description:
      "Tax returns, PDFs, receipts, and client records become easier to use without forcing your team through a massive reorganization project.",
  },
  {
    icon: Shield,
    title: "Keep the source close",
    description:
      "Your team gets answers with the source context behind them, so they can verify before responding and avoid guessing from memory.",
  },
]

const outcomes = [
  "Shorter client calls",
  "Fewer internal interruptions",
  "Less unpaid admin work",
  "Faster source-backed answers",
]

export const metadata: Metadata = {
  title: "Product",
  description:
    "Redbike Tech helps accounting firms stop losing billable time to client file searches, document hunting, and source verification.",
  alternates: {
    canonical: "/product",
  },
}

export default function ProductPage() {
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
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Built to recover billable time</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
                Stop being your firm&apos;s search bar
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
                You are paid for financial judgment, not for clicking through old folders while a client waits. Redbike turns scattered client documents into a fast, source-backed way to find the facts and move the conversation forward.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                  <Link href={siteConfig.bookingUrl}>
                    Book a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/how-it-works">See How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                  The product is simple: ask, verify, answer
                </h2>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Redbike is designed for the moment a client asks a specific question and your team needs the exact supporting file quickly. The point is not to show off software. The point is to remove the drag from client service.
                </p>
              </div>
              <div className="grid gap-5">
                {productFeatures.map((feature) => (
                  <div key={feature.title} className="bg-card border border-border rounded-2xl p-6">
                    <div className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-2 text-muted-foreground leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-foreground text-background rounded-2xl p-8 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                    When files are hard to find, every question costs more than it should
                  </h2>
                  <p className="mt-5 text-background/70 leading-relaxed">
                    Manual document retrieval looks harmless until it repeats across every client, every week. Redbike helps firms remove that quiet leak from the workflow.
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-center gap-3 rounded-xl border border-background/10 bg-background/5 p-4">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-sm font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
