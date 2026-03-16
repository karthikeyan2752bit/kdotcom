import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { IndustryPage } from "@/components/industries/industry-page";

export default function ClinicIndustryPage() {
  return (
    <>
      <SiteHeader />
      <IndustryPage
        industry="clinics and hospitals"
        heroTitle="Software Systems for Clinics and Hospitals"
        heroDescription="Reduce front-desk bottlenecks and improve patient experiences with connected systems that handle appointments, records, billing, and reporting in one place."
        problems={[
          { title: "Manual appointment booking", description: "Phone and WhatsApp scheduling creates delays, missed slots, and staff overload." },
          { title: "Fragmented patient records", description: "Visit notes, treatment history, and follow-up details are hard to track across teams." },
          { title: "Unclear inventory visibility", description: "Medicine and supply stock can run out unexpectedly without timely alerts." },
        ]}
        solutions={[
          { title: "Appointment Automation", description: "Automate patient scheduling and reduce manual booking work." },
          { title: "Patient Tracking", description: "Track visits, treatments, and records in one system." },
          { title: "Inventory Management", description: "Manage medicines and clinic supplies." },
          { title: "Billing Automation", description: "Generate invoices and maintain financial records." },
          { title: "Reports and Analytics", description: "Understand patient flow and clinic performance." },
        ]}
        systems={[
          "Online appointment calendar with staff allocation",
          "Digital patient registration and medical history system",
          "Pharmacy and supply stock monitoring dashboard",
          "Automated invoice and payment tracking",
        ]}
        ctaText="Talk to us about building a system for your clinic."
      />
      <SiteFooter />
    </>
  );
}
