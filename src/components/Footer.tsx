import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-[#070707] border-t border-[#d4af37]/20 pt-16 pb-12 relative z-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-xl overflow-hidden border border-[#d4af37]/40 bg-white">
                <Image
                  src="/assets/logo.png"
                  alt="SK Education Services"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <h3 className="font-serif text-xl font-bold gold-text">
                {SITE_DATA.name}
              </h3>
            </div>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-md">
              <strong className="text-neutral-300">{SITE_DATA.tagline}</strong> We provide comprehensive education consulting, career guidance, college admission support, and placement assistance for students across Tamil Nadu and all of India.
            </p>

            <div className="space-y-2.5 pt-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`tel:+91${SITE_DATA.contact.phone}`}
                  className="hover:text-[#f9e281] transition-colors"
                >
                  {SITE_DATA.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={`mailto:${SITE_DATA.contact.email}`}
                  className="hover:text-[#f9e281] transition-colors"
                >
                  {SITE_DATA.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-neutral-400">{SITE_DATA.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/#about" className="hover:text-[#f9e281] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#f9e281] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-[#f9e281] transition-colors">Courses & Degrees</Link>
              </li>
              <li>
                <Link href="/#courses" className="hover:text-[#f9e281] transition-colors">Admissions</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-serif font-bold text-white uppercase tracking-wider mb-4 border-b border-neutral-800 pb-2">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link href="/#faq" className="hover:text-[#f9e281] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#f9e281] transition-colors">Contact Desk</Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#f9e281] transition-colors">Counseling Request</Link>
              </li>
              <li>
                <a
                  href={SITE_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Help
                </a>
              </li>
            </ul>
          </div>

          {/* Scan to Connect QR */}
          <div className="lg:col-span-3 glass p-5 rounded-2xl text-center flex flex-col items-center justify-between">
            <h5 className="text-xs uppercase font-mono tracking-wider text-[#d4af37] mb-2">
              Scan to Connect
            </h5>
            <div className="w-20 h-20 bg-white p-1.5 rounded-lg mb-3 shadow">
              <Image
                src="/assets/qrcode.png"
                alt="QR Code"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <a
              href={`mailto:${SITE_DATA.contact.email}`}
              className="w-full py-2 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37] text-xs font-semibold text-[#f9e281] hover:bg-[#d4af37]/10 transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Email Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Diamond Line Divider */}
        <div className="flex items-center justify-center gap-4 py-6 border-t border-neutral-900">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
          <div className="w-2 h-2 rotate-45 bg-[#d4af37]/70" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026{" "}
            <span className="gold-text font-semibold">{SITE_DATA.name}</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/privacy-policy"
              className="hover:text-[#f9e281] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-neutral-800">|</span>
            <Link
              href="/terms-of-service"
              className="hover:text-[#f9e281] transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-neutral-800">|</span>
            <Link
              href="/cookie-policy"
              className="hover:text-[#f9e281] transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
