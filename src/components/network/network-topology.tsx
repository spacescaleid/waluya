"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

// Diagram nodes
const CENTER = { x: 250, y: 250 };

const topologyNodes = [
  { id: "internet", label: "Internet Global", x: 250, y: 40, level: "top", icon: "🌐" },
  { id: "singapore", label: "Singapore Equinix", x: 250, y: 110, level: "backbone", icon: "🇸🇬" },
  { id: "openixp", label: "Open IXP", x: 100, y: 180, level: "ixp" },
  { id: "jakarta", label: "Jakarta Hub", x: 250, y: 180, level: "hub", icon: "🏙️" },
  { id: "apjii", label: "APJII", x: 400, y: 180, level: "ixp" },
  { id: "router", label: "Router Distribusi", x: 250, y: 260, level: "router" },
  { id: "cianjur", label: "Kab. Cianjur", x: 80, y: 360, level: "city" },
  { id: "sukabumi-kab", label: "Kab. Sukabumi", x: 420, y: 360, level: "city" },
  { id: "bengkulu", label: "Kota Bengkulu", x: 100, y: 440, level: "city" },
  { id: "cirebon-kota", label: "Kota Cirebon", x: 200, y: 460, level: "city" },
  { id: "cirebon-kab", label: "Kab. Cirebon", x: 300, y: 460, level: "city" },
  { id: "sukabumi-kota", label: "Kota Sukabumi", x: 400, y: 440, level: "city" },
];

const connections = [
  { from: "internet", to: "singapore" },
  { from: "singapore", to: "jakarta" },
  { from: "openixp", to: "jakarta" },
  { from: "jakarta", to: "apjii" },
  { from: "jakarta", to: "router" },
  { from: "router", to: "cianjur" },
  { from: "router", to: "sukabumi-kab" },
  { from: "router", to: "bengkulu" },
  { from: "router", to: "cirebon-kota" },
  { from: "router", to: "cirebon-kab" },
  { from: "router", to: "sukabumi-kota" },
];

function getNode(id: string) {
  return topologyNodes.find((n) => n.id === id);
}

function getNodeStyle(level: string) {
  switch (level) {
    case "top":
      return {
        bg: "url(#gradGreen)",
        stroke: "#10B981",
        textColor: "#10B981",
        size: 28,
      };
    case "backbone":
      return {
        bg: "url(#gradPurple)",
        stroke: "#A78BFA",
        textColor: "#A78BFA",
        size: 26,
      };
    case "ixp":
      return {
        bg: "url(#gradCyan)",
        stroke: "#22D3EE",
        textColor: "#22D3EE",
        size: 22,
      };
    case "hub":
      return {
        bg: "url(#gradBlue)",
        stroke: "#60A5FA",
        textColor: "#60A5FA",
        size: 28,
      };
    case "router":
      return {
        bg: "url(#gradBlue)",
        stroke: "#3B82F6",
        textColor: "#3B82F6",
        size: 22,
      };
    case "city":
    default:
      return {
        bg: "#1A2235",
        stroke: "#3B82F6",
        textColor: "#94A3B8",
        size: 18,
      };
  }
}

export function NetworkTopology() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Network Topology"
          title="Arsitektur Jaringan Waluya"
          description="Diagram topologi yang menunjukkan alur konektivitas dari backbone internasional hingga end-point di setiap kota."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 md:p-8">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Center Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl" />

            {/* SVG Topology */}
            <svg
              viewBox="0 0 500 500"
              className="relative h-auto w-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Gradients */}
                <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E3A8A" />
                </linearGradient>
                <linearGradient id="gradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="gradCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22D3EE" />
                  <stop offset="100%" stopColor="#0891B2" />
                </linearGradient>
                <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#047857" />
                </linearGradient>

                {/* Line Gradient */}
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.3" />
                </linearGradient>

                {/* Glow Filter */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Connections */}
              {connections.map((conn, i) => {
                const from = getNode(conn.from);
                const to = getNode(conn.to);
                if (!from || !to) return null;

                return (
                  <motion.line
                    key={`${conn.from}-${conn.to}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.05 }}
                  />
                );
              })}

              {/* Data Packets */}
              {connections.map((conn, i) => {
                const from = getNode(conn.from);
                const to = getNode(conn.to);
                if (!from || !to) return null;

                return (
                  <motion.circle
                    key={`packet-${conn.from}-${conn.to}`}
                    r="2"
                    fill="#60A5FA"
                    filter="url(#glow)"
                    initial={{ cx: from.x, cy: from.y, opacity: 0 }}
                    animate={{
                      cx: [from.x, to.x],
                      cy: [from.y, to.y],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5 + i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}

              {/* Nodes */}
              {topologyNodes.map((node, i) => {
                const style = getNodeStyle(node.level);
                return (
                  <motion.g
                    key={node.id}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.08,
                      type: "spring",
                      stiffness: 200,
                    }}
                    style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                  >
                    {/* Pulse for important nodes */}
                    {(node.level === "hub" || node.level === "top") && (
                      <motion.circle
                        cx={node.x}
                        cy={node.y}
                        r={style.size}
                        fill="none"
                        stroke={style.stroke}
                        strokeWidth="1"
                        animate={{
                          r: [style.size, style.size + 10, style.size],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}

                    {/* Node Circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={style.size / 2}
                      fill={style.bg}
                      stroke={style.stroke}
                      strokeWidth="1.5"
                      filter="url(#glow)"
                    />

                    {/* Inner Dot */}
                    <circle cx={node.x} cy={node.y} r="2" fill="white" />

                    {/* Label */}
                    <text
                      x={node.x}
                      y={node.y + style.size / 2 + 14}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="600"
                      fill={style.textColor}
                    >
                      {node.label}
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs"
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-500" />
              <span className="text-content-secondary">Internet Global</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-purple-500" />
              <span className="text-content-secondary">Backbone</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-cyan-500" />
              <span className="text-content-secondary">IXP</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-brand-secondary" />
              <span className="text-content-secondary">Hub & Router</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full border border-brand-secondary bg-background-elevated" />
              <span className="text-content-secondary">City Endpoint</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}