import CaseStudiesSection from "@sections/CaseStudiesSection/CaseStudiesSection";
import ContactSection from "@sections/ContactSection/ContactSection";
import HeroSection from "@sections/HeroSection/HeroSection";
import OurWorkingSection from "@sections/OurWorkingSection/OurWorkingSection";
import ServicesSection from "@sections/ServicesSection/ServicesSection";
import TeamSection from "@sections/TeamSection/TeamSection";
import TestimonialSection from "@sections/TestimonialSection/TestimonialSection";

export default function Page() {
  return (
    <div className="w-full space-y-12 lg:space-y-16">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <OurWorkingSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
    </div>
  );
}
