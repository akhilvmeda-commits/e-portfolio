import type { RoadmapItem } from "@/content/site";

type TimelineProps = {
  items: RoadmapItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <article
          key={`${item.timeframe}-${item.title}`}
          className="grid gap-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_20px_50px_-40px_rgba(2,6,23,0.95)] sm:grid-cols-[140px_1fr]"
        >
          <div className="flex items-start gap-4 sm:flex-col sm:gap-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-sm font-semibold text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
              {index + 1}
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                Timeline
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900 dark:text-slate-100">
                {item.timeframe}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-slate-50">
                {item.title}
              </h3>
              <p className="leading-7 text-slate-600 dark:text-slate-300">{item.summary}</p>
            </div>
            <ul className="grid gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {item.milestones.map((milestone) => (
                <li
                  key={milestone}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900"
                >
                  {milestone}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
