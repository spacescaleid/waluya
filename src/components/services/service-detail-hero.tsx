"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Server, Activity, Network, Settings } from "lucide-react";
import type { ServiceItem } from "@/data/services";

const iconMap = { Server, Activity, Network, Settings };

interface Props {
  service: ServiceItem;
}

export function ServiceDetailHero({ service }: Props) {
  const Icon = iconMap[service.icon as keyof typeof iconMap] || Server;

  return (
    <section className="relative overflow-hidden bg-background-primary pt-32 pb-16 md:pt-40 md:pb-20">
      {/* 3D Grid Background */}
      <div className="grid-3d-perspective absolute inset-0">
        <div className="grid-3d-perspective-inner absolute inset-0">
          <div className="absolute inset-0 grid-3d-glow grid-pulse-anim" />
          <div className="absolute inset-0 grid-3d" />
          <div className="absolute inset-0 grid-3d-bright" />
        </div>
      </div>

      {/* Glow Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-container px-6 md:px-10 lg:px-20">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex items-center gap-2 text-sm"
          aria-label="Breadcrumb"
        >
          <Link
            href="/"
            className="text-content-tertiary transition-colors hover:text-content-primary"
          >
            Beranda
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-content-tertiary" />
          <Link
            href="/services"
            className="text-content-tertiary transition-colors hover:text-content-primary"
          >
            Layanan
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-content-tertiary" />
          <span className="font-medium text-brand-tertiary">{service.name}</span>
        </motion.nav>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/15 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Icon className="h-3.5 w-3.5 text-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                {service.shortName}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-content-primary drop-shadow-[0_2px_20px_rgba(59,130,246,0.3)] md:text-5xl xl:text-6xl">
              {service.name}
            </h1>

            <p className="mb-4 text-lg font-semibold text-brand-tertiary md:text-xl">
              {service.tagline}
            </p>

            <p className="text-base leading-relaxed text-content-secondary md:text-lg">
              {service.description}
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Pulse Rings */}
              <div className="absolute inset-0 -m-12 animate-ping rounded-full bg-brand-primary/20" />
              <div className="absolute inset-0 -m-6 animate-pulse-slow rounded-full bg-brand-secondary/30" />

              {/* Main Icon */}
              <div className="relative flex h-48 w-48 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-glow">
                <Icon className="h-24 w-24 text-white" />
              </div>

              {/* Floating Dots */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 h-4 w-4 rounded-full bg-brand-tertiary shadow-glow"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 h-4 w-4 rounded-full bg-brand-secondary shadow-glow"
              />
              <motion.div
                animate={{ x: [0, 15, 0] }}
                transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-12 h-3 w-3 rounded-full bg-brand-tertiary shadow-glow"
              />
              <motion.div
                animate={{ x: [0, -15, 0] }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-12 h-3 w-3 rounded-full bg-brand-secondary shadow-glow"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary via-background-secondary/40 to-transparent" />
    </section>
  );
}