"use client";

import { motion } from "framer-motion";
import { Zap, Shield, RefreshCw, Activity, Layers, Lock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const advantages = [
  {
    icon: Zap,
    title: "Latensi Rendah",
    description: "Response time minimal berkat infrastruktur fiber optik dan routing optimal.",
  },
  {
    icon: Shield,
    title: "Stabilitas Premium",
    description: "Sirkuit diatur di bawah kapasitas untuk menghindari kepadatan jaringan.",
  },
  {
    icon: RefreshCw,
    title: "Sistem Redundant",
    description: "Backup link otomatis untuk menjamin uptime hingga 99% sepanjang waktu.",
  },
  {
    icon: Activity,
    title: "Monitoring 24/7",
    description: "Network Monitoring System aktif memantau kualitas jaringan real-time.",
  },
  {
    icon: Layers,
    title: "Symmetrical Bandwidth",
    description: "Kecepatan upstream dan downstream simetris tanpa pembedaan rasio.",
  },
  {
    icon: Lock,
    title: "Aman & Terenkripsi",
    description: "Data dilindungi dengan enkripsi end-to-end pada seluruh jalur komunikasi.",
  },
];

export function NetworkAdvantages() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Keunggulan Jaringan"
          title="Mengapa Memilih Jaringan Waluya"
          description="Enam keunggulan utama yang menjadikan jaringan WALUYA pilihan terbaik untuk bisnis Anda."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                {/* Number */}
                <div className="pointer-events-none absolute -right-2 -top-2 text-6xl font-extrabold text-brand-primary/5 transition-colors group-hover:text-brand-primary/10">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                    <Icon className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <h3 className="mb-2 text-base font-bold text-content-primary">
                    {adv.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-content-secondary">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}