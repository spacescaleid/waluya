"use client";

import { motion } from "framer-motion";
import { Globe2, Server, Network as NetworkIcon } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const backbones = [
  {
    icon: Globe2,
    name: "Singapore Equinix",
    type: "International Backbone",
    description:
      "Backbone internasional kelas dunia yang menghubungkan WALUYA dengan internet global melalui hub Singapura, salah satu data center terbesar di Asia Pasifik.",
    features: ["High Capacity", "Low Latency", "Tier-1 Network", "99.99% SLA"],
    flag: "🇸🇬",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    icon: NetworkIcon,
    name: "Open IXP",
    type: "Internet Exchange Point",
    description:
      "Internet Exchange Point yang memungkinkan pertukaran traffic langsung antar ISP di Indonesia dengan biaya lebih efisien dan latensi minimal.",
    features: ["Direct Peering", "Cost Efficient", "Low Latency", "Multi-ISP"],
    flag: "🇮🇩",
    color: "from-cyan-500 to-cyan-700",
  },
  {
    icon: Server,
    name: "APJII",
    type: "Internet Service Provider Association",
    description:
      "Asosiasi Penyelenggara Jasa Internet Indonesia yang memfasilitasi interkoneksi antar ISP nasional untuk pertukaran traffic domestik yang optimal.",
    features: ["National Network", "IIX Access", "ISP Federation", "Regulated"],
    flag: "🇮🇩",
    color: "from-purple-500 to-purple-700",
  },
];

export function NetworkBackbone() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Backbone Network"
          title="Didukung Backbone Kelas Dunia"
          description="Konektivitas WALUYA didukung tiga backbone strategis yang menjamin akses internet domestik dan internasional dengan kualitas premium."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
        >
          {backbones.map((backbone) => {
            const Icon = backbone.icon;
            return (
              <motion.div
                key={backbone.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-8 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                {/* Background Glow */}
                <div
                  className={
                    "pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br opacity-10 blur-3xl transition-opacity group-hover:opacity-20 " +
                    backbone.color
                  }
                />

                <div className="relative">
                  {/* Flag + Icon */}
                  <div className="mb-5 flex items-center justify-between">
                    <div
                      className={
                        "flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br shadow-md transition-transform group-hover:scale-110 " +
                        backbone.color
                      }
                    >
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="text-3xl">{backbone.flag}</div>
                  </div>

                  {/* Name & Type */}
                  <h3 className="mb-1 text-xl font-bold text-content-primary">
                    {backbone.name}
                  </h3>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-tertiary">
                    {backbone.type}
                  </p>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-content-secondary">
                    {backbone.description}
                  </p>

                  {/* Features */}
                  <div className="border-t border-border-subtle pt-4">
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-content-tertiary">
                      Key Features
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {backbone.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-md border border-border-subtle bg-background-elevated px-2 py-0.5 text-xs text-content-secondary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}