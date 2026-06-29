"use client";

import { motion } from "framer-motion";
import { MapPin, Wifi } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const cities = [
  { name: "Jakarta", isHub: true, region: "DKI Jakarta", established: "2015" },
  { name: "Kab. Cianjur", region: "Jawa Barat", established: "2016" },
  { name: "Kota Sukabumi", region: "Jawa Barat", established: "2017" },
  { name: "Kab. Sukabumi", region: "Jawa Barat", established: "2017" },
  { name: "Kota Cirebon", region: "Jawa Barat", established: "2018" },
  { name: "Kab. Cirebon", region: "Jawa Barat", established: "2018" },
  { name: "Kab. Kuningan", region: "Jawa Barat", established: "2019" },
  { name: "Bengkulu", region: "Sumatera", established: "2020" },
];

export function NetworkCoverage() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="Persebaran Jaringan"
          title="Wilayah Coverage Kami"
          description="Jaringan WALUYA meliputi 8 kota strategis di Jawa Barat, DKI Jakarta, dan Sumatera dengan terus berekspansi."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cities.map((city) => (
            <motion.div
              key={city.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={
                "group relative overflow-hidden rounded-2xl border bg-background-surface p-6 transition-all hover:shadow-card-hover " +
                (city.isHub
                  ? "border-brand-primary/50 shadow-glow"
                  : "border-border-subtle hover:border-brand-primary/40")
              }
            >
              {/* Hub Badge */}
              {city.isHub && (
                <div className="absolute right-3 top-3 rounded-full bg-brand-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                  HUB
                </div>
              )}

              {/* Icon */}
              <div
                className={
                  "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors " +
                  (city.isHub
                    ? "bg-gradient-to-br from-brand-primary to-brand-dark shadow-md"
                    : "bg-brand-primary/10 group-hover:bg-brand-primary/20")
                }
              >
                {city.isHub ? (
                  <Wifi className="h-5 w-5 text-white" />
                ) : (
                  <MapPin className="h-5 w-5 text-brand-secondary" />
                )}
              </div>

              {/* City Name */}
              <h3 className="mb-1 text-base font-bold text-content-primary">
                {city.name}
              </h3>

              {/* Region */}
              <p className="mb-3 text-xs text-content-tertiary">{city.region}</p>

              {/* Established */}
              <div className="flex items-center gap-2 border-t border-border-subtle pt-3">
                <div className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
                <span className="text-xs font-medium text-content-secondary">
                  Sejak {city.established}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-10 max-w-2xl rounded-xl border border-dashed border-border-default bg-background-surface/50 p-5 text-center"
        >
          <p className="text-sm text-content-tertiary">
            <span className="font-semibold text-content-secondary">📍 Ekspansi:</span>{" "}
            Kami terus memperluas coverage ke kota-kota lain di Indonesia.
            Hubungi tim sales untuk informasi area baru.
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}