"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const partners = [
  {
    name: "Cisco",
    description:
      "Pemimpin global dalam networking, security, dan collaboration. Solusi enterprise-grade untuk infrastruktur jaringan.",
    capabilities: ["Router", "Switch", "Access Point", "SDWAN"],
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "Citrix",
    description:
      "Spesialis virtualisasi, networking, dan cloud computing untuk transformasi digital perusahaan modern.",
    capabilities: ["Router", "Router Cellular", "Access Point", "SDWAN", "Security"],
    color: "from-cyan-500 to-cyan-700",
  },
  {
    name: "Mikrotik",
    description:
      "Solusi router dan switch berkualitas dengan harga kompetitif, populer untuk ISP dan enterprise networking.",
    capabilities: ["Router", "Switch", "Access Point"],
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "Maipu",
    description:
      "Vendor jaringan dari Tiongkok yang menyediakan solusi networking enterprise dengan fitur lengkap dan reliable.",
    capabilities: ["Router", "Switch", "Router Cellular", "SDWAN"],
    color: "from-orange-500 to-orange-700",
  },
  {
    name: "Fortinet",
    description:
      "Pemimpin global dalam cybersecurity dengan solusi firewall, SDWAN, dan security appliance terintegrasi.",
    capabilities: ["Router", "SDWAN", "Security Appliance"],
    color: "from-red-500 to-red-700",
  },
  {
    name: "Ubiquiti",
    description:
      "Solusi networking dan wireless berkualitas tinggi untuk enterprise dengan ekosistem terintegrasi UniFi.",
    capabilities: ["Switch", "Access Point", "SDWAN"],
    color: "from-emerald-500 to-emerald-700",
  },
];

export function PartnersGrid() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Our Partners"
          title="6 Brand Teknologi Global"
          description="Partner strategis yang produknya kami integrasikan untuk memberikan solusi terbaik kepada klien."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
            >
              {/* Background Gradient on Hover */}
              <div
                className={
                  "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br opacity-10 blur-3xl transition-opacity group-hover:opacity-20 " +
                  partner.color
                }
              />

              <div className="relative">
                {/* Logo Placeholder */}
                <div className="mb-5 flex h-20 items-center justify-center rounded-xl border border-border-subtle bg-background-elevated p-4">
                  <img
                    src={`/images/partners/${partner.name.toLowerCase()}.png`}
                    alt={`${partner.name} logo`}
                    className="max-h-12 max-w-[120px] object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const parent = e.currentTarget.parentElement!;
                      const fallback = document.createElement("div");
                      fallback.className = "text-2xl font-extrabold text-content-primary";
                      fallback.textContent = partner.name;
                      parent.appendChild(fallback);
                    }}
                  />
                </div>

                {/* Number Badge */}
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-xs font-bold text-brand-tertiary">
                    PARTNER {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border-subtle" />
                </div>

                {/* Name */}
                <h3 className="mb-3 text-xl font-bold text-content-primary">
                  {partner.name}
                </h3>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-content-secondary">
                  {partner.description}
                </p>

                {/* Capabilities */}
                <div className="border-t border-border-subtle pt-4">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-content-tertiary">
                    Capabilities
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {partner.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-md border border-brand-primary/30 bg-brand-primary/10 px-2 py-0.5 text-xs font-medium text-brand-tertiary"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logo Upload Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-10 max-w-2xl rounded-xl border border-dashed border-border-default bg-background-surface/50 p-5 text-center"
        >
          <p className="text-sm text-content-tertiary">
            <span className="font-semibold text-content-secondary">💡 Logo Partners:</span>{" "}
            Letakkan logo di{" "}
            <code className="rounded bg-background-elevated px-1.5 py-0.5 text-xs text-brand-tertiary">
              /public/images/partners/
            </code>{" "}
            (format: cisco.png, citrix.png, mikrotik.png, dst.)
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}