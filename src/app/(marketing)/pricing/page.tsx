import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { CtaBanner } from "@/components/shared/cta-banner";

export const metadata = {
  title: "Harga & Paket - PT Waluya Nusantara",
  description: "Bandingkan semua paket layanan kami.",
};

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-background-primary pb-24 pt-36">
        <div className="absolute inset-0 grid-bg" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-primary/10 blur-3xl" />
        <Container>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-secondary">
            Harga & Paket
          </p>
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-content-primary md:text-5xl lg:text-6xl">
            Harga & Paket
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-content-secondary">
            Bandingkan semua paket layanan kami.
          </p>
        </Container>
      </section>

      <SectionWrapper>
        <Container>
          <div className="rounded-2xl border border-border-subtle bg-background-surface p-12 text-center">
            <p className="text-content-tertiary">
              Konten halaman ini akan segera ditambahkan. Struktur dan routing sudah aktif.
            </p>
          </div>
        </Container>
      </SectionWrapper>

      <CtaBanner
        title="Siap Memulai?"
        description="Tim kami siap membantu Anda memilih solusi yang tepat."
        primaryLabel="Lihat Paket"
        primaryHref="/pricing"
        secondaryLabel="Hubungi Kami"
        secondaryHref="/contact"
      />
    </>
  );
}
