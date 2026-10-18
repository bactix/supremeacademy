export type ScheduleEntry = { day: string; time: string; coach: string; note?: string };

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  category: "martial-arts" | "fitness";
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
  // Optional: programs without a photo yet render a placeholder.
  image?: string;
  imageAlt: string;
};

export const PROGRAMS: Program[] = [
  {
    slug: "mma",
    name: "MMA",
    shortName: "MMA",
    category: "martial-arts",
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
    category: "martial-arts",
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
    category: "martial-arts",
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
    category: "martial-arts",
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
    category: "martial-arts",
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
    category: "martial-arts",
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
  {
    slug: "belly-dance",
    name: "Belly Dance",
    shortName: "Belly Dance",
    category: "fitness",
    cardNum: "01",
    cardTag: "Women only",
    cardBlurb: "A women-only dance class that builds rhythm, flexibility and confidence.",
    metaTitle: "Belly Dance Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "Belly Dance classes in Tripoli at Supreme Academy with Coach Amar. Book a free trial class.",
    h1: "Belly Dance Classes in Tripoli",
    tagline: "Rhythm, flexibility and confidence",
    intro: ["Belly Dance at Supreme Academy is a women-only class in Tripoli taught by Coach Amar. Sessions focus on rhythm, body control and flexibility in a supportive setting.", "The class runs twice a week and sits alongside the rest of the Supreme Academy fitness timetable."],
    benefits: ["Women-only class in a supportive setting", "Builds rhythm, flexibility and body control", "Taught by Coach Amar, twice a week", "Pairs well with Pilates, Zumba and Extreme Fitness"],
    coaches: ["Coach Amar"],
    schedule: [
      { day: "Monday", time: "7:00–8:00", coach: "Coach Amar" },
      { day: "Saturday", time: "7:00–8:00", coach: "Coach Amar" },
    ],
    faqs: [
      {
        question: "Do I need experience to join Belly Dance?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first Belly Dance class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "Belly Dance class at Supreme Academy in Tripoli",
  },
  {
    slug: "bungee-jumping",
    name: "Bungee Jumping",
    shortName: "Bungee Jumping",
    category: "fitness",
    cardNum: "02",
    cardTag: "Women only",
    cardBlurb: "High-energy women-only bungee fitness: cardio, strength and fun in the air.",
    metaTitle: "Bungee Jumping Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "Bungee Jumping classes in Tripoli at Supreme Academy with Coach Danya and Coach Dodji. Book a free trial class.",
    h1: "Bungee Jumping Classes in Tripoli",
    tagline: "Cardio and strength, suspended",
    intro: ["Bungee Jumping at Supreme Academy is a women-only fitness class in Tripoli combining cardio and strength work. Sessions are led by Coach Danya and Coach Dodji.", "Classes run four times a week across the timetable, so it is easy to fit around other training."],
    benefits: ["Women-only class with a high-energy format", "Cardio and strength work in one session", "Taught by Coach Danya and Coach Dodji, four times a week", "Runs alongside the full fitness and martial arts timetable"],
    coaches: ["Coach Danya", "Coach Dodji"],
    schedule: [
      { day: "Monday", time: "12:00–1:00", coach: "Coach Danya" },
      { day: "Tuesday", time: "5:00–6:00", coach: "Coach Dodji" },
      { day: "Wednesday", time: "12:00–1:00", coach: "Coach Danya" },
      { day: "Thursday", time: "5:00–6:00", coach: "Coach Dodji" },
    ],
    faqs: [
      {
        question: "Do I need experience to join Bungee Jumping?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first Bungee Jumping class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "Bungee Jumping class at Supreme Academy in Tripoli",
  },
  {
    slug: "cardio",
    name: "Cardio",
    shortName: "Cardio",
    category: "fitness",
    cardNum: "03",
    cardTag: "All levels",
    cardBlurb: "An all-levels cardio class to build stamina, burn energy and keep training consistent.",
    metaTitle: "Cardio Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "Cardio classes in Tripoli at Supreme Academy with Coach Mohamad. Book a free trial class.",
    h1: "Cardio Classes in Tripoli",
    tagline: "Build stamina, burn energy",
    intro: ["Cardio at Supreme Academy is an open-to-all class in Tripoli built around conditioning and stamina. Sessions are led by Coach Mohamad.", "Classes run in the late morning, making it a good fit for building fitness around other training."],
    benefits: ["Open to all levels", "Builds stamina and conditioning", "Taught by Coach Mohamad", "Complements martial arts and strength training"],
    coaches: ["Coach Mohamad"],
    schedule: [
      { day: "Monday", time: "11:00–12:00", coach: "Coach Mohamad" },
      { day: "Wednesday", time: "11:00–12:00", coach: "Coach Mohamad" },
      { day: "Saturday", time: "11:00–12:00", coach: "" },
    ],
    faqs: [
      {
        question: "Do I need experience to join Cardio?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first Cardio class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "Cardio class at Supreme Academy in Tripoli",
  },
  {
    slug: "extreme-fitness",
    name: "Extreme Fitness",
    shortName: "Extreme Fitness",
    category: "fitness",
    cardNum: "04",
    cardTag: "Women only",
    cardBlurb: "Women-only full-body training: strength, conditioning and endurance.",
    metaTitle: "Extreme Fitness Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "Extreme Fitness classes in Tripoli at Supreme Academy with Coach Rouba. Book a free trial class.",
    h1: "Extreme Fitness Classes in Tripoli",
    tagline: "Full-body strength and conditioning",
    intro: ["Extreme Fitness at Supreme Academy is a women-only training class in Tripoli covering strength, conditioning and endurance. Sessions are led by Coach Rouba.", "It is the most frequent class on the timetable, with morning and evening sessions across the week."],
    benefits: ["Women-only class with full-body training", "Strength, conditioning and endurance in one session", "Taught by Coach Rouba, with morning and evening options", "Six sessions a week so you can choose what fits"],
    coaches: ["Coach Rouba"],
    schedule: [
      { day: "Monday", time: "8:30–9:30", coach: "Coach Rouba" },
      { day: "Monday", time: "5:00–6:00", coach: "Coach Rouba" },
      { day: "Wednesday", time: "8:30–9:30", coach: "Coach Rouba" },
      { day: "Wednesday", time: "5:00–6:00", coach: "Coach Rouba" },
      { day: "Friday", time: "8:30–9:30", coach: "Coach Rouba" },
      { day: "Friday", time: "5:00–6:00", coach: "Coach Rouba" },
    ],
    faqs: [
      {
        question: "Do I need experience to join Extreme Fitness?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first Extreme Fitness class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "Extreme Fitness class at Supreme Academy in Tripoli",
  },
  {
    slug: "gymnastics",
    name: "Gymnastics",
    shortName: "Gymnastics",
    category: "fitness",
    cardNum: "05",
    cardTag: "All levels",
    cardBlurb: "Gymnastics for all levels: body control, mobility and strength fundamentals.",
    metaTitle: "Gymnastics Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "Gymnastics classes in Tripoli at Supreme Academy with Coach Rana. Book a free trial class.",
    h1: "Gymnastics Classes in Tripoli",
    tagline: "Body control, mobility and strength",
    intro: ["Gymnastics at Supreme Academy is an all-levels class in Tripoli focused on body control, mobility and strength fundamentals. Sessions are led by Coach Rana.", "Classes run twice a week in the afternoon."],
    benefits: ["Open to all levels", "Develops body control, mobility and strength", "Taught by Coach Rana, twice a week", "A strong base for any other sport or martial art"],
    coaches: ["Coach Rana"],
    schedule: [
      { day: "Thursday", time: "4:00–5:00", coach: "Coach Rana" },
      { day: "Saturday", time: "4:00–5:00", coach: "Coach Rana" },
    ],
    faqs: [
      {
        question: "Do I need experience to join Gymnastics?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first Gymnastics class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "Gymnastics class at Supreme Academy in Tripoli",
  },
  {
    slug: "pilates",
    name: "Pilates",
    shortName: "Pilates",
    category: "fitness",
    cardNum: "06",
    cardTag: "Core & posture",
    cardBlurb: "Pilates for core strength, posture and mobility, with sessions through the week.",
    metaTitle: "Pilates Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "Pilates classes in Tripoli at Supreme Academy with Coach Danya. Book a free trial class.",
    h1: "Pilates Classes in Tripoli",
    tagline: "Core strength, posture and mobility",
    intro: ["Pilates at Supreme Academy is taught in Tripoli by Coach Danya, focusing on core strength, posture and mobility.", "It is one of the most frequent classes on the timetable, with sessions on most days of the week."],
    benefits: ["Builds core strength, posture and mobility", "Taught by Coach Danya", "Sessions on most days of the week", "A good complement to martial arts and strength training"],
    coaches: ["Coach Danya"],
    schedule: [
      { day: "Tuesday", time: "11:00–12:00", coach: "Coach Danya" },
      { day: "Tuesday", time: "4:00–5:00", coach: "Coach Danya" },
      { day: "Thursday", time: "11:00–12:00", coach: "Coach Danya" },
      { day: "Friday", time: "11:00–12:00", coach: "Coach Danya" },
      { day: "Saturday", time: "10:00–11:00", coach: "Coach Danya" },
    ],
    faqs: [
      {
        question: "Do I need experience to join Pilates?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first Pilates class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "Pilates class at Supreme Academy in Tripoli",
  },
  {
    slug: "u-bound",
    name: "U Bound",
    shortName: "U Bound",
    category: "fitness",
    cardNum: "07",
    cardTag: "Women only",
    cardBlurb: "U Bound: a women-only class with sessions through the week.",
    metaTitle: "U Bound Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "U Bound classes in Tripoli at Supreme Academy. Book a free trial class.",
    h1: "U Bound Classes in Tripoli",
    tagline: "Women-only sessions through the week",
    intro: ["U Bound at Supreme Academy is a women-only class in Tripoli, with sessions across the week.", "See the weekly timetable for current times."],
    benefits: ["Women-only class", "Multiple sessions across the week", "Runs alongside the full fitness and martial arts timetable", "Ask the team for details when you book your trial"],
    coaches: [],
    schedule: [
      { day: "Monday", time: "4:00–5:00", coach: "" },
      { day: "Tuesday", time: "10:00–11:00", coach: "" },
      { day: "Tuesday", time: "3:00–4:00", coach: "" },
      { day: "Thursday", time: "10:00–11:00", coach: "" },
    ],
    faqs: [
      {
        question: "Do I need experience to join U Bound?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first U Bound class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "U Bound class at Supreme Academy in Tripoli",
  },
  {
    slug: "zumba",
    name: "Zumba",
    shortName: "Zumba",
    category: "fitness",
    cardNum: "08",
    cardTag: "Women only",
    cardBlurb: "Dance-based cardio that feels like a party: Zumba for women.",
    metaTitle: "Zumba Classes in Tripoli, Lebanon | Supreme Academy",
    metaDescription: "Zumba classes in Tripoli at Supreme Academy with Coach Danya. Book a free trial class.",
    h1: "Zumba Classes in Tripoli",
    tagline: "Dance-based cardio",
    intro: ["Zumba at Supreme Academy is a women-only dance-fitness class in Tripoli. Sessions are led by Coach Danya.", "Classes run three times a week."],
    benefits: ["Women-only dance-fitness class", "Cardio that feels like a party", "Taught by Coach Danya, three times a week", "Pairs well with Pilates and Extreme Fitness"],
    coaches: ["Coach Danya"],
    schedule: [
      { day: "Monday", time: "3:00–4:00", coach: "Coach Danya" },
      { day: "Friday", time: "12:00–1:00", coach: "Coach Danya" },
      { day: "Saturday", time: "2:00–3:00", coach: "Coach Danya" },
    ],
    faqs: [
      {
        question: "Do I need experience to join Zumba?",
        answer: "Check the class tag for who it is open to. The team can help you pick the right starting point, and a free trial class is available.",
      },
      {
        question: "What should I bring to my first Zumba class?",
        answer: "Comfortable training clothes and water.",
      },
    ],
    imageAlt: "Zumba class at Supreme Academy in Tripoli",
  },
];

export function getProgram(slug: string) {
  return PROGRAMS.find((p) => p.slug === slug);
}
