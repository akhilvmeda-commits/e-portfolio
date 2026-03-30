import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { contactCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact page for Akhil Meda with a recruiter-facing form UI plus email, LinkedIn, and GitHub links.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <PageHeader title="Contact" />

      <section className="section-panel grid gap-6 rounded-[40px] px-6 py-8 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
        <div className="space-y-6">
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className="block rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                {card.label}
              </p>
              <p className="mt-4 text-lg font-medium text-slate-900 dark:text-slate-100">{card.value}</p>
            </a>
          ))}

          <article className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_-44px_rgba(15,23,42,0.95)] dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Availability
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              I am interested in internships, project-based collaboration, and
              conversations related to secure systems, embedded engineering,
              digital design, verification, and technical leadership growth.
            </p>
          </article>
        </div>

        <ContactForm />
      </section>
    </div>
  );
}
