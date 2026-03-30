import type { Metadata } from "next";
import localFont from "next/font/local";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/content/site";

import "./globals.css";

const themeScript = `
(() => {
  const storageKey = "akhil-portfolio-theme";
  const root = document.documentElement;
  const savedTheme = localStorage.getItem(storageKey);
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : systemPrefersDark
      ? "dark"
      : "light";

  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
})();
`;

const bahnschrift = localFont({
  src: "../assets/fonts/bahnschrift.ttf",
  variable: "--font-bahnschrift",
  display: "swap",
});

const consolas = localFont({
  src: "../assets/fonts/consola.ttf",
  variable: "--font-consola",
  display: "swap",
});

// Replace siteConfig.siteUrl with the final deployed domain before publishing.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Akhil Meda",
    "Georgia Tech",
    "Computer Engineering",
    "cybersecurity",
    "embedded systems",
    "digital design",
    "SystemVerilog",
    "FPGA",
    "verification",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: `${siteConfig.name} E-Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-blueprint.svg",
        width: 1280,
        height: 980,
        alt: "Engineering portfolio hero graphic for Akhil Meda.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ["/images/hero-blueprint.svg"],
  },
  category: "technology",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Atlanta",
    addressRegion: "GA",
    addressCountry: "US",
  },
  alumniOf: siteConfig.school,
  sameAs: [siteConfig.linkedin, siteConfig.github],
  url: siteConfig.siteUrl,
  knowsAbout: [
    "Cybersecurity",
    "Embedded systems",
    "Digital design",
    "Hardware verification",
    "FPGA workflows",
    "SystemVerilog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bahnschrift.variable} ${consolas.variable} h-full bg-white antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
