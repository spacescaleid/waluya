import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Server,
  Activity,
  Network,
  Settings,
  Check,
  Crown,
  ArrowRight,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { servicesData } from "@/data/services";

const iconMap = { Server, Activity, Network, Settings };

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon as keyof typeof iconMap] || Server;

  return (
    <>
      {/* ============ HERO SECTION ============ */}
      <section className="relative overflow-hidden bg-background-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 grid-bg opacity-40" />

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
        </div>

        <Container>
          {/* ✅ TOMBOL KEMBALI - mengarah ke /#services (anchor di homepage) */}
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-background-surface/50 px-4 py-2 text-sm font-medium text-content-tertiary backdrop-blur-sm transition-all hover:border-brand-primary/40 hover:bg-background-elevated hover:text-content-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Layanan
          </Link>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5">
                <Icon className="h-3.5 w-3.5 text-brand-secondary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                  Layanan IT
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-extrabold leading-[1.15] tracking-tight text-content-primary md:text-5xl xl:text-6xl">
                {service.name}
              </h1>

              <p className="mb-6 text-lg font-medium text-brand-tertiary">
                {service.tagline}
              </p>

              <p className="text-base leading-relaxed text-content-secondary md:text-lg">
                {service.fullDescription}
              </p>
            </div>

            <div className="hidden lg:flex h-48 w-48 items-center justify-center rounded-3xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/10 backdrop-blur-md">
              <Icon className="h-24 w-24 text-brand-secondary" />
            </div>
          </div>
        </Container>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <SectionWrapper className="bg-background-secondary">
        <Container>
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
              <Sparkles className="h-3 w-3 text-brand-secondary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                Fitur Lengkap
              </span>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight text-content-primary md:text-4xl">
              Apa Saja yang Anda Dapatkan
            </h2>

            <p className="mx-auto max-w-2xl text-base text-content-secondary">
              Semua fitur lengkap dalam satu layanan untuk mendukung kebutuhan
              bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 rounded-xl border border-border-subtle bg-background-surface p-5 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
              >
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                  <Check className="h-4 w-4 text-brand-secondary" />
                </div>
                <span className="text-sm text-content-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* ============ SUB-SERVICES (if any) ============ */}
      {service.subServices && service.subServices.length > 0 && (
        <SectionWrapper>
          <Container>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
                <Target className="h-3 w-3 text-brand-secondary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                  Sub Layanan
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-content-primary md:text-4xl">
                Pilihan Layanan Tersedia
              </h2>

              <p className="mx-auto max-w-2xl text-base text-content-secondary">
                Berbagai pilihan layanan dalam kategori {service.name} yang
                dapat disesuaikan dengan kebutuhan Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.subServices.map((sub, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10">
                    <span className="text-lg font-bold text-brand-tertiary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-content-primary">
                    {sub.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-content-secondary">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* ============ PRICING SECTION ============ */}
      {service.pricing && service.pricing.length > 0 && (
        <SectionWrapper className="bg-background-secondary">
          <Container>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
                <Crown className="h-3 w-3 text-brand-secondary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                  Paket & Harga
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-content-primary md:text-4xl">
                Pilih Paket yang{" "}
                <span className="text-gradient">Sesuai Kebutuhan</span>
              </h2>

              <p className="mx-auto max-w-2xl text-base text-content-secondary">
                Harga transparan tanpa biaya tersembunyi. Hubungi kami untuk
                quotation custom sesuai kebutuhan bisnis Anda.
              </p>
            </div>

            <div
              className={
                "grid grid-cols-1 gap-6 " +
                (service.pricing.length === 4
                  ? "md:grid-cols-2 lg:grid-cols-4"
                  : "md:grid-cols-3")
              }
            >
              {service.pricing.map((pkg, index) => (
                <div
                  key={index}
                  className={
                    "group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 " +
                    (pkg.isPopular
                      ? "border-brand-primary/50 bg-gradient-to-b from-brand-primary/10 to-background-surface shadow-glow lg:scale-105"
                      : "border-border-subtle bg-background-surface hover:border-brand-primary/40 hover:shadow-card-hover")
                  }
                >
                  {pkg.isPopular && (
                    <div className="absolute right-0 top-0 z-10 h-24 w-24 overflow-hidden">
                      <div className="absolute right-[-35px] top-[20px] flex w-[140px] rotate-45 items-center justify-center gap-1 bg-gradient-to-r from-brand-primary to-brand-secondary py-1.5 shadow-lg">
                        <Crown className="h-3 w-3 text-white" />
                        <span className="text-xs font-bold uppercase tracking-wider text-white">
                          Top
                        </span>
                      </div>
                    </div>
                  )}

                  <div
                    className={
                      "px-6 py-5 text-center " +
                      (pkg.isPopular
                        ? "bg-gradient-to-br from-brand-primary to-brand-dark"
                        : "bg-background-elevated border-b border-border-subtle")
                    }
                  >
                    <h3
                      className={
                        "text-xl font-bold " +
                        (pkg.isPopular ? "text-white" : "text-content-primary")
                      }
                    >
                      {pkg.name}
                    </h3>
                  </div>

                  <div
                    className={
                      "px-6 py-8 text-center " +
                      (pkg.isPopular
                        ? "bg-gradient-to-b from-brand-primary/20 to-transparent"
                        : "")
                    }
                  >
                    {pkg.price === "Custom" ? (
                      <div className="text-3xl font-extrabold text-content-primary">
                        Custom Quote
                      </div>
                    ) : (
                      <div className="flex items-start justify-center gap-1">
                        <span
                          className={
                            "mt-2 text-lg font-semibold " +
                            (pkg.isPopular
                              ? "text-brand-tertiary"
                              : "text-brand-secondary")
                          }
                        >
                          Rp
                        </span>
                        <span className="text-4xl font-extrabold text-content-primary">
                          {pkg.price}
                        </span>
                      </div>
                    )}
                    <p className="mt-1 text-sm italic text-content-tertiary">
                      /{pkg.period}
                    </p>
                  </div>

                  <div className="flex-1 px-6 py-2">
                    <ul className="space-y-3 border-t border-border-subtle pt-5">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check
                            className={
                              "mt-0.5 h-4 w-4 flex-shrink-0 " +
                              (pkg.isPopular
                                ? "text-brand-tertiary"
                                : "text-brand-secondary")
                            }
                          />
                          <span className="text-content-secondary">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6">
                    <Link
                      href="/contact"
                      className={
                        "block w-full rounded-lg px-4 py-3 text-center text-sm font-bold uppercase tracking-wider transition-all " +
                        (pkg.isPopular
                          ? "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-glow hover:shadow-card-hover"
                          : "bg-brand-primary text-white hover:bg-brand-dark hover:shadow-glow")
                      }
                    >
                      {pkg.price === "Custom" ? "Request Quote" : "Sign Up"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* ============ BENEFITS SECTION ============ */}
      {service.benefits && service.benefits.length > 0 && (
        <SectionWrapper>
          <Container>
            <div className="mb-12 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
                <Sparkles className="h-3 w-3 text-brand-secondary" />
                <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                  Mengapa Memilih Kami
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold tracking-tight text-content-primary md:text-4xl">
                Keuntungan untuk{" "}
                <span className="text-gradient">Bisnis Anda</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-border-subtle bg-background-surface p-6 transition-all hover:border-brand-primary/40 hover:shadow-card-hover"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-dark text-white shadow-glow">
                    <span className="text-lg font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-content-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-content-secondary">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* ============ USE CASES SECTION ============ */}
      {service.useCases && service.useCases.length > 0 && (
        <SectionWrapper className="bg-background-secondary">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1">
                  <Users className="h-3 w-3 text-brand-secondary" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                    Use Cases
                  </span>
                </div>

                <h2 className="mb-4 text-3xl font-bold tracking-tight text-content-primary md:text-4xl">
                  Cocok untuk{" "}
                  <span className="text-gradient">Siapa Saja?</span>
                </h2>

                <p className="text-base leading-relaxed text-content-secondary">
                  Layanan {service.name} dapat membantu berbagai jenis bisnis
                  dan organisasi mencapai tujuan IT mereka.
                </p>
              </div>

              <div className="space-y-3">
                {service.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-xl border border-border-subtle bg-background-surface p-4 transition-all hover:border-brand-primary/40 hover:translate-x-2"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 transition-colors group-hover:bg-brand-primary/20">
                      <Check className="h-5 w-5 text-brand-secondary" />
                    </div>
                    <span className="flex-1 text-sm font-medium text-content-secondary">
                      {useCase}
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-content-tertiary transition-transform group-hover:translate-x-1 group-hover:text-brand-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </SectionWrapper>
      )}

      {/* ============ CTA SECTION ============ */}
      <SectionWrapper>
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-brand-primary/30 bg-gradient-to-br from-brand-primary/20 via-background-surface to-brand-secondary/10 p-8 md:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
            <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-primary/20 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-content-primary md:text-4xl">
                  Tertarik dengan Layanan{" "}
                  <span className="text-gradient">{service.name}?</span>
                </h2>

                <p className="text-base leading-relaxed text-content-secondary md:text-lg">
                  Hubungi tim ahli kami untuk konsultasi gratis dan dapatkan
                  solusi terbaik sesuai kebutuhan bisnis Anda.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-all hover:shadow-card-hover"
                >
                  Hubungi Kami
                  <ArrowRight className="h-4 w-4" />
                </Link>

                {/* ✅ TOMBOL "LAYANAN LAIN" - mengarah ke /#services */}
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border-default bg-background-surface px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-content-primary transition-all hover:border-brand-primary/40 hover:bg-background-elevated"
                >
                  Layanan Lain
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}