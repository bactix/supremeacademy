import Header from "./components/home/Header";
import Hero from "./components/home/Hero";
import MarqueeStrip from "./components/home/MarqueeStrip";
import Programs from "./components/home/Programs";
import ScheduleTimetable from "./components/home/ScheduleTimetable";
import Instructors from "./components/home/Instructors";
import Trial from "./components/home/Trial";
import Pricing from "./components/home/Pricing";
import Location from "./components/home/Location";
import Footer from "./components/home/Footer";
import WhatsAppButton from "./components/home/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <MarqueeStrip />
      <Programs />
      <ScheduleTimetable />
      <Instructors />
      <Trial />
      <Pricing />
      <Location />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
