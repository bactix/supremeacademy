"use client";

import { useMemo, useState } from "react";

type Tag = "grappling" | "striking" | "wear" | "eat";

type Item = {
  category: string;
  tag: Tag;
  name: string;
  photo: string;
  price: number;
};

const ITEMS: Item[] = [
  { category: "Nutrition", tag: "eat", name: "Whey Protein", photo: "Whey protein tub photo", price: 45 },
  { category: "Nutrition", tag: "eat", name: "Protein Bar", photo: "Protein bar photo", price: 5 },
  { category: "Nutrition", tag: "eat", name: "Energy Bars (Box)", photo: "Energy bars photo", price: 20 },
  { category: "Nutrition", tag: "eat", name: "Pre-Workout", photo: "Pre-workout tub photo", price: 35 },
  { category: "Nutrition", tag: "eat", name: "BCAA Capsules", photo: "BCAA capsules photo", price: 28 },
  { category: "Nutrition", tag: "eat", name: "Electrolyte Drink Mix", photo: "Electrolyte drink mix photo", price: 18 },
  { category: "Equipment", tag: "striking", name: "Boxing Gloves", photo: "Boxing gloves photo", price: 40 },
  { category: "Equipment", tag: "grappling", name: "BJJ Gi", photo: "BJJ gi photo", price: 70 },
  { category: "Equipment", tag: "grappling", name: "Judo Gi", photo: "Judo gi photo", price: 65 },
  { category: "Equipment", tag: "grappling", name: "BJJ Belt", photo: "BJJ belt photo", price: 15 },
  { category: "Equipment", tag: "grappling", name: "Rash Guard", photo: "Rash guard photo", price: 35 },
  { category: "Equipment", tag: "grappling", name: "Grappling Shorts", photo: "Grappling shorts photo", price: 30 },
  { category: "Equipment", tag: "grappling", name: "Mouth Guard", photo: "Mouth guard photo", price: 12 },
  { category: "Equipment", tag: "wear", name: "Resistance Bands Set", photo: "Resistance bands photo", price: 25 },
  { category: "Equipment", tag: "striking", name: "Skipping Rope", photo: "Skipping rope photo", price: 15 },
  { category: "Apparel", tag: "wear", name: "Academy T-Shirt", photo: "Academy T-shirt photo", price: 22 },
];

const FILTERS: { key: Tag | null; label: string }[] = [
  { key: null, label: "All" },
  { key: "grappling", label: "BJJ / Judo" },
  { key: "striking", label: "Boxing / Kickboxing" },
  { key: "wear", label: "Clothing" },
  { key: "eat", label: "Nutrition" },
];

const PER_PAGE = 12;
const WHATSAPP_NUMBER = "9613395854";

export default function ShopCatalog() {
  const [activeFilter, setActiveFilter] = useState<Tag | null>(null);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [page, setPage] = useState(0);

  const visible = useMemo(
    () => ITEMS.filter((it) => !activeFilter || it.tag === activeFilter),
    [activeFilter],
  );
  const pageCount = Math.max(1, Math.ceil(visible.length / PER_PAGE));
  const currentPage = Math.min(page, pageCount - 1);
  const pageItems = visible.slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE);

  const lines = ITEMS.filter((it) => (cart[it.name] ?? 0) > 0).map((it) => ({
    ...it,
    qty: cart[it.name],
  }));
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0);
  const orderCount = lines.reduce((s, l) => s + l.qty, 0);
  const orderLink =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(
      "Hi Supreme Academy! I'd like to order:\n" +
        lines.map((l) => `• ${l.qty} × ${l.name} ($${l.qty * l.price})`).join("\n") +
        `\nTotal: $${total}`,
    );

  const inc = (name: string) =>
    setCart((c) => ({ ...c, [name]: (c[name] ?? 0) + 1 }));
  const dec = (name: string) =>
    setCart((c) => ({ ...c, [name]: Math.max(0, (c[name] ?? 0) - 1) }));

  const selectFilter = (key: Tag | null) => {
    setActiveFilter((prev) => (key === null || prev === key ? null : key));
    setPage(0);
  };

  const navBtnStyle = {
    height: 44,
    padding: "0 16px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    border: "1px solid #d8d4cd",
    background: "transparent",
    color: "#141414",
  } as const;

  return (
    <>
      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "104px 24px" }}>
        <h1
          className="font-kanit"
          style={{
            fontStyle: "italic",
            fontWeight: 800,
            fontSize: "clamp(38px,5vw,64px)",
            lineHeight: 0.95,
            margin: "0 0 28px",
            textTransform: "uppercase",
          }}
        >
          Academy <span style={{ color: "#ee6a1f" }}>shop</span>
        </h1>

        <div className="sa-filter-row" style={{ marginBottom: 40 }}>
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.label}
                onClick={() => selectFilter(f.key)}
                className="font-kanit"
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  padding: "9px 16px",
                  cursor: "pointer",
                  flexShrink: 0,
                  border: `1px solid ${isActive ? "#ee6a1f" : "#d8d4cd"}`,
                  background: isActive ? "#ee6a1f" : "transparent",
                  color: isActive ? "#ffffff" : "#141414",
                }}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
            gap: 24,
          }}
        >
          {pageItems.map((it) => (
            <div key={it.name}>
              <div
                style={{
                  aspectRatio: "1",
                  background: "repeating-linear-gradient(135deg,#efece8 0 12px,#e6e2dd 12px 24px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 12, color: "#7a746d", textAlign: "center", padding: "0 12%" }}>
                  {it.photo}
                </span>
              </div>
              <div
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 12, color: "#ee6a1f", textTransform: "uppercase", letterSpacing: "0.06em" }}
              >
                {it.category}
              </div>
              <div
                className="font-kanit"
                style={{ fontStyle: "italic", fontWeight: 700, fontSize: 20, textTransform: "uppercase", marginTop: 2 }}
              >
                {it.name}
              </div>
              <div style={{ fontSize: 15, color: "#7a746d", marginTop: 4 }}>${it.price}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
                <button
                  onClick={() => dec(it.name)}
                  aria-label="Remove one"
                  style={{
                    width: 44,
                    height: 44,
                    border: "1px solid #d8d4cd",
                    background: "transparent",
                    fontSize: 20,
                    cursor: "pointer",
                    color: "#141414",
                  }}
                >
                  −
                </button>
                <div className="font-kanit" style={{ minWidth: 28, textAlign: "center", fontWeight: 600, fontSize: 18 }}>
                  {cart[it.name] ?? 0}
                </div>
                <button
                  onClick={() => inc(it.name)}
                  className="font-kanit sa-shop-add"
                  style={{
                    flex: 1,
                    height: 44,
                    border: "none",
                    background: "#141414",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: 14,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                  }}
                >
                  Add to order
                </button>
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8, marginTop: 56, flexWrap: "wrap" }}>
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              className="font-kanit"
              style={navBtnStyle}
            >
              Prev
            </button>
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="font-kanit"
                style={{
                  width: 44,
                  height: 44,
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: 16,
                  border: `1px solid ${i === currentPage ? "#ee6a1f" : "#d8d4cd"}`,
                  background: i === currentPage ? "#ee6a1f" : "transparent",
                  color: i === currentPage ? "#ffffff" : "#141414",
                }}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              className="font-kanit"
              style={navBtnStyle}
            >
              Next
            </button>
          </div>
        )}
      </section>

      {lines.length > 0 && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            bottom: 24,
            transform: "translateX(-50%)",
            zIndex: 20,
            width: "min(92vw, 560px)",
            background: "#141414",
            color: "#f7f6f4",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            padding: "14px 14px 14px 22px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <div>
            <div
              className="font-kanit"
              style={{ fontWeight: 600, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.06em", color: "#a9a39c" }}
            >
              {orderCount} item(s)
            </div>
            <div className="font-kanit" style={{ fontStyle: "italic", fontWeight: 800, fontSize: 24 }}>
              ${total}
            </div>
          </div>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener"
            className="font-kanit sa-whatsapp"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "#25d366",
              color: "#0b2e17",
              padding: "13px 20px",
              fontWeight: 600,
              fontSize: 15,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
              alt=""
              style={{ width: 20, height: 20, display: "block" }}
            />
            <span>Send order</span>
          </a>
        </div>
      )}
    </>
  );
}
