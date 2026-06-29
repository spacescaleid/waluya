"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const faqs = [
  {
    question: "Berapa lama respons dari tim Waluya setelah mengirim pesan?",
    answer:
      "Tim kami akan merespons pesan Anda dalam waktu maksimal 1x24 jam pada hari kerja (Senin - Jumat). Untuk pertanyaan urgent, kami sarankan menghubungi via WhatsApp atau telepon langsung.",
  },
  {
    question: "Apakah konsultasi awal dikenakan biaya?",
    answer:
      "Tidak. Konsultasi awal untuk memahami kebutuhan IT Anda sepenuhnya gratis tanpa komitmen. Kami akan membantu menganalisis kebutuhan dan memberikan rekomendasi solusi terbaik.",
  },
  {
    question: "Apakah Waluya melayani area di luar Jawa Barat?",
    answer:
      "Ya. Waluya melayani berbagai kota seperti Jakarta, Cianjur, Sukabumi, Cirebon, Kuningan, Bengkulu, dan area lainnya. Untuk lokasi di luar coverage utama, silakan hubungi kami untuk diskusi lebih lanjut.",
  },
  {
    question: "Bagaimana proses kerja sama dengan Waluya?",
    answer:
      "Proses dimulai dari konsultasi gratis untuk memahami kebutuhan Anda, dilanjutkan dengan proposal solusi, negosiasi, kontrak kerja sama, implementasi, dan support berkelanjutan sesuai paket layanan yang dipilih.",
  },
  {
    question: "Apakah ada minimum kontrak untuk Managed Service?",
    answer:
      "Untuk Managed Service, kami menawarkan fleksibilitas mulai dari kontrak bulanan hingga tahunan dengan benefit yang berbeda. Detail akan dijelaskan saat konsultasi sesuai kebutuhan spesifik bisnis Anda.",
  },
  {
    question: "Apakah Waluya menyediakan layanan emergency support?",
    answer:
      "Ya. Untuk klien dengan paket Managed Service, kami menyediakan emergency support 24/7. Untuk klien lainnya, kami menyediakan priority response sesuai SLA yang disepakati.",
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
          description="Jawaban untuk pertanyaan umum tentang layanan dan proses kerja sama dengan kami."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="mx-auto max-w-3xl space-y-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
                className={
                  "rounded-xl border bg-background-surface transition-all duration-300 " +
                  (isOpen
                    ? "border-brand-primary/40 shadow-card-hover"
                    : "border-border-subtle hover:border-border-default")
                }
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <h3 className="text-base font-semibold text-content-primary">
                    {faq.question}
                  </h3>
                  <div
                    className={
                      "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg transition-colors " +
                      (isOpen ? "bg-brand-primary text-white" : "bg-background-elevated text-content-secondary")
                    }
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <p className="text-sm leading-relaxed text-content-secondary">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}