type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <div className="max-w-3xl space-y-5">
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-slate-50 sm:text-5xl">
        {title}
      </h1>
      {intro ? <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">{intro}</p> : null}
    </div>
  );
}
