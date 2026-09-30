import type { Metadata } from "next";
import { Kanit, Barlow } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  style: ["normal", "italic"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Supreme Academy — Strength & Fitness",
  description:
    "BJJ, Judo and Kickboxing under one roof in Tripoli, Lebanon. Structured classes for beginners through competitors — book your free class.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${kanit.variable} ${barlow.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
