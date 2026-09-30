export default function Location() {
  return (
    <section id="location" style={{ background: "#141414", color: "#f7f6f4" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "104px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
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
              fontSize: "clamp(38px,5vw,64px)",
              lineHeight: 0.95,
              margin: "0 0 24px",
              textTransform: "uppercase",
            }}
          >
            Find <span style={{ color: "#ee6a1f" }}>us</span>
          </h2>
          <div style={{ fontSize: 17, lineHeight: 1.6, color: "#cfcac3" }}>
            <div>Tripoli, Lebanon</div>
            <div style={{ marginTop: 12 }}>Open Mon–Sat, 8:30am – 9:00pm</div>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=34.4233446,35.8370708&destination_place_id=0x1521f749a16dc0f7:0x45b16d7b9cad902"
            target="_blank"
            rel="noopener"
            className="font-kanit sa-directions"
            style={{
              display: "inline-block",
              marginTop: 28,
              fontWeight: 600,
              fontSize: 15,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "#141414",
              background: "#ee6a1f",
              padding: "14px 26px",
            }}
          >
            Get Directions
          </a>
        </div>
        <div style={{ aspectRatio: "4/3", overflow: "hidden", border: "1px solid #262422" }}>
          <iframe
            src="https://maps.google.com/maps?q=34.4233446,35.8370708&z=16&output=embed"
            style={{ width: "100%", height: "100%", border: 0 }}
            loading="lazy"
            title="Supreme Academy location"
          />
        </div>
      </div>
    </section>
  );
}
