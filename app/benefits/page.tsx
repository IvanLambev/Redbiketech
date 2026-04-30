import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MarketingPage } from "@/components/marketing-page"

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "Redbike Tech helps accounting firms reclaim billable time, respond faster to clients, and reduce document search frustration.",
  alternates: {
    canonical: "/benefits",
  },
}

export default function BenefitsPage() {
  return (
    <>
      <Header />
      <MarketingPage
        eyebrow="Benefits"
        title="Less searching. Faster responses. Better client service."
        description="The value is not another tool. The value is giving your team back the time and confidence lost to repeated document hunts."
        points={[
          {
            title: "Reclaim billable hours",
            description:
              "Turn unpaid admin searches into faster client responses and more time for advisory work.",
          },
          {
            title: "Improve client trust",
            description:
              "Respond with accurate, source-backed answers while the client question is still fresh.",
          },
          {
            title: "Reduce team frustration",
            description:
              "Give staff a cleaner way to find what they need without interrupting partners or digging through old folders.",
          },
        ]}
      />
      <Footer />
    </>
  )
}
