import type { Metadata } from "next";
import Image from "next/image";

import { ProjectCard } from "@/components/ui/project-card";
import { PageHeader } from "@/components/ui/page-header";
import { featuredProject, projectCards } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "My project portfolio featuring a digital design and verification case study plus embedded and cybersecurity work.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <PageHeader
        title="Projects"
        intro="Selected work in digital design, embedded systems, and security."
      />

      <section className="section-panel overflow-hidden rounded-[36px]">
        <Image
          src={featuredProject.image}
          alt={featuredProject.alt}
          width={1600}
          height={960}
          className="h-80 w-full border-b border-slate-200 bg-slate-50 object-contain p-6 dark:border-slate-800 dark:bg-slate-900/60"
        />
        <div className="grid gap-8 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <aside className="space-y-6 rounded-[28px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
                Featured Project
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {featuredProject.title}
              </h2>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Tools Used
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {featuredProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
              SystemVerilog design, simulation, waveform debugging, and
              self-checking validation for a parameterized RTL block.
            </p>
          </aside>

          <div className="space-y-8">
            <section className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Overview
              </h3>
              <div className="space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {featuredProject.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Workflow
              </h3>
              <div className="space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {featuredProject.workflow.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Challenges
              </h3>
              <div className="space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {featuredProject.challenges.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Results and Impact
              </h3>
              <div className="space-y-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {featuredProject.results.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="section-panel space-y-6 rounded-[40px] px-6 py-8 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
            Additional Projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            Ongoing work across hardware, embedded systems, and security.
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            These are the projects actively shaping my portfolio, and I plan to
            turn them into deeper case studies over time.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projectCards.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
