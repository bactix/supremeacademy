import TrialForm from "./TrialForm";

export default function Trial() {
  return (
    <section id="trial" style={{ background: "#ee6a1f", color: "#141414" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "88px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <h2
            className="font-kanit"
            style={{
              fontStyle: "italic",
              fontWeight: 800,
              fontSize: "clamp(42px,6vw,76px)",
              lineHeight: 0.92,
              margin: "0 0 18px",
              textTransform: "uppercase",
              color: "#141414",
            }}
          >
            Your first class
            <br />
            is on us.
          </h2>
          <p style={{ fontSize: 18, lineHeight: 1.55, margin: 0, maxWidth: 440, color: "#141414" }}>
            No experience needed. Bring water and comfortable clothes, we&apos;ll handle the rest.
          </p>
        </div>
        <TrialForm />
      </div>
    </section>
  );
}
