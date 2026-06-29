"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, Landmark, Briefcase } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const industries = [
  {
    icon: Building2,
    name: "Enterprise",
    description: "Perusahaan besar dengan kebutuhan infrastruktur kompleks dan skala besar.",
    examples: ["Korporasi", "Holding Company", "Perbankan", "Manufaktur"],
  },
  {
    icon: Briefcase,
    name: "UMKM",
    description: "Usaha kecil dan menengah yang membutuhkan solusi IT yang scalable dan efisien.",
    examples: ["Startup", "Retail", "E-commerce", "Jasa Profesional"],
  },
  {
    icon: Landmark,
    name: "Government",
    description: "Instansi pemerintah dengan kebutuhan keamanan dan compliance tinggi.",
    examples: ["Kementerian", "Dinas Daerah", "BUMN", "Lembaga Negara"],
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "Lembaga pendidikan yang membutuhkan infrastruktur IT untuk pembelajaran modern.",
    examples: ["Universitas", "Sekolah", "Akademi", "Pusat Pelatihan"],
  },
];

export function ServicesIndustries() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Industri yang Kami Layani"
          title="Untuk Berbagai Skala Bisnis"
          description="Layanan IT yang fleksibel dan dapat disesuaikan dengan kebutuhan berbagai sektor industri."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                {/* Icon */}
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-md transition-transform group-hover:scale-110">
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Name */}
                <h3 className="mb-2 text-lg font-bold text-content-primary">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-content-secondary">
                  {industry.description}
                </p>

                {/* Examples */}
                <div className="border-t border-border-subtle pt-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-content-tertiary">
                    Contoh Klien
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {industry.examples.map((example) => (
                      <span
                        key={example}
                        className="rounded-md border border-border-subtle bg-background-elevated px-2 py-0.5 text-xs text-content-secondary"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}