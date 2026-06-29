"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const capabilities = [
  "Router",
  "Switch",
  "Router Cellular",
  "Access Point",
  "SDWAN",
  "Security Appliance",
];

const matrix = [
  { brand: "Cisco", slug: "cisco", values: [true, true, false, true, true, false] },
  { brand: "Citrix", slug: "citrix", values: [true, false, true, true, true, true] },
  { brand: "Mikrotik", slug: "mikrotik", values: [true, true, false, true, false, false] },
  { brand: "Maipu", slug: "maipu", values: [true, true, true, false, true, false] },
  { brand: "Fortinet", slug: "fortinet", values: [true, false, false, false, true, true] },
  { brand: "Ubiquiti", slug: "ubiquiti", values: [false, true, false, true, true, false] },
];

export function PartnersMatrix() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Capabilities Matrix"
          title="Spesialisasi Setiap Partner"
          description="Matriks lengkap yang menunjukkan kapabilitas produk dari setiap brand teknologi partner kami."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border-subtle bg-background-surface"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header */}
              <thead>
                <tr className="border-b border-border-subtle bg-background-elevated">
                  <th className="p-4 text-left text-xs font-semibold uppercase tracking-wider text-content-tertiary md:p-5">
                    Brand
                  </th>
                  {capabilities.map((cap) => (
                    <th
                      key={cap}
                      className="p-3 text-center text-xs font-semibold uppercase tracking-wider text-content-tertiary md:p-5"
                    >
                      <div className="whitespace-nowrap">{cap}</div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {matrix.map((row, rowIndex) => (
                  <motion.tr
                    key={row.brand}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: rowIndex * 0.05 }}
                    className="border-b border-border-subtle transition-colors hover:bg-background-elevated/50 last:border-b-0"
                  >
                    {/* Brand Logo + Name */}
                    <td className="p-4 md:p-5">
                      <div className="flex items-center gap-3">
                        {/* Logo Container */}
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-white p-1.5 md:h-12 md:w-12 md:p-2">
                          <img
                            src={"/images/partners/" + row.slug + ".svg"}
                            alt={row.brand + " logo"}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <span className="font-semibold text-content-primary">
                          {row.brand}
                        </span>
                      </div>
                    </td>

                    {/* Capabilities */}
                    {row.values.map((value, i) => (
                      <td key={i} className="p-3 text-center md:p-5">
                        {value ? (
                          <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg bg-semantic-success/15">
                            <Check className="h-4 w-4 text-semantic-success" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="mx-auto flex h-7 w-7 items-center justify-center rounded-lg bg-background-elevated">
                            <Minus className="h-4 w-4 text-content-tertiary" />
                          </div>
                        )}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Legend */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-semantic-success/15">
              <Check className="h-3 w-3 text-semantic-success" strokeWidth={3} />
            </div>
            <span className="text-content-secondary">Tersedia</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-background-elevated">
              <Minus className="h-3 w-3 text-content-tertiary" />
            </div>
            <span className="text-content-secondary">Tidak Tersedia</span>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}