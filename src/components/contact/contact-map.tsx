"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Navigation, ExternalLink } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SITE_CONFIG } from "@/lib/constants";

export function ContactMap() {
  // Build embed URL dari koordinat
  const { lat, lng } = SITE_CONFIG.coordinates;
  const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0781115521486!2d106.83012747399032!3d-6.253438993735011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3cc4231a211%3A0xefc8bf84d953496b!2sIDC%203D!5e0!3m2!1sen!2sid!4v1782886980171!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin`;

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
            className="flex flex-col rounded-2xl border border-border-subtle bg-background-surface p-8"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
              <Building2 className="h-6 w-6 text-brand-secondary" />
            </div>

            <h2 className="mb-2 text-2xl font-bold text-content-primary">
              Kantor Pusat
            </h2>
            <p className="mb-6 text-sm font-semibold text-brand-tertiary">
              {SITE_CONFIG.fullName}
            </p>

            <div className="space-y-5 flex-1">
              {/* Alamat */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-tertiary mb-1">
                    Alamat
                  </p>
                  <p className="text-sm text-content-primary">
                    {SITE_CONFIG.addressFull}
                  </p>
                </div>
              </div>

              {/* Coverage Area */}
              <div className="flex items-start gap-3">
                <Navigation className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-tertiary mb-1">
                    Coverage Area
                  </p>
                  <p className="text-sm text-content-secondary leading-relaxed">
                    Jakarta, Cianjur, Sukabumi, Cirebon, Kuningan, Bengkulu
                  </p>
                </div>
              </div>

              {/* Koordinat */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center text-brand-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-content-tertiary mb-1">
                    Koordinat GPS
                  </p>
                  <p className="text-sm text-content-secondary font-mono">
                    {SITE_CONFIG.coordinates.lat}, {SITE_CONFIG.coordinates.lng}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-primary px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-glow"
              >
                <Navigation className="h-4 w-4" />
                Buka di Google Maps
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${SITE_CONFIG.coordinates.lat},${SITE_CONFIG.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border-default px-4 py-3 text-sm font-semibold text-content-primary transition-all hover:border-brand-primary hover:bg-background-elevated"
              >
                <MapPin className="h-4 w-4" />
                Dapatkan Petunjuk Arah
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-border-subtle bg-background-surface min-h-[450px]"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor PT Waluya Istana Nusantara"
              className="absolute inset-0"
            />
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}