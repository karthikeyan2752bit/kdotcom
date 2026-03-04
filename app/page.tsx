import { SiteHeader } from "@/components/layout/site-header";
import {
  AboutSection,
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
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
