"use client";

import { motion } from "framer-motion";
import { Wifi, Zap, Globe, Shield } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const stats = [
  { icon: Wifi, value: "99%", label: "Network Uptime" },
  { icon: Globe, value: "8+", label: "Kota Coverage" },
  { icon: Zap, value: "10G", label: "Backbone Speed" },
  { icon: Shield, value: "24/7", label: "Monitoring" },
];

export function NetworkOverview() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                Network Excellence
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-content-primary md:text-4xl xl:text-5xl">
              Jaringan{" "}
              <span className="text-gradient">Berkualitas Premium</span>
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-content-secondary">
              <p>
                Jaringan{" "}
                <span className="font-semibold text-content-primary">WALUYA</span>{" "}
                menggunakan kabel serat optik sebagai penghubung antar kota,
                memastikan pelanggan dapat mengirim/menerima data dan panggilan
                suara dengan cepat dan aman di seluruh dunia.
              </p>

              <p>
                Menggunakan peralatan canggih kelas dunia dan teknik manajemen
                proaktif, Jaringan WALUYA menawarkan{" "}
                <span className="font-semibold text-brand-tertiary">
                  stabilitas luar biasa dengan latensi rendah
                </span>{" "}
                karena infrastruktur jaringan yang handal di setiap kota.
              </p>

              <p>
                Seluruh sirkuit diatur di bawah kapasitas dan ditambahkan sesuai
                kebutuhan untuk menghindari kepadatan, sehingga performa selalu
                konsisten.
              </p>
            </div>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
                >
                  {/* Hover Glow */}
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="relative">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                      <Icon className="h-5 w-5 text-brand-secondary" />
                    </div>

                    <div className="text-3xl font-extrabold text-content-primary md:text-4xl">
                      {stat.value}
                    </div>

                    <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-content-tertiary">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}