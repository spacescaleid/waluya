"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Server,
  Activity,
  Network,
  Settings,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Crown,
} from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";
import { SectionHeader } from "@/components/shared/section-header";
import { servicesData } from "@/data/services";

const iconMap = { Server, Activity, Network, Settings };

const pricingPlans = [
  {
    id: "reseller",
    name: "Reseller Hosting",
    price: "35.000",
    period: "Bulan",
    isPopular: false,
    features: [
      "1 GB SSD Space",
      "Unlimited Monthly Traffic",
      "Unlimited Domain",
      "LiteSpeed Web Server",
      "Multiple PHP Version",
    ],
  },
  {
    id: "vps-iix",
    name: "VPS IIX",
    price: "100.000",
    period: "Bulan",
    isPopular: true,
    features: [
      "Memory 512 Mb",
      "1x CPU Core",
      "15 Gb SSD Space",
      "Unlimited Data Transfer",
      "Full Root Akses",
    ],
  },
  {
    id: "dedicated",
    name: "Dedicated Server",
    price: "1.600.000",
    period: "Bulan",
    isPopular: false,
    features: [
      "Intel Xeon E3-1230 Series",
      "16 GB ECC Memory",
      "2 x 1 TB HDD",
      "Unlimited Data Transfer",
      "99% Uptime",
    ],
  },
  {
    id: "colocation-server",
    name: "Colocation Server",
    price: "900.000",
    period: "Bulan",
    isPopular: false,
    features: [
      "1U Space",
      "Unlimited Monthly Traffic",
      "Bandwidth Monitoring",
      "rDNS Support",
      "99% Uptime",
    ],
  },
];

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        ref.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <SectionWrapper id="services" className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/5 blur-3xl" />
      </div>

      <Container>
        {/* ====== SECTION 1: SERVICES ====== */}
        <SectionHeader
          eyebrow="Layanan Kami"
          title="Solusi IT Terbaik untuk Bisnis Anda"
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

        {/* ====== DIVIDER ====== */}
        <div className="my-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-default to-transparent" />
          <span className="text-xs font-semibold uppercase tracking-widest text-content-tertiary">
            Paket & Harga
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border-default to-transparent" />
        </div>

        {/* ====== SECTION 2: PRICING ====== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
            <Crown className="h-3 w-3 text-brand-secondary" />
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
              Best Pricing
            </span>
          </div>

          <h3 className="mb-4 text-3xl font-bold tracking-tight text-content-primary md:text-4xl">
            Pilihan{" "}
            <span className="text-gradient">Paket Layanan</span>
          </h3>

          <p className="mx-auto max-w-2xl text-base text-content-secondary">
            Harga kompetitif dengan kualitas terbaik. Pilih paket yang sesuai
            dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="relative">
          {/* Scroll Arrow - Left */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={
              "absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-background-surface shadow-card-hover backdrop-blur-md transition-all lg:flex " +
              (canScrollLeft
                ? "opacity-100 hover:border-brand-primary/40 hover:bg-brand-primary hover:text-white"
                : "cursor-not-allowed opacity-30")
            }
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Scroll Arrow - Right */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={
              "absolute right-0 top-1/2 z-20 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border-subtle bg-background-surface shadow-card-hover backdrop-blur-md transition-all lg:flex " +
              (canScrollRight
                ? "opacity-100 hover:border-brand-primary/40 hover:bg-brand-primary hover:text-white"
                : "cursor-not-allowed opacity-30")
            }
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Pricing Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-6 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ scrollSnapAlign: "start" }}
                className={
                  "group relative flex w-[320px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border transition-all duration-300 sm:w-[340px] " +
                  (plan.isPopular
                    ? "border-brand-primary/50 bg-gradient-to-b from-brand-primary/10 to-background-surface shadow-glow lg:scale-105"
                    : "border-border-subtle bg-background-surface hover:border-brand-primary/40 hover:shadow-card-hover")
                }
              >
                {/* TOP Badge */}
                {plan.isPopular && (
                  <div className="absolute right-0 top-0 z-10 h-24 w-24 overflow-hidden">
                    <div className="absolute right-[-35px] top-[20px] flex w-[140px] rotate-45 items-center justify-center gap-1 bg-gradient-to-r from-brand-primary to-brand-secondary py-1.5 shadow-lg">
                      <Crown className="h-3 w-3 text-white" />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Top
                      </span>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div
                  className={
                    "px-6 py-5 text-center " +
                    (plan.isPopular
                      ? "bg-gradient-to-br from-brand-primary to-brand-dark"
                      : "bg-background-elevated border-b border-border-subtle")
                  }
                >
                  <h4
                    className={
                      "text-xl font-bold " +
                      (plan.isPopular ? "text-white" : "text-content-primary")
                    }
                  >
                    {plan.name}
                  </h4>
                </div>

                {/* Price */}
                <div
                  className={
                    "px-6 py-8 text-center " +
                    (plan.isPopular
                      ? "bg-gradient-to-b from-brand-primary/20 to-transparent"
                      : "")
                  }
                >
                  <div className="flex items-start justify-center gap-1">
                    <span
                      className={
                        "mt-2 text-lg font-semibold " +
                        (plan.isPopular
                          ? "text-brand-tertiary"
                          : "text-brand-secondary")
                      }
                    >
                      Rp
                    </span>
                    <span className="text-4xl font-extrabold text-content-primary">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-1 text-sm italic text-content-tertiary">
                    /{plan.period}
                  </p>
                </div>

                {/* Features */}
                <div className="flex-1 px-6 py-2">
                  <ul className="space-y-3 border-t border-border-subtle pt-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Check
                          className={
                            "mt-0.5 h-4 w-4 flex-shrink-0 " +
                            (plan.isPopular
                              ? "text-brand-tertiary"
                              : "text-brand-secondary")
                          }
                        />
                        <span className="text-content-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="p-6">
                  <Link
                    href="/contact"
                    className={
                      "block w-full rounded-lg px-4 py-3 text-center text-sm font-bold uppercase tracking-wider transition-all " +
                      (plan.isPopular
                        ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-glow hover:shadow-card-hover"
                        : "bg-brand-primary text-white hover:bg-brand-dark hover:shadow-glow")
                    }
                  >
                    Sign Up
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
            <p className="text-xs text-content-tertiary">
              ← Geser untuk lihat semua paket →
            </p>
          </div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-12 max-w-2xl rounded-xl border border-dashed border-border-default bg-background-surface/50 p-5 text-center"
        >
          <p className="text-sm text-content-tertiary">
            <span className="font-semibold text-content-secondary">
              💡 Butuh paket custom?
            </span>{" "}
            Hubungi kami untuk konsultasi gratis dan dapatkan{" "}
            <Link
              href="/contact"
              className="font-semibold text-brand-tertiary hover:text-brand-secondary transition-colors"
            >
              quotation khusus
            </Link>{" "}
            sesuai kebutuhan bisnis Anda.
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}