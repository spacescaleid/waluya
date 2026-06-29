import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { ServiceDetailHero } from "@/components/services/service-detail-hero";
import { ServiceDetailOverview } from "@/components/services/service-detail-overview";
import { ServiceDetailFeatures } from "@/components/services/service-detail-features";
import { ServiceDetailSubServices } from "@/components/services/service-detail-sub-services";
import { ServiceDetailProcess } from "@/components/services/service-detail-process";
import { ServiceDetailRelated } from "@/components/services/service-detail-related";
import { CtaBanner } from "@/components/shared/cta-banner";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Layanan Tidak Ditemukan" };
  }

  return {
    title: `${service.name} - PT Waluya Istana Nusantara`,
    description: service.description,
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailOverview service={service} />
      <ServiceDetailFeatures service={service} />
      {service.subServices && service.subServices.length > 0 && (
        <ServiceDetailSubServices service={service} />
      )}
      <ServiceDetailProcess />
      <ServiceDetailRelated currentSlug={service.slug} />
      <CtaBanner
        title={`Tertarik dengan Layanan ${service.name}?`}
        description="Konsultasikan kebutuhan spesifik Anda dengan tim ahli kami dan dapatkan solusi yang tepat sasaran."
        primaryLabel="Konsultasi Gratis"
        primaryHref="/contact"
        secondaryLabel="Layanan Lainnya"
        secondaryHref="/services"
      />
    </>
  );
}