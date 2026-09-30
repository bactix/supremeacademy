import Image from "next/image";
import Link from "next/link";
import type { Program } from "../../lib/programs-data";
import { PROGRAMS } from "../../lib/programs-data";
import ShopHeader from "../shop/ShopHeader";
import Footer from "../home/Footer";

export default function ProgramPage({ program }: { program: Program }) {
  const otherPrograms = PROGRAMS.filter((p) => p.slug !== program.slug);

  return (
    <>
      <ShopHeader />

      <section style={{ background: "#121212", color: "#f7f6f4", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "72px 24px 80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,440px),1fr))",
            gap: 48,
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
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: 13,
                marginBottom: 18,
              }}
            >
              {program.tagline}
            </div>
            <h1
              className="font-kanit"
              style={{
                fontStyle: "italic",
                fontWeight: 800,
                fontSize: "clamp(36px,6vw,64px)",
                lineHeight: 0.98,
                margin: "0 0 24px",
                textTransform: "uppercase",
              }}
            >
              {program.h1}
            </h1>
            {program.intro.map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontSize: 17,
                  lineHeight: 1.6,
                  color: "#cfcac3",
                  maxWidth: 520,
                  margin: i === program.intro.length - 1 ? "0 0 32px" : "0 0 16px",
                }}
              >
                {paragraph}
              </p>
            ))}
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link
                href="/#trial"
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
                  Book a free {program.shortName} class
                </span>
              </Link>
              <Link
                href="/#schedule"
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
                  Full weekly timetable
                </span>
              </Link>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              aspectRatio: "4/5",
              maxHeight: 520,
              clipPath: "polygon(14% 0,100% 0,86% 100%,0 100%)",
            }}
          >
            <Image
              src={program.image}
              alt={program.imageAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 600px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 24px" }}>
        <h2
          className="font-kanit"
          style={{
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "clamp(28px,4vw,40px)",
            lineHeight: 1,
            margin: "0 0 32px",
            textTransform: "uppercase",
          }}
        >
          Why train {program.shortName} here
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: 20,
          }}
        >
          {program.benefits.map((benefit) => (
            <div
              key={benefit}
              style={{
                display: "flex",
                gap: 12,
                alignItems: "flex-start",
                padding: 20,
                border: "1px solid #e7e4df",
                background: "#ffffff",
              }}
            >
              <span
                className="font-kanit"
                style={{
                  color: "#ee6a1f",
                  fontWeight: 800,
                  fontSize: 18,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
                aria-hidden
              >
                ✓
              </span>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "#55504a" }}>
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#0c0c0c", color: "#f7f6f4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 24px" }}>
          <h2
            className="font-kanit"
            style={{
              fontStyle: "italic",
              fontWeight: 800,
              fontSize: "clamp(28px,4vw,40px)",
              lineHeight: 1,
              margin: "0 0 8px",
              textTransform: "uppercase",
            }}
          >
            {program.shortName} <span style={{ color: "#ee6a1f" }}>weekly schedule</span>
          </h2>
          <p style={{ margin: "0 0 32px", fontSize: 15, color: "#a9a39c" }}>
            All classes at Supreme Academy, Tripoli. Open mat included with membership.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            {program.schedule.map((entry) => (
              <div
                key={`${entry.day}-${entry.time}`}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  background: "#141414",
                  borderLeft: "3px solid #ee6a1f",
                }}
              >
                <div className="font-kanit" style={{ fontWeight: 700, fontSize: 16, textTransform: "uppercase" }}>
                  {entry.day}
                </div>
                <div style={{ fontSize: 15, color: "#cfcac3" }}>{entry.time}</div>
                <div style={{ fontSize: 14, color: "#a9a39c" }}>{entry.coach}</div>
                {entry.note && (
                  <div
                    className="font-kanit"
                    style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", color: "#ee6a1f" }}
                  >
                    {entry.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 24px" }}>
        <h2
          className="font-kanit"
          style={{
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "clamp(28px,4vw,40px)",
            lineHeight: 1,
            margin: "0 0 32px",
            textTransform: "uppercase",
          }}
        >
          {program.shortName} <span style={{ color: "#ee6a1f" }}>questions</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 720 }}>
          {program.faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="font-kanit" style={{ fontWeight: 700, fontSize: 17, margin: "0 0 8px" }}>
                {faq.question}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#55504a" }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#141414", color: "#f7f6f4" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "56px 24px" }}>
          <h2
            className="font-kanit"
            style={{
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: 20,
              margin: "0 0 20px",
              textTransform: "uppercase",
              color: "#a9a39c",
            }}
          >
            Other programs at Supreme Academy
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {otherPrograms.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="font-kanit"
                style={{
                  border: "1px solid #4a4744",
                  color: "#f7f6f4",
                  padding: "10px 18px",
                  fontSize: 14,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {p.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#ee6a1f", color: "#141414" }}>
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "56px 24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <h2
            className="font-kanit"
            style={{
              fontStyle: "italic",
              fontWeight: 800,
              fontSize: "clamp(26px,4vw,36px)",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Try a {program.shortName} class free.
          </h2>
          <Link
            href="/#trial"
            className="font-kanit"
            style={{
              background: "#141414",
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
            <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>Claim your trial</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
