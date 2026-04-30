import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MarketingPage } from "@/components/marketing-page"

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Redbike Tech connects accounting firm documents, organizes client files for search, and helps teams answer questions faster.",
  alternates: {
    canonical: "/how-it-works",
  },
}

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <MarketingPage
        eyebrow="How It Works"
        title="From scattered documents to source-backed answers"
        description="Redbike connects to your existing file workflow, makes client documents searchable, and helps your team answer questions without rebuilding how the firm operates."
        points={[
          {
            title: "Connect your file storage",
            description:
              "Start with the folders, drives, and document systems already used by your team.",
          },
          {
            title: "Make documents searchable",
            description:
              "Tax returns, receipts, PDFs, and notes become easier to find by client question.",
          },
          {
            title: "Answer with confidence",
            description:
              "Your team sees the source context behind the answer before it reaches the client.",
          },
        ]}
      />
      <Footer />
    </>
  )
}
