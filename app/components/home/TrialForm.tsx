"use client";

import { useState } from "react";

const inputStyle = {
  background: "#1f1e1d",
  border: "1px solid #3a3734",
  color: "#f7f6f4",
  padding: "15px 16px",
  fontSize: 16,
  outline: "none",
} as const;

export default function TrialForm() {
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
