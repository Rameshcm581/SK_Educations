import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cookie, ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Cookies Policy | SK Education Services",
  description:
    "Cookies Policy for SK Education Services. Understand how we use cookies and tracking technologies to ensure smooth site navigation and counseling support.",
  alternates: {
    canonical: "https://www.skeducationservice.com/cookie-policy",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f0ece4] selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Header Bar */}
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

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Banner */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#f9e281] mb-4">
            <Cookie className="w-3.5 h-3.5" />
            <span>Browser Technologies & Consent</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
            <span className="gold-text">Cookies Policy</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-400 mt-3 leading-relaxed">
            Effective Date: October 2026 | Last Updated: October 12, 2026
          </p>
        </div>

        {/* Overview Box */}
        <div className="glass p-6 md:p-8 rounded-2xl mb-12 border border-[#d4af37]/30">
          <h2 className="font-serif text-xl font-bold text-white mb-3">
            What Are Cookies?
          </h2>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
            Cookies are small text files placed on your computer, tablet, or mobile device when you
            browse websites. They are widely utilized across educational portals to enhance user
            experience, remember temporary inquiry data, and evaluate how visitors interact with
            counseling features.
          </p>
        </div>

        {/* Structured Sections */}
        <div className="space-y-8 text-neutral-300 text-sm md:text-base leading-relaxed">
          <section className="glass p-6 md:p-8 rounded-2xl border border-[#d4af37]/30">
            <h3 className="text-xl font-serif font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-sm font-mono text-[#d4af37]">01.</span>
              Categories of Cookies We Use
            </h3>
            <ul className="space-y-4 pt-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Strictly Necessary Cookies</strong>
                  <span>
                    Essential for the core functioning of the site, allowing secure navigation,
                    session continuity, and form transmission.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Preference Cookies</strong>
                  <span>
                    Enable the website to remember choices you make, such as consent status and
                    preferred stream filters during admission exploration.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Performance & Analytics</strong>
                  <span>
                    Provide aggregate, non-personally identifiable telemetry on page loading speeds
                    and navigation flow, assisting us in optimizing user experience.
                  </span>
                </div>
              </li>
            </ul>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-[#d4af37]/30">
            <h3 className="text-xl font-serif font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-sm font-mono text-[#d4af37]">02.</span>
              Third-Party Cookies
            </h3>
            <p>
              We do not employ third-party advertising tracking cookies or data broker scripts.
              Third-party interactions are strictly limited to necessary functional integrations,
              such as Google Maps for locating our West Tambaram office and secure web font delivery.
            </p>
          </section>

          <section className="glass p-6 md:p-8 rounded-2xl border border-[#d4af37]/30">
            <h3 className="text-xl font-serif font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-sm font-mono text-[#d4af37]">03.</span>
              Managing & Disabling Cookies
            </h3>
            <p className="mb-4">
              Most web browsers automatically accept cookies, but you can alter your browser
              settings to decline cookies or receive an alert whenever a cookie is set. Please note
              that disabling essential cookies may impact certain interactive features on our portal.
            </p>
            <p>
              For further queries or to review our complete data protection standards, visit our{" "}
              <Link href="/privacy-policy" className="text-[#f9e281] underline hover:text-white">
                Privacy Policy
              </Link>
              .
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
