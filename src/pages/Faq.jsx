import { Link, NavLink } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "How are payment fees calculated?",
    answer:
      "Stripe charges a per-transaction fee depending on the payment method used by the end customer.",
  },
  {
    question: "Will I be charged tax?",
    answer: "Stripe is required to charge tax on certain products and services.",
  },
  {
    question: "Are there additional fees for refunds?",
  },
  {
    question: "Do you have setup fees or monthly fees?",
  },
  {
    question: "Do you offer any discounts?",
  },
];

export default function FaqPage() {
  return (
    <div className="relative min-h-screen bg-[rgb(var(--surface))] text-slate-900">
      <div
        className="absolute inset-0 -z-10 bg-subtle-grid opacity-70"
        aria-hidden="true"
      />

      <header className="relative z-10 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto grid w-full max-w-5xl items-center gap-6 px-6 py-6 md:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <nav className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-slate-900">
                Standard pricing
              </Link>
              <Link to="/" className="hover:text-slate-900">
                Custom pricing
              </Link>
              <NavLink
                to="/faqs"
                className="font-semibold text-[rgb(var(--accent))]"
              >
                FAQs
              </NavLink>
            </nav>
          </div>
          <div className="flex justify-start md:justify-end">
            <Button className="rounded-full bg-[rgb(var(--accent))] px-5 text-sm font-semibold shadow-sm hover:bg-[rgb(var(--accent-strong))]">
              Contact sales
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <div className="mx-auto w-full max-w-5xl px-6 py-12">
          <h1 className="mb-8 text-balance font-display text-4xl font-semibold text-slate-900">
            FAQs
          </h1>
          <Accordion
            type="single"
            collapsible
            className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="px-6 last:border-b-0"
              >
                <AccordionTrigger className="data-[state=open]:text-[rgb(var(--accent))] data-[state=open]:[&>svg]:text-[rgb(var(--accent))]">
                  {item.question}
                </AccordionTrigger>
                {item.answer ? (
                  <AccordionContent className="text-sm text-slate-600">
                    {item.answer}
                  </AccordionContent>
                ) : null}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
    </div>
  );
}
