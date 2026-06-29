"use client";

import { Layers } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";

export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Layanan Kami"
      eyebrowIcon={Layers}
      title={
        <>
          Solusi IT Terpadu
          <br />
          <span className="text-gradient">untuk Setiap Kebutuhan</span>
        </>
      }
      description="Empat pilar layanan utama yang mencakup seluruh aspek infrastruktur IT bisnis Anda — dari colocation hingga managed service profesional."
    />
  );
}