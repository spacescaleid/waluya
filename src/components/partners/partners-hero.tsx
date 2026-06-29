"use client";

import { Handshake } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";

export function PartnersHero() {
  return (
    <PageHero
      eyebrow="Technology Partners"
      eyebrowIcon={Handshake}
      title={
        <>
          Kolaborasi dengan
          <br />
          <span className="text-gradient">Brand Global Terpercaya</span>
        </>
      }
      description="Kami bermitra dengan brand teknologi kelas dunia untuk menghadirkan solusi IT yang reliable, scalable, dan future-proof bagi bisnis Anda."
    />
  );
}