"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Network, TrendingUp, Globe } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const milestones = [
  {
    year: "2015",
    icon: Sparkles,
    title: "Pendirian Perusahaan",
    description:
      "PT Waluya Istana Nusantara resmi didirikan dengan akta No. 9 di Cipanas, Jawa Barat. Fokus awal pada pengembangan infrastruktur IT.",
  },
  {
    year: "2016",
    icon: Rocket,
    title: "Posisi IT Services",
    description:
      "Memposisikan diri sebagai IT Services dengan solusi terintegrasi mencakup hampir semua sektor teknologi informasi.",
  },
  {
    year: "2018",
    icon: Network,
    title: "Ekspansi Jaringan",
    description:
      "Memperluas coverage area ke berbagai kota strategis seperti Jakarta, Cianjur, Sukabumi, dan Cirebon dengan infrastruktur fiber optik.",
  },
  {
    year: "2020",
    icon: TrendingUp,
    title: "Diversifikasi Layanan",
    description:
      "Menambahkan layanan Managed Service, Network Monitoring System, dan System Integrator untuk melayani enterprise.",
  },
  {
    year: "2023",
    icon: Globe,
    title: "Backbone Internasional",
    description:
      "Integrasi dengan Singapore Equinix, Open IXP, dan APJII untuk memastikan kualitas konektivitas internasional yang prima.",
  },
];

export function AboutTimeline() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Perjalanan Kami"
          title="Milestone Penting"
          description="Tonggak perjalanan PT Waluya Istana Nusantara dalam membangun kepercayaan dan pengalaman."
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-primary via-brand-secondary to-transparent md:left-1/2 md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={
                    "relative flex items-start gap-6 md:items-center md:gap-0 " +
                    (isLeft ? "md:flex-row" : "md:flex-row-reverse")
                  }
                >
                  {/* Icon Dot */}
                  <div className="absolute left-8 z-10 flex h-16 w-16 -translate-x-1/2 items-center justify-center rounded-full border-4 border-background-primary bg-gradient-to-br from-brand-primary to-brand-dark shadow-glow md:left-1/2">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Content Card */}
                  <div
                    className={
                      "ml-24 md:ml-0 md:w-1/2 " +
                      (isLeft ? "md:pl-12" : "md:pr-12")
                    }
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
                    >
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-tertiary">
                          {milestone.year}
                        </span>
                      </div>

                      <h3 className="mb-2 text-lg font-bold text-content-primary">
                        {milestone.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-content-secondary">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}