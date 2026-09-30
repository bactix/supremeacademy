"use client";

import { useState } from "react";

const inputClasses =
  "border border-input-border bg-input px-4 py-3.75 text-base text-cream outline-none focus:border-orange";

export default function TrialForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-ink px-8 py-10 text-cream">
        <div className="font-heading text-[32px] font-extrabold uppercase italic text-orange">
          You&apos;re in.
        </div>
        <p className="mt-2.5 text-[17px] leading-[1.55] text-subtle">
          We&apos;ll email you within 24 hours to lock in your first session.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="flex flex-col gap-3.5 bg-ink p-8"
    >
      <input required placeholder="Full name" className={inputClasses} />
      <input required type="email" placeholder="Email" className={inputClasses} />
      <select className={inputClasses}>
        <option>Brazilian Jiu-Jitsu</option>
        <option>Judo</option>
        <option>Kickboxing</option>
        <option>Not sure yet</option>
      </select>
      <button
        type="submit"
        className="mt-1.5 cursor-pointer bg-orange p-4.25 font-heading text-[17px] font-semibold uppercase tracking-[0.08em] text-white hover:bg-white hover:text-ink"
      >
        Claim free class
      </button>
    </form>
  );
}
