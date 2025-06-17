import SponsorsMarque from "pages/Home/_partials/Marque";
import Hero from "./_partials/Hero";
import TreatmentWrapper from "./_partials/TreatmentButton";
import CallToAction from "./_partials/CallToAction";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <TreatmentWrapper />
      <SponsorsMarque />
      <CallToAction />
    </div>
  );
};

export default Homepage;
