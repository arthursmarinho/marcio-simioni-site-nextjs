import CallToAction from "./components/CallToAction";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import Testimonials from "./components/Testimonials";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Welcome />
      <Content />
      <StatsSection />
      <Testimonials />
      <CallToAction />
    </div>
  );
}
