"use client";

import { useMemo, useState, type CSSProperties } from "react";

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

export default function ScheduleTimetable() {
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
