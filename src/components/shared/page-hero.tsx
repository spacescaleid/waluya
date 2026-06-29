"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: React.ReactNode;
  description: string;
  align?: "center" | "left";
  size?: "default" | "large";
}

export function PageHero({
  eyebrow,
  eyebrowIcon: Icon,
  title,
  description,
  align = "center",
  size = "default",
}: PageHeroProps) {
  const isCenter = align === "center";
  const isLarge = size === "large";

  return (
    <section className="relative overflow-hidden bg-background-primary pt-32 pb-16 md:pt-40 md:pb-20">
      {/* ============================================
          3D HOLOGRAPHIC GRID BACKGROUND
          ============================================ */}

      {/* Perspective Container */}
      <div className="grid-3d-perspective absolute inset-0">
        <div className="grid-3d-perspective-inner absolute inset-0">
          {/* Layer 1: Glow (paling belakang, blur) */}
          <div className="absolute inset-0 grid-3d-glow grid-pulse-anim" />

          {/* Layer 2: Main 3D Grid */}
          <div className="absolute inset-0 grid-3d" />

          {/* Layer 3: Bright Center Lines */}
          <div className="absolute inset-0 grid-3d-bright" />
        </div>
      </div>

      {/* ============================================
          ATMOSPHERIC EFFECTS
          ============================================ */}

      {/* Center Radial Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-secondary/10 blur-2xl" />
      </div>

      {/* ============================================
          SCANNING LINES (efek hologram)
          ============================================ */}

      {/* Vertical Scan Line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="scan-line-vertical absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-brand-secondary/15 to-transparent" />
      </div>

      {/* Horizontal Scan Line */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="scan-line-horizontal absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-brand-tertiary/10 to-transparent" />
      </div>

      {/* ============================================
          INTERSECTION DOTS (titik di persimpangan grid)
          ============================================ */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-[30%] top-[35%] h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[30%] top-[40%] h-1.5 w-1.5 rounded-full bg-brand-tertiary shadow-[0_0_8px_rgba(96,165,250,0.8)]"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[35%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[35%] bottom-[35%] h-1.5 w-1.5 rounded-full bg-brand-tertiary shadow-[0_0_8px_rgba(96,165,250,0.8)]"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
          transition={{ duration: 2, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ============================================
          CONTENT
          ============================================ */}
      <div className="relative mx-auto max-w-container px-6 md:px-10 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={
            isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
          }
        >
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/20 px-4 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            {Icon && <Icon className="h-3.5 w-3.5 text-brand-secondary" />}
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
              {eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={
              "mb-6 font-extrabold leading-[1.15] tracking-tight text-content-primary drop-shadow-[0_2px_20px_rgba(59,130,246,0.3)] " +
              (isLarge
                ? "text-4xl md:text-5xl xl:text-7xl"
                : "text-4xl md:text-5xl xl:text-6xl")
            }
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={
              "text-base leading-relaxed text-content-secondary md:text-lg " +
              (isCenter ? "mx-auto max-w-2xl" : "max-w-2xl")
            }
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-secondary via-background-secondary/40 to-transparent" />
    </section>
  );
}