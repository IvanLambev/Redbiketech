import type { ComponentType, SVGProps } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CircleDollarSign,
  DatabaseZap,
  FileCheck2,
  FileSearch,
  FileText,
  FolderOpen,
  MessageSquareText,
  Reply,
  Search,
  Server,
  Shield,
  Sparkles,
} from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ProductRoiCalculator } from "@/components/product-roi-calculator"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"

type Icon = ComponentType<SVGProps<SVGSVGElement>>

const sourceCards = [
  "Google Drive",
  "Dropbox",
  "OneDrive",
  "SharePoint",
  "Local server folders",
  "PDFs",
  "Tax returns",
  "Receipts",
  "Client notes",
]

const walkthroughSteps = [
  {
    number: "01",
    icon: DatabaseZap,
    title: "Connect your document sources",
    description:
      "Redbike connects to the approved places your firm keeps client work: cloud drives, local folders, PDFs, tax returns, receipts, and notes.",
  },
  {
    number: "02",
    icon: MessageSquareText,
    title: "Ask a client-file question",
    description:
      "Your team asks the question in plain English instead of guessing file names, folder paths, or who last touched the client file.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Get an answer with sources",
    description:
      "Redbike returns the answer and keeps the source files close, so the result feels like a file review, not a black box.",
  },
  {
    number: "04",
    icon: BadgeCheck,
    title: "Verify before responding",
    description:
      "Open the supporting document, page, and highlighted section before your team sends anything back to the client.",
  },
  {
    number: "05",
    icon: Reply,
    title: "Respond confidently",
    description:
      "Use the answer summary as a starting point for a clear client response, with the supporting files already checked.",
  },
]

const flowSteps = [
  {
    icon: FolderOpen,
    title: "Firm files",
    description: "Returns, receipts, PDFs, folders, and notes stay in the systems your firm approves.",
  },
  {
    icon: Shield,
    title: "Secure index",
    description: "Redbike makes the approved files searchable without asking your team to reorganize them first.",
  },
  {
    icon: DatabaseZap,
    title: "Answer engine",
    description: "Client-file questions are matched against the relevant documents and source context.",
  },
  {
    icon: Search,
    title: "Redbike UI",
    description: "Your team asks, reviews the answer, opens the source, and checks the evidence.",
  },
  {
    icon: FileCheck2,
    title: "Verified response",
    description: "The client gets a faster answer backed by the file your team reviewed.",
  },
]

const productExamples = [
  {
    title: "Year-over-year return comparison",
    question: "What changed between Jane Smith's 2023 and 2024 tax return?",
    answer: "Finds the deduction change and points to both return pages plus supporting receipts.",
  },
  {
    title: "Missing receipt search",
    question: "Where is the receipt tied to the vehicle expense?",
    answer: "Searches folders, uploaded PDFs, and client records for the supporting document.",
  },
  {
    title: "Meeting prep",
    question: "What open items should I know before this client call?",
    answer: "Pulls notes, recent files, and unresolved document gaps into one quick summary.",
  },
]

export const metadata: Metadata = {
  title: "Product",
  description:
    "Tour the Redbike product: connect accounting firm files, ask client questions, get source-backed answers, verify documents, and respond faster.",
  alternates: {
    canonical: "/product",
  },
}

export default function ProductPage() {
  return (
    <>
      <Header />
      <main className="pt-28 overflow-hidden">
        <HeroSection />
        <StickyWalkthroughSection />
        <FlowDiagramSection />
        <ExamplesSection />
        <RoiSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="min-w-0">
            <SectionEyebrow icon={FileSearch} label="Product tour" />
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              See exactly how Redbike turns client files into answers
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              This page is the demo before the demo: connect firm files, ask a client question, get an answer with sources, verify the PDF, and respond with confidence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 shadow-xl shadow-primary/20">
                <Link href={siteConfig.bookingUrl}>
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 border-2">
                <Link href="#walkthrough">Walk Through the Product</Link>
              </Button>
            </div>
          </div>

          <ProductDemoMockup />
        </div>
      </div>
    </section>
  )
}

function StickyWalkthroughSection() {
  return (
    <section id="walkthrough" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow icon={MessageSquareText} label="Product walkthrough" />
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            What your team can actually do inside Redbike
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            The product workflow is intentionally simple. The useful part is not another dashboard. It is getting from a client question to a verified source-backed answer without digging through folders.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-6">
            {walkthroughSteps.map((step) => (
              <article key={step.number} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">{step.number}</p>
                    <h3 className="mt-1 text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="lg:sticky lg:top-28">
            <ProductTourPanel />
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductTourPanel() {
  return (
    <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-2xl shadow-foreground/10">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
        </div>
        <span className="min-w-0 truncate text-xs font-medium text-muted-foreground">Redbike Client File Workspace</span>
      </div>

      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {sourceCards.map((source) => (
          <div key={source} className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs font-semibold text-foreground">
            {source}
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-border bg-background p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Ask Redbike</p>
        <div className="mt-3 flex items-start gap-3 rounded-lg bg-muted/40 px-3 py-3">
          <Search className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="product-type-line text-sm font-medium text-foreground">
            What changed between Jane Smith&apos;s 2023 and 2024 tax return?
          </p>
        </div>
      </div>

      <div className="product-answer-reveal mt-5 rounded-xl border border-primary/20 bg-accent/40 p-4">
        <div className="flex items-center gap-2 text-sm font-bold text-primary">
          <Sparkles className="h-4 w-4" />
          Answer found with sources
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          Jane&apos;s charitable deduction decreased because the 2024 file only includes two attached donation receipts, compared to six in 2023.
        </p>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Sources</p>
        <SourceRow delay="2.45s" file="JaneSmith_2024_Return.pdf" detail="page 14" />
        <SourceRow delay="2.6s" file="JaneSmith_2023_Return.pdf" detail="page 12" />
        <SourceRow delay="2.75s" file="Donation_Receipts_2024.pdf" detail="attached receipts" />
      </div>

      <div className="product-highlight-reveal mt-5 grid sm:grid-cols-[0.9fr_1.1fr] gap-3">
        <div className="rounded-xl border border-border bg-muted/20 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">PDF preview</p>
          <div className="mt-4 space-y-2">
            <div className="h-2 w-4/5 rounded bg-muted-foreground/20" />
            <div className="h-2 w-full rounded bg-muted-foreground/20" />
            <div className="rounded-md bg-primary/10 px-3 py-2 text-xs leading-relaxed text-foreground">
              Charitable contributions: two attached receipts totaling $1,200.
            </div>
            <div className="h-2 w-2/3 rounded bg-muted-foreground/20" />
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Client response draft</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            Jane, your charitable deduction is lower this year because we only have two donation receipts in the 2024 file. I checked the 2023 and 2024 return pages before replying.
          </p>
        </div>
      </div>
    </div>
  )
}

function FlowDiagramSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow icon={Server} label="Full workflow" />
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From data source to client response
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            The full path matters: approved firm documents feed the searchable layer, Redbike finds the answer in the UI, your team verifies the source, and the client gets a clear response.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-5 gap-4">
          {flowSteps.map((step, index) => (
            <div key={step.title} className="relative rounded-2xl border border-border bg-card p-5">
              {index < flowSteps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-primary" />
              )}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mt-5 font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExamplesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow icon={FileCheck2} label="Inside the app" />
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            The app is for real accounting questions, not generic search
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {productExamples.map((example) => (
            <div key={example.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-bold text-foreground">{example.title}</h3>
              <p className="mt-4 rounded-lg border border-border bg-muted/30 p-3 text-sm font-medium text-foreground">
                &quot;{example.question}&quot;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{example.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function RoiSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionEyebrow icon={CircleDollarSign} label="Time saved" />
            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              Repeated file searching becomes a real cost
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Use the calculator to show what repeated client-file questions cost when every answer starts with 20 minutes of folder hunting.
            </p>
          </div>
          <ProductRoiCalculator />
        </div>
      </div>
    </section>
  )
}

function ProductDemoMockup() {
  return (
    <div className="relative min-w-0">
      <div className="relative max-w-full rounded-2xl border border-border bg-card p-4 sm:p-5 shadow-2xl shadow-foreground/10">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
          </div>
          <span className="min-w-0 truncate text-xs font-medium text-muted-foreground">Redbike Answer Review</span>
        </div>
        <div className="mt-5 rounded-xl border border-border bg-background p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Ask Redbike</p>
          <p className="product-type-line mt-3 text-sm font-semibold text-foreground">
            What changed between Jane Smith&apos;s 2023 and 2024 tax return?
          </p>
        </div>
        <div className="product-answer-reveal mt-5 rounded-xl border border-primary/20 bg-accent/40 p-4">
          <p className="text-sm font-bold text-primary">Answer found in 0.8 seconds</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            Jane&apos;s charitable deduction decreased because the 2024 file only includes two attached donation receipts, compared to six in 2023.
          </p>
        </div>
        <div className="mt-5 space-y-2">
          <SourceRow delay="2.45s" file="JaneSmith_2024_Return.pdf" detail="page 14" />
          <SourceRow delay="2.6s" file="JaneSmith_2023_Return.pdf" detail="page 12" />
          <SourceRow delay="2.75s" file="Donation_Receipts_2024.pdf" detail="receipts" />
        </div>
      </div>
    </div>
  )
}

function SourceRow({ delay, file, detail }: { delay: string; file: string; detail: string }) {
  return (
    <div
      className="product-source-reveal flex min-w-0 items-center justify-between gap-3 rounded-lg border border-border bg-background px-3 py-2 text-sm"
      style={{ animationDelay: delay }}
    >
      <div className="flex min-w-0 items-center gap-2">
        <FileText className="h-4 w-4 shrink-0 text-primary" />
        <span className="truncate font-medium text-foreground">{file}</span>
      </div>
      <span className="max-w-[42%] shrink-0 truncate text-right text-xs text-muted-foreground">{detail}</span>
    </div>
  )
}

function FinalCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-card p-8 sm:p-10 lg:p-12 text-center shadow-xl shadow-foreground/5">
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Want to see this flow with your firm&apos;s file-search problems?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Bring one client question that usually sends your team into folders. We will show how Redbike would turn it into a source-backed answer.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
              <Link href={siteConfig.bookingUrl}>
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionEyebrow({ icon: Icon, label }: { icon: Icon; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1.5">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-medium text-primary">{label}</span>
    </div>
  )
}
