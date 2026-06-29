"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Shield } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const reasons = [
  {
    icon: Award,
    title: "Pengalaman 10+ Tahun",
    description:
      "Berpengalaman sejak 2015 dalam menyediakan solusi IT untuk berbagai industri di Indonesia.",
    stat: "10+",
    statLabel: "Tahun",
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description:
      "Tim teknis siap membantu kapan saja, 24 jam sehari, 7 hari seminggu tanpa libur.",
    stat: "24/7",
    statLabel: "Available",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description:
      "Tim ahli bersertifikasi industri yang berkomitmen memberikan layanan terbaik.",
    stat: "100%",
    statLabel: "Certified",
  },
  {
    icon: Shield,
    title: "SLA Terjamin",
    description:
      "Service Level Agreement hingga 99% uptime dengan sistem redundant yang handal.",
    stat: "99%",
    statLabel: "Uptime",
  },
];

export function ServicesWhyUs() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Mengapa Memilih Kami"
          title="Keunggulan Layanan Waluya"
          description="Empat alasan utama mengapa perusahaan mempercayakan kebutuhan IT mereka kepada PT Waluya Istana Nusantara."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                {/* Hover Glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Icon + Stat */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                    <Icon className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-extrabold leading-none text-content-primary">
                      {reason.stat}
                    </div>
                    <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-content-tertiary">
                      {reason.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-base font-bold text-content-primary">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-content-secondary">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}