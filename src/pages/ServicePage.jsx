import { motion } from "framer-motion";
import CoreServices from "../services/CoreServices";
import HowWeWork from "../services/HowWeWork";
import Industries from "../services/Industries";
import TechStack from "../services/TechStack";
import ServicesHero from "../services/ServicesHero";
import WhyAuribus from "../services/WhyAuribus";
import Testimonials from "../services/Testimonials";
import FinalCTA from "../services/FinalCTA";


export default function ServicePage() {
  return (
    <>
      <ServicesHero />
      <CoreServices />
      <HowWeWork />
      <Industries />
      <TechStack />
      <WhyAuribus />
      <Testimonials />
      <FinalCTA />
      
    </>
  );
}
