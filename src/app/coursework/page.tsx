import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { coursework, courseworkIntro } from "@/content/site";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Coursework page covering the classes that are shaping my hardware, low-level programming, and systems foundation.",
};

export default function CourseworkPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <PageHeader
        title="Courses"
        intro="A few classes that have been especially important to the direction I am building toward."
      />

      <section className="section-panel rounded-[40px] px-6 py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="leading-8 text-slate-600 dark:text-slate-300">{courseworkIntro}</p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {coursework.map((course) => (
          <article
            key={course.code}
            className="section-panel rounded-[36px] px-6 py-8 lg:px-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
                {course.status}
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                {course.code}
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
              {course.title}
            </h2>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">{course.summary}</p>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {course.takeaways.map((takeaway) => (
                <li
                  key={takeaway}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950"
                >
                  {takeaway}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
