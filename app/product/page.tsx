import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MarketingPage } from "@/components/marketing-page"

export const metadata: Metadata = {
  title: "Product",
  description:
    "Redbike Tech helps accounting firms find client files and source-backed answers faster, without folder hunting or workflow disruption.",
  alternates: {
    canonical: "/product",
  },
}

export default function ProductPage() {
  return (
    <>
      <Header />
      <MarketingPage
        eyebrow="Product"
        title="Client file search built for accounting firms"
        description="Redbike gives your team a faster way to answer client questions by finding the right file, the right context, and the source behind the answer."
        points={[
          {
            title: "Stop losing time to file hunts",
            description:
              "Reduce the 20-minute searches that interrupt client calls, delay responses, and eat into billable work.",
          },
          {
            title: "Keep the source visible",
            description:
              "Answers are tied back to client files so your team can verify facts before responding.",
          },
          {
            title: "Fit existing storage",
            description:
              "The workflow is designed around the drives and folders accounting teams already use.",
          },
        ]}
      />
      <Footer />
    </>
  )
}
