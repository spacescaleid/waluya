"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";

const services = [
  "Colocation",
  "Network Monitoring System",
  "System Integrator",
  "Managed Service",
  "Konsultasi Umum",
  "Lainnya",
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulasi pengiriman (dummy)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form setelah 5 detik
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <SectionWrapper id="form">
      <Container>
        <SectionHeader
          eyebrow="Kirim Pesan"
          title="Konsultasi Gratis untuk Bisnis Anda"
          description="Ceritakan kebutuhan IT perusahaan Anda. Tim kami akan menghubungi Anda dalam 1x24 jam."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-2xl border border-border-subtle bg-background-surface p-6 md:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-semantic-success/10">
                  <CheckCircle2 className="h-8 w-8 text-semantic-success" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-content-primary">
                  Pesan Terkirim!
                </h3>
                <p className="max-w-md text-content-secondary">
                  Terima kasih telah menghubungi kami. Tim PT Waluya Istana
                  Nusantara akan merespons pesan Anda dalam 1x24 jam.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-content-primary"
                    >
                      Nama Lengkap <span className="text-semantic-error">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Nama Anda"
                      className="w-full rounded-lg border border-border-subtle bg-background-elevated px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-semibold text-content-primary"
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="PT Contoh Indonesia"
                      className="w-full rounded-lg border border-border-subtle bg-background-elevated px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-content-primary"
                    >
                      Email <span className="text-semantic-error">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="email@perusahaan.com"
                      className="w-full rounded-lg border border-border-subtle bg-background-elevated px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-content-primary"
                    >
                      Nomor Telepon <span className="text-semantic-error">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+62 812-3456-7890"
                      className="w-full rounded-lg border border-border-subtle bg-background-elevated px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-semibold text-content-primary"
                  >
                    Layanan yang Diminati <span className="text-semantic-error">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full rounded-lg border border-border-subtle bg-background-elevated px-4 py-3 text-sm text-content-primary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  >
                    <option value="" disabled>
                      Pilih layanan...
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-content-primary"
                  >
                    Pesan <span className="text-semantic-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Ceritakan kebutuhan IT perusahaan Anda..."
                    className="w-full rounded-lg border border-border-subtle bg-background-elevated px-4 py-3 text-sm text-content-primary placeholder:text-content-tertiary focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  />
                </div>

                <div className="flex flex-col items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3.5 text-base font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed sm:w-auto sm:min-w-[240px]"
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-content-tertiary text-center">
                    Dengan mengirim pesan, Anda menyetujui kebijakan privasi kami.
                  </p>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}