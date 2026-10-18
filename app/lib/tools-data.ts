export type Tool = {
  slug: string;
  name: string;
  tag: string;
  blurb: string;
};

// Add new tools here: each one gets a card on /tools and links to
// /tools/<slug>, which needs its own page under app/tools/<slug>/.
export const TOOLS: Tool[] = [
  {
    slug: "bmi-calculator",
    name: "BMI Calculator",
    tag: "Body metrics",
    blurb: "Work out your body mass index and see the healthy weight range for your height.",
  },
];
