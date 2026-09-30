import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" style={{ background: "#121212", color: "#f7f6f4", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "88px 24px 96px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))",
          gap: 56,
          alignItems: "center",
        }}
      >
        <div>
          <div
            className="font-kanit"
            style={{
              fontStyle: "italic",
              fontWeight: 600,
              color: "#ee6a1f",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontSize: 14,
              marginBottom: 22,
            }}
          >
            BJJ · Judo · Kickboxing
          </div>
          <h1
            className="font-kanit"
            style={{
              fontStyle: "italic",
              fontWeight: 800,
              fontSize: "clamp(52px,8vw,108px)",
              lineHeight: 0.92,
              margin: "0 0 28px",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
            }}
          >
            Train hard.
            <br />
            <span style={{ color: "#ee6a1f" }}>Rise</span> supreme.
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "#cfcac3",
              maxWidth: 480,
              margin: "0 0 36px",
              textWrap: "pretty",
            }}
          >
            Three disciplines under one roof. Structured classes for complete beginners through
            competitors, coached by people who still step on the mat every day.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#trial"
              className="font-kanit sa-hero-cta"
              style={{
                background: "#ee6a1f",
                color: "#ffffff",
                padding: "16px 30px",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                transform: "skewX(-12deg)",
                display: "inline-block",
              }}
            >
              <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>
                Book your free class
              </span>
            </a>
            <a
              href="#schedule"
              className="font-kanit sa-hero-outline"
              style={{
                border: "2px solid #4a4744",
                color: "#f7f6f4",
                padding: "14px 28px",
                fontWeight: 600,
                fontSize: 16,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                transform: "skewX(-12deg)",
                display: "inline-block",
              }}
            >
              <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>
                View timetable
              </span>
            </a>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            aspectRatio: "4/5",
            maxHeight: 620,
            clipPath: "polygon(14% 0,100% 0,86% 100%,0 100%)",
          }}
        >
          <Image
            src="/assets/hero-fighter.png"
            alt="Fighter in Phantom rashguard"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 600px"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
