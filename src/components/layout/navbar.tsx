"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navItems, siteConfig } from "@/content/site";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-700 dark:text-blue-300">
            Akhil Meda
          </span>
          <span className="text-sm text-slate-500 dark:text-slate-400">{siteConfig.shortTitle}</span>
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={active ? "nav-link nav-link-active" : "nav-link"}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
