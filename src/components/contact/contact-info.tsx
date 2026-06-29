"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SITE_CONFIG } from "@/lib/constants";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Respon dalam 1x24 jam",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    cta: "Kirim Email",
  },
  {
    icon: Phone,
    title: "Telepon",
    description: "Senin - Jumat, 09:00 - 17:00",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phoneRaw}`,
    cta: "Hubungi Sekarang",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat langsung dengan tim kami",
    value: SITE_CONFIG.phone,
    href: `https://wa.me/${SITE_CONFIG.whatsapp}`,
    cta: "Chat WhatsApp",
    featured: true,
  },
  {
    icon: MapPin,
    title: "Kantor Pusat",
    description: "Kunjungi kantor kami",
    value: SITE_CONFIG.address,
    href: "#map",
    cta: "Lihat Lokasi",
  },
];

export function ContactInfo() {
  return (
    <SectionWrapper className="bg-background-secondary">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className={
                  "group relative flex flex-col rounded-2xl border bg-background-surface p-6 transition-all duration-300 hover:border-brand-primary/50 hover:shadow-card-hover " +
                  (method.featured
                    ? "border-brand-primary/40 shadow-glow"
                    : "border-border-subtle")
                }
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                  <Icon className="h-6 w-6 text-brand-secondary" />
                </div>

                <h3 className="mb-1.5 text-base font-bold text-content-primary">
                  {method.title}
                </h3>
                <p className="mb-3 text-xs text-content-tertiary">
                  {method.description}
                </p>
                <p className="mb-5 text-sm font-medium text-content-secondary break-all">
                  {method.value}
                </p>

                <span className="mt-auto inline-flex items-center text-sm font-semibold text-brand-tertiary transition-colors group-hover:text-brand-secondary">
                  {method.cta} →
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex items-center justify-center gap-3 rounded-xl border border-border-subtle bg-background-surface p-4"
        >
          <Clock className="h-4 w-4 text-brand-secondary" />
          <p className="text-sm text-content-secondary">
            <span className="font-semibold text-content-primary">Jam Operasional:</span>{" "}
            Senin - Jumat, 09:00 - 17:00 WIB
          </p>
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}