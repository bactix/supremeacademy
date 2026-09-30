import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-white">
      <div className="mx-auto flex max-w-310 flex-wrap items-center justify-between gap-6 px-6 py-2.5">
        <a
          href="#top"
          aria-label="Supreme Academy home"
          className="relative block h-18.75 w-42.5 shrink-0 overflow-hidden"
        >
          <Image
            src="/assets/logo.png"
            alt="Supreme Academy, Strength & Fitness"
            width={222}
            height={222}
            priority
            className="absolute -left-7.25 -top-15 h-55.5 w-55.5 max-w-none"
          />
        </a>
        <nav className="flex flex-wrap items-center gap-7 font-heading text-[15px] font-semibold uppercase tracking-[0.04em]">
          <a href="#programs" className="text-ink hover:text-orange">
            Programs
          </a>
          <a href="#schedule" className="text-ink hover:text-orange">
            Schedule
          </a>
          <a href="#instructors" className="text-ink hover:text-orange">
            Team
          </a>
          <a href="/shop" className="text-ink hover:text-orange">
            Shop
          </a>
          <a
            href="#trial"
            className="inline-block -skew-x-12 bg-orange px-4.5 py-2.5 text-white hover:bg-ink"
          >
            <span className="inline-block skew-x-12">Free trial</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
