"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export function FloatingWhatsApp({
  phoneNumber = "6281234567890",
  message = "Halo, saya tertarik dengan layanan PT Waluya Istana Nusantara. Bisa konsultasi?",
}: FloatingWhatsAppProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Show button after page load
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Auto show tooltip after delay (only once)
  useEffect(() => {
    if (isVisible && !hasInteracted) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
      }, 3000);

      const hideTooltipTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 9000);

      return () => {
        clearTimeout(tooltipTimer);
        clearTimeout(hideTooltipTimer);
      };
    }
  }, [isVisible, hasInteracted]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="fixed bottom-6 right-6 z-50 flex items-end gap-3 md:bottom-8 md:right-8"
        >
          {/* Tooltip / Chat Bubble */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative mb-2 max-w-[260px] rounded-2xl border border-border-subtle bg-background-surface px-4 py-3 shadow-card-hover"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setShowTooltip(false);
                    setHasInteracted(true);
                  }}
                  className="absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full border border-border-subtle bg-background-elevated text-content-secondary transition-colors hover:bg-background-primary hover:text-content-primary"
                  aria-label="Tutup"
                >
                  <X className="h-3 w-3" />
                </button>

                {/* Tooltip Content */}
                <div className="flex items-start gap-2.5">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 fill-[#25D366]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-content-primary">
                      Butuh bantuan?
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-content-secondary">
                      Chat dengan tim kami via WhatsApp untuk konsultasi gratis.
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 border-b border-r border-border-subtle bg-background-surface" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <div className="relative">
            {/* Pulse Rings */}
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
            <span className="absolute inset-0 animate-pulse-slow rounded-full bg-[#25D366]/20" />

            {/* Main Button */}
            <motion.a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => {
                if (hasInteracted) setShowTooltip(false);
              }}
              onClick={() => setHasInteracted(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.4)] transition-shadow hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] md:h-16 md:w-16"
              aria-label="Chat WhatsApp"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-white md:h-8 md:w-8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>

              {/* Notification Dot */}
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-semantic-error text-[10px] font-bold text-white shadow-md">
                1
              </span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}