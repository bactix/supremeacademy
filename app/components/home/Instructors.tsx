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
    <section id="instructors" style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 24px" }}>
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
        Meet the <span style={{ color: "#ee6a1f" }}>coaches</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: 48 }}>
        {INSTRUCTORS.map((ins) => (
          <div key={ins.name}>
            <div style={{ aspectRatio: "4/5", overflow: "hidden", marginBottom: 20 }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "repeating-linear-gradient(135deg,#efece8 0 12px,#e6e2dd 12px 24px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, color: "#7a746d", textAlign: "center", padding: "0 16%" }}>
                  {ins.photo}
                </span>
              </div>
            </div>
            <div className="font-kanit" style={{ fontStyle: "italic", fontWeight: 700, fontSize: 28, textTransform: "uppercase" }}>
              {ins.name}
            </div>
            <div
              className="font-kanit"
              style={{ fontSize: 13, fontWeight: 600, color: "#ee6a1f", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}
            >
              {ins.disciplines}
            </div>
            <div style={{ fontSize: 15, color: "#7a746d", marginTop: 10, lineHeight: 1.5 }}>{ins.bio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
