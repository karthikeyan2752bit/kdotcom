import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { IndustryPage } from "@/components/industries/industry-page";

export default function RetailIndustryPage() {
  return (
    <>
      <SiteHeader />
      <IndustryPage
        industry="retail stores and supermarkets"
        heroTitle="Smart Systems for Retail Stores and Supermarkets"
        heroDescription="Connect inventory, billing counters, suppliers, and reporting into one reliable system that scales with your store operations."
        problems={[
          { title: "Inventory mismatches", description: "Stock counts are often inaccurate, leading to stockouts or over-ordering." },
          { title: "Slow checkout operations", description: "Manual processes at billing counters hurt customer experience during peak hours." },
          { title: "Limited insights for planning", description: "Store owners lack clear trends on fast-moving products and margins." },
        ]}
        solutions={[
          { title: "Real-time Inventory Management", description: "Sync stock across store shelves, backroom, and reordering points." },
          { title: "Billing Counter Automation", description: "Speed up checkout with integrated POS, tax, and discount workflows." },
          { title: "Supplier and Purchase Tracking", description: "Automate purchase orders and monitor delivery status from vendors." },
          { title: "Sales Analytics", description: "Track daily sales, product movement, and branch-level performance." },
        ]}
        systems={[
          "POS and barcode billing integration",
          "Stock alerts and automated purchase recommendations",
          "Supplier management and goods-received workflows",
          "Retail analytics dashboard with product trends",
        ]}
        ctaText="Talk to us about building a system for your retail operations."
      />
      <SiteFooter />
    </>
  );
}
