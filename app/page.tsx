import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import MarqueeStrip from "./components/home/MarqueeStrip";
import Programs from "./components/home/Programs";
import ScheduleTimetable from "./components/home/ScheduleTimetable";
import Instructors from "./components/home/Instructors";
import Trial from "./components/home/Trial";
import Pricing from "./components/home/Pricing";
import Bundles from "./components/home/Bundles";
import Location from "./components/home/Location";
import Footer from "./components/home/Footer";
import WhatsAppButton from "./components/home/WhatsAppButton";
import { fetchSchedule, toGridSchedule } from "./lib/sheet-schedule";
import { DEFAULT_SCHED } from "./lib/schedule-data";

export default async function Home() {
  const { classesByDay, error } = await fetchSchedule();
  if (error) {
    console.error("Homepage schedule: falling back to the built-in timetable.", error);
  }
  const sched = error ? DEFAULT_SCHED : toGridSchedule(classesByDay);

  return (
    <>
      <Header />
      <Hero />
      <MarqueeStrip />
      <Programs />
      <ScheduleTimetable sched={sched} />
      <Instructors />
      <Trial />
      <Pricing />
      <Bundles />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
