import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  FinalCtaSection,
  HeroSection,
  HowWeWorkSection,
  IndustriesSection,
  SolutionsSection,
  WhyChooseUsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HeroSection />
        <SolutionsSection />
        <IndustriesSection />
        <HowWeWorkSection />
        <WhyChooseUsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
