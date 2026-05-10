import { FAQ, faqItems } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about Redbike Tech, document search for accounting firms, demos, setup, and client file workflows.",
  path: "/faq",
})

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <Header />
      <main className="pt-20">
        <FAQ />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replaceAll("</", "<\\/") }}
      />
      <Footer />
    </>
  )
}
