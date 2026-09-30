export type ScheduleEntry = { day: string; time: string; coach: string; note?: string };

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  cardNum: string;
  cardTag: string;
  cardBlurb: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  intro: string[];
  benefits: string[];
  coaches: string[];
  schedule: ScheduleEntry[];
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "mma",
    name: "MMA",
    shortName: "MMA",
    cardNum: "06",
    cardTag: "All ranges",
    cardBlurb:
      "Striking, clinch and ground work in one system, coached by Ammar for beginners through competitors.",
    metaTitle: "MMA Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription:
      "MMA training in Tripoli with Coach Ammar, blending striking, grappling and takedowns. All levels welcome. Book a free trial class at Supreme Academy.",
    h1: "MMA Classes in Tripoli",
    tagline: "Striking, grappling and takedowns in one system",
    intro: [
      "Supreme Academy runs MMA classes in Tripoli built around the three ranges every mixed martial artist has to control: striking, clinch work and the ground. Sessions are led by Coach Ammar and open to all levels, from complete beginners to fighters preparing for competition.",
      "Because Supreme Academy also teaches BJJ, Judo, Boxing and Kickboxing under the same roof, MMA students can round out their game across disciplines instead of training striking or grappling in isolation.",
    ],
    benefits: [
      "Structured rounds covering striking, clinch and ground transitions",
      "Coaching from Coach Ammar, with access to dedicated BJJ, Judo and striking classes to build a complete skill set",
      "Classes for complete beginners through competitors",
      "Open mat and strength sessions included with membership",
    ],
    coaches: ["Coach Ammar"],
    schedule: [
      { day: "Wednesday", time: "10:00–11:00", coach: "Coach Ammar" },
      { day: "Wednesday", time: "4:00–5:00", coach: "Coach Ammar" },
      { day: "Friday", time: "4:00–5:00", coach: "Coach Ammar" },
      { day: "Saturday", time: "12:00–1:00", coach: "Coach Ammar" },
    ],
    faqs: [
      {
        question: "Do I need striking or grappling experience to start MMA?",
        answer:
          "No. MMA classes at Supreme Academy are open to all levels. Coach Ammar structures sessions so beginners learn fundamentals alongside more experienced students.",
      },
      {
        question: "Can I train MMA alongside BJJ or Boxing?",
        answer:
          "Yes. Many MMA students also take the dedicated BJJ, Judo, Boxing and Kickboxing classes at Supreme Academy to sharpen a specific range of their game.",
      },
      {
        question: "What should I bring to my first class?",
        answer:
          "Comfortable training clothes and water. A mouth guard is recommended once you begin sparring; the team will guide you on gear as you progress.",
      },
    ],
    image: "/assets/hero-fighter.png",
    imageAlt: "MMA fighter training at Supreme Academy in Tripoli",
  },
  {
    slug: "bjj",
    name: "Brazilian Jiu-Jitsu",
    shortName: "BJJ",
    cardNum: "01",
    cardTag: "Gi & No-Gi",
    cardBlurb:
      "Leverage over strength. Learn to control, escape and submit on the ground through drilled technique and live rolling.",
    metaTitle: "BJJ (Brazilian Jiu-Jitsu) Classes in Tripoli | Supreme Academy",
    metaDescription:
      "Brazilian Jiu-Jitsu (BJJ) classes in Tripoli, gi and no-gi, with Coach Hussein. Learn control, escapes and submissions. Free trial class available.",
    h1: "Brazilian Jiu-Jitsu (BJJ) Classes in Tripoli",
    tagline: "Leverage over strength, gi and no-gi",
    intro: [
      "Brazilian Jiu-Jitsu at Supreme Academy is taught by Coach Hussein across both gi and no-gi sessions each week in Tripoli. Classes build from fundamentals, positional control and escapes toward live rolling, so leverage and technique do the work rather than strength alone.",
      "BJJ is also one of the three core disciplines that feed into Supreme Academy's MMA program, giving students a clear path from ground fundamentals into mixed martial arts if they choose to cross-train.",
    ],
    benefits: [
      "Weekly gi and no-gi sessions with the same head coach for consistent instruction",
      "Fundamentals-first curriculum: control, escapes and submissions before live rolling",
      "Suitable for complete beginners through competitors",
      "Pairs naturally with Judo and MMA classes at the same academy",
    ],
    coaches: ["Coach Hussein"],
    schedule: [
      { day: "Tuesday", time: "7:00–8:00", coach: "Coach Hussein", note: "No-Gi" },
      { day: "Thursday", time: "7:00–8:00", coach: "Coach Hussein", note: "Gi" },
    ],
    faqs: [
      {
        question: "What is the difference between gi and no-gi BJJ?",
        answer:
          "Gi classes train in the traditional jiu-jitsu uniform, using grips on the fabric for control and submissions. No-gi is trained in rashguard and shorts, relying more on underhooks, overhooks and body positioning. Supreme Academy runs one of each per week with Coach Hussein.",
      },
      {
        question: "Is BJJ good for beginners with no grappling experience?",
        answer:
          "Yes. Classes start with fundamentals, controlled positions and escapes before moving into live rolling, so new students build a base before sparring.",
      },
      {
        question: "Do I need a gi to start?",
        answer:
          "Not for your first class. Come in comfortable training clothes for a trial session, and the team can advise on gear once you decide to continue.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1747331796135-0e2354a712e4?auto=format&fit=crop&w=1000&q=70",
    imageAlt: "Brazilian Jiu-Jitsu (BJJ) grappling class at Supreme Academy in Tripoli",
  },
  {
    slug: "judo",
    name: "Judo",
    shortName: "Judo",
    cardNum: "02",
    cardTag: "Throws & pins",
    cardBlurb:
      "The art of the throw. Build balance, timing and explosive takedowns, plus the safest way to fall.",
    metaTitle: "Judo Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription:
      "Judo classes in Tripoli with Coach Hussein: throws, pins and safe falling for all levels. Book a free trial Judo class at Supreme Academy.",
    h1: "Judo Classes in Tripoli",
    tagline: "The art of the throw",
    intro: [
      "Judo at Supreme Academy focuses on balance, timing and explosive takedowns, taught by Coach Hussein three times a week in Tripoli. Every class also covers ukemi, the safe falling technique that makes throws something you can train hard and recover from.",
      "Judo shares a coach and training floor with Supreme Academy's BJJ and MMA classes, so grapplers can move between standing throws and ground work under the same roof.",
    ],
    benefits: [
      "Three weekly classes with Coach Hussein for steady progression",
      "Falling technique (ukemi) taught alongside throws from day one",
      "All levels welcome, from first-timers to competitors",
      "Complements BJJ and MMA training at the same academy",
    ],
    coaches: ["Coach Hussein"],
    schedule: [
      { day: "Tuesday", time: "6:00–7:00", coach: "Coach Hussein" },
      { day: "Friday", time: "6:00–7:00", coach: "Coach Hussein" },
      { day: "Saturday", time: "6:00–7:00", coach: "Coach Hussein" },
    ],
    faqs: [
      {
        question: "Is Judo safe for beginners?",
        answer:
          "Yes. Every Judo class at Supreme Academy teaches safe falling (ukemi) as part of the curriculum, so new students learn how to take throws safely before drilling them live.",
      },
      {
        question: "What should I wear to a Judo class?",
        answer:
          "A judogi is used for regular training, but you can join your first trial class in comfortable athletic clothing.",
      },
      {
        question: "Can I train Judo and BJJ together?",
        answer:
          "Yes, many students at Supreme Academy combine Judo's standing throws with BJJ's ground game, and both are taught by Coach Hussein.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1677170202299-d2edadfa76a1?auto=format&fit=crop&w=1000&q=70",
    imageAlt: "Judo throw during class at Supreme Academy in Tripoli",
  },
  {
    slug: "boxing",
    name: "Boxing",
    shortName: "Boxing",
    cardNum: "03",
    cardTag: "Pads & footwork",
    cardBlurb:
      "Punches, footwork and pad work for fitness and technique, with a women-only class and sparring for those ready.",
    metaTitle: "Boxing Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription:
      "Boxing classes in Tripoli for all levels, including women-only sessions with Coach Shaymaa. Pad work, footwork and conditioning. Free trial available.",
    h1: "Boxing Classes in Tripoli",
    tagline: "Pad work, footwork and conditioning",
    intro: [
      "Supreme Academy offers boxing classes across the week in Tripoli, including all-levels sessions and women-only boxing led by Coach Shaymaa. Training covers footwork, combinations and pad work, building fitness and technique together.",
      "Boxing also runs combined with Muay Thai in dedicated Boxing/Muay Thai sessions with Coach Alaa Eldin, for students who want to add kicks, knees and clinch work to their striking.",
    ],
    benefits: [
      "All-levels boxing sessions plus women-only classes with Coach Shaymaa",
      "Combined Boxing/Muay Thai sessions available for a wider striking toolkit",
      "Pad rounds that build fitness fast alongside technique",
      "Sparring for students who are ready to test their skills",
    ],
    coaches: ["Coach Amar", "Coach Shaymaa", "Coach Alaa Eldin"],
    schedule: [
      { day: "Monday", time: "10:00–11:00", coach: "Coach Amar", note: "All levels" },
      { day: "Thursday", time: "6:00–7:00", coach: "Coach Shaymaa", note: "Women only" },
      { day: "Friday", time: "10:00–11:00", coach: "Coach Amar", note: "All levels" },
      { day: "Saturday", time: "3:00–4:00", coach: "Coach Shaymaa", note: "All levels" },
    ],
    faqs: [
      {
        question: "Is there a women-only boxing class?",
        answer:
          "Yes. Coach Shaymaa leads a women-only boxing class on Thursdays at 6:00–7:00, alongside an all-levels session on Saturdays.",
      },
      {
        question: "Do you offer sparring?",
        answer:
          "Sparring is introduced once students are ready, after pad work and technique have been built up under coaching supervision.",
      },
      {
        question: "What's the difference between the Boxing and Boxing/Muay Thai classes?",
        answer:
          "Standalone boxing sessions focus on punching, footwork and pad work. The combined Boxing/Muay Thai classes with Coach Alaa Eldin add kicks, knees and clinch work from Muay Thai.",
      },
    ],
    image: "/assets/hero-fighter.png",
    imageAlt: "Boxing pad work class at Supreme Academy in Tripoli",
  },
  {
    slug: "kickboxing",
    name: "Kickboxing",
    shortName: "Kickboxing",
    cardNum: "04",
    cardTag: "Striking & fitness",
    cardBlurb:
      "Punches, kicks, knees and footwork. Pad rounds that get you fit fast and sparring for those ready to test it.",
    metaTitle: "Kickboxing Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription:
      "Kickboxing classes in Tripoli four times a week with Coach Rami. Punches, kicks, knees and footwork for all levels. Book a free trial class.",
    h1: "Kickboxing Classes in Tripoli",
    tagline: "Punches, kicks, knees and footwork",
    intro: [
      "Kickboxing at Supreme Academy runs four times a week in Tripoli under Coach Rami, combining punches, kicks, knees and footwork in pad rounds that build fitness fast. Classes are open to all levels, with sparring introduced for students ready to test their skills.",
      "Because kickboxing shares striking fundamentals with Muay Thai and Boxing, students often move between classes to broaden their striking game.",
    ],
    benefits: [
      "Four weekly classes with the same coach for consistent technique work",
      "Pad rounds that combine conditioning with striking technique",
      "All levels welcome, with sparring for those ready to test it",
      "Shares striking fundamentals with Supreme Academy's Boxing and Muay Thai classes",
    ],
    coaches: ["Coach Rami"],
    schedule: [
      { day: "Tuesday", time: "8:00–9:00", coach: "Coach Rami" },
      { day: "Wednesday", time: "7:00–8:00", coach: "Coach Rami" },
      { day: "Thursday", time: "8:00–9:00", coach: "Coach Rami" },
      { day: "Friday", time: "7:00–8:00", coach: "Coach Rami" },
    ],
    faqs: [
      {
        question: "How many kickboxing classes are there per week?",
        answer:
          "Four: Tuesday, Wednesday, Thursday and Friday, all led by Coach Rami.",
      },
      {
        question: "Is kickboxing good for fitness, not just fighting?",
        answer:
          "Yes. Pad rounds are designed to build conditioning alongside technique, so many students train kickboxing purely for fitness.",
      },
      {
        question: "Can beginners join kickboxing classes?",
        answer:
          "Yes, all levels are welcome. Sparring is introduced gradually once fundamentals and pad work are solid.",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1575800605380-ca1d27744f2c?auto=format&fit=crop&w=1000&q=70",
    imageAlt: "Kickboxing high kick during class at Supreme Academy in Tripoli",
  },
  {
    slug: "muay-thai",
    name: "Muay Thai",
    shortName: "Muay Thai",
    cardNum: "05",
    cardTag: "Clinch & knees",
    cardBlurb:
      "Boxing fundamentals plus clinch work, kicks and knees, the discipline that rounds out any striker's game.",
    metaTitle: "Muay Thai Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription:
      "Muay Thai classes in Tripoli with Coach Alaa Eldin, covering clinch work, kicks and knees alongside boxing. All levels welcome, free trial class.",
    h1: "Muay Thai Classes in Tripoli",
    tagline: "Clinch, kicks and knees from the art of eight limbs",
    intro: [
      "Muay Thai at Supreme Academy is taught in combined Boxing/Muay Thai sessions with Coach Alaa Eldin, adding clinch work, kicks and knees to boxing fundamentals. It's the discipline that rounds out a striker's toolkit for anyone also training Kickboxing or MMA.",
      "Classes run three times a week in Tripoli and are open to all levels, from students training for fitness to those preparing to spar.",
    ],
    benefits: [
      "Clinch work, kicks and knees taught alongside boxing technique",
      "All-levels classes with Coach Alaa Eldin, three times a week",
      "Builds directly into Supreme Academy's MMA and Kickboxing programs",
      "Pad rounds for conditioning plus sparring for those ready",
    ],
    coaches: ["Coach Alaa Eldin"],
    schedule: [
      { day: "Monday", time: "6:00–7:00", coach: "Coach Alaa Eldin", note: "Boxing / Muay Thai" },
      { day: "Wednesday", time: "6:00–7:00", coach: "Coach Alaa Eldin", note: "Boxing / Muay Thai" },
      { day: "Saturday", time: "5:00–6:00", coach: "Coach Alaa Eldin", note: "Boxing / Muay Thai" },
    ],
    faqs: [
      {
        question: "Is Muay Thai taught as its own class?",
        answer:
          "Muay Thai is taught in combined Boxing/Muay Thai sessions with Coach Alaa Eldin, adding clinch, kicks and knees to boxing technique, three times a week.",
      },
      {
        question: "Do I need boxing experience before starting Muay Thai?",
        answer:
          "No. The combined classes are open to all levels and build both boxing and Muay Thai fundamentals together.",
      },
      {
        question: "How does Muay Thai fit with MMA training?",
        answer:
          "Muay Thai's clinch, kicks and knees are a core part of the striking range in MMA, so many Muay Thai students also train in Supreme Academy's MMA classes with Coach Ammar.",
      },
    ],
    image: "/assets/hero-fighter.png",
    imageAlt: "Muay Thai clinch and striking class at Supreme Academy in Tripoli",
  },
];

export function getProgram(slug: string) {
  return PROGRAMS.find((p) => p.slug === slug);
}
