"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileSearch, Settings2, Rocket, HeartHandshake } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    icon: MessageSquare,
    title: "Konsultasi",
    description: "Diskusi awal untuk memahami kebutuhan dan tantangan IT bisnis Anda.",
  },
  {
    icon: FileSearch,
    title: "Analisis & Proposal",
    description: "Analisis mendalam dan penyusunan proposal solusi yang sesuai.",
  },
  {
    icon: Settings2,
    title: "Implementasi",
    description: "Implementasi solusi oleh tim teknis profesional dengan timeline yang jelas.",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Peluncuran layanan dengan testing menyeluruh untuk memastikan kesiapan.",
  },
  {
    icon: HeartHandshake,
    title: "Support",
    description: "Dukungan berkelanjutan 24/7 dan maintenance untuk performa optimal.",
  },
];

export function ServiceDetailProcess() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Proses Kerja"
          title="Cara Kami Bekerja"
          description="Lima langkah sistematis dari konsultasi hingga support berkelanjutan."
        />

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-12 hidden h-0.5 w-full max-w-5xl -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-primary/40 to-transparent lg:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-4 border-background-primary bg-gradient-to-br from-brand-primary to-brand-dark shadow-glow">
                    <Icon className="h-10 w-10 text-white" />
                  </div>

                  {/* Step Index */}
                  <div className="mx-auto mb-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/20 text-xs font-bold text-brand-tertiary">
                    {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-base font-bold text-content-primary">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs leading-relaxed text-content-secondary">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}