import type { ComponentType, SVGProps } from "react"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  FolderOpen,
  LifeBuoy,
  Link2,
  MessageSquare,
  SearchCheck,
  ShieldCheck,
  Users,
} from "lucide-react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { createPageMetadata, siteConfig } from "@/lib/site"

type Icon = ComponentType<SVGProps<SVGSVGElement>>

const setupSteps = [
  {
    icon: MessageSquare,
    title: "Discovery call",
    description:
      "We learn how your firm stores documents and which client questions slow your team down most often.",
  },
  {
    icon: Link2,
    title: "Secure file connection",
    description:
      "We connect Redbike to the approved document sources and scope the files your team wants searchable.",
  },
  {
    icon: SearchCheck,
    title: "Indexing and testing",
    description:
      "We test real client-file questions against sample or approved firm data before broad rollout.",
  },
  {
    icon: Users,
    title: "Team walkthrough",
    description:
      "Your team learns how to ask a question, verify the source, and respond without changing the filing workflow.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing support",
    description:
      "We help tune the workflow as your firm uses Redbike and new file-search patterns show up.",
  },
]

const setupTimeline = [
  {
    label: "Step 1",
    title: "Demo and workflow review",
    description: "We identify the document sources, client-file questions, and team roles that matter first.",
  },
  {
    label: "Step 2",
    title: "File connection",
    description: "Approved document locations are connected and scoped around your firm's access decisions.",
  },
  {
    label: "Step 3",
    title: "First search tests",
    description: "We test representative questions and make sure answers point back to usable source context.",
  },
  {
    label: "Step 4",
    title: "Team rollout",
    description: "Staff learn the ask, verify, respond workflow and start using Redbike in daily client work.",
  },
]

export const metadata = createPageMetadata({
  title: "How It Works",
  description:
    "Learn how Redbike Tech is set up for accounting firms, from discovery and secure file connection to testing, team rollout, and support.",
  path: "/how-it-works",
})

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="pt-28 overflow-hidden">
        <HeroSection />
        <SetupStepsSection />
        <NoCleanupSection />
        <TimelineSection />
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
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionEyebrow icon={ShieldCheck} label="Setup and onboarding" />
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              How Redbike gets running inside your firm
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              The product workflow belongs on the product page. This page is about implementation: how we connect approved files, test real questions, walk your team through the workflow, and keep supporting it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 shadow-xl shadow-primary/20">
                <Link href={siteConfig.bookingUrl}>
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-8 py-6 border-2">
                <Link href="/product">See Product Tour</Link>
              </Button>
            </div>
          </div>

          <SetupMockup />
        </div>
      </div>
    </section>
  )
}

function SetupStepsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow icon={CalendarDays} label="Setup path" />
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            From first call to first source-backed searches
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Redbike is set up around the file systems and client-service patterns your firm already has. The goal is a working workflow, not a large software project.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-5 gap-5">
          {setupSteps.map((step, index) => (
            <article
              key={step.title}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-sm shadow-foreground/5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
            >
              {index < setupSteps.length - 1 && (
                <ArrowRight className="hidden xl:block absolute -right-5 top-10 z-10 h-5 w-5 text-primary transition-transform duration-300 ease-out group-hover:translate-x-1" />
              )}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                <step.icon className="h-5 w-5 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-primary-foreground" />
              </div>
              <p className="mt-5 text-sm font-bold text-primary transition-colors duration-300 group-hover:text-primary/80">0{index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NoCleanupSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="flex justify-center">
            <SectionEyebrow icon={FolderOpen} label="Before setup" />
          </div>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            You do not need to clean up the firm before you contact us
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Most firms already have years of client folders, returns, receipts, notes, and PDFs. Redbike is meant to work with that reality instead of making cleanup a prerequisite.
          </p>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <SectionEyebrow icon={CalendarDays} label="Typical setup path" />
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            A practical rollout path
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Exact timing depends on document access, firm approvals, and the first workflow you want to test. This is the typical sequence.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-5">
          {setupTimeline.map((item, index) => (
            <div key={item.title} className="relative rounded-2xl border border-border bg-card p-6">
              {index < setupTimeline.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-primary" />
              )}
              <p className="text-sm font-bold text-primary">{item.label}</p>
              <h3 className="mt-3 text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SetupMockup() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-foreground/10">
      <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
          <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
        </div>
        <span className="min-w-0 truncate text-xs font-medium text-muted-foreground">Redbike Setup Plan</span>
      </div>

      <div className="mt-5 space-y-3">
        {[
          ["Approved sources", "Drive, SharePoint, server folder"],
          ["First workflow", "Year-over-year return questions"],
          ["Testing set", "Sample client files"],
          ["Team group", "Partner, manager, two staff"],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between gap-4 rounded-xl border border-border bg-muted/30 p-4">
            <span className="text-sm font-medium text-muted-foreground">{label}</span>
            <span className="text-right text-sm font-bold text-foreground">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl border border-primary/20 bg-accent/40 p-4">
        <div className="flex items-center gap-2 text-sm font-bold text-primary">
          <BadgeCheck className="h-4 w-4" />
          Ready for first search tests
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground">
          The first rollout is scoped around approved data and the highest-friction client questions.
        </p>
      </div>
    </div>
  )
}

function FinalCta() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-primary/20 bg-card p-8 sm:p-10 lg:p-12 text-center shadow-xl shadow-foreground/5">
          <h2 className="mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Find out what setup would look like for your firm
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            We will review where your documents live, what questions slow your team down, and what a practical first rollout should include.
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
