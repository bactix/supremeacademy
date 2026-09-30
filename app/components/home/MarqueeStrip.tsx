export default function MarqueeStrip() {
  return (
    <div className="overflow-hidden bg-orange text-white">
      <div className="mx-auto flex max-w-310 flex-wrap justify-between gap-5 px-6 py-4 font-heading text-lg font-semibold uppercase italic tracking-[0.12em]">
        <span>Strength</span>
        <span>·</span>
        <span>Discipline</span>
        <span>·</span>
        <span>Respect</span>
        <span>·</span>
        <span>Fitness</span>
      </div>
    </div>
  );
}
