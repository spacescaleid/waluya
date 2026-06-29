"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Navigation } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export function ContactMap() {
  return (
    <SectionWrapper id="map" className="bg-background-secondary">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:items-stretch">
          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border-subtle bg-background-surface p-8"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
              <Building2 className="h-6 w-6 text-brand-secondary" />
            </div>

            <h2 className="mb-2 text-2xl font-bold text-content-primary">
              Kantor Pusat
            </h2>
            <p className="mb-6 text-sm text-brand-tertiary font-semibold">
              PT Waluya Istana Nusantara
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-tertiary mb-1">
                    Alamat
                  </p>
                  <p className="text-sm text-content-primary">
                    Cipanas, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-tertiary mb-1">
                    Coverage Area
                  </p>
                  <p className="text-sm text-content-secondary">
                    Jakarta, Cianjur, Sukabumi, Cirebon, Kuningan, Bengkulu
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/cipanas+jawa+barat"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border-default px-4 py-3 text-sm font-semibold text-content-primary transition-all hover:border-brand-primary hover:bg-background-elevated"
            >
              <Navigation className="h-4 w-4" />
              Buka di Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63380.92687989345!2d107.0307543!3d-6.7411944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68bd3df60923cd%3A0x301e8f1fc28b7d0!2sCipanas%2C%20Cianjur%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor PT Waluya Istana Nusantara"
            />
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}