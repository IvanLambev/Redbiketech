import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "Book a Demo",
  description:
    "Book a Redbike Tech demo to see how faster client file search can reduce document hunting for your accounting firm.",
  path: "/book-demo",
})

export default function BookDemoPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
