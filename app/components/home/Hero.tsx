import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-dark text-cream">
      <div className="mx-auto grid max-w-310 grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-14 px-6 pb-24 pt-22">
        <div>
          <div className="mb-5.5 font-heading text-sm font-semibold uppercase italic tracking-[0.28em] text-orange">
            BJJ · Judo · Kickboxing
          </div>
          <h1 className="mb-7 font-heading text-[clamp(52px,8vw,108px)] font-extrabold uppercase italic leading-[0.92] tracking-[-0.01em]">
            Train hard.
            <br />
            <span className="text-orange">Rise</span> supreme.
          </h1>
          <p className="mb-9 max-w-120 text-[19px] leading-[1.55] text-subtle text-pretty">
            Three disciplines under one roof. Structured classes for complete beginners through
            competitors, coached by people who still step on the mat every day.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#trial"
              className="inline-block -skew-x-12 bg-orange px-7.5 py-4 font-heading text-base font-semibold uppercase tracking-[0.06em] text-white hover:bg-white hover:text-dark"
            >
              <span className="inline-block skew-x-12">Book your free class</span>
            </a>
            <a
              href="#schedule"
              className="inline-block -skew-x-12 border-2 border-border-neutral px-7 py-3.5 font-heading text-base font-semibold uppercase tracking-[0.06em] text-cream hover:border-orange hover:text-orange"
            >
              <span className="inline-block skew-x-12">View timetable</span>
            </a>
          </div>
        </div>
        <div className="relative aspect-4/5 max-h-155 [clip-path:polygon(14%_0,100%_0,86%_100%,0_100%)]">
          <Image
            src="/assets/hero-fighter.png"
            alt="Fighter in Phantom rashguard"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 600px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
