"use client";

import { motion } from "framer-motion";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const visionPoints = [
  "Menjadi perusahaan IT terkemuka di Indonesia",
  "Peduli dan terdepan dalam inovasi teknologi",
  "Menghasilkan produk dan layanan IT terkini",
  "Solusi terintegrasi dan sinergis",
  "Memuaskan pelanggan dan pemangku kepentingan",
];

const missionPoints = [
  "Mengutamakan profesionalisme dan kerjasama tim dalam menghasilkan pelayanan yang berkualitas",
  "Memberikan layanan informasi 24 jam sehari nonstop, 7 hari seminggu dengan aksesibilitas hingga 99%",
  "Memberikan pelayanan secara cepat, mudah dan efisien oleh semua kalangan",
  "Meningkatkan manfaat dan nilai tambah bagi pelanggan dan pemangku kepentingan",
];

export function AboutVisionMission() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Visi & Misi"
          title="Arah dan Komitmen Kami"
          description="Visi dan misi yang menjadi fondasi setiap langkah dalam memberikan solusi IT terbaik untuk Indonesia."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-8 transition-all hover:border-brand-primary/40 hover:shadow-card-hover md:p-10"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl transition-opacity group-hover:opacity-150" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-glow">
                  <Eye className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                    Our Vision
                  </div>
                  <h3 className="text-2xl font-bold text-content-primary">
                    Visi Kami
                  </h3>
                </div>
              </div>

              <p className="mb-6 text-base italic leading-relaxed text-content-secondary">
                &quot;Menjadi perusahaan IT terkemuka yang peduli dan terdepan
                dalam menghasilkan produk dan layanan IT sebagai solusi terkini,
                terintegrasi, sinergis, profesional dan berkelanjutan untuk
                memuaskan pelanggan dan pemangku kepentingan.&quot;
              </p>

              <ul className="space-y-3">
                {visionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                    <span className="text-sm text-content-secondary">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-8 transition-all hover:border-brand-primary/40 hover:shadow-card-hover md:p-10"
          >
            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-secondary/10 blur-3xl transition-opacity group-hover:opacity-150" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-primary shadow-glow">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                    Our Mission
                  </div>
                  <h3 className="text-2xl font-bold text-content-primary">
                    Misi Kami
                  </h3>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-content-tertiary">
                Misi yang kami jalankan untuk mewujudkan visi perusahaan dan
                memberikan nilai terbaik bagi pelanggan:
              </p>

              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    className="flex items-start gap-3 rounded-lg border border-border-subtle bg-background-elevated p-3"
                  >
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/20 text-xs font-bold text-brand-tertiary">
                      {index + 1}
                    </div>
                    <span className="text-sm leading-relaxed text-content-secondary">
                      {point}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}