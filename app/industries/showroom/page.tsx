import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { IndustryPage } from "@/components/industries/industry-page";

export default function ShowroomIndustryPage() {
  return (
    <>
      <SiteHeader />
      <IndustryPage
        industry="car and bike showrooms"
        heroTitle="Automation Platforms for Car and Bike Showrooms"
        heroDescription="Capture leads, streamline test-drive scheduling, and improve post-sale follow-ups with automation designed for sales teams."
        problems={[
          { title: "Lead follow-up inconsistency", description: "Prospects are lost when follow-ups depend on manual reminders." },
          { title: "Scattered customer interactions", description: "Enquiries from walk-ins, calls, and social platforms are not centralized." },
          { title: "Weak after-sales visibility", description: "Service reminders and renewal opportunities are often missed." },
        ]}
        solutions={[
          { title: "Lead Management Automation", description: "Capture and route leads instantly to the right sales representative." },
          { title: "Test-drive Scheduling", description: "Coordinate availability, slots, and confirmations without manual back-and-forth." },
          { title: "Quotation and Booking Workflows", description: "Standardize proposal creation, booking amounts, and approvals." },
          { title: "After-sales Reminders", description: "Automate service reminders, renewal updates, and engagement campaigns." },
        ]}
        systems={[
          "CRM dashboard for enquiries and follow-ups",
          "Test-drive and demo vehicle allocation system",
          "Quotation and booking approval pipeline",
          "After-sales communication automation",
        ]}
        ctaText="Talk to us about building a system for your showroom."
      />
      <SiteFooter />
    </>
  );
}
