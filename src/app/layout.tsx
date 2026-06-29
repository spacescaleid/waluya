import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { SITE_CONFIG } from "@/lib/constants";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: SITE_CONFIG.name + " - " + SITE_CONFIG.tagline,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  icons: {
    icon: "/images/logo/logo.jpeg",
    shortcut: "/images/logo/logo.jpeg",
    apple: "/images/logo/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background-primary text-content-primary antialiased">
        {children}
      </body>
    </html>
  );
}