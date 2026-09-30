const PLANS = [
  { name: "Starter", label: "1 Month", months: 1, price: 30 },
  { name: "Committed", label: "3 Months", months: 3, price: 80 },
  { name: "Warrior", label: "6 Months", months: 6, price: 150, badge: "Most Popular" },
  { name: "Champion", label: "1 Year", months: 12, price: 280, badge: "Best Value" },
].map((p) => ({
  ...p,
  saving: p.months * 30 - p.price,
  hasSaving: p.months * 30 - p.price > 0,
}));

export default function Pricing() {
  return (
    <section id="pricing" className="bg-darker text-cream">
      <div className="mx-auto max-w-310 px-6 py-26">
        <h2 className="mb-12 font-heading text-[clamp(38px,5vw,64px)] font-extrabold uppercase italic leading-[0.95]">
          Membership <span className="text-orange">plans</span>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-6">
          {PLANS.map((pl) => (
            <div
              key={pl.name}
              className={`border px-6 py-8 ${
                pl.badge ? "border-orange bg-orange/6" : "border-border-dark"
              }`}
            >
              <div className="mb-1 font-heading text-[28px] font-extrabold uppercase italic text-orange">
                {pl.name}
              </div>
              <div className="font-heading text-sm font-semibold uppercase tracking-[0.08em] text-muted">
                {pl.label}
              </div>
              <div className="mt-3 font-heading text-[44px] font-extrabold italic">${pl.price}</div>
              {pl.hasSaving && (
                <div className="mt-2.5 inline-block bg-orange px-2.5 py-1 font-heading text-[13px] font-semibold uppercase tracking-[0.04em] text-ink">
                  Save ${pl.saving}
                </div>
              )}
              {pl.badge && (
                <div className="mt-2 font-heading text-xs font-semibold uppercase tracking-[0.06em] text-orange">
                  {pl.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
