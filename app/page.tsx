import { SiteHeader } from "@/components/layout/site-header";
import { AnimatedBackground } from "@/components/ui/animated-background";
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
      <AnimatedBackground />
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
