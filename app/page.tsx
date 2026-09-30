"use client";

import Image from "next/image";
import { useMemo, useState, type CSSProperties } from "react";

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#ffffff",
        borderBottom: "1px solid #e7e4df",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <a
          href="#top"
          aria-label="Supreme Academy home"
          style={{
            display: "block",
            width: 170,
            height: 75,
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image
            src="/assets/logo.png"
            alt="Supreme Academy, Strength & Fitness"
            width={222}
            height={222}
            priority
            style={{ position: "absolute", width: 222, height: 222, left: -29, top: -60, maxWidth: "none" }}
          />
        </a>
        <nav
          className="font-kanit"
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            alignItems: "center",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <a href="#programs">Programs</a>
          <a href="#schedule">Schedule</a>
          <a href="/shop">Shop</a>
          <a
            href="#trial"
            className="sa-nav-cta"
            style={{
              background: "#ee6a1f",
              color: "#ffffff",
              padding: "10px 18px",
              transform: "skewX(-12deg)",
              display: "inline-block",
            }}
          >
            <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>Free trial</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
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

/* ------------------------------------------------------------------ */
/* Marquee strip                                                       */
/* ------------------------------------------------------------------ */

function MarqueeStrip() {
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

/* ------------------------------------------------------------------ */
/* Programs                                                            */
/* ------------------------------------------------------------------ */

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

function Programs() {
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

/* ------------------------------------------------------------------ */
/* Schedule timetable                                                  */
/* ------------------------------------------------------------------ */

type ClassSlot = [time: string, name: string, coach: string, tag: string];
type DaySchedule = [day: string, classes: ClassSlot[]];

const SCHED: DaySchedule[] = [
  [
    "Mon",
    [
      ["8:30–9:30", "Extreme Fitness", "Coach Rouba", "Only Women"],
      ["10:00–11:00", "Boxing", "Coach Amar", "All levels"],
      ["11:00–12:00", "Cardio", "Coach Mohamad", "All levels"],
      ["12:00–1:00", "Bungee Jumping", "Coach Dania", "Only Women"],
      ["3:00–4:00", "Zumba", "Coach Danya", "Only Women"],
      ["4:00–5:00", "U Bound", "", "Only Women"],
      ["5:00–6:00", "Extreme Fitness", "Coach Rouba", "Only Women"],
      ["6:00–7:00", "Boxing / Muay Thai", "Coach Alaa Eldin", "All levels"],
      ["7:00–8:00", "Belly Dance", "Coach Amar", "Only Women"],
      ["8:00–9:00", "Private Session", "", "Private"],
    ],
  ],
  [
    "Tue",
    [
      ["10:00–11:00", "U Bound", "", "Only Women"],
      ["11:00–12:00", "Pilates", "Coach Danya", "Only Women"],
      ["3:00–4:00", "U Bound", "", "Only Women"],
      ["4:00–5:00", "Pilates", "Coach Danya", "Only Women"],
      ["5:00–6:00", "Bungee Jumping", "Coach Dodji", "Only Women"],
      ["6:00–7:00", "Judo", "Coach Hussein", "All levels"],
      ["7:00–8:00", "BJJ – No Gi", "Coach Hussein", "All levels"],
      ["8:00–9:00", "Kickboxing", "Coach Rami", "All levels"],
    ],
  ],
  [
    "Wed",
    [
      ["8:30–9:30", "Extreme Fitness", "Coach Rouba", "Only Women"],
      ["10:00–11:00", "MMA", "Coach Ammar", "All levels"],
      ["11:00–12:00", "Cardio", "Coach Mohamad", "All levels"],
      ["12:00–1:00", "Bungee Jumping", "Coach Dania", "Only Women"],
      ["4:00–5:00", "MMA", "Coach Ammar", "All levels"],
      ["5:00–6:00", "Extreme Fitness", "Coach Rouba", "Only Women"],
      ["6:00–7:00", "Boxing / Muay Thai", "Coach Alaa Eldin", "All levels"],
      ["7:00–8:00", "Kickboxing", "Coach Rami", "All levels"],
      ["8:00–9:00", "Private Session", "", "Private"],
    ],
  ],
  [
    "Thu",
    [
      ["10:00–11:00", "U Bound", "", "Only Women"],
      ["11:00–12:00", "Pilates", "Coach Danya", "Only Women"],
      ["4:00–5:00", "Gymnastics", "Coach Rana", "All levels"],
      ["5:00–6:00", "Bungee Jumping", "Coach Dodji", "Only Women"],
      ["6:00–7:00", "Boxing", "Coach Shaymaa", "Only Women"],
      ["7:00–8:00", "BJJ – Gi", "Coach Hussein", "All levels"],
      ["8:00–9:00", "Kickboxing", "Coach Rami", "All levels"],
    ],
  ],
  [
    "Fri",
    [
      ["8:30–9:30", "Extreme Fitness", "Coach Rouba", "Only Women"],
      ["10:00–11:00", "Boxing", "Coach Amar", "All levels"],
      ["11:00–12:00", "Pilates", "Coach Danya", "Only Women"],
      ["12:00–1:00", "Zumba", "Coach Danya", "Only Women"],
      ["4:00–5:00", "MMA", "Coach Ammar", "All levels"],
      ["5:00–6:00", "Extreme Fitness", "Coach Rouba", "Only Women"],
      ["6:00–7:00", "Judo", "Coach Hussein", "All levels"],
      ["7:00–8:00", "Kickboxing", "Coach Rami", "All levels"],
      ["8:00–9:00", "Private Session", "", "Private"],
    ],
  ],
  [
    "Sat",
    [
      ["10:00–11:00", "Pilates", "Coach Danya", "All levels"],
      ["11:00–12:00", "Cardio", "", "All levels"],
      ["12:00–1:00", "MMA", "Coach Ammar", "All levels"],
      ["2:00–3:00", "Zumba", "Coach Danya", "Only Women"],
      ["3:00–4:00", "Boxing", "Coach Shaymaa", "All levels"],
      ["4:00–5:00", "Gymnastics", "Coach Rana", "All levels"],
      ["5:00–6:00", "Boxing / Muay Thai", "Coach Alaa Eldin", "All levels"],
      ["6:00–7:00", "Judo", "Coach Hussein", "All levels"],
      ["7:00–8:00", "Belly Dance", "Coach Amar", "Only Women"],
      ["8:00–9:00", "Private Session", "", "Private"],
    ],
  ],
  ["Sun", []],
];

const TIMES = [
  "8:30–9:30",
  "10:00–11:00",
  "11:00–12:00",
  "12:00–1:00",
  "1:00–2:00",
  "2:00–3:00",
  "3:00–4:00",
  "4:00–5:00",
  "5:00–6:00",
  "6:00–7:00",
  "7:00–8:00",
  "8:00–9:00",
];

const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const GRAPPLING = ["BJJ", "Judo"];
const isGrappling = (name: string) => GRAPPLING.some((g) => name.includes(g));

const STRIKING = ["Boxing", "Kickboxing", "Muay Thai", "MMA"];
const isStriking = (name: string) => STRIKING.some((s) => name.includes(s));

const FITNESS = [
  "Fitness",
  "Cardio",
  "Pilates",
  "Zumba",
  "U Bound",
  "Bungee",
  "Gymnastics",
  "Belly Dance",
];
const isFitness = (name: string) => FITNESS.some((f) => name.includes(f));

type FilterKey = "fitness" | "women" | "men" | "grappling" | "striking";

const FILTERS: Record<FilterKey, (found: ClassSlot) => boolean> = {
  fitness: (found) => isFitness(found[1]),
  women: (found) => found[3] === "Only Women",
  men: (found) => found[3] !== "Only Women" && found[3] !== "Kids",
  grappling: (found) => isGrappling(found[1]),
  striking: (found) => isStriking(found[1]),
};

const FILTER_BUTTONS: { key: FilterKey | "empty"; label: string }[] = [
  { key: "women", label: "Women Only classes" },
  { key: "grappling", label: "Grappling classes" },
  { key: "striking", label: "Striking classes" },
  { key: "fitness", label: "Fitness classes" },
  { key: "empty", label: "Empty slots" },
];

function buildGrid(activeFilter: FilterKey | "empty" | null) {
  return TIMES.map((time) => ({
    time,
    cells: SCHED.map(([, list]) => {
      const found = list.find(([t]) => t === time);
      const closed = list.length === 0 && time === "8:30–9:30";
      const emptyMode = activeFilter === "empty";
      const isEmpty = !found && !closed;
      const match = emptyMode
        ? isEmpty
        : !!found && (!activeFilter || FILTERS[activeFilter](found));
      const dim = emptyMode ? !!found : !!found && !!activeFilter && !match;

      const boxStyle: CSSProperties = {
        border: "1px solid #262422",
        borderTop: "none",
        padding: "6px 4px",
        minHeight: 56,
        background: found
          ? found[3] === "Only Women"
            ? "rgba(238,106,31,0.08)"
            : found[3] === "Private"
              ? "rgba(255,255,255,0.03)"
              : "transparent"
          : emptyMode && isEmpty
            ? "rgba(238,106,31,0.18)"
            : "transparent",
        boxShadow: match && activeFilter ? "inset 0 0 0 2px #ee6a1f" : "none",
        opacity: dim ? 0.28 : 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: closed ? "#5c5852" : "#f7f6f4",
        fontStyle: closed ? "italic" : "normal",
        fontSize: closed ? 12 : undefined,
        textAlign: closed ? "center" : undefined,
        transition: "opacity 0.15s, box-shadow 0.15s",
      };

      return {
        hasClass: !!found,
        name: found ? found[1] : closed ? "Closed" : "",
        coach: found ? found[2] : "",
        tag: found ? found[3] : "",
        boxStyle,
      };
    }),
  }));
}

function getFontFamily(varName: string, fallback: string) {
  if (typeof window === "undefined") return fallback;
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim();
  return value || fallback;
}

async function downloadSchedule() {
  const kanit = getFontFamily("--font-kanit", "Kanit, sans-serif");
  const barlow = getFontFamily("--font-barlow", "Barlow, sans-serif");
  try {
    await document.fonts.load(`italic 800 20px ${kanit}`);
    await document.fonts.load(`600 20px ${kanit}`);
  } catch {
    // fonts may already be loaded
  }

  const S = 2;
  const pad = 40;
  const timeW = 120;
  const colW = 200;
  const headH = 48;
  const rowH = 74;
  const titleH = 80;
  const W = pad * 2 + timeW + colW * SCHED.length;
  const H = pad * 2 + titleH + headH + rowH * TIMES.length;

  const c = document.createElement("canvas");
  c.width = W * S;
  c.height = H * S;
  const x = c.getContext("2d");
  if (!x) return;
  x.scale(S, S);
  x.fillStyle = "#121212";
  x.fillRect(0, 0, W, H);
  x.textBaseline = "alphabetic";
  x.font = `italic 800 40px ${kanit}`;
  x.fillStyle = "#f7f6f4";
  x.fillText("WEEKLY ", pad, pad + 44);
  const wW = x.measureText("WEEKLY ").width;
  x.fillStyle = "#ee6a1f";
  x.fillText("SCHEDULE", pad + wW, pad + 44);

  const top = pad + titleH;
  const days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  x.textAlign = "center";
  SCHED.forEach(([day], i) => {
    const cx = pad + timeW + colW * i;
    x.font = `italic 700 18px ${kanit}`;
    x.fillStyle = "#ee6a1f";
    x.fillText(days[i] || day.toUpperCase(), cx + colW / 2, top + 30);
  });
  x.fillStyle = "#ee6a1f";
  x.fillRect(pad + timeW, top + headH - 2, colW * SCHED.length, 2);
  x.textAlign = "left";

  const clip = (t: string, max: number) => {
    if (x.measureText(t).width <= max) return t;
    while (t.length && x.measureText(t + "…").width > max) t = t.slice(0, -1);
    return t + "…";
  };

  TIMES.forEach((time, r) => {
    const y = top + headH + rowH * r;
    x.strokeStyle = "#262422";
    x.lineWidth = 1;
    x.beginPath();
    x.moveTo(pad, y + 0.5);
    x.lineTo(W - pad, y + 0.5);
    x.stroke();
    x.font = `600 15px ${barlow}`;
    x.fillStyle = "#a9a39c";
    x.fillText(time, pad + 4, y + rowH / 2 + 5);

    SCHED.forEach(([, list], i) => {
      const cx = pad + timeW + colW * i;
      x.strokeRect(cx + 0.5, y + 0.5, colW, rowH);
      const f = list.find(([t]) => t === time);
      if (!f) return;
      if (f[3] === "Only Women") {
        x.fillStyle = "rgba(238,106,31,0.10)";
        x.fillRect(cx + 1, y + 1, colW - 1, rowH - 1);
      }
      x.font = `italic 600 16px ${kanit}`;
      x.fillStyle = "#f7f6f4";
      x.fillText(clip(f[1].toUpperCase(), colW - 20), cx + 10, y + 24);
      x.font = `500 13px ${barlow}`;
      x.fillStyle = "#a9a39c";
      x.fillText(clip(f[2], colW - 20), cx + 10, y + 43);
      x.font = `600 11px ${kanit}`;
      x.fillStyle = "#ee6a1f";
      x.fillText(clip(f[3].toUpperCase(), colW - 20), cx + 10, y + 61);
    });
  });

  c.toBlob((b) => {
    if (!b) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(b);
    a.download = "Weekly Schedule.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }, "image/png");
}

function RowCells({
  time,
  cells,
}: {
  time: string;
  cells: ReturnType<typeof buildGrid>[number]["cells"];
}) {
  return (
    <>
      <div
        className="font-kanit"
        style={{
          fontWeight: 600,
          fontSize: 11,
          color: "#a9a39c",
          padding: "6px 2px",
          borderTop: "1px solid #262422",
          display: "flex",
          alignItems: "center",
        }}
      >
        {time}
      </div>
      {cells.map((cell, i) => (
        <div key={i} style={cell.boxStyle}>
          {cell.hasClass && (
            <>
              <div
                className="font-kanit"
                style={{
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: 11,
                  textTransform: "uppercase",
                  lineHeight: 1.15,
                  wordBreak: "break-word",
                }}
              >
                {cell.name}
              </div>
              <div style={{ fontSize: 9, color: "#a9a39c", marginTop: 2, wordBreak: "break-word" }}>
                {cell.coach}
              </div>
              <div
                style={{
                  fontSize: 8,
                  color: "#ee6a1f",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginTop: 2,
                }}
              >
                {cell.tag}
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

function ScheduleTimetable() {
  const [activeFilter, setActiveFilter] = useState<FilterKey | "empty" | null>(
    null,
  );
  const grid = useMemo(() => buildGrid(activeFilter), [activeFilter]);

  return (
    <section id="schedule" style={{ background: "#121212", color: "#f7f6f4" }}>
      <div style={{ width: "90%", maxWidth: "90%", margin: "0 auto", padding: "96px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 20,
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
            Weekly <span style={{ color: "#ee6a1f" }}>timetable</span>
          </h2>
          <button
            onClick={downloadSchedule}
            className="font-kanit"
            style={{
              fontWeight: 600,
              fontSize: 14,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              padding: "10px 18px",
              cursor: "pointer",
              border: "1px solid #ee6a1f",
              background: "transparent",
              color: "#ee6a1f",
            }}
          >
            Download
          </button>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
          {FILTER_BUTTONS.map((fb) => {
            const isActive = activeFilter === fb.key;
            return (
              <button
                key={fb.key}
                onClick={() =>
                  setActiveFilter((prev) => (prev === fb.key ? null : fb.key))
                }
                className="font-kanit"
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "9px 16px",
                  cursor: "pointer",
                  border: `1px solid ${isActive ? "#ee6a1f" : "#4a4744"}`,
                  background: isActive ? "#ee6a1f" : "transparent",
                  color: isActive ? "#ffffff" : "#cfcac3",
                }}
              >
                {fb.label}
              </button>
            );
          })}
        </div>

        <div>
          <div style={{ display: "grid", gridTemplateColumns: "64px repeat(7,minmax(0,1fr))" }}>
            <div />
            {DAY_NAMES.map((dn) => (
              <div
                key={dn}
                className="font-kanit"
                style={{
                  fontStyle: "italic",
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  textAlign: "center",
                  padding: "8px 2px",
                  color: "#ee6a1f",
                  borderBottom: "2px solid #ee6a1f",
                  overflow: "hidden",
                }}
              >
                {dn}
              </div>
            ))}
            {grid.map((row) => (
              <RowCells key={row.time} time={row.time} cells={row.cells} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Instructors                                                         */
/* ------------------------------------------------------------------ */

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

function Instructors() {
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

/* ------------------------------------------------------------------ */
/* Trial (form + section)                                              */
/* ------------------------------------------------------------------ */

const inputStyle = {
  background: "#1f1e1d",
  border: "1px solid #3a3734",
  color: "#f7f6f4",
  padding: "15px 16px",
  fontSize: 16,
  outline: "none",
} as const;

function TrialForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div style={{ background: "#141414", color: "#f7f6f4", padding: "40px 32px" }}>
        <div
          className="font-kanit"
          style={{
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: 32,
            textTransform: "uppercase",
            color: "#ee6a1f",
          }}
        >
          You&apos;re in.
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.55, margin: "10px 0 0", color: "#cfcac3" }}>
          We&apos;ll email you within 24 hours to lock in your first session.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{ background: "#141414", padding: 32, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <input required placeholder="Full name" className="sa-input" style={inputStyle} />
      <input required type="email" placeholder="Email" className="sa-input" style={inputStyle} />
      <select className="sa-input" style={inputStyle}>
        <option>Brazilian Jiu-Jitsu</option>
        <option>Judo</option>
        <option>Kickboxing</option>
        <option>Not sure yet</option>
      </select>
      <button
        type="submit"
        className="font-kanit sa-submit"
        style={{
          background: "#ee6a1f",
          color: "#ffffff",
          border: "none",
          padding: 17,
          fontWeight: 600,
          fontSize: 17,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          cursor: "pointer",
          marginTop: 6,
        }}
      >
        Claim free class
      </button>
    </form>
  );
}

function Trial() {
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

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

const PLANS = [
  { name: "Starter", label: "1 Month", months: 1, price: 30 },
  { name: "Committed", label: "3 Months", months: 3, price: 80 },
  { name: "Warrior", label: "6 Months", months: 6, price: 150, badge: "Most Popular" },
  { name: "Champion", label: "1 Year", months: 12, price: 280, badge: "Best Value" },
].map((p) => ({
  ...p,
  saving: p.months * 30 - p.price,
  hasSaving: p.months * 30 - p.price > 0,
}));

function Pricing() {
  return (
    <section id="pricing" style={{ background: "#0c0c0c", color: "#f7f6f4" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 24px" }}>
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
          Membership <span style={{ color: "#ee6a1f" }}>plans</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))", gap: 24 }}>
          {PLANS.map((pl) => (
            <div
              key={pl.name}
              style={{
                border: `1px solid ${pl.badge ? "#ee6a1f" : "#262422"}`,
                padding: "32px 24px",
                background: pl.badge ? "rgba(238,106,31,0.06)" : "transparent",
              }}
            >
              <div
                className="font-kanit"
                style={{ fontStyle: "italic", fontWeight: 800, fontSize: 28, textTransform: "uppercase", color: "#ee6a1f", marginBottom: 4 }}
              >
                {pl.name}
              </div>
              <div
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 14, textTransform: "uppercase", letterSpacing: "0.08em", color: "#a9a39c" }}
              >
                {pl.label}
              </div>
              <div className="font-kanit" style={{ fontStyle: "italic", fontWeight: 800, fontSize: 44, marginTop: 12 }}>
                ${pl.price}
              </div>
              {pl.hasSaving && (
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
                  Save ${pl.saving}
                </div>
              )}
              {pl.badge && (
                <div
                  className="font-kanit"
                  style={{ fontWeight: 600, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.06em", color: "#ee6a1f", marginTop: 8 }}
                >
                  {pl.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Location                                                            */
/* ------------------------------------------------------------------ */

function Location() {
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

/* ------------------------------------------------------------------ */
/* Footer                                                               */
/* ------------------------------------------------------------------ */

function Footer() {
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

/* ------------------------------------------------------------------ */
/* WhatsApp floating button                                             */
/* ------------------------------------------------------------------ */

const WA_LINK =
  "https://wa.me/9613395854?text=" +
  encodeURIComponent("Hi Supreme Academy! I'd like to know more about your classes.");

function WhatsAppButton() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Chat with us on WhatsApp"
      className="font-kanit sa-whatsapp"
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 20,
        display: "flex",
        alignItems: "center",
        gap: 10,
        background: "#25d366",
        color: "#0b2e17",
        padding: "14px 22px 14px 16px",
        borderRadius: 999,
        boxShadow: "0 8px 24px rgba(0,0,0,0.28)",
        fontWeight: 600,
        fontSize: 16,
        letterSpacing: "0.02em",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
        alt=""
        style={{ width: 24, height: 24, display: "block" }}
      />
      <span>Chat on WhatsApp</span>
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Home page                                                            */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MarqueeStrip />
      <Programs />
      <ScheduleTimetable />
      <Instructors />
      <Trial />
      <Pricing />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
