import Link from "next/link";

import { footerBlurb, navItems, siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_0.9fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            E-Portfolio
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {siteConfig.name}
          </h2>
          <p className="max-w-md text-sm leading-7 text-slate-300">{footerBlurb}</p>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Explore
          </h3>
          <ul className="space-y-3 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
            Connect
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="transition hover:text-white" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-white"
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="transition hover:text-white"
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
