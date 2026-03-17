import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import {
  FinalCtaSection,
  HeroSection,
  HowWeWorkSection,
  IndustriesSection,
  ProductVisualizationSection,
  SolutionsSection,
  TrustedBySection,
  WhyChooseUsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-clip">
        <HeroSection />
        <TrustedBySection />
        <SolutionsSection />
        <ProductVisualizationSection />
        <IndustriesSection />
        <HowWeWorkSection />
        <WhyChooseUsSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
