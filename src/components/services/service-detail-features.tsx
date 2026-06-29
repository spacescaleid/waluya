"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import type { ServiceItem } from "@/data/services";

interface Props {
  service: ServiceItem;
}

export function ServiceDetailFeatures({ service }: Props) {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Fitur Utama"
          title="Apa yang Anda Dapatkan"
          description="Fitur lengkap yang tersedia dalam layanan ini untuk mendukung kebutuhan bisnis Anda."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2"
        >
          {service.features.map((feature, index) => (
            <motion.div
              key={feature}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
              className="group flex items-start gap-4 rounded-xl border border-border-subtle bg-background-surface p-5 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                <CheckCircle2 className="h-5 w-5 text-brand-secondary" />
              </div>
              <div className="flex-1 pt-1.5">
                <p className="text-sm font-medium text-content-primary">{feature}</p>
                <p className="mt-1 text-xs text-content-tertiary">
                  Fitur #{(index + 1).toString().padStart(2, "0")}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}