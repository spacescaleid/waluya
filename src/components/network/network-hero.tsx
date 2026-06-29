"use client";

import { Network } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";

export function NetworkHero() {
  return (
    <PageHero
      eyebrow="Jaringan Kami"
      eyebrowIcon={Network}
      title={
        <>
          Infrastruktur Fiber Optik
          <br />
          <span className="text-gradient">untuk Konektivitas Prima</span>
        </>
      }
      description="Jaringan WALUYA menggunakan kabel serat optik sebagai penghubung antar kota dengan stabilitas luar biasa, latensi rendah, dan dukungan backbone internasional kelas dunia."
    />
  );
}