"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  organization: "",
  message: "",
};

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [statusMessage, setStatusMessage] = useState<string>("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormState((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Replace this demo handler with a real email service or API route before
    // public launch if you want form submissions delivered automatically.
    setStatusMessage(
      "Thanks for reaching out. This demo form is wired for UI behavior only, so the next step is connecting it to an email or form backend.",
    );
    setFormState(initialState);
  }

    return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:bg-slate-950 dark:shadow-[0_20px_60px_-40px_rgba(2,6,23,0.95)]"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>Name</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-950"
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
          <span>Email</span>
          <input
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-950"
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="name@company.com"
            required
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>Organization</span>
        <input
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-950"
          type="text"
          name="organization"
          value={formState.organization}
          onChange={handleChange}
          placeholder="Company, lab, or club"
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-300">
        <span>Message</span>
        <textarea
          className="min-h-40 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-400 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:bg-slate-950"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Share the role, collaboration, or opportunity you would like to discuss."
          required
        />
      </label>
      <button
        type="submit"
        className="button-base button-primary"
      >
        Send message
      </button>
      {statusMessage ? <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">{statusMessage}</p> : null}
    </form>
  );
}
