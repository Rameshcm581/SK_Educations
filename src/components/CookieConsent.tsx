"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("sk_cookie_consent");
    if (!consent) {
      // Delay display slightly so it doesn't clash with intro
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Allow reopening cookie banner from anywhere (e.g. footer link)
  useEffect(() => {
    const handleReopen = () => setVisible(true);
    window.addEventListener("open-cookie-banner", handleReopen);
    return () => window.removeEventListener("open-cookie-banner", handleReopen);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("sk_cookie_consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("sk_cookie_consent", "essential_only");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent banner"
      className="fixed bottom-5 left-5 right-5 sm:right-auto sm:max-w-md z-50 glass p-5 md:p-6 rounded-2xl border border-[#d4af37]/40 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#181818] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
            <Cookie className="w-4 h-4 text-[#f9e281]" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-white text-sm">
              Cookie & Privacy Preferences
            </h4>
            <span className="text-[11px] text-[#d4af37]/80 font-mono uppercase tracking-wider">
              SK Education Services
            </span>
          </div>
        </div>

        <button
          onClick={handleDecline}
          aria-label="Close cookie banner"
          className="p-1 rounded-md text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-neutral-300 leading-relaxed mb-4">
        We utilize cookies and local preferences to personalize your educational guidance experience, remember session data, and evaluate portal performance. Review our{" "}
        <Link
          href="/privacy-policy"
          className="text-[#f9e281] underline underline-offset-2 hover:text-white"
        >
          Privacy Policy
        </Link>{" "}
        to understand how we safeguard your data.
      </p>

      <div className="flex items-center gap-2.5">
        <button
          onClick={handleAccept}
          className="flex-1 py-2 px-3 rounded-full gold-btn text-xs uppercase tracking-wider font-bold text-center"
        >
          Accept All
        </button>
        <button
          onClick={handleDecline}
          className="py-2 px-3 rounded-full border border-neutral-700 hover:border-[#d4af37]/50 text-xs text-neutral-300 hover:text-white transition-colors font-medium"
        >
          Essential Only
        </button>
      </div>
    </div>
  );
}
