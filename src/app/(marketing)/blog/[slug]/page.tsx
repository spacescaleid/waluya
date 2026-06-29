import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";

type Params = Promise<{ slug: string }>;

export default async function BlogPostPage(props: { params: Params }) {
  const params = await props.params;
  const slug = params.slug;

  return (
    <>
      <section className="relative overflow-hidden bg-background-primary pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 grid-bg opacity-40" />

        <Container>
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-content-tertiary hover:text-content-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Blog
          </Link>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-tertiary">
                Blog Post
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-content-primary md:text-5xl">
              {slug}
            </h1>

            <p className="text-base leading-relaxed text-content-secondary md:text-lg">
              Konten artikel blog akan ditampilkan di sini.
            </p>
          </div>
        </Container>
      </section>

      <SectionWrapper>
        <Container size="md">
          <p className="text-content-secondary">
            Slug: <code>{slug}</code>
          </p>
        </Container>
      </SectionWrapper>
    </>
  );
}
