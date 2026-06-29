"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Activity, Network, Settings, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { servicesData } from "@/data/services";

const iconMap = { Server, Activity, Network, Settings };

interface Props {
  currentSlug: string;
}

export function ServiceDetailRelated({ currentSlug }: Props) {
  const relatedServices = servicesData.filter((s) => s.slug !== currentSlug);

  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Layanan Lainnya"
          title="Eksplorasi Layanan Kami"
          description="Lihat layanan IT lainnya yang dapat melengkapi kebutuhan bisnis Anda."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {relatedServices.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Server;
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <Link
                  href={"/services/" + service.slug}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                    <Icon className="h-5 w-5 text-brand-secondary" />
                  </div>

                  <h3 className="mb-2 text-base font-bold text-content-primary">
                    {service.name}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-relaxed text-content-secondary">
                    {service.description}
                  </p>

                  <div className="inline-flex items-center gap-1 text-sm font-semibold text-brand-tertiary transition-colors group-hover:text-brand-secondary">
                    Pelajari lebih lanjut
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}