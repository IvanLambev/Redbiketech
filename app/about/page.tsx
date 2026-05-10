import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { createPageMetadata } from "@/lib/site"

export const metadata = createPageMetadata({
  title: "About Us",
  description:
    "Learn why Redbike Tech is focused on helping accounting professionals spend less time searching and more time advising clients.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </>
  )
}
