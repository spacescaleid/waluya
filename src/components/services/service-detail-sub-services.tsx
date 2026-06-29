"use client";

import { motion } from "framer-motion";
import { Box, Database, Server, Layers } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import type { ServiceItem } from "@/data/services";

const subIconMap = [Server, Database, Box, Layers];

interface Props {
  service: ServiceItem;
}

export function ServiceDetailSubServices({ service }: Props) {
  if (!service.subServices || service.subServices.length === 0) return null;

  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Sub-Layanan"
          title="Pilihan Layanan Spesifik"
          description="Berbagai opsi layanan dalam kategori ini yang dapat disesuaikan dengan kebutuhan Anda."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {service.subServices.map((sub, index) => {
            const Icon = subIconMap[index % subIconMap.length];
            return (
              <motion.div
                key={sub.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                {/* Number Badge */}
                <div className="pointer-events-none absolute -right-2 -top-2 text-7xl font-extrabold text-brand-primary/5 transition-colors group-hover:text-brand-primary/10">
                  0{index + 1}
                </div>

                <div className="relative">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-md transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-content-primary">
                    {sub.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-content-secondary">
                    {sub.description}
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