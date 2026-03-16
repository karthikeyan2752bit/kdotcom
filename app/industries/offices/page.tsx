import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { IndustryPage } from "@/components/industries/industry-page";

export default function OfficesIndustryPage() {
  return (
    <>
      <SiteHeader />
      <IndustryPage
        industry="growing offices"
        heroTitle="Workflow Automation for Growing Offices"
        heroDescription="Standardize internal processes and boost team productivity with systems that remove repetitive admin work."
        problems={[
          { title: "Manual internal approvals", description: "Requests and approvals move slowly through chat and spreadsheets." },
          { title: "Operational data silos", description: "Teams use disconnected tools with no shared visibility." },
          { title: "Scaling bottlenecks", description: "As teams grow, routine tasks consume too much management time." },
        ]}
        solutions={[
          { title: "Workflow Standardization", description: "Create clear process flows for HR, operations, and finance activities." },
          { title: "Task and Team Coordination", description: "Automate assignments, notifications, and deadline tracking." },
          { title: "Document and Request Management", description: "Centralize internal forms, records, and status tracking." },
          { title: "Management Dashboards", description: "Monitor productivity, pending work, and turnaround times in one place." },
        ]}
        systems={[
          "Internal portal for employee requests",
          "Automated approval chains for operations and finance",
          "Team workload and delivery tracking board",
          "Executive dashboard with KPI and progress trends",
        ]}
        ctaText="Talk to us about building a system for your office."
      />
      <SiteFooter />
    </>
  );
}
