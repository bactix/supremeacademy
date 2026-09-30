export default function MarqueeStrip() {
  return (
    <div style={{ background: "#ee6a1f", color: "#ffffff", overflow: "hidden" }}>
      <div
        className="font-kanit"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: 18,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
        }}
      >
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
