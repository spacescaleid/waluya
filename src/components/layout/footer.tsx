import Link from "next/link";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-background-secondary">
      <div className="mx-auto max-w-container px-6 py-16 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-white p-2 shadow-md">
                <img
                  src="/images/logo/logo.jpeg"
                  alt="PT Waluya Istana Nusantara"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-content-primary">
                  Waluya
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-content-tertiary">
                  Istana Nusantara
                </span>
              </div>
            </Link>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-content-secondary">
              <strong className="text-content-primary">
                {SITE_CONFIG.fullName}
              </strong>{" "}
              — One Stop IT Solution untuk segala kebutuhan Teknologi Informasi
              bisnis Anda. Berdiri sejak {SITE_CONFIG.founded}.
            </p>

            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-sm text-content-secondary hover:text-content-primary transition-colors"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-brand-secondary" />
                  <span className="break-all">{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-content-secondary hover:text-content-primary transition-colors"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-brand-secondary" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-sm text-content-secondary hover:text-content-primary transition-colors"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-secondary" />
                  <span>{SITE_CONFIG.addressFull}</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-sm text-content-tertiary">
                  <Calendar className="h-4 w-4 flex-shrink-0 text-brand-secondary" />
                  <span>Akta No. 9 — {SITE_CONFIG.founded}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-content-primary">
              Layanan
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="/services/colocation"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  Colocation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/network-monitoring"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  Network Monitoring
                </Link>
              </li>
              <li>
                <Link
                  href="/services/system-integrator"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  System Integrator
                </Link>
              </li>
              <li>
                <Link
                  href="/services/managed-service"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  Managed Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Perusahaan */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-content-primary">
              Perusahaan
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/partners"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-content-secondary hover:text-content-primary transition-colors"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
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