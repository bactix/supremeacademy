// Plain data module (no "use client") so it can be safely imported from
// both the client-side ScheduleTimetable component and server-side code
// (e.g. the Google Sheet fetcher), which a "use client" file can't provide
// non-component exports to reliably across the build boundary.

export type ClassSlot = [time: string, name: string, coach: string, tag: string];
export type DaySchedule = [day: string, classes: ClassSlot[]];

export const DEFAULT_SCHED: DaySchedule[] = [
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

export const TIMES = [
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

export const DAY_NAMES = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
