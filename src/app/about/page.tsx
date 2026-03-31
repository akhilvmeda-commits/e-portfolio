import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { aboutBullets, aboutParagraphs, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About page covering my background in cybersecurity, hardware systems, embedded interests, and long-term engineering direction.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <PageHeader
        title="About"
        intro="A little more about how I got here, what I like building, and what I am working toward."
      />

      <section className="section-panel grid gap-8 rounded-[40px] px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-slate-950">
          <Image
            src="/images/headshot.jpg"
            alt="Portrait of Akhil Meda."
            width={900}
            height={1100}
            className="h-[420px] w-full object-cover object-top sm:h-[520px]"
          />
        </article>
        <article className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Biography
          </p>
          <div className="mt-5 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </section>

      <section className="section-panel grid gap-6 rounded-[40px] px-6 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <article className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_70px_-50px_rgba(15,23,42,0.9)] dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            At a Glance
          </p>
          <ul className="mt-5 grid gap-4">
            {aboutBullets.map((bullet) => (
              <li
                key={bullet}
                className="rounded-[20px] border border-slate-800 bg-slate-900/80 px-4 py-4 text-sm leading-6 text-slate-300"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.24)] dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Current Direction
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            I am building toward secure hardware and systems leadership.
          </h2>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            I want this portfolio to feel clear and honest. I care about
            learning fast, putting real work behind what I say I am interested
            in, and building toward roles where hardware correctness, embedded
            integration, and security all matter at the same time.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/resume" label="View Resume" />
            <ButtonLink href="/career-goals" label="See Career Goals" variant="secondary" />
            <ButtonLink href="/contact" label="Connect" variant="ghost" />
          </div>
          <div className="mt-8 rounded-[24px] border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{siteConfig.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {siteConfig.title} building experience across cybersecurity,
              digital design, physical design, and embedded systems.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
