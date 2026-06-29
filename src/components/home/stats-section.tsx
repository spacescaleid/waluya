"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { COMPANY_STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <SectionWrapper size="sm" className="border-y border-border-subtle bg-background-secondary">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-10 lg:grid-cols-4"
        >
          {COMPANY_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="mb-2 text-4xl font-extrabold tracking-tight text-content-primary md:text-5xl">
                {s.value}
                {s.suffix && <span className="text-brand-secondary">{s.suffix}</span>}
              </p>
              <p className="text-sm font-medium text-content-secondary">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}