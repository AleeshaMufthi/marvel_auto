import Image from "next/image";
import HeroSection from './components/HeroSection';
import OurServices from "./components/OurServices";
import Certifications from "./components/Certifications";
import TestimonialsAndContact from "./components/TestimonialsAndContact";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <OurServices />
      <Certifications />
      <TestimonialsAndContact />
      <ContactSection />
      {/* <Footer /> */}
    </main>
  );
}
