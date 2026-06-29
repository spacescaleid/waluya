"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrolled } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Tentang", href: "/about" },
  { label: "Layanan", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Kontak", href: "/contact" },
];

export function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border-subtle bg-background-primary/95 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-container items-center justify-between px-6 md:px-10 lg:px-20">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-primary to-brand-dark">
              <span className="text-sm font-extrabold text-white">W</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-content-primary">
                Waluya
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-content-tertiary">
                Istana Nusantara
              </span>
            </div>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-content-secondary transition-colors hover:bg-background-elevated hover:text-content-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/contact"
              className="rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-glow"
            >
              Konsultasi Gratis
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex items-center justify-center rounded-md p-2 text-content-secondary lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background-primary pt-16 lg:hidden"
          >
            <div className="flex h-full flex-col px-6 py-8">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-content-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border-subtle pt-8">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-brand-primary px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
