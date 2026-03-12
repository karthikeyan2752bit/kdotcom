import { SiteHeader } from "@/components/layout/site-header";
import { AnimatedBackground } from "@/components/ui/animated-background";
import {
  AboutSection,
  AutomationSection,
  ContactSection,
  HeroSection,
  InfrastructureSection,
  ModulesSection,
  ProjectsSection,
  ServicesSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <SiteHeader />
      <main className="overflow-x-clip">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <ModulesSection />
        <InfrastructureSection />
        <AutomationSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
