"use client";

import { useMemo, useSyncExternalStore } from "react";
import type { DaySchedule } from "../../lib/schedule-data";

// Hand-written bios for coaches we have one for; anyone else on the
// timetable gets a generic line built from the classes they teach.
const BIOS: Record<string, string> = {
  "Coach Hussein": "Leads all BJJ and Judo classes, gi and no-gi, from fundamentals to advanced live rounds.",
  "Coach Shaymaa": "Leads boxing classes, building technique, conditioning and confidence.",
  "Coach Ammar": "Runs MMA classes blending striking, grappling and takedowns for well-rounded fighters.",
};

const HEAD_COACH = "Coach Hussein";

// Alternate spellings found in the timetable, mapped to one canonical name
// so the same coach doesn't get two cards.
const ALIASES: Record<string, string> = {
  "Coach Dania": "Coach Danya",
};

type Coach = { name: string; disciplines: string[] };

// Collects every coach that appears in the timetable, with the distinct
// classes they teach.
function coachesFromSchedule(sched: DaySchedule[]): Coach[] {
  const byName = new Map<string, Set<string>>();
  for (const [, classes] of sched) {
    for (const [, className, coach] of classes) {
      const trimmed = coach.trim();
      if (!trimmed) continue;
      const name = ALIASES[trimmed] ?? trimmed;
      if (!byName.has(name)) byName.set(name, new Set());
      byName.get(name)!.add(className.trim());
    }
  }
  const coaches = Array.from(byName, ([name, classes]) => ({ name, disciplines: Array.from(classes) }));
  // Head coach always leads the section; everyone else is alphabetical.
  return coaches.sort(
    (a, b) => Number(b.name === HEAD_COACH) - Number(a.name === HEAD_COACH) || a.name.localeCompare(b.name),
  );
}

const subscribeNoop = () => () => {};

// Fisher–Yates shuffle of everyone except the head coach, who stays first.
function shuffleCoaches(coaches: Coach[]): Coach[] {
  const head = coaches.filter((c) => c.name === HEAD_COACH);
  const rest = coaches.filter((c) => c.name !== HEAD_COACH);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  return [...head, ...rest];
}

export default function Instructors({ sched }: { sched: DaySchedule[] }) {
  const sorted = useMemo(() => coachesFromSchedule(sched), [sched]);
  // Server and first client render use the stable sorted order so hydration
  // matches; the random order is applied in the browser after mount.
  const isClient = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const coaches = useMemo(() => (isClient ? shuffleCoaches(sorted) : sorted), [isClient, sorted]);

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
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,260px),1fr))", gap: 40 }}>
        {coaches.map((coach) => (
          <div key={coach.name}>
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
                  {coach.name} photo
                </span>
              </div>
            </div>
            <div className="font-kanit" style={{ fontStyle: "italic", fontWeight: 700, fontSize: 26, textTransform: "uppercase" }}>
              {coach.name}
            </div>
            <div
              className="font-kanit"
              style={{ fontSize: 13, fontWeight: 600, color: "#ee6a1f", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 4 }}
            >
              {coach.disciplines.join(" · ")}
            </div>
            <div style={{ fontSize: 15, color: "#7a746d", marginTop: 10, lineHeight: 1.5 }}>
              {BIOS[coach.name] ?? `Coaches ${coach.disciplines.join(", ")} classes at Supreme Academy.`}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
