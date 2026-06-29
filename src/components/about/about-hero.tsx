"use client";

import { Building2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="Tentang Kami"
      eyebrowIcon={Building2}
      title={
        <>
          Mitra IT Profesional
          <br />
          <span className="text-gradient">Sejak 2015</span>
        </>
      }
      description="PT Waluya Istana Nusantara (WIN) adalah perusahaan One Stop IT Solution yang berkomitmen menyediakan layanan teknologi informasi terbaik untuk mengembangkan bisnis Anda."
    />
  );
}