const INSTRUCTORS = [
  {
    name: "Coach Hussein",
    disciplines: "BJJ · Judo",
    photo: "Coach Hussein photo",
    bio: "Leads all BJJ and Judo classes, gi and no-gi, from fundamentals to advanced live rounds.",
  },
  {
    name: "Coach Shaymaa",
    disciplines: "Boxing · Women",
    photo: "Coach Shaymaa photo",
    bio: "Leads women-only boxing classes, building technique, conditioning and confidence.",
  },
  {
    name: "Coach Ammar",
    disciplines: "MMA",
    photo: "Coach Ammar photo",
    bio: "Runs MMA classes blending striking, grappling and takedowns for well-rounded fighters.",
  },
];

export default function Instructors() {
  return (
    <section id="instructors" className="mx-auto max-w-310 px-6 py-26">
      <h2 className="mb-12 font-heading text-[clamp(38px,5vw,64px)] font-extrabold uppercase italic leading-[0.95]">
        Meet the <span className="text-orange">coaches</span>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] gap-12">
        {INSTRUCTORS.map((ins) => (
          <div key={ins.name}>
            <div className="mb-5 aspect-4/5 overflow-hidden">
              <div className="flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(135deg,#efece8_0_12px,#e6e2dd_12px_24px)]">
                <span className="px-[16%] text-center font-[ui-monospace,Menlo,monospace] text-xs text-faint">
                  {ins.photo}
                </span>
              </div>
            </div>
            <div className="font-heading text-[28px] font-bold uppercase italic">{ins.name}</div>
            <div className="mt-1 font-heading text-[13px] font-semibold uppercase tracking-[0.08em] text-orange">
              {ins.disciplines}
            </div>
            <div className="mt-2.5 text-[15px] leading-normal text-faint">{ins.bio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
