import Image from "next/image";
import Link from "next/link";
import { PROGRAMS } from "../../lib/programs-data";

const CARDS = [...PROGRAMS].sort((a, b) => a.cardNum.localeCompare(b.cardNum));

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
          MMA, Brazilian Jiu-Jitsu, Judo, Boxing, Kickboxing and Muay Thai in Tripoli. Every
          membership includes open mat and strength sessions.
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: 24,
        }}
      >
        {CARDS.map((p) => (
          <article
            key={p.slug}
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
              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                style={{ objectFit: "cover" }}
              />
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
                {p.cardNum}
              </span>
            </div>
            <div style={{ padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
              <h3
                className="font-kanit"
                style={{ fontStyle: "italic", fontWeight: 800, fontSize: 32, margin: 0, textTransform: "uppercase", lineHeight: 1 }}
              >
                <Link href={`/programs/${p.slug}`} style={{ color: "inherit" }}>
                  {p.shortName}
                </Link>
              </h3>
              <div
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 14, color: "#c4520f", textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                {p.cardTag}
              </div>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#55504a", flex: 1, textWrap: "pretty" }}>
                {p.cardBlurb}
              </p>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 8 }}>
                <Link
                  href={`/programs/${p.slug}`}
                  className="font-kanit"
                  style={{ fontWeight: 600, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em" }}
                >
                  {p.shortName} classes →
                </Link>
                <a
                  href="#schedule"
                  className="font-kanit"
                  style={{ fontWeight: 600, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em", color: "#7a746d" }}
                >
                  Class times
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
