"use client";

import { motion } from "framer-motion";
import { Eye, Target, CheckCircle } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";

const missionPoints = [
  "Mengutamakan profesionalisme dan kerjasama tim dalam menghasilkan pelayanan yang berkualitas.",
  "Memberikan layanan informasi 24 jam sehari nonstop, 7 hari seminggu tanpa biaya tinggi dengan aksesibilitas hingga 99%.",
  "Memberikan pelayanan secara cepat, mudah dan efisien oleh semua kalangan.",
  "Meningkatkan manfaat dan nilai tambah bagi pelanggan dan pemangku kepentingan.",
];

export function VisionMissionSection() {
  return (
    <SectionWrapper id="visi-misi">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-border-subtle bg-gradient-to-br from-brand-primary/5 to-background-surface p-8 lg:p-10"
          >
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                  <Eye className="h-6 w-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">
                    Our Vision
                  </p>
                  <h2 className="text-xl font-bold text-content-primary">
                    Visi Kami
                  </h2>
                </div>
              </div>
              <p className="text-base leading-relaxed text-content-secondary">
                Menjadi perusahaan IT terkemuka yang peduli dan terdepan dalam menghasilkan
                produk dan layanan IT sebagai solusi{" "}
                <strong className="text-content-primary">terkini, terintegrasi, sinergis,
                profesional, dan berkelanjutan</strong> untuk memuaskan pelanggan dan
                pemangku kepentingan.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-8 lg:p-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                <Target className="h-6 w-6 text-brand-secondary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-secondary">
                  Our Mission
                </p>
                <h2 className="text-xl font-bold text-content-primary">
                  Misi Kami
                </h2>
              </div>
            </div>

            <ul className="space-y-3">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                  <span className="text-sm leading-relaxed text-content-secondary">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}