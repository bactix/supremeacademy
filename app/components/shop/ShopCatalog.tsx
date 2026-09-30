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

const navBtnClasses =
  "h-11 cursor-pointer border border-border-shop bg-transparent px-4 font-heading text-sm font-semibold uppercase tracking-[0.06em] text-ink";

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

  return (
    <>
      <section className="mx-auto max-w-310 px-6 py-26">
        <h1 className="mb-7 font-heading text-[clamp(38px,5vw,64px)] font-extrabold uppercase italic leading-[0.95]">
          Academy <span className="text-orange">shop</span>
        </h1>

        <div className="-mx-6 mb-10 flex scrollbar-none gap-2.5 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {FILTERS.map((f) => {
            const isActive = activeFilter === f.key;
            return (
              <button
                key={f.label}
                onClick={() => selectFilter(f.key)}
                className={`shrink-0 cursor-pointer border px-4 py-2.25 font-heading text-sm font-semibold uppercase tracking-[0.06em] ${
                  isActive
                    ? "border-orange bg-orange text-white"
                    : "border-border-shop bg-transparent text-ink"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-6">
          {pageItems.map((it) => (
            <div key={it.name}>
              <div className="mb-4 flex aspect-square items-center justify-center bg-[repeating-linear-gradient(135deg,#efece8_0_12px,#e6e2dd_12px_24px)]">
                <span className="px-[12%] text-center font-[ui-monospace,Menlo,monospace] text-xs text-faint">
                  {it.photo}
                </span>
              </div>
              <div className="font-heading text-xs font-semibold uppercase tracking-[0.06em] text-orange">
                {it.category}
              </div>
              <div className="mt-0.5 font-heading text-xl font-bold uppercase italic">{it.name}</div>
              <div className="mt-1 text-[15px] text-faint">${it.price}</div>
              <div className="mt-3.5 flex items-center gap-2">
                <button
                  onClick={() => dec(it.name)}
                  aria-label="Remove one"
                  className="h-11 w-11 cursor-pointer border border-border-shop bg-transparent text-xl text-ink"
                >
                  −
                </button>
                <div className="min-w-7 text-center font-heading text-lg font-semibold">
                  {cart[it.name] ?? 0}
                </div>
                <button
                  onClick={() => inc(it.name)}
                  className="h-11 flex-1 cursor-pointer border-none bg-ink font-heading text-sm font-semibold uppercase tracking-[0.06em] text-white hover:bg-orange"
                >
                  Add to order
                </button>
              </div>
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-14 flex flex-wrap items-center justify-center gap-2">
            <button onClick={() => setPage((p) => Math.max(0, p - 1))} className={navBtnClasses}>
              Prev
            </button>
            {Array.from({ length: pageCount }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`h-11 w-11 cursor-pointer border font-heading text-base font-semibold ${
                  i === currentPage
                    ? "border-orange bg-orange text-white"
                    : "border-border-shop bg-transparent text-ink"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              className={navBtnClasses}
            >
              Next
            </button>
          </div>
        )}
      </section>

      {lines.length > 0 && (
        <div className="fixed bottom-6 left-1/2 z-20 flex w-[min(92vw,560px)] -translate-x-1/2 flex-wrap items-center justify-between gap-3 bg-ink py-3.5 pl-5.5 pr-3.5 text-cream shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div>
            <div className="font-heading text-[13px] font-semibold uppercase tracking-[0.06em] text-muted">
              {orderCount} item(s)
            </div>
            <div className="font-heading text-2xl font-extrabold italic">${total}</div>
          </div>
          <a
            href={orderLink}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 bg-whatsapp px-5 py-3.25 font-heading text-[15px] font-semibold uppercase tracking-[0.04em] text-whatsapp-dark hover:bg-[#1ebe5a]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg"
              alt=""
              className="block h-5 w-5"
            />
            <span>Send order</span>
          </a>
        </div>
      )}
    </>
  );
}
