import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { Timeline } from "@/components/ui/timeline";
import { careerGoalsIntro, roadmapItems } from "@/content/site";

export const metadata: Metadata = {
  title: "Career Goals",
  description:
    "Career roadmap for Akhil Meda with short-term internship goals, long-term secure hardware aspirations, and a milestone timeline.",
};

export default function CareerGoalsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <PageHeader
        title="Career Goals"
        intro="Short-term steps and long-term direction."
      />

      <section className="section-panel grid gap-8 rounded-[40px] px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <article className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.42)] dark:border-slate-800 dark:bg-slate-950">
          <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
            {careerGoalsIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
        <div className="grid gap-6">
          <article className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_24px_70px_-50px_rgba(15,23,42,0.9)] dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Short Term
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Build depth through internships, club work, stronger verification
              habits, and more ownership in embedded and hardware-adjacent
              projects.
            </p>
          </article>
          <article className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-950">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              Long Term
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">
              Grow into secure hardware and dependable systems work where
              verification, embedded design, and mission reliability matter.
            </p>
          </article>
        </div>
      </section>

      <section className="section-panel space-y-6 rounded-[40px] px-6 py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Timeline
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            Milestones that turn broad ambition into an actionable path.
          </h2>
        </div>
        <Timeline items={roadmapItems} />
      </section>
    </div>
  );
}
