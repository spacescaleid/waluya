import type { Metadata } from "next";
import { PartnersHero } from "@/components/partners/partners-hero";
import { PartnersGrid } from "@/components/partners/partners-grid";
import { PartnersMatrix } from "@/components/partners/partners-matrix";
import { PartnersBenefits } from "@/components/partners/partners-benefits";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Partners - PT Waluya Istana Nusantara",
  description:
    "Partner teknologi PT Waluya Istana Nusantara meliputi Cisco, Citrix, Mikrotik, Maipu, Fortinet, dan Ubiquiti. Solusi IT terintegrasi dari brand global terpercaya.",
};

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersGrid />
      <PartnersMatrix />
      <PartnersBenefits />
      <CtaBanner
        title="Tertarik Menjadi Partner Waluya?"
        description="Mari berkolaborasi untuk memberikan solusi IT terbaik bagi klien di seluruh Indonesia."
        primaryLabel="Hubungi Kami"
        primaryHref="/contact"
        secondaryLabel="Tentang Kami"
        secondaryHref="/about"
      />
    </>
  );
}