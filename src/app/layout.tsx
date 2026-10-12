import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0b0b0b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.skeducationservice.com"),
  title: {
    default: "SK Education Services | Premier Education & Career Guidance",
    template: "%s | SK Education Services",
  },
  description:
    "SK Education Services provides expert college admission counseling, career guidance, scholarship assistance, and placement support for Engineering, Medical, Arts & Science, and PG programs in Chennai and across India.",
  keywords: [
    "SK Education Services",
    "Education Consultancy Chennai",
    "College Admissions Tambaram",
    "Engineering Admissions Chennai",
    "Medical Nursing Admissions",
    "Career Guidance Consultant",
    "Scholarship Guidance",
    "Tamil Nadu College Admissions",
  ],
  authors: [{ name: "SK Education Services" }],
  creator: "SK Education Services",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "SK Education Services | Guiding Today. Shaping Tomorrow.",
    description:
      "Premier education consultancy in West Tambaram, Chennai. Comprehensive college admission counseling, career guidance, scholarship assistance, and placement support.",
    url: "https://www.skeducationservice.com",
    siteName: "SK Education Services",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "SK Education Services Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Education Services | Premier Education Partner",
    description:
      "Guiding Today. Shaping Tomorrow. Expert college admissions and career counseling in Chennai.",
    images: ["/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Footer from "@/components/Footer";
import FloatingWidgets from "@/components/FloatingWidgets";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0b0b0b] text-[#f0ece4] antialiased selection:bg-[#d4af37]/30 selection:text-white flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingWidgets />
        <CookieConsent />
      </body>
    </html>
  );
}
