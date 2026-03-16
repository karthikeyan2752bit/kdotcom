import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { IndustryPage } from "@/components/industries/industry-page";

export default function LaundryIndustryPage() {
  return (
    <>
      <SiteHeader />
      <IndustryPage
        industry="laundry businesses"
        heroTitle="Automation Systems for Laundry Businesses"
        heroDescription="Streamline pickup, washing, delivery, and payments with one connected workflow to improve customer satisfaction and daily throughput."
        problems={[
          { title: "Order tracking confusion", description: "Teams struggle to know order status across pickup, processing, and delivery." },
          { title: "Delivery coordination delays", description: "Manual route planning increases turnaround time and missed delivery windows." },
          { title: "Payment follow-up issues", description: "Pending invoices and cash handling create revenue leakage." },
        ]}
        solutions={[
          { title: "Order Lifecycle Tracking", description: "Track each order from pickup to delivery with status updates." },
          { title: "Pickup and Delivery Scheduling", description: "Assign time slots and routes to reduce delays and fuel waste." },
          { title: "Customer Notifications", description: "Send automated updates when orders are received, ready, and dispatched." },
          { title: "Billing and Payment Automation", description: "Generate bills instantly and monitor due amounts in real time." },
        ]}
        systems={[
          "Customer portal for placing and monitoring orders",
          "Route and driver management with delivery status",
          "Invoice and subscription plan management",
          "Daily performance dashboard for operations team",
        ]}
        ctaText="Talk to us about building a system for your laundry business."
      />
      <SiteFooter />
    </>
  );
}
