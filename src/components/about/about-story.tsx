"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Users } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";

const highlights = [
  { icon: Calendar, label: "Didirikan", value: "21 Maret 2015" },
  { icon: MapPin, label: "Kantor Pusat", value: "Cipanas, Jawa Barat" },
  { icon: Award, label: "Status", value: "Akta No. 9" },
  { icon: Users, label: "Tim", value: "Profesional Bersertifikasi" },
];

export function AboutStory() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-subtle bg-background-surface">
              {/* GANTI src="" dengan path foto kantor */}
              <img
                src="/images/office.jpg"
                alt="Kantor PT Waluya Istana Nusantara"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.classList.add(
                    "flex",
                    "items-center",
                    "justify-center"
                  );
                  const fallback = document.createElement("div");
                  fallback.className = "text-center p-8";
                  fallback.innerHTML =
                    '<div class="text-content-tertiary text-sm">[ Foto Kantor ]</div><div class="text-xs text-content-tertiary mt-2 opacity-60">Letakkan foto di /public/images/office.jpg</div>';
                  e.currentTarget.parentElement!.appendChild(fallback);
                }}
              />
            </div>

            {/* Floating Card - Years of Experience */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 rounded-2xl border border-brand-primary/40 bg-background-surface p-5 shadow-card-hover backdrop-blur-md md:p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-content-primary">
                    {new Date().getFullYear() - 2015}+
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-content-tertiary">
                    Tahun Berpengalaman
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Element */}
            <div className="pointer-events-none absolute -top-4 -left-4 h-24 w-24 rounded-2xl border-2 border-brand-secondary/30" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                Cerita Kami
              </span>
            </div>

            <h2 className="mb-6 text-3xl font-bold tracking-tight text-content-primary md:text-4xl xl:text-5xl">
              Solusi IT untuk{" "}
              <span className="text-gradient">Pertumbuhan Bisnis</span>
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-content-secondary">
              <p>
                Didirikan pada{" "}
                <span className="font-semibold text-content-primary">
                  21 Maret 2015
                </span>{" "}
                dengan akta No. 9 di Cipanas, Jawa Barat,{" "}
                <span className="font-semibold text-content-primary">
                  PT Waluya Istana Nusantara
                </span>{" "}
                telah fokus pada pengembangan infrastruktur dan teknologi di
                berbagai daerah di Indonesia.
              </p>

              <p>
                <span className="font-semibold text-content-primary">
                  Waluya (WIN)
                </span>{" "}
                adalah perusahaan{" "}
                <span className="font-semibold text-brand-tertiary">
                  One Stop IT Solution
                </span>{" "}
                untuk segala permasalahan yang berkaitan dengan Teknologi
                Informasi. Kami membantu Anda mengembangkan bisnis dengan
                memanfaatkan Informasi dan Teknologi yang diterapkan sesuai
                strategi perusahaan.
              </p>

              <p>
                Pada tahun 2015, kami telah memposisikan diri sebagai{" "}
                <span className="font-semibold text-content-primary">
                  IT Services
                </span>{" "}
                yang mencakup hampir semua sektor: komputer, jaringan,
                telekomunikasi, perangkat keras-lunak, VAS, dan layanan
                terkelola (managed service provider).
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 rounded-xl border border-border-subtle bg-background-surface p-3"
                  >
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-primary/10">
                      <Icon className="h-4 w-4 text-brand-secondary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-content-tertiary">
                        {item.label}
                      </div>
                      <div className="truncate text-sm font-semibold text-content-primary">
                        {item.value}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}