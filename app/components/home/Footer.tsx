export default function Footer() {
  return (
    <footer style={{ background: "#0c0c0c", color: "#a9a39c" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "56px 24px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: 36,
        }}
      >
        <div style={{ fontSize: 15, lineHeight: 1.7 }}>
          <div className="font-kanit" style={{ fontWeight: 600, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
            Visit
          </div>
          Tripoli, Lebanon
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.7 }}>
          <div className="font-kanit" style={{ fontWeight: 600, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
            Contact
          </div>
          <a href="tel:+9613395854" style={{ color: "inherit" }}>
            +961 3 395 854
          </a>
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.7 }}>
          <div className="font-kanit" style={{ fontWeight: 600, color: "#ffffff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>
            Hours
          </div>
          Mon–Fri 6:00–21:30
          <br />
          Sat 9:00–14:00
        </div>
      </div>
    </footer>
  );
}
