import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactFaq } from "@/components/contact/contact-faq";
import { FloatingWhatsApp } from "@/components/shared/floating-whatsapp";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontak - PT Waluya Istana Nusantara",
  description:
    "Hubungi tim PT Waluya Istana Nusantara untuk konsultasi IT, request quotation, atau pertanyaan layanan. Kami siap membantu mengembangkan bisnis Anda.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactFaq />
      <FloatingWhatsApp
        phoneNumber={SITE_CONFIG.whatsapp}
        message="Halo, saya tertarik dengan layanan PT Waluya Istana Nusantara. Bisa konsultasi?"
      />
    </>
  );
}