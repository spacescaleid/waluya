"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Calendar, Repeat, ShieldCheck } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { BUSINESS_MODELS } from "@/lib/constants";

const iconMap = { ShoppingCart, Calendar, Repeat, ShieldCheck };

export function BusinessModelSection() {
  return (
    <SectionWrapper id="business-model" className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Model Bisnis"
          title="Fleksibilitas Sesuai Kebutuhan Anda"
          description="Empat model bisnis yang dapat disesuaikan dengan strategi dan anggaran perusahaan Anda."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {BUSINESS_MODELS.map((model) => {
            const Icon = iconMap[model.icon as keyof typeof iconMap] || ShoppingCart;
            return (
              <motion.div
                key={model.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/30 hover:shadow-card-hover"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                    <Icon className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <span className="rounded-full border border-border-subtle px-2.5 py-1 text-xs font-semibold text-content-tertiary">
                    {model.shortName}
                  </span>
                </div>

                <h3 className="mb-3 text-base font-bold text-content-primary">
                  {model.name}
                </h3>
                <p className="text-sm leading-relaxed text-content-secondary">
                  {model.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}