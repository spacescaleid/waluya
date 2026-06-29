"use client";

import { MessageCircle } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";

export function ContactHero() {
  return (
    <PageHero
      eyebrow="Hubungi Kami"
      eyebrowIcon={MessageCircle}
      title={
        <>
          Mari Diskusikan
          <br />
          <span className="text-gradient">Kebutuhan IT Anda</span>
        </>
      }
      description="Tim profesional kami siap membantu Anda menemukan solusi IT terbaik untuk bisnis. Konsultasi gratis, respons cepat, solusi tepat sasaran."
    />
  );
}