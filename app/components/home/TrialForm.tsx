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

const WHATSAPP_NUMBER = "9613395854";

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
          We&apos;ll reply on WhatsApp within 24 hours to lock in your first session.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") ?? "").trim();
        const email = String(data.get("email") ?? "").trim();
        const discipline = String(data.get("discipline") ?? "").trim();

        const message = `Hi Supreme Academy! I'd like to claim my free trial class.\nName: ${name}\nEmail: ${email}\nInterested in: ${discipline}`;
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener");

        setSent(true);
      }}
      style={{ background: "#141414", padding: 32, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <input required name="name" placeholder="Full name" className="sa-input" style={inputStyle} />
      <input required name="email" type="email" placeholder="Email" className="sa-input" style={inputStyle} />
      <select name="discipline" className="sa-input" style={inputStyle}>
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
