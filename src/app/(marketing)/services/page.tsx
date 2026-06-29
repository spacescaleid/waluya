import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesGrid } from "@/components/services/services-grid";
import { ServicesWhyUs } from "@/components/services/services-why-us";
import { ServicesIndustries } from "@/components/services/services-industries";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Layanan Kami - PT Waluya Istana Nusantara",
  description:
    "Empat pilar layanan utama PT Waluya Istana Nusantara: Colocation, Network Monitoring System, System Integrator, dan Managed Service. Solusi IT terpadu untuk bisnis Anda.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesWhyUs />
      <ServicesIndustries />
      <CtaBanner
        title="Butuh Konsultasi untuk Solusi IT yang Tepat?"
        description="Tim profesional kami siap membantu menganalisis kebutuhan dan memberikan rekomendasi terbaik untuk bisnis Anda."
        primaryLabel="Konsultasi Gratis"
        primaryHref="/contact"
        secondaryLabel="Tentang Kami"
        secondaryHref="/about"
      />
    </>
  );
}