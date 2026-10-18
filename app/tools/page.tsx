import type { Metadata } from "next";
import Link from "next/link";
import ShopHeader from "../components/shop/ShopHeader";
import ShopFooter from "../components/shop/ShopFooter";
import { TOOLS } from "../lib/tools-data";
import { SITE_URL } from "../lib/site-config";

export const metadata: Metadata = {
  title: "Fitness Tools | Supreme Academy",
  description: "Free fitness tools from Supreme Academy in Tripoli, starting with a BMI calculator.",
  alternates: { canonical: `${SITE_URL}/tools` },
};

export default function ToolsPage() {
  return (
    <>
      <ShopHeader />
      <main style={{ maxWidth: 1240, margin: "0 auto", padding: "72px 24px 96px" }}>
        <h1
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
          Fitness <span style={{ color: "#ee6a1f" }}>tools</span>
        </h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,320px),1fr))", gap: 24 }}>
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="sa-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e7e4df",
                padding: "28px 28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                color: "inherit",
              }}
            >
              <div
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 14, color: "#c4520f", textTransform: "uppercase", letterSpacing: "0.1em" }}
              >
                {tool.tag}
              </div>
              <h2
                className="font-kanit"
                style={{ fontStyle: "italic", fontWeight: 800, fontSize: 32, margin: 0, textTransform: "uppercase", lineHeight: 1 }}
              >
                {tool.name}
              </h2>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#55504a", flex: 1 }}>{tool.blurb}</p>
              <span
                className="font-kanit"
                style={{ fontWeight: 600, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                Open tool →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <ShopFooter />
    </>
  );
}
