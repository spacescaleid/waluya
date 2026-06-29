"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, Activity, Network, Settings, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { servicesData } from "@/data/services";

const iconMap = { Server, Activity, Network, Settings };

export function ServicesGrid() {
  return (
    <SectionWrapper>
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="space-y-6"
        >
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Server;
            const isReverse = index % 2 === 1;

            return (
              <motion.article
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface transition-all duration-500 hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                <div
                  className={
                    "grid grid-cols-1 lg:grid-cols-2 " +
                    (isReverse ? "lg:grid-flow-dense" : "")
                  }
                >
                  {/* Content Side */}
                  <div className={"p-8 md:p-10 lg:p-12 " + (isReverse ? "lg:col-start-2" : "")}>
                    {/* Service Number */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-tertiary">
                        Layanan 0{index + 1}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-brand-primary/40 to-transparent" />
                    </div>

                    {/* Icon & Title */}
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-glow">
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-content-primary md:text-3xl">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="mb-4 text-base font-semibold text-brand-tertiary">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="mb-6 text-sm leading-relaxed text-content-secondary md:text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-content-secondary"
                        >
                          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={"/services/" + service.slug}
                      className="group/btn inline-flex items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-glow"
                    >
                      Selengkapnya
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                  {/* Visual Side */}
                  <div
                    className={
                      "relative overflow-hidden bg-gradient-to-br from-background-elevated to-background-secondary " +
                      (isReverse ? "lg:col-start-1 lg:row-start-1" : "")
                    }
                  >
                    {/* Grid Pattern Background */}
                    <div className="absolute inset-0 grid-bg opacity-50" />

                    {/* Center Glow */}
                    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/20 blur-3xl" />

                    {/* Big Icon Display */}
                    <div className="relative flex h-full min-h-[300px] items-center justify-center p-12">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                      >
                        {/* Pulse Rings */}
                        <div className="absolute inset-0 -m-8 animate-ping rounded-full bg-brand-primary/20" />
                        <div className="absolute inset-0 -m-4 animate-pulse-slow rounded-full bg-brand-secondary/30" />

                        {/* Main Icon Circle */}
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-glow md:h-40 md:w-40">
                          <Icon className="h-16 w-16 text-white md:h-20 md:w-20" />
                        </div>

                        {/* Floating Dots */}
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -top-4 -right-4 h-3 w-3 rounded-full bg-brand-tertiary shadow-glow"
                        />
                        <motion.div
                          animate={{ y: [0, 10, 0] }}
                          transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -bottom-4 -left-4 h-3 w-3 rounded-full bg-brand-secondary shadow-glow"
                        />
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute top-1/2 -right-8 h-2 w-2 rounded-full bg-brand-tertiary shadow-glow"
                        />
                      </motion.div>
                    </div>

                    {/* Corner Badge */}
                    <div className="absolute top-6 right-6 rounded-full border border-brand-primary/40 bg-background-surface/80 px-3 py-1 backdrop-blur-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-tertiary">
                        {service.shortName}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}