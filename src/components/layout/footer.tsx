import Link from "next/link";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background-secondary">
      <div className="mx-auto max-w-container px-6 py-16 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-primary to-brand-dark">
                <span className="text-base font-extrabold text-white">W</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-content-primary">Waluya</span>
                <span className="text-xs font-medium uppercase tracking-wider text-content-tertiary">
                  Istana Nusantara
                </span>
              </div>
            </Link>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-content-secondary">
              <strong className="text-content-primary">{SITE_CONFIG.fullName}</strong> — One Stop
              IT Solution untuk segala kebutuhan Teknologi Informasi bisnis Anda. Berdiri sejak{" "}
              {SITE_CONFIG.founded}.
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={"mailto:" + SITE_CONFIG.email}
                  className="flex items-center gap-2 text-sm text-content-secondary hover:text-content-primary"
                >
                  <Mail className="h-4 w-4 text-brand-secondary" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={"tel:" + SITE_CONFIG.phone}
                  className="flex items-center gap-2 text-sm text-content-secondary hover:text-content-primary"
                >
                  <Phone className="h-4 w-4 text-brand-secondary" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-sm text-content-secondary">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                  {SITE_CONFIG.address}
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-content-tertiary">
                  <Calendar className="h-4 w-4 text-brand-secondary" />
                  Akta No. 9 — {SITE_CONFIG.founded}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-content-primary">
              Layanan
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/services/colocation" className="text-content-secondary hover:text-content-primary">
                  Colocation
                </Link>
              </li>
              <li>
                <Link href="/services/network-monitoring" className="text-content-secondary hover:text-content-primary">
                  Network Monitoring
                </Link>
              </li>
              <li>
                <Link href="/services/system-integrator" className="text-content-secondary hover:text-content-primary">
                  System Integrator
                </Link>
              </li>
              <li>
                <Link href="/services/managed-service" className="text-content-secondary hover:text-content-primary">
                  Managed Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-content-primary">
              Perusahaan
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link href="/about" className="text-content-secondary hover:text-content-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-content-secondary hover:text-content-primary">
                  Jaringan
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-content-secondary hover:text-content-primary">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-content-secondary hover:text-content-primary">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <div className="mx-auto max-w-container px-6 py-6 md:px-10 lg:px-20">
          <p className="text-center text-xs text-content-tertiary">
            &copy; {year} {SITE_CONFIG.name}. Seluruh hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}