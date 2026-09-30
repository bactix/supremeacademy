// Central place for site-wide facts used in metadata, JSON-LD, and the sitemap.
// SITE_URL is a placeholder until the production domain is finalized — update
// it here once and every canonical/OG/sitemap URL follows.
export const SITE_URL = "https://www.supremeacademy-tripoli.com";

export const BUSINESS = {
  name: "Supreme Academy",
  legalName: "Supreme Academy Strength & Fitness",
  description:
    "Martial arts and fitness academy in Tripoli, Lebanon offering MMA, Brazilian Jiu-Jitsu, Judo, Boxing, Kickboxing and Muay Thai classes for beginners through competitors.",
  telephone: "+9613395854",
  addressLocality: "Tripoli",
  addressCountry: "LB",
  latitude: 34.4233446,
  longitude: 35.8370708,
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "06:00", closes: "21:30" },
    { days: ["Saturday"], opens: "09:00", closes: "14:00" },
  ],
};
