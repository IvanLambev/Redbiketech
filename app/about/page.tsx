import type { Metadata } from "next"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn why Redbike Tech is focused on helping accounting professionals spend less time searching and more time advising clients.",
  alternates: {
    canonical: "/about",
  },
}

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
