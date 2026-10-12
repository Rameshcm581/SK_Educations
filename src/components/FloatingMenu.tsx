"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone, Mail, MessageCircle, MapPin, ChevronRight } from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "services", "courses", "faq", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Floating Menu Button */}
      <button
        onClick={toggleMenu}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        className={`fixed top-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full transition-all duration-300 ${
          isOpen
            ? "bg-[#1f1f1f] border border-[#d4af37] text-white shadow-lg"
            : "bg-[#141414]/90 backdrop-blur-md border border-[#d4af37]/40 text-[#f0ece4] hover:border-[#d4af37] shadow-xl hover:scale-105 gold-pulse"
        }`}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#f9e281]" />
        ) : (
          <Menu className="w-5 h-5 text-[#d4af37]" />
        )}
        <span className="text-sm font-semibold tracking-wide uppercase">
          {isOpen ? "Close" : "Menu"}
        </span>
      </button>

      {/* Fullscreen Backdrop & Menu Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/85 backdrop-blur-xl flex flex-col justify-between p-6 md:p-12 animate-in fade-in duration-200">
          {/* Top Bar with Brand */}
          <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-6 max-w-6xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative rounded-xl overflow-hidden border border-[#d4af37]/50 bg-white">
                <Image
                  src="/assets/logo.png"
                  alt="SK Education Services"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold gold-text">
                  SK Education Services
                </h3>
                <p className="text-xs text-neutral-400">Guiding Today. Shaping Tomorrow.</p>
              </div>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="max-w-6xl mx-auto w-full my-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <nav className="flex flex-col space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]/70">
                Navigation
              </span>
              {SITE_DATA.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`group flex items-center justify-between text-2xl md:text-3xl font-serif py-2 border-b border-neutral-800 transition-colors ${
                      isActive ? "text-[#f9e281] font-bold" : "text-neutral-300 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-sm font-mono text-[#d4af37]/60 group-hover:text-[#d4af37]">
                        ✦
                      </span>
                      {link.label}
                    </span>
                    <ChevronRight className="w-5 h-5 text-neutral-500 group-hover:text-[#d4af37] transform group-hover:translate-x-1 transition-transform" />
                  </a>
                );
              })}
            </nav>

            {/* Quick Contact & Info Card */}
            <div className="glass p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]/70">
                  Direct Inquiries
                </span>
                <h4 className="text-xl font-serif font-bold text-white mt-2">
                  Ready to Start Your Career Journey?
                </h4>
                <p className="text-sm text-neutral-400 mt-2">
                  Speak with our senior admission counselors for immediate guidance on colleges, courses, and scholarships.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`tel:+91${SITE_DATA.contact.phone}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-black/50 border border-neutral-800 hover:border-[#d4af37]/50 text-neutral-200 transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                  <div>
                    <div className="text-xs text-neutral-400">Call Us Directly</div>
                    <div className="font-semibold text-white">{SITE_DATA.contact.phoneFormatted}</div>
                  </div>
                </a>

                <a
                  href={SITE_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-emerald-950/30 border border-emerald-800/40 hover:border-emerald-500/60 text-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                  <div>
                    <div className="text-xs text-emerald-400">WhatsApp Chat</div>
                    <div className="font-semibold text-white">Instant Consultation</div>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_DATA.contact.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg bg-black/50 border border-neutral-800 hover:border-[#d4af37]/50 text-neutral-200 transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                  <div className="truncate">
                    <div className="text-xs text-neutral-400">Official Email</div>
                    <div className="font-semibold text-white truncate">{SITE_DATA.contact.email}</div>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2 border-t border-neutral-800">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>West Tambaram, Chennai - 600045</span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="max-w-6xl mx-auto w-full pt-4 border-t border-neutral-900 text-xs text-neutral-500 text-center">
            © 2026 SK Education Services. All rights reserved.
          </div>
        </div>
      )}
    </>
  );
}
