"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function PageIntroLoader() {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState("INITIATING EDUCATION PORTAL");
  const [isOpening, setIsOpening] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if user has already seen intro this session
    const seen = sessionStorage.getItem("sk_intro_seen");
    if (seen) {
      setHidden(true);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsOpening(true), 15);
          setTimeout(() => {
            setHidden(true);
            sessionStorage.setItem("sk_intro_seen", "true");
          }, 170);
          return 100;
        }

        const nextVal = prev + 12;
        if (nextVal > 60) {
          setPhaseText("CONNECTING 50+ PARTNER UNIVERSITIES");
        } else if (nextVal > 25) {
          setPhaseText("INITIALIZING CHENNAI COUNSELING DESK");
        }
        return Math.min(100, nextVal);
      });
    }, 35);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden">
      {/* Top Shutter Half */}
      <div
        className={`absolute top-0 left-0 right-0 h-1/2 bg-[#060606] border-b border-[#d4af37]/40 transition-transform duration-200 ease-[cubic-bezier(0.77,0,0.175,1)] z-20 flex flex-col justify-end items-center pb-8 ${
          isOpening ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Subtle Luxury Architectural Lines */}
        <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />

        {/* Brand Shield & Square Logo Frame */}
        <div className="relative mb-4 flex items-center justify-center">
          {/* Golden Corner Brackets */}
          <div className="absolute -inset-3 pointer-events-none">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />
          </div>

          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl bg-white border border-[#d4af37] p-2.5 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.35)] overflow-hidden">
            <Image
              src="/assets/logo.png"
              alt="SK Education Services"
              width={95}
              height={95}
              priority
              className="object-contain"
            />
          </div>
        </div>

        <h2 className="text-lg md:text-xl font-serif font-extrabold tracking-[0.25em] text-white uppercase">
          <span className="gold-text">SK Education</span> Services
        </h2>
      </div>

      {/* Bottom Shutter Half */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1/2 bg-[#060606] border-t border-[#d4af37]/40 transition-transform duration-200 ease-[cubic-bezier(0.77,0,0.175,1)] z-20 flex flex-col justify-start items-center pt-8 ${
          isOpening ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Kinetic Phase Readout & Numeric Counter */}
        <div className="w-72 max-w-[90vw] flex flex-col items-center gap-3">
          <div className="flex items-center justify-between w-full text-xs font-mono">
            <span className="text-neutral-400 tracking-wider uppercase text-[10px] truncate max-w-[190px]">
              {phaseText}
            </span>
            <span className="text-[#f9e281] font-bold text-sm tracking-widest">{progress}%</span>
          </div>

          {/* Golden Laser Progress Track */}
          <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden border border-[#d4af37]/30 relative shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#d4af37] via-[#fff3ad] to-[#d4af37] transition-all duration-75 ease-out shadow-[0_0_12px_#f9e281]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-[10px] font-mono tracking-[0.3em] text-[#d4af37]/70 uppercase mt-1">
            West Tambaram · Chennai · Est. 2026
          </p>
        </div>
      </div>

      {/* Center Laser Seam Beam that flashes on split */}
      {isOpening && (
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f9e281] to-transparent z-30 shadow-[0_0_20px_#f9e281] -translate-y-1/2 animate-pulse" />
      )}
    </div>
  );
}
