import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutVisionMission } from "@/components/about/about-vision-mission";
import { AboutValues } from "@/components/about/about-values";
import { AboutTimeline } from "@/components/about/about-timeline";
import { AboutTeam } from "@/components/about/about-team";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata: Metadata = {
  title: "Tentang Kami - PT Waluya Istana Nusantara",
  description:
    "Mengenal lebih dekat PT Waluya Istana Nusantara (WIN), perusahaan One Stop IT Solution sejak 2015. Visi, misi, dan perjalanan kami dalam menyediakan solusi IT terpadu di Indonesia.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutVisionMission />
      <AboutValues />
      <AboutTimeline />
      <AboutTeam />
      <CtaBanner
        title="Siap Berkolaborasi dengan Tim Profesional?"
        description="Mari diskusikan bagaimana kami dapat membantu mengembangkan bisnis Anda dengan solusi IT terbaik."
        primaryLabel="Hubungi Kami"
        primaryHref="/contact"
        secondaryLabel="Lihat Layanan"
        secondaryHref="/services"
      />
    </>
  );
}