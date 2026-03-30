import Image from "next/image";
import Link from "next/link";

import type { ProjectCardData } from "@/content/site";

type ProjectCardProps = {
  project: ProjectCardData;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_-38px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-34px_rgba(37,99,235,0.28)] dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_28px_70px_-34px_rgba(2,6,23,0.8)]">
      <div className="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/70">
        <Image
          src={project.image}
          alt={project.alt}
          width={1200}
          height={720}
          className="h-56 w-full object-contain p-5 transition duration-500 group-hover:scale-[1.01]"
        />
      </div>
      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
            {project.status}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
            {project.title}
          </h3>
          <p className="leading-7 text-slate-600 dark:text-slate-300">{project.summary}</p>
        </div>
        <Link
          href={project.href}
          className="inline-flex text-sm font-semibold text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
        >
          Explore project details
        </Link>
      </div>
    </article>
  );
}
