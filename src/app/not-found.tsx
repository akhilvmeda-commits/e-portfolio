import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        Page not found
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950">
        This route does not exist in the portfolio.
      </h1>
      <p className="max-w-xl text-lg leading-8 text-slate-600">
        Use the navigation to return to the main site sections or head back to
        the homepage.
      </p>
      <Link
        href="/"
        className="button-base button-primary"
      >
        Return Home
      </Link>
    </div>
  );
}
