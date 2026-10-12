import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Terms of Service | SK Education Services",
  description:
    "Terms of Service for SK Education Services regarding college admissions guidance, educational counseling, and career support.",
  alternates: {
    canonical: "https://www.skeducationservice.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f0ece4] selection:bg-[#d4af37]/30 selection:text-white">
      <header className="sticky top-0 z-30 bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-4 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-[#f9e281] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-[#d4af37] group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 relative rounded-xl overflow-hidden border border-[#d4af37]/40 bg-white">
              <Image
                src="/assets/logo.png"
                alt="SK Education Services"
                fill
                className="object-contain p-1"
              />
            </div>
            <span className="font-serif font-bold text-sm md:text-base gold-text hidden sm:inline">
              SK Education Services
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#f9e281] mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
            <span className="gold-text">Terms of Service</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-400 mt-3 leading-relaxed">
            Effective Date: October 2026 | Last Updated: October 12, 2026
          </p>
        </div>

        <div className="space-y-8 text-neutral-300 text-sm md:text-base leading-relaxed">
          <section className="glass p-6 md:p-8 rounded-2xl border border-[#d4af37]/30">
            <h2 className="text-xl font-serif font-bold text-white mb-3">1. Scope of Services</h2>
            <p>
              SK Education Services provides education advisory, career counseling, college application assistance, scholarship guidance, and placement enablement. We act as an independent guidance counselor and mentor to assist students and parents in navigating higher education admissions.
            </p>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-[#d4af37]/30">
            <h2 className="text-xl font-serif font-bold text-white mb-3">2. Counseling & Admissions Disclaimer</h2>
            <p className="mb-3">
              Final admission decisions, entrance cutoffs, seat allocations, and scholarship approvals remain solely at the discretion of the respective universities, colleges, and examining government boards.
            </p>
            <p>
              SK Education Services provides authentic counseling based on official institutional criteria and regulatory standards to maximize your chances of admission.
            </p>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-[#d4af37]/30">
            <h2 className="text-xl font-serif font-bold text-white mb-3">3. Accuracy of Student Information</h2>
            <p>
              Students and parents are responsible for providing authentic academic certificates, scorecards, and identity records. Submitting falsified documents is strictly prohibited and nullifies any counseling agreement.
            </p>
          </section>

          <div className="pt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full gold-btn text-xs uppercase tracking-wider font-bold"
            >
              <ArrowLeft className="w-4 h-4 text-black" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
