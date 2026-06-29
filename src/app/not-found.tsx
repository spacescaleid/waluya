import Link from "next/link";
import { ArrowLeft, ServerCrash } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-primary px-6 text-center">
      <ServerCrash className="mb-6 h-16 w-16 text-content-tertiary" />
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand-secondary">
        404 - Halaman Tidak Ditemukan
      </p>
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-content-primary">
        Halaman ini tidak ada.
      </h1>
      <p className="mb-10 max-w-md text-base text-content-secondary">
        Halaman yang Anda cari mungkin telah dipindahkan atau tidak pernah ada.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 font-semibold text-white hover:bg-brand-dark"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Beranda
      </Link>
    </div>
  );
}
