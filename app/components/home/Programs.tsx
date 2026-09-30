import Image from "next/image";

const PROGRAMS = [
  {
    num: "01",
    name: "Brazilian Jiu-Jitsu",
    tag: "Gi & No-Gi",
    img: "https://images.unsplash.com/photo-1747331796135-0e2354a712e4?auto=format&fit=crop&w=1000&q=70",
    alt: "BJJ grappling",
    body: "Leverage over strength. Learn to control, escape and submit on the ground through drilled technique and live rolling.",
  },
  {
    num: "02",
    name: "Judo",
    tag: "Throws & pins",
    img: "https://images.unsplash.com/photo-1677170202299-d2edadfa76a1?auto=format&fit=crop&w=1000&q=70",
    alt: "Judo throw",
    body: "The art of the throw. Build balance, timing and explosive takedowns, plus the safest way to fall.",
  },
  {
    num: "03",
    name: "Kickboxing",
    tag: "Striking & fitness",
    img: "https://images.unsplash.com/photo-1575800605380-ca1d27744f2c?auto=format&fit=crop&w=1000&q=70",
    alt: "Kickboxing high kick",
    body: "Punches, kicks, knees and footwork. Pad rounds that get you fit fast and sparring for those ready to test it.",
  },
];

export default function Programs() {
  return (
    <section id="programs" style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 24px 96px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 48,
        }}
      >
        <h2
          className="font-kanit"
          style={{
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "clamp(38px,5vw,64px)",
            lineHeight: 0.95,
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Our programs
        </h2>
        <p style={{ maxWidth: 420, margin: 0, fontSize: 17, lineHeight: 1.55, color: "#55504a", textWrap: "pretty" }}>
          Pick one discipline or combine all three. Every membership includes open mat and strength
          sessions.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: 24,
        }}
      >
        {PROGRAMS.map((p) => (
          <article
            key={p.num}
            className="sa-card"
            style={{ background: "#ffffff", display: "flex", flexDirection: "column", border: "1px solid #e7e4df" }}
          >
            <div
              style={{
                aspectRatio: "4/3",
                background: "repeating-linear-gradient(135deg,#efece8 0 12px,#e6e2dd 12px 24px)",
                position: "relative",
              }}
            >
              <Image src={p.img} alt={p.alt} fill sizes="(max-width: 900px) 100vw, 400px" style={{ objectFit: "cover" }} />
              <span
                className="font-kanit"
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "#141414",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: 13,
                  padding: "4px 10px",
                  letterSpacing: "0.08em",
                }}
              >
                {p.num}
              </span>
            </div>
            <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <h3
                className="font-kanit"
                style={{ fontStyle: "italic", fontWeight: 800, fontSize: 32, margin: 0, textTransform: "uppercase", lineHeight: 1 }}
              >
                {p.name}
              </h3>
              <div
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 14, color: "#c4520f", textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                {p.tag}
              </div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#55504a", flex: 1, textWrap: "pretty" }}>
                {p.body}
              </p>
              <a
                href="#schedule"
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 8 }}
              >
                See class times →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
