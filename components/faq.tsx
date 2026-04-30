import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What problem does Redbike Tech solve for accounting firms?",
    answer:
      "Redbike helps accounting teams find client files and source-backed answers without digging through folders, drives, PDFs, and old notes every time a client asks a quick question.",
  },
  {
    question: "Who is Redbike built for?",
    answer:
      "It is built for tax professionals, CPAs, bookkeepers, and accounting firms that manage large volumes of client documents and need faster access to the facts inside them.",
  },
  {
    question: "How does Redbike make client service better?",
    answer:
      "Your team can answer routine client questions faster, verify the source file, and spend more time advising instead of searching through disconnected storage systems.",
  },
  {
    question: "Do we need to reorganize all of our files first?",
    answer:
      "No. The goal is to work with the storage habits your firm already has and make the existing document base easier to search and use.",
  },
  {
    question: "Is this meant to replace accountants?",
    answer:
      "No. Redbike is designed to remove low-value document hunting so accountants can spend more time on judgment, advisory work, and client relationships.",
  },
  {
    question: "What happens during a demo?",
    answer:
      "We review your current file workflow, identify the document search problems costing your team time, and show how Redbike would fit into your firm.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[110px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
              Questions Accounting Firms Ask First
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Clear answers before you book a walkthrough. No vague platform talk, just what changes for your team.
            </p>

            <div className="mt-8 border border-primary/20 bg-background/70 backdrop-blur rounded-2xl p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">
                What buyers care about
              </p>
              <ul className="mt-5 space-y-4">
                {["Less unpaid admin time", "Source-backed client answers", "No file cleanup project"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-6 w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border border-border bg-card rounded-2xl px-6 shadow-sm transition-colors data-[state=open]:border-primary/30 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5"
              >
                <AccordionTrigger className="py-6 text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export const faqItems = faqs
