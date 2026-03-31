import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { resumeHighlights, resumeSkills, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume page with a downloadable PDF and a summary of my technical skills, tools, and engineering focus areas.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <PageHeader title="Resume" />

      <section className="section-panel grid gap-6 rounded-[40px] px-6 py-8 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <article className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_26px_70px_-50px_rgba(15,23,42,0.92)] dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Resume Snapshot
          </p>
          <ul className="mt-6 grid gap-4">
            {resumeHighlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-[20px] border border-slate-800 bg-slate-900/85 px-4 py-4 text-sm leading-6 text-slate-300"
              >
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={siteConfig.resumePath} label="Download PDF" download />
            <ButtonLink href={siteConfig.resumePath} label="Open PDF" variant="secondary" external />
          </div>
          <p className="mt-6 text-sm leading-6 text-slate-400">
            The file at <code>{siteConfig.resumePath}</code> is the resume PDF
            I am currently using for this portfolio.
          </p>
        </article>

        <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_26px_70px_-50px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-slate-950">
          <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Embedded PDF
            </p>
          </div>
          <object
            data={siteConfig.resumePath}
            type="application/pdf"
            className="h-[820px] w-full"
            aria-label="Embedded resume PDF"
          >
            <div className="space-y-4 px-6 py-10 text-sm text-slate-600 dark:text-slate-300">
              <p>
                Your browser could not render the PDF preview. Use the button
                below to open my resume directly.
              </p>
              <ButtonLink href={siteConfig.resumePath} label="Open Resume PDF" variant="secondary" external />
            </div>
          </object>
        </article>
      </section>

      <section className="section-panel space-y-6 rounded-[40px] px-6 py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Skills Summary
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            Technical tools and domains I am building into a stronger engineering foundation.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {resumeSkills.map((group) => (
            <article
              key={group.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
