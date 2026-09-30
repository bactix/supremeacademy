import type { Metadata } from "next";
import { Kanit, Barlow } from "next/font/google";
import "./globals.css";
import { SITE_URL, BUSINESS } from "./lib/site-config";

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

const TITLE = "Supreme Academy · MMA, BJJ, Judo, Boxing, Kickboxing & Muay Thai in Tripoli";
const DESCRIPTION =
  "MMA, Brazilian Jiu-Jitsu (BJJ), Judo, Boxing, Kickboxing and Muay Thai classes in Tripoli, Lebanon. Structured classes for beginners through competitors. Book your free class.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: BUSINESS.name,
    type: "website",
    images: ["/assets/hero-fighter.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/hero-fighter.png"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description: BUSINESS.description,
  url: SITE_URL,
  telephone: BUSINESS.telephone,
  image: `${SITE_URL}/assets/hero-fighter.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressCountry: BUSINESS.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: [],
  makesOffer: [
    "MMA",
    "Brazilian Jiu-Jitsu",
    "Judo",
    "Boxing",
    "Kickboxing",
    "Muay Thai",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: `${name} classes` },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${kanit.variable} ${barlow.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
