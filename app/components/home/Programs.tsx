import Image from "next/image";

const PROGRAMS = [
  {
    num: "01",
    name: "Brazilian Jiu-Jitsu",
    tag: "Gi & No-Gi",
    img: "https://images.unsplash.com/photo-1747331796135-0e2354a712e4?auto=format&fit=crop&w=1000&q=70",
    alt: "BJJ grappling",
    body: "Leverage over strength. Learn to control, escape and submit on the ground through drilled technique and live rolling.",
  },
  {
    num: "02",
    name: "Judo",
    tag: "Throws & pins",
    img: "https://images.unsplash.com/photo-1677170202299-d2edadfa76a1?auto=format&fit=crop&w=1000&q=70",
    alt: "Judo throw",
    body: "The art of the throw. Build balance, timing and explosive takedowns, plus the safest way to fall.",
  },
  {
    num: "03",
    name: "Kickboxing",
    tag: "Striking & fitness",
    img: "https://images.unsplash.com/photo-1575800605380-ca1d27744f2c?auto=format&fit=crop&w=1000&q=70",
    alt: "Kickboxing high kick",
    body: "Punches, kicks, knees and footwork. Pad rounds that get you fit fast and sparring for those ready to test it.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-310 px-6 pb-24 pt-26">
      <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-heading text-[clamp(38px,5vw,64px)] font-extrabold uppercase italic leading-[0.95]">
          Our programs
        </h2>
        <p className="max-w-105 text-[17px] leading-[1.55] text-body text-pretty">
          Pick one discipline or combine all three. Every membership includes open mat and strength
          sessions.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-6">
        {PROGRAMS.map((p) => (
          <article
            key={p.num}
            className="flex flex-col border border-border bg-white hover:border-orange"
          >
            <div className="relative aspect-4/3 bg-[repeating-linear-gradient(135deg,#efece8_0_12px,#e6e2dd_12px_24px)]">
              <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 400px" className="object-cover" />
              <span className="absolute left-4 top-4 bg-ink px-2.5 py-1 font-heading text-[13px] font-semibold tracking-[0.08em] text-white">
                {p.num}
              </span>
            </div>
            <div className="flex flex-1 flex-col gap-3.5 px-7 pb-8 pt-7">
              <h3 className="font-heading text-[32px] font-extrabold uppercase italic leading-none">
                {p.name}
              </h3>
              <div className="font-heading text-sm font-semibold uppercase tracking-widest text-orange-dark">
                {p.tag}
              </div>
              <p className="flex-1 text-base leading-[1.6] text-body text-pretty">{p.body}</p>
              <a
                href="#schedule"
                className="mt-2 font-heading text-[15px] font-semibold uppercase tracking-[0.08em] text-ink hover:text-orange"
              >
                See class times →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
