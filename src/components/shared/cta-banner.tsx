"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";

interface Props {
  title: string;
  description?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({ title, description, primaryLabel, primaryHref, secondaryLabel, secondaryHref }: Props) {
  return (
    <SectionWrapper size="sm">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/10 via-background-elevated to-background-elevated p-10 text-center md:p-14"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
          <div className="relative">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-content-primary md:text-3xl lg:text-4xl">
              {title}
            </h2>
            {description && (
              <p className="mx-auto mb-8 max-w-lg text-base text-content-secondary">
                {description}
              </p>
            )}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={primaryHref}
                className="group inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-glow"
              >
                {primaryLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {secondaryLabel && secondaryHref && (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-border-default px-6 py-3 text-sm font-medium text-content-primary hover:border-border-strong hover:bg-background-elevated"
                >
                  <MessageSquare className="h-4 w-4" />
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
