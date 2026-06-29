"use client";

import { motion } from "framer-motion";
import { Award, Shield, BookOpen, Headphones, Sparkles, Globe } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const benefits = [
  {
    icon: Award,
    title: "Certified Engineers",
    description:
      "Tim engineer kami tersertifikasi langsung dari masing-masing vendor partner untuk menjamin kualitas implementasi.",
  },
  {
    icon: Shield,
    title: "Genuine Products",
    description:
      "Semua produk yang kami sediakan 100% asli dengan garansi resmi dari principal partner.",
  },
  {
    icon: BookOpen,
    title: "Best Practices",
    description:
      "Implementasi mengikuti best practices dan reference architecture dari setiap vendor partner.",
  },
  {
    icon: Headphones,
    title: "Vendor Support",
    description:
      "Akses langsung ke technical support vendor untuk eskalasi case yang kompleks.",
  },
  {
    icon: Sparkles,
    title: "Latest Technology",
    description:
      "Selalu update dengan teknologi terbaru dan fitur-fitur inovatif dari vendor partner.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "Solusi yang diimplementasikan mengikuti standar global yang diadopsi enterprise di seluruh dunia.",
  },
];

export function PartnersBenefits() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <SectionHeader
          eyebrow="Partnership Benefits"
          title="Keuntungan Bermitra dengan Kami"
          description="Manfaat yang Anda dapatkan dengan memilih Waluya sebagai integrator yang bekerja dengan brand teknologi global."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="group rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-dark shadow-md transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="mb-3 text-base font-bold text-content-primary">
                  {benefit.title}
                </h3>

                <p className="text-sm leading-relaxed text-content-secondary">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}