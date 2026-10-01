const BUNDLES = [
  {
    name: "Family Bundle",
    label: "3+ family members",
    price: 25,
    unit: "/ member",
    was: 30,
    details: "Train together. Every family of 3 or more members pays $25 per member instead of $30.",
  },
  {
    name: "Grappling Bundle",
    label: "Judo + BJJ · 5 days a week",
    price: 50,
    unit: "",
    was: 60,
    details: "Full grappling access: Judo and Brazilian Jiu-Jitsu, 5 days a week.",
  },
];

export default function Bundles() {
  return (
    <section id="bundles" style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 24px" }}>
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
        <span style={{ color: "#ee6a1f" }}>Bundles</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: 24 }}>
        {BUNDLES.map((b) => (
          <div key={b.name} style={{ border: "1px solid #ee6a1f", padding: "32px 28px", background: "rgba(238,106,31,0.06)" }}>
            <div
              className="font-kanit"
              style={{ fontStyle: "italic", fontWeight: 800, fontSize: 32, textTransform: "uppercase", color: "#ee6a1f", marginBottom: 4 }}
            >
              {b.name}
            </div>
            <div
              className="font-kanit"
              style={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "#7a746d" }}
            >
              {b.label}
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
              <span className="font-kanit" style={{ fontStyle: "italic", fontWeight: 800, fontSize: 44 }}>
                ${b.price}
                {b.unit && <span style={{ fontSize: 20, fontWeight: 600 }}> {b.unit}</span>}
              </span>
              <span className="font-kanit" style={{ fontWeight: 600, fontSize: 22, color: "#7a746d", textDecoration: "line-through" }}>
                ${b.was}
              </span>
            </div>
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
              Save ${b.was - b.price}
              {b.unit && ` ${b.unit}`}
            </div>
            <p style={{ margin: "16px 0 0", color: "#4a4540", lineHeight: 1.5 }}>{b.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
