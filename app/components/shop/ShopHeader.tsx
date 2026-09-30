import Image from "next/image";
import Link from "next/link";

export default function ShopHeader() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#ffffff",
        borderBottom: "1px solid #e7e4df",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <Link
          href="/"
          aria-label="Supreme Academy home"
          style={{
            display: "block",
            width: 170,
            height: 75,
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
          }}
        >
          <Image
            src="/assets/logo.png"
            alt="Supreme Academy, Strength & Fitness"
            width={222}
            height={222}
            priority
            style={{ position: "absolute", width: 222, height: 222, left: -29, top: -60, maxWidth: "none" }}
          />
        </Link>
        <nav
          className="font-kanit"
          style={{
            display: "flex",
            gap: 28,
            flexWrap: "wrap",
            alignItems: "center",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <Link href="/#programs">Programs</Link>
          <Link href="/#schedule">Schedule</Link>
          <Link href="/#instructors">Team</Link>
          <Link
            href="/#trial"
            className="sa-nav-cta"
            style={{
              background: "#ee6a1f",
              color: "#ffffff",
              padding: "10px 18px",
              transform: "skewX(-12deg)",
              display: "inline-block",
            }}
          >
            <span style={{ display: "inline-block", transform: "skewX(12deg)" }}>Free trial</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
