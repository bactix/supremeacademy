"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const CATEGORIES = [
  { max: 18.5, label: "Underweight", color: "#2f6fb5" },
  { max: 25, label: "Healthy weight", color: "#2e8b57" },
  { max: 30, label: "Overweight", color: "#d98a00" },
  { max: Infinity, label: "Obese", color: "#c0392b" },
];

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  fontSize: 18,
  border: "1px solid #d9d5cf",
  background: "#ffffff",
  color: "#141414",
} as const;

const labelStyle = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: "#55504a",
  marginBottom: 8,
} as const;

const G_MIN = 10;
const G_MAX = 45;
const G_CX = 200;
const G_CY = 200;
const G_OUTER = 170;
const G_INNER = 112;
const G_DURATION = 1400;

const BANDS = [
  { from: 10, to: 16, color: "#c0262a" },
  { from: 16, to: 17, color: "#d98c8c" },
  { from: 17, to: 18.5, color: "#ffe100" },
  { from: 18.5, to: 25, color: "#0a8a3c" },
  { from: 25, to: 30, color: "#ffe100" },
  { from: 30, to: 35, color: "#d98c8c" },
  { from: 35, to: 40, color: "#c0262a" },
  { from: 40, to: 45, color: "#8a0000" },
];
const TICKS = [16, 17, 18.5, 25, 30, 35, 40];

const clampBmi = (v: number) => Math.min(G_MAX, Math.max(G_MIN, v));
const valueToDeg = (v: number) => ((clampBmi(v) - G_MIN) / (G_MAX - G_MIN)) * 180;
const polar = (r: number, v: number) => {
  const rad = ((180 - valueToDeg(v)) * Math.PI) / 180;
  return { x: G_CX + r * Math.cos(rad), y: G_CY - r * Math.sin(rad) };
};
function bandPath(from: number, to: number) {
  const a = polar(G_OUTER, from);
  const b = polar(G_OUTER, to);
  const c = polar(G_INNER, to);
  const d = polar(G_INNER, from);
  return `M${a.x} ${a.y} A${G_OUTER} ${G_OUTER} 0 0 1 ${b.x} ${b.y} L${c.x} ${c.y} A${G_INNER} ${G_INNER} 0 0 0 ${d.x} ${d.y}Z`;
}

function BmiGauge({ bmi }: { bmi: number }) {
  // Needle starts at the far left and swings to the value; the number counts up alongside it.
  const [needle, setNeedle] = useState(-90);
  const [shown, setShown] = useState(G_MIN);
  const shownRef = useRef(G_MIN);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const raf0 = requestAnimationFrame(() => setNeedle(valueToDeg(bmi) - 90));
    if (reduce) {
      shownRef.current = bmi;
      setShown(bmi);
      return () => cancelAnimationFrame(raf0);
    }
    const from = shownRef.current;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / G_DURATION);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = from + (bmi - from) * eased;
      shownRef.current = v;
      setShown(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf0);
      cancelAnimationFrame(raf);
    };
  }, [bmi]);

  return (
    <svg viewBox="0 0 400 235" role="img" aria-label={`BMI gauge showing ${bmi.toFixed(1)}`} style={{ width: "100%", maxWidth: 440, display: "block", margin: "0 auto" }}>
      {BANDS.map((b) => (
        <path key={b.from} d={bandPath(b.from, b.to)} fill={b.color} stroke="#121212" strokeWidth={1.5} />
      ))}
      {TICKS.map((t) => {
        const p = polar(G_OUTER - 14, t);
        return (
          <text key={t} x={p.x} y={p.y} fill="#141414" fontSize={13} fontWeight={600} textAnchor="middle" dominantBaseline="middle">
            {t}
          </text>
        );
      })}
      <g
        style={{
          transform: `rotate(${needle}deg)`,
          transformOrigin: `${G_CX}px ${G_CY}px`,
          transition: `transform ${G_DURATION}ms cubic-bezier(0.22, 1.2, 0.36, 1)`,
        }}
      >
        <line x1={G_CX} y1={G_CY} x2={G_CX} y2={G_CY - G_INNER + 6} stroke="#cfcac3" strokeWidth={3} />
        <polygon points={`${G_CX},${G_CY - G_OUTER + 4} ${G_CX - 9},${G_CY - G_INNER - 8} ${G_CX + 9},${G_CY - G_INNER - 8}`} fill="#f7f6f4" />
      </g>
      <circle cx={G_CX} cy={G_CY} r={7} fill="#cfcac3" />
      <text x={G_CX} y={G_CY + 28} textAnchor="middle" fill="#f7f6f4" fontSize={44} fontWeight={800} fontStyle="italic" className="font-kanit">
        {shown.toFixed(1)}
      </text>
    </svg>
  );
}

function Field({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix: string;
}) {
  return (
    <label style={{ flex: 1, minWidth: 120 }}>
      <span className="font-kanit" style={labelStyle}>
        {label}
      </span>
      <div style={{ position: "relative" }}>
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step="any"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ ...inputStyle, paddingRight: 48 }}
        />
        <span
          style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", color: "#7a746d", fontSize: 14 }}
        >
          {suffix}
        </span>
      </div>
    </label>
  );
}

export default function BmiCalculator() {
  const [cm, setCm] = useState("");
  const [kg, setKg] = useState("");

  const [result, setResult] = useState<{ bmi: number; heightM: number } | null>(null);
  const [error, setError] = useState("");

  function calculate(e: FormEvent) {
    e.preventDefault();
    const heightM = Number(cm) / 100;
    const weightKg = Number(kg);

    if (!(heightM > 0.5 && heightM < 2.8)) {
      setResult(null);
      setError("Enter your height in centimetres, between 50 and 280 (for example 175).");
      return;
    }
    if (!(weightKg > 10 && weightKg < 500)) {
      setResult(null);
      setError("Enter your weight in kilograms, between 10 and 500 (for example 70).");
      return;
    }
    setError("");
    setResult({ bmi: weightKg / (heightM * heightM), heightM });
  }

  function reset() {
    setCm("");
    setKg("");
    setResult(null);
    setError("");
  }

  const bmi = result?.bmi ?? null;
  const heightM = result?.heightM ?? 0;
  const category = bmi === null ? null : CATEGORIES.find((c) => bmi < c.max)!;

  const fmtWeight = (kgValue: number) => `${kgValue.toFixed(1)} kg`;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))", gap: 32 }}>
      <div style={{ background: "#ffffff", border: "1px solid #e7e4df", padding: 32 }}>
        <form onSubmit={calculate} noValidate style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Field label="Height" value={cm} onChange={setCm} suffix="cm" />
          <Field label="Weight" value={kg} onChange={setKg} suffix="kg" />
          {error && (
            <p role="alert" style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "#c0392b" }}>
              {error}
            </p>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
            <button
              type="submit"
              className="font-kanit sa-nav-cta"
              style={{
                background: "#ee6a1f",
                color: "#ffffff",
                border: "none",
                padding: "14px 32px",
                fontWeight: 600,
                fontSize: 16,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                transform: "skewX(-12deg)",
              }}
            >
              <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>Calculate</span>
            </button>
            <button
              type="button"
              onClick={reset}
              className="font-kanit"
              style={{
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 14,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#7a746d",
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div
        aria-live="polite"
        style={{
          background: "#121212",
          color: "#f7f6f4",
          padding: 32,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 280,
        }}
      >
        {bmi !== null && category ? (
          <>
            <div className="font-kanit" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a9a39c" }}>
              Your BMI
            </div>
            <BmiGauge bmi={bmi} />
            <div
              className="font-kanit"
              style={{ fontWeight: 700, fontSize: 24, textTransform: "uppercase", textAlign: "center", marginTop: 8, color: category.color === "#2f6fb5" ? "#6aa6e8" : category.color }}
            >
              {category.label}
            </div>
            <p style={{ margin: "20px 0 0", fontSize: 15, lineHeight: 1.6, color: "#cfcac3" }}>
              A healthy BMI (18.5 to 24.9) for your height is{" "}
              <strong style={{ color: "#ffffff" }}>
                {fmtWeight(18.5 * heightM * heightM)} to {fmtWeight(24.9 * heightM * heightM)}
              </strong>
              .
            </p>
          </>
        ) : (
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: "#a9a39c" }}>
            Enter your height and weight, then press Calculate.
          </p>
        )}
      </div>
    </div>
  );
}
