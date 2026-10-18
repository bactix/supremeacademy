"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Desktop: revealed by the card's :hover (see globals.css).
// Touch / narrow screens: hidden off the card's right edge, then slides right-to-left into place
// once when its plan card scrolls into view. Cards that appear together go first to last (--sa-order).
export default function PlanAvatar({
  src,
  fit = "cover",
  order = 0,
}: {
  src: string;
  fit?: "cover" | "contain";
  order?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const card = ref.current?.parentElement;
    if (!card) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect(); // plays once; never hides or replays
        }
      },
      { threshold: 0.4 },
    );
    io.observe(card);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-fit={fit}
      className={`sa-plan-avatar${inView ? " is-inview" : ""}`}
      style={{ "--sa-order": order } as React.CSSProperties}
    >
      <Image src={src} alt="" width={460} height={344} sizes="230px" style={{ display: "block", width: "100%", height: "auto" }} />
    </div>
  );
}
