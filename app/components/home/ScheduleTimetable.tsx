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

      const dynamicStyle: CSSProperties = {
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
      };

      return {
        hasClass: !!found,
        isEmpty,
        closed,
        name: found ? found[1] : closed ? "Closed" : "",
        coach: found ? found[2] : "",
        tag: found ? found[3] : "",
        dynamicStyle,
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

function slotKey(dayIndex: number, time: string) {
  return `${dayIndex}:${time}`;
}

const cellBaseClasses =
  "flex min-h-14 flex-col justify-center border border-t-0 border-border-dark px-1 py-1.5 transition-[background,opacity,box-shadow] duration-150";

function RowCells({
  time,
  cells,
  selected,
  onToggle,
}: {
  time: string;
  cells: ReturnType<typeof buildGrid>[number]["cells"];
  selected: Set<string>;
  onToggle: (key: string) => void;
}) {
  return (
    <>
      <div className="flex items-center border-t border-border-dark px-0.5 py-1.5 font-heading text-[11px] font-semibold text-muted">
        {time}
      </div>
      {cells.map((cell, i) => {
        const key = slotKey(i, time);
        const isSelected = cell.isEmpty && selected.has(key);
        const style: CSSProperties = isSelected
          ? { boxShadow: "inset 0 0 0 2px #141414" }
          : cell.dynamicStyle;

        return (
          <div
            key={i}
            className={`${cellBaseClasses} ${cell.isEmpty ? "cursor-pointer" : ""} ${
              cell.isEmpty && !isSelected ? "hover:bg-orange/18" : ""
            } ${
              isSelected
                ? "bg-orange text-ink"
                : cell.closed
                  ? "text-center text-xs italic text-[#5c5852]"
                  : "text-cream"
            }`}
            style={style}
            onClick={cell.isEmpty ? () => onToggle(key) : undefined}
            role={cell.isEmpty ? "button" : undefined}
            aria-pressed={cell.isEmpty ? isSelected : undefined}
          >
            {cell.hasClass && (
              <>
                <div className="font-heading text-[11px] font-semibold uppercase italic leading-[1.15] break-words">
                  {cell.name}
                </div>
                <div className="mt-0.5 text-[9px] break-words text-muted">{cell.coach}</div>
                <div className="mt-0.5 text-[8px] uppercase tracking-[0.04em] text-orange">
                  {cell.tag}
                </div>
              </>
            )}
            {isSelected && (
              <div className="text-center font-heading text-[11px] font-bold">✓ Selected</div>
            )}
          </div>
        );
      })}
    </>
  );
}

const WHATSAPP_NUMBER = "9613395854";

export default function ScheduleTimetable() {
  const [activeFilter, setActiveFilter] = useState<FilterKey | "empty" | null>(
    null,
  );
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const grid = useMemo(() => buildGrid(activeFilter), [activeFilter]);

  const toggleSlot = (key: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const selectedSlots = Array.from(selected)
    .map((key) => {
      const [dayIndex, time] = key.split(":");
      return { dayIndex: Number(dayIndex), time };
    })
    .sort((a, b) => a.dayIndex - b.dayIndex || TIMES.indexOf(a.time) - TIMES.indexOf(b.time));

  const reserveSlots = () => {
    if (selectedSlots.length === 0) return;
    const lines = selectedSlots.map((s) => `• ${DAY_NAMES[s.dayIndex]} ${s.time}`).join("\n");
    const message =
      selectedSlots.length === 1
        ? `Hi Supreme Academy! I want to reserve the slot with this date and time:\n${lines}`
        : `Hi Supreme Academy! I want to reserve multiple slots with these dates and times:\n${lines}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener");
    setSelected(new Set());
  };

  return (
    <section id="schedule" className="bg-dark text-cream">
      <div className="mx-auto w-[90%] max-w-[90%] py-24">
        <div className="mb-7 grid items-start gap-4 [grid-template-areas:'title'_'hint'_'filters'_'actions'] sm:grid-cols-[1fr_auto] sm:items-end sm:[grid-template-areas:'title_actions'_'hint_hint'_'filters_filters']">
          <h2 className="[grid-area:title] font-heading text-[clamp(38px,5vw,64px)] font-extrabold uppercase italic leading-[0.95]">
            Weekly <span className="text-orange">timetable</span>
          </h2>

          <p className="[grid-area:hint] text-[13px] text-faint">
            Tap an open slot to select it, then reserve — we&apos;ll confirm over WhatsApp.
          </p>

          <div className="[grid-area:filters]">
            <div className="mb-2.5 font-heading text-xs font-semibold uppercase tracking-[0.08em] text-faint">
              Filter classes
            </div>
            <div className="flex flex-wrap gap-2.5">
              {FILTER_BUTTONS.map((fb) => {
                const isActive = activeFilter === fb.key;
                return (
                  <button
                    key={fb.key}
                    onClick={() =>
                      setActiveFilter((prev) => (prev === fb.key ? null : fb.key))
                    }
                    className={`cursor-pointer border px-4 py-2.25 font-heading text-sm font-semibold uppercase tracking-[0.06em] ${
                      isActive
                        ? "border-orange bg-orange text-white"
                        : "border-border-neutral bg-transparent text-subtle"
                    }`}
                  >
                    {fb.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 border-t border-border-dark pt-4 [grid-area:actions] sm:border-t-0 sm:pt-0">
            {selectedSlots.length > 0 && (
              <button
                onClick={reserveSlots}
                className="cursor-pointer border border-orange bg-orange px-4.5 py-2.5 font-heading text-sm font-semibold uppercase tracking-[0.06em] text-white shadow-[0_0_0_3px_rgba(238,106,31,0.25)]"
              >
                Reserve {selectedSlots.length} slot{selectedSlots.length > 1 ? "s" : ""}
              </button>
            )}
            <button
              onClick={downloadSchedule}
              className="cursor-pointer border border-border-neutral bg-transparent px-4.5 py-2.5 font-heading text-sm font-semibold uppercase tracking-[0.06em] text-subtle"
            >
              Download
            </button>
          </div>
        </div>

        <p className="mb-3 block text-xs text-faint md:hidden">Swipe to see the full week →</p>

        <div className="overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch]">
          <div className="grid min-w-175 grid-cols-[64px_repeat(7,minmax(0,1fr))]">
            <div />
            {DAY_NAMES.map((dn) => (
              <div
                key={dn}
                className="overflow-hidden border-b-2 border-orange px-0.5 py-2 text-center font-heading text-[13px] font-bold uppercase italic text-orange"
              >
                {dn}
              </div>
            ))}
            {grid.map((row) => (
              <RowCells
                key={row.time}
                time={row.time}
                cells={row.cells}
                selected={selected}
                onToggle={toggleSlot}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
