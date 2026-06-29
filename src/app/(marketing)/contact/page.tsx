import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactMap } from "@/components/contact/contact-map";
import { ContactFaq } from "@/components/contact/contact-faq";

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
    </>
  );
}