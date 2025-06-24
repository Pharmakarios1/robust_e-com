import SponsorsMarquee from "pages/Home/_partials/Marque";
import Hero from "./_partials/Hero";
import TreatmentSectionWrapper from "./_partials/TreatmentButton";
import CallToAction from "./_partials/CallToAction";
import { useEffect } from "react";
import { useLocation } from "react-router";
import Team from "./_partials/Team";
import Reviews from "./_partials/Reviews";

const Homepage = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView();
    }
  }, [hash]);
  return (
    <div>
      <Hero />
      <TreatmentSectionWrapper />
      <Team />
      <Reviews />
      <SponsorsMarquee />
      <CallToAction />
    </div>
  );
};

export default Homepage;
