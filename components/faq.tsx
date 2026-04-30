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
    <section id="faq" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Questions Accounting Firms Ask First
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Clear answers before you book a walkthrough.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export const faqItems = faqs
