import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <>
      <section className="relative overflow-hidden bg-background-primary pb-16 pt-36">
        <div className="absolute inset-0 grid-bg" />
        <Container size="md">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-content-tertiary hover:text-content-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Blog
          </Link>
          <h1 className="text-3xl font-extrabold tracking-tight text-content-primary md:text-4xl lg:text-5xl">
            Artikel: {params.slug}
          </h1>
        </Container>
      </section>
      <SectionWrapper>
        <Container size="sm">
          <p className="text-content-secondary">
            Konten artikel akan segera ditambahkan.
          </p>
        </Container>
      </SectionWrapper>
    </>
  );
}
