import type { Metadata } from "next";
import { NetworkHero } from "@/components/network/network-hero";
import { NetworkOverview } from "@/components/network/network-overview";
import { NetworkCoverage } from "@/components/network/network-coverage";
import { NetworkTopology } from "@/components/network/network-topology";
import { NetworkBackbone } from "@/components/network/network-backbone";
import { NetworkAdvantages } from "@/components/network/network-advantages";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Jaringan - PT Waluya Istana Nusantara",
  description:
    "Jaringan fiber optik PT Waluya Istana Nusantara meliputi Jakarta, Cianjur, Sukabumi, Cirebon, Kuningan, dan Bengkulu. Didukung backbone Singapore Equinix, Open IXP, dan APJII.",
};

export default function NetworkPage() {
  return (
    <>
      <NetworkHero />
      <NetworkOverview />
      <NetworkCoverage />
      <NetworkTopology />
      <NetworkBackbone />
      <NetworkAdvantages />
      <CtaBanner
        title="Butuh Koneksi Stabil untuk Bisnis Anda?"
        description="Manfaatkan jaringan fiber optik kami yang stabil dengan dukungan backbone internasional terpercaya."
        primaryLabel="Hubungi Sales"
        primaryHref="/contact"
        secondaryLabel="Lihat Layanan"
        secondaryHref="/services"
      />
    </>
  );
}