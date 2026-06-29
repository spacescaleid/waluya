"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Heart } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const values = [
  {
    icon: Shield,
    title: "Profesionalisme",
    description:
      "Mengutamakan standar kerja profesional dalam setiap proyek dan interaksi dengan klien.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Inovasi Berkelanjutan",
    description:
      "Terus mengembangkan solusi IT terkini yang relevan dengan kebutuhan bisnis modern.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Kolaborasi Tim",
    description:
      "Kerjasama tim yang solid menjadi kunci dalam memberikan pelayanan berkualitas.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Heart,
    title: "Komitmen Pelanggan",
    description:
      "Kepuasan pelanggan adalah prioritas utama dengan memberikan nilai tambah yang nyata.",
    color: "from-pink-500 to-pink-600",
  },
];

export function AboutValues() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Nilai-Nilai Kami"
          title="Yang Kami Pegang Teguh"
          description="Empat nilai inti yang menjadi pondasi setiap keputusan dan tindakan kami dalam melayani klien."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all duration-300 hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                {/* Number Background */}
                <div className="pointer-events-none absolute -right-2 -top-2 text-7xl font-extrabold text-brand-primary/5 transition-colors group-hover:text-brand-primary/10">
                  0{index + 1}
                </div>

                {/* Icon */}
                <div
                  className={
                    "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-md transition-transform group-hover:scale-110 " +
                    value.color
                  }
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold text-content-primary">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-content-secondary">
                  {value.description}
                </p>

                {/* Hover Indicator */}
                <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}