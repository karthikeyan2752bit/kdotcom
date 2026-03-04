import { SiteHeader } from "@/components/layout/site-header";
import {
  AboutSection,
  CaseStudiesSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
    </>
  );
}
