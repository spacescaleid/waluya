"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Network,
  Shield,
  Clock,
  Activity,
} from "lucide-react";

const trustBadges = [
  { icon: Network, label: "Network 99% Uptime" },
  { icon: Shield, label: "Sistem Redundant" },
  { icon: Clock, label: "Support 24/7" },
];

// Node positions in SVG coordinate system (200x200)
const CENTER = { x: 100, y: 100 };
const RADIUS = 70;

const cityNodes = [
  { id: "cianjur", label: "Cianjur", angle: -90, delay: 0.1 },
  { id: "sukabumi", label: "Sukabumi", angle: -30, delay: 0.2 },
  { id: "bandung", label: "Bandung", angle: 30, delay: 0.3 },
  { id: "cirebon", label: "Cirebon", angle: 90, delay: 0.4 },
  { id: "kuningan", label: "Kuningan", angle: 150, delay: 0.5 },
  { id: "bengkulu", label: "Bengkulu", angle: 210, delay: 0.6 },
];

function polarToCartesian(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: CENTER.x + Math.cos(rad) * radius,
    y: CENTER.y + Math.sin(rad) * radius,
  };
}

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background-primary">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-secondary/8 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-container px-6 py-32 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* LEFT: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-secondary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                One Stop IT Solution · Sejak 2015
              </span>
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-content-primary md:text-5xl xl:text-6xl"
            >
              Solusi IT Terpadu
              <br />
              untuk <span className="text-gradient">Bisnis Anda</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mb-8 max-w-xl text-base leading-relaxed text-content-secondary md:text-lg"
            >
              <strong className="text-content-primary">
                PT Waluya Istana Nusantara
              </strong>{" "}
              hadir sebagai mitra IT profesional dalam Internet, Colocation,
              System Integrator, Network Monitoring, dan Managed Service di
              seluruh Indonesia.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="#services"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-glow"
              >
                Lihat Layanan Kami
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border-default px-6 py-3.5 text-base font-medium text-content-primary transition-all hover:border-border-strong hover:bg-background-elevated"
              >
                Hubungi Konsultan
              </Link>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              {trustBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm text-content-tertiary"
                >
                  <Icon className="h-4 w-4 text-brand-secondary" />
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Network Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              {/* Pure SVG Network Diagram */}
              <svg
                viewBox="0 0 200 200"
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Line Gradient */}
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
                  </linearGradient>

                  {/* Center Node Gradient */}
                  <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </radialGradient>

                  {/* Glow Filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Decorative Rings */}
                <circle
                  cx={CENTER.x}
                  cy={CENTER.y}
                  r="90"
                  fill="none"
                  stroke="#3B82F6"
                  strokeOpacity="0.08"
                  strokeWidth="0.5"
                />
                <circle
                  cx={CENTER.x}
                  cy={CENTER.y}
                  r="70"
                  fill="none"
                  stroke="#3B82F6"
                  strokeOpacity="0.12"
                  strokeWidth="0.5"
                />
                <circle
                  cx={CENTER.x}
                  cy={CENTER.y}
                  r="40"
                  fill="none"
                  stroke="#3B82F6"
                  strokeOpacity="0.15"
                  strokeWidth="0.5"
                  strokeDasharray="2 2"
                />

                {/* Rotating dots on outer ring */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "100px 100px" }}
                >
                  <circle cx="100" cy="10" r="1.5" fill="#60A5FA" opacity="0.6" />
                  <circle cx="190" cy="100" r="1.5" fill="#60A5FA" opacity="0.4" />
                  <circle cx="100" cy="190" r="1.5" fill="#60A5FA" opacity="0.6" />
                  <circle cx="10" cy="100" r="1.5" fill="#60A5FA" opacity="0.4" />
                </motion.g>

                {/* Connection Lines */}
                {cityNodes.map((node, i) => {
                  const pos = polarToCartesian(node.angle, RADIUS);
                  return (
                    <motion.line
                      key={"line-" + node.id}
                      x1={CENTER.x}
                      y1={CENTER.y}
                      x2={pos.x}
                      y2={pos.y}
                      stroke="url(#lineGrad)"
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.8 + i * 0.1,
                        ease: "easeOut",
                      }}
                    />
                  );
                })}

                {/* Data Packets Animation */}
                {cityNodes.map((node, i) => {
                  const pos = polarToCartesian(node.angle, RADIUS);
                  return (
                    <motion.circle
                      key={"packet-" + node.id}
                      r="1.5"
                      fill="#60A5FA"
                      filter="url(#glow)"
                      initial={{ cx: CENTER.x, cy: CENTER.y, opacity: 0 }}
                      animate={{
                        cx: [CENTER.x, pos.x],
                        cy: [CENTER.y, pos.y],
                        opacity: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 2 + i * 0.4,
                        ease: "easeInOut",
                      }}
                    />
                  );
                })}

                {/* Center Pulse Rings */}
                <motion.circle
                  cx={CENTER.x}
                  cy={CENTER.y}
                  r="12"
                  fill="#3B82F6"
                  opacity="0.3"
                  animate={{
                    r: [12, 22, 12],
                    opacity: [0.3, 0, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Center Node (Jakarta) */}
                <motion.circle
                  cx={CENTER.x}
                  cy={CENTER.y}
                  r="12"
                  fill="url(#centerGrad)"
                  filter="url(#glow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                  style={{ transformOrigin: "100px 100px" }}
                />

                {/* Center Icon (Server) - rendered as foreignObject */}
                <foreignObject x="92" y="92" width="16" height="16">
                  <div className="flex h-full w-full items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="8" x="2" y="2" rx="2" />
                      <rect width="20" height="8" x="2" y="14" rx="2" />
                      <path d="M6 6h.01" />
                      <path d="M6 18h.01" />
                    </svg>
                  </div>
                </foreignObject>

                {/* City Nodes */}
                {cityNodes.map((node) => {
                  const pos = polarToCartesian(node.angle, RADIUS);
                  return (
                    <motion.g
                      key={"node-" + node.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.2 + node.delay,
                        type: "spring",
                        stiffness: 200,
                      }}
                      style={{ transformOrigin: pos.x + "px " + pos.y + "px" }}
                    >
                      {/* Node Outer Circle */}
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="5"
                        fill="#111827"
                        stroke="#3B82F6"
                        strokeWidth="1"
                        strokeOpacity="0.6"
                      />
                      {/* Node Inner Dot */}
                      <circle cx={pos.x} cy={pos.y} r="2" fill="#60A5FA" />
                    </motion.g>
                  );
                })}

                {/* City Labels */}
                {cityNodes.map((node) => {
                  const labelPos = polarToCartesian(node.angle, RADIUS + 12);
                  return (
                    <motion.text
                      key={"label-" + node.id}
                      x={labelPos.x}
                      y={labelPos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="5"
                      fontWeight="600"
                      fill="#94A3B8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + node.delay, duration: 0.5 }}
                    >
                      {node.label}
                    </motion.text>
                  );
                })}

                {/* Center Label */}
                <motion.g
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <rect
                    x="80"
                    y="118"
                    width="40"
                    height="8"
                    rx="2"
                    fill="#1A2235"
                    stroke="#3B82F6"
                    strokeOpacity="0.4"
                    strokeWidth="0.5"
                  />
                  <text
                    x="100"
                    y="122.5"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="4.5"
                    fontWeight="700"
                    fill="#60A5FA"
                  >
                    JAKARTA · HUB
                  </text>
                </motion.g>
              </svg>

              {/* Floating Card - Top Left: Backbone */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="absolute -left-2 top-4 flex items-center gap-2.5 rounded-xl border border-brand-primary/40 bg-gradient-to-br from-brand-primary/15 to-brand-secondary/10 px-3.5 py-2.5 shadow-glow backdrop-blur-md"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-primary">
                  <Network className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-tertiary">
                    Backbone
                  </p>
                  <p className="text-xs font-bold text-content-primary">
                    Singapore Equinix
                  </p>
                </div>
              </motion.div>

              {/* Floating Card - Bottom Right: Status */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
                className="absolute -right-2 bottom-4 flex items-center gap-2.5 rounded-xl border border-border-subtle bg-background-surface/95 px-3.5 py-2.5 shadow-card-hover backdrop-blur-md"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-semantic-success/10">
                  <Activity className="h-4 w-4 text-semantic-success" />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-content-tertiary">
                    Network Status
                  </p>
                  <p className="flex items-center gap-1.5 text-xs font-bold text-content-primary">
                    <span className="h-1.5 w-1.5 animate-pulse-slow rounded-full bg-semantic-success" />
                    All Systems Online
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-primary to-transparent" />
    </section>
  );
}