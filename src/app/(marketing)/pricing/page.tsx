import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { AboutSection } from "@/components/home/about-section";
import { ServicesSection } from "@/components/home/services-section";
import { VisionMissionSection } from "@/components/home/vision-mission-section";
import { BusinessModelSection } from "@/components/home/business-model-section";
import { CtaBanner } from "@/components/shared/cta-banner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <VisionMissionSection />
      <BusinessModelSection />
      <CtaBanner
        title="Siap Mengembangkan Bisnis Anda Bersama Waluya?"
        description="Konsultasikan kebutuhan IT perusahaan Anda dengan tim profesional kami. Solusi terintegrasi untuk pertumbuhan jangka panjang."
        primaryLabel="Hubungi Kami"
        primaryHref="/contact"
        secondaryLabel="Lihat Layanan"
        secondaryHref="#services"
      />
    </>
  );
}