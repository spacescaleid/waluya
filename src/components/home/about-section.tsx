"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Award, Target } from "lucide-react";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { Container } from "@/components/layout/container";

const highlights = [
  {
    icon: Calendar,
    title: "Berdiri Sejak 2015",
    description: "Didirikan 21 Maret 2015 dengan akta No. 9 di Cipanas, Jawa Barat.",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Dibentuk oleh tim profesional yang ahli di bidangnya masing-masing.",
  },
  {
    icon: Award,
    title: "Solusi Terintegrasi",
    description: "One Stop IT Solution untuk segala permasalahan Teknologi Informasi.",
  },
  {
    icon: Target,
    title: "Fokus Bisnis Anda",
    description: "Membantu mengembangkan bisnis dengan strategi IT yang tepat.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="tentang-kami" className="bg-background-secondary">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-secondary">
              Tentang Kami
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-content-primary md:text-4xl lg:text-5xl">
              Mitra IT Profesional
              <br />
              <span className="text-gradient">untuk Pertumbuhan Bisnis</span>
            </h2>
            <div className="space-y-5 text-base leading-relaxed text-content-secondary">
              <p>
                <strong className="text-content-primary">Waluya Istana Nusantara (WIN)</strong> atau
                lebih dikenal dengan <strong className="text-content-primary">Waluya</strong> adalah
                perusahaan <em>One Stop IT Solution</em> dari segala permasalahan yang berkaitan dengan
                Teknologi Informasi (TI).
              </p>
              <p>
                Kami membantu Anda dalam mengembangkan bisnis dengan memanfaatkan Informasi dan
                Teknologi yang diterapkan sesuai dengan strategi perusahaan. TI merupakan salah satu
                bagian yang tidak terpisahkan dalam bisnis saat ini.
              </p>
              <p>
                Pada tahun 2015 kami telah terintegrasi dan memposisikan sebagai{" "}
                <strong className="text-content-primary">IT Services</strong>. Solusi yang ditawarkan
                mencakup hampir semua sektor: komputer, jaringan, telekomunikasi, perangkat keras,
                perangkat lunak, VAS, dan layanan terkelola.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/30 hover:shadow-card-hover"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary/10">
                    <Icon className="h-5 w-5 text-brand-secondary" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-content-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-content-secondary">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}