"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Headphones, RefreshCw } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";

const signals = [
  {
    icon: ShieldCheck,
    title: "Keamanan Enterprise",
    description: "Sistem keamanan berlapis dengan DDoS protection, firewall, dan monitoring 24 jam.",
  },
  {
    icon: Zap,
    title: "Performa Tinggi",
    description: "Server NVMe SSD dengan arsitektur jaringan berkapasitas tinggi dan latensi rendah.",
  },
  {
    icon: Headphones,
    title: "Dukungan Profesional",
    description: "Tim teknis berpengalaman siap membantu melalui berbagai kanal setiap saat.",
  },
  {
    icon: RefreshCw,
    title: "Backup Otomatis",
    description: "Backup harian otomatis dengan sistem pemulihan cepat untuk data Anda.",
  },
];

export function TrustSection() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Mengapa Kami"
          title="Infrastruktur yang Tidak Perlu Dikhawatirkan"
          description="Fokus pada bisnis Anda. Kami yang memastikan infrastruktur digital Anda berjalan tanpa gangguan."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {signals.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/30 hover:shadow-card-hover"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                  <Icon className="h-6 w-6 text-brand-secondary" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-content-primary">{s.title}</h3>
                <p className="text-sm leading-relaxed text-content-secondary">{s.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
