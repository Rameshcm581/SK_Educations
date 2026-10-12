"use client";

import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp FAB */}
      <a
        href={SITE_DATA.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 border border-emerald-400/40 relative group"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-black/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-neutral-700 pointer-events-none shadow-lg">
          Chat with Us on WhatsApp
        </span>
      </a>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="w-10 h-10 md:w-12 md:h-12 rounded-full glass hover:border-[#d4af37] text-[#f9e281] flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xl animate-in fade-in zoom-in-75 duration-200"
        >
          <ArrowUp className="w-5 h-5 text-[#d4af37]" />
        </button>
      )}
    </div>
  );
}
