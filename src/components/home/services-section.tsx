"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Activity, Network, Settings, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { servicesData } from "@/data/services";

const iconMap = { Server, Activity, Network, Settings };

export function ServicesSection() {
  return (
    <SectionWrapper id="services">
      <Container>
        <SectionHeader
          eyebrow="Layanan Kami"
          title="Kami Memberikan Solusi Terbaik"
          description="Empat pilar layanan utama yang mencakup kebutuhan infrastruktur IT bisnis Anda."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Server;
            const isFeature = index === 0 || index === 2;
            return (
              <motion.article
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={
                  "group relative flex flex-col overflow-hidden rounded-2xl border bg-background-surface p-6 transition-all duration-300 hover:border-brand-primary/40 hover:shadow-card-hover " +
                  (isFeature ? "border-brand-primary/30" : "border-border-subtle")
                }
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                  <Icon className="h-6 w-6 text-brand-secondary" />
                </div>

                <h3 className="mb-2 text-lg font-bold text-content-primary">
                  {service.name}
                </h3>
                <p className="mb-4 text-xs font-medium text-brand-tertiary">
                  {service.tagline}
                </p>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-content-secondary">
                  {service.description}
                </p>

                <ul className="mb-5 space-y-2">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-content-tertiary"
                    >
                      <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-brand-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={"/services/" + service.slug}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-brand-tertiary transition-colors hover:text-brand-secondary"
                >
                  Pelajari lebih lanjut
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}