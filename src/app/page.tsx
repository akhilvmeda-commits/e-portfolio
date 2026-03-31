import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHeader } from "@/components/ui/page-header";
import { ProjectCard } from "@/components/ui/project-card";
import {
  featuredProject,
  homeHighlights,
  metricCards,
  projectCards,
  quickFacts,
  siteConfig,
} from "@/content/site";

export default function HomePage() {
  return (
    <div className="space-y-12 pb-20 pt-10">
      <section className="section-panel mx-auto grid max-w-6xl gap-10 rounded-[40px] px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
        <div className="space-y-8">
          <PageHeader
            eyebrow="E-Portfolio"
            title={siteConfig.name}
            intro={siteConfig.title}
          />
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am building toward hardware and systems work that mixes digital
            design, physical design, embedded development, and security. Most
            of this site is really a snapshot of what I have been learning
            through classes, clubs, internships, and projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/projects" label="View Projects" />
            <ButtonLink
              href={siteConfig.resumePath}
              label="Download Resume"
              variant="secondary"
              download
            />
            <ButtonLink href="/coursework" label="View Courses" variant="ghost" />
            <ButtonLink href="/contact" label="Contact Me" variant="ghost" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metricCards.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_-38px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                  {metric.stat}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.09),transparent_45%)] blur-3xl" />
          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.35)] dark:border-slate-800 dark:bg-slate-950">
            <Image
              src="/images/hero-blueprint.svg"
              alt="Abstract engineering portfolio hero graphic with system blocks and signal traces."
              width={1280}
              height={980}
              className="rounded-[24px] border border-slate-200 dark:border-slate-800"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-panel mx-auto max-w-6xl rounded-[40px] px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.95)] dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Focus
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Hardware depth with a systems mindset.
            </h2>
            <p className="mt-4 leading-8 text-slate-300">
              I am most interested in work where digital logic, embedded
              software, physical design, networking, and security connect
              instead of living in separate silos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeHighlights.map((item) => (
              <article
                key={item.label}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.48)] transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-950"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                  {item.label}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-panel mx-auto max-w-6xl rounded-[40px] px-6 py-8 lg:px-10">
        <article className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_60px_-44px_rgba(15,23,42,0.28)] dark:border-slate-800 dark:bg-slate-950">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            Current Snapshot
          </p>
          <ul className="mt-5 grid gap-4 md:grid-cols-2">
            {quickFacts.map((fact) => (
              <li
                key={fact}
                className="rounded-[20px] border border-slate-200 bg-white px-4 py-4 text-sm leading-6 text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {fact}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="section-panel mx-auto max-w-6xl rounded-[40px] px-6 py-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-300">
              Featured Work
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
              Recent project work
            </h2>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Physical design, embedded systems, and secure infrastructure are
              the main threads I am developing right now.
            </p>
          </div>
          <ButtonLink href="/projects" label="Open Projects Page" variant="secondary" />
        </div>
        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_28px_70px_-44px_rgba(15,23,42,0.38)] dark:border-slate-800 dark:bg-slate-950">
            <Image
              src={featuredProject.image}
              alt={featuredProject.alt}
              width={1400}
              height={860}
              className="h-72 w-full border-b border-slate-200 bg-slate-50 object-contain p-6 dark:border-slate-800 dark:bg-slate-900/60"
            />
            <div className="space-y-5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 dark:text-blue-300">
                {featuredProject.title}
              </p>
              <h3 className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                Physical design and chip implementation
              </h3>
              <p className="leading-8 text-slate-600 dark:text-slate-300">
                A shorter case study on the physical design side of Silicon
                Jackets onboarding, including floorplanning, timing analysis,
                DRC debugging, and SRAM layout fixes.
              </p>
              <ButtonLink href="/projects" label="Read the Case Study" />
            </div>
          </article>
          <div className="grid gap-6">
            {projectCards.slice(0, 2).map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
