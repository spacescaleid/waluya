"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import type { ServiceItem } from "@/data/services";

interface Props {
  service: ServiceItem;
}

export function ServiceDetailOverview({ service }: Props) {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-border-subtle bg-background-surface p-8 md:p-12"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
              Overview
            </span>
          </div>

          <h2 className="mb-6 text-2xl font-bold text-content-primary md:text-3xl">
            Tentang Layanan {service.name}
          </h2>

          <p className="text-base leading-relaxed text-content-secondary md:text-lg">
            {service.fullDescription}
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}