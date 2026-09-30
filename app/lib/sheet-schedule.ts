import { DAY_NAMES, type ClassSlot, type DaySchedule } from "./schedule-data";

// Live schedule data source: a public Google Sheet, exported as CSV.
// Read-only — nothing in this app writes back to the sheet.
// Override via env var if the sheet ever moves; falls back to the real one.
const CSV_URL =
  process.env.SCHEDULE_SHEET_CSV_URL ??
  "https://docs.google.com/spreadsheets/d/1w4JGojI8IeuXWVzw2H7P1cd77KJMc8GQ2FM-3zvT78E/gviz/tq?tqx=out:csv&sheet=Schedule";

const DAY_ORDER = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export type ScheduleClass = {
  day: string;
  startTime: string;
  endTime: string;
  className: string;
  coach: string;
  tag: string;
  startMinutes: number;
};

export type DayGroup = { day: string; classes: ScheduleClass[] };

export type ScheduleFetchResult = {
  classesByDay: DayGroup[];
  tags: string[];
  totalRows: number;
  error: string | null;
};

// Google's CSV export quotes every field (including empty ones as "") and
// doubles internal quotes per RFC4180 — a plain split(",") breaks on any
// field containing a comma, so this walks the text char by char instead.
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const next = text[i + 1];

    if (inQuotes) {
      if (char === '"' && next === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else if (char === "\r") {
      // no-op, \n handles the row break
    } else {
      field += char;
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => cell.trim() !== ""));
}

function findColumn(header: string[], names: string[]) {
  const lower = header.map((h) => h.trim().toLowerCase());
  for (const name of names) {
    const idx = lower.indexOf(name);
    if (idx !== -1) return idx;
  }
  return -1;
}

// Sheet times have no AM/PM: 8:00-11:59 is morning, 12:00 is noon, and
// 1:00-7:59 is afternoon/evening (the gym's day runs 8:30am to 9pm).
function parseTimeToMinutes(time: string): number {
  const [hRaw, mRaw] = time.split(":");
  let hour = parseInt(hRaw, 10) || 0;
  const minute = parseInt(mRaw, 10) || 0;

  if (hour === 12) {
    // noon, stays 12
  } else if (hour >= 8 && hour <= 11) {
    // morning, stays as-is
  } else {
    hour += 12; // 1-7 -> 1pm-7pm
  }
  return hour * 60 + minute;
}

export async function fetchSchedule(): Promise<ScheduleFetchResult> {
  const empty: ScheduleFetchResult = {
    classesByDay: DAY_ORDER.map((day) => ({ day, classes: [] })),
    tags: [],
    totalRows: 0,
    error: null,
  };

  let text: string;
  try {
    const res = await fetch(CSV_URL, { cache: "no-store" });
    if (!res.ok) {
      return { ...empty, error: `Failed to fetch the schedule sheet (HTTP ${res.status}).` };
    }
    text = await res.text();
  } catch (err) {
    return {
      ...empty,
      error: `Could not reach the schedule sheet: ${err instanceof Error ? err.message : String(err)}`,
    };
  }

  const rows = parseCsv(text);
  if (rows.length < 2) {
    return { ...empty, error: "The schedule sheet returned no data rows." };
  }

  const [header, ...dataRows] = rows;
  const dayCol = findColumn(header, ["day"]);
  const startCol = findColumn(header, ["start time", "start"]);
  const endCol = findColumn(header, ["end time", "end"]);
  const classCol = findColumn(header, ["class", "class name"]);
  const coachCol = findColumn(header, ["coach"]);
  const tagCol = findColumn(header, ["tag"]);

  if (dayCol === -1 || startCol === -1 || endCol === -1 || classCol === -1) {
    return {
      ...empty,
      error: "The sheet must have columns named Day, Start Time, End Time and Class.",
    };
  }

  const byDay = new Map<string, ScheduleClass[]>(DAY_ORDER.map((d) => [d, []]));
  const tagSet = new Set<string>();
  let totalRows = 0;

  for (const row of dataRows) {
    const day = (row[dayCol] ?? "").trim();
    const startTime = (row[startCol] ?? "").trim();
    const endTime = (row[endCol] ?? "").trim();
    const className = (row[classCol] ?? "").trim();
    const coach = (row[coachCol] ?? "").trim();
    const tag = (row[tagCol] ?? "").trim();

    if (!day || !startTime || !endTime || !className) continue;
    const bucket = byDay.get(day);
    if (!bucket) continue; // unknown/closed day (e.g. Sunday) - skip

    bucket.push({
      day,
      startTime,
      endTime,
      className,
      coach,
      tag,
      startMinutes: parseTimeToMinutes(startTime),
    });
    if (tag) tagSet.add(tag);
    totalRows++;
  }

  const classesByDay: DayGroup[] = DAY_ORDER.map((day) => ({
    day,
    classes: (byDay.get(day) ?? []).sort((a, b) => a.startMinutes - b.startMinutes),
  }));

  return { classesByDay, tags: Array.from(tagSet).sort(), totalRows, error: null };
}

// Reshapes the sheet's day-grouped rows into the [time, name, coach, tag]
// grid format the site's Weekly timetable component (ScheduleTimetable)
// expects, so the sheet-backed page can reuse that exact grid, filters,
// slot-reservation and PNG download instead of a different layout.
export function toGridSchedule(classesByDay: DayGroup[]): DaySchedule[] {
  const byDay = new Map(classesByDay.map((g) => [g.day, g.classes]));
  return DAY_NAMES.map((day) => {
    const classes = byDay.get(day) ?? [];
    const slots: ClassSlot[] = classes.map((c) => [
      `${c.startTime}–${c.endTime}`,
      c.className,
      c.coach,
      c.tag,
    ]);
    return [day, slots];
  });
}
