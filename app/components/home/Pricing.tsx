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
    <section id="pricing" style={{ background: "#0c0c0c", color: "#f7f6f4" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 24px" }}>
        <h2
          className="font-kanit"
          style={{
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "clamp(38px,5vw,64px)",
            lineHeight: 0.95,
            margin: "0 0 48px",
            textTransform: "uppercase",
          }}
        >
          Membership <span style={{ color: "#ee6a1f" }}>plans</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 24 }}>
          {PLANS.map((pl) => (
            <div
              key={pl.name}
              style={{
                border: `1px solid ${pl.badge ? "#ee6a1f" : "#262422"}`,
                padding: "32px 24px",
                background: pl.badge ? "rgba(238,106,31,0.06)" : "transparent",
              }}
            >
              <div
                className="font-kanit"
                style={{ fontStyle: "italic", fontWeight: 800, fontSize: 28, textTransform: "uppercase", color: "#ee6a1f", marginBottom: 4 }}
              >
                {pl.name}
              </div>
              <div
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "#a9a39c" }}
              >
                {pl.label}
              </div>
              <div className="font-kanit" style={{ fontStyle: "italic", fontWeight: 800, fontSize: 44, marginTop: 12 }}>
                ${pl.price}
              </div>
              {pl.hasSaving && (
                <div
                  className="font-kanit"
                  style={{
                    display: "inline-block",
                    marginTop: 10,
                    background: "#ee6a1f",
                    color: "#141414",
                    fontWeight: 600,
                    fontSize: 13,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    padding: "4px 10px",
                  }}
                >
                  Save ${pl.saving}
                </div>
              )}
              {pl.badge && (
                <div
                  className="font-kanit"
                  style={{ fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", color: "#ee6a1f", marginTop: 8 }}
                >
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
