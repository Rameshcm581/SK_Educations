"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Sparkles,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  PhoneCall,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#070707] pt-24 pb-20"
    >
      {/* Background Hero Image with Deep Vignette & Mesh Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/herobackground.jpeg"
          alt="SK Education Background"
          fill
          priority
          className="object-cover object-center filter grayscale brightness-40 opacity-20"
        />
        {/* Multi-tier dark gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/80 to-[#070707]" />
        <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Subtle Luxury Orbit Rings in Hero Background */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-[#d4af37]/10 animate-[spin_50s_linear_infinite] pointer-events-none z-0" />
      <div className="absolute w-[800px] h-[800px] rounded-full border border-dashed border-[#d4af37]/5 animate-[spin_70s_linear_infinite_reverse] pointer-events-none z-0" />

      {/* Ambient Floating Gold Dust Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-1/4 left-[12%] w-2 h-2 rounded-full bg-[#f9e281] particle-float opacity-30"
          style={{ animationDuration: "7s", animationDelay: "0.2s" }}
        />
        <div
          className="absolute top-1/3 right-[15%] w-1.5 h-1.5 rounded-full bg-[#d4af37] particle-float opacity-40"
          style={{ animationDuration: "9s", animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-[22%] w-2.5 h-2.5 rounded-full bg-[#f9e281] particle-float opacity-25"
          style={{ animationDuration: "8s", animationDelay: "2.1s" }}
        />
        <div
          className="absolute top-2/3 right-[25%] w-1.5 h-1.5 rounded-full bg-[#d4af37] particle-float opacity-35"
          style={{ animationDuration: "6s", animationDelay: "2.8s" }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Live Admissions Status Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#121212]/90 backdrop-blur-md mb-8 shadow-xl hover:border-[#d4af37] transition duration-300 group">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold tracking-wider uppercase text-neutral-200">
            2026 Admissions Open
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-xs text-[#f9e281] font-medium flex items-center gap-1">
            Tamil Nadu & Pan-India
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        {/* Luxury Crest Shield - Square Card with Breathing Halo */}
        <div className="mb-8 relative group">
          {/* Outer Breathing Aura (Square) */}
          <div className="absolute -inset-6 rounded-2xl bg-gradient-to-r from-[#d4af37]/40 via-[#f9e281]/25 to-[#d4af37]/40 blur-2xl aura-pulse pointer-events-none" />
          <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#d4af37] via-[#f9e281] to-[#d4af37] opacity-80 group-hover:opacity-100 transition duration-500" />

          {/* Central Logo Square Card */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-2xl bg-white p-3.5 border-2 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.4)] flex items-center justify-center overflow-hidden">
            <Image
              src="/assets/logo.png"
              alt="SK Education Services Logo"
              width={160}
              height={160}
              priority
              className="object-contain"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight mb-4 leading-[1.1]">
          <span className="shimmer-text">SK Education</span>{" "}
          <span className="text-white drop-shadow-lg">Services</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-200 font-light max-w-3xl mx-auto mb-3 leading-relaxed">
          {SITE_DATA.subtitle}
        </p>

        {/* Tagline / Mission */}
        <p className="text-sm md:text-base font-serif italic text-[#f9e281]/90 mb-8 tracking-wide">
          Guiding Today. Shaping Tomorrow. — Professional Guidance for Engineering, Medical, Arts & Science, and PG Programs.
        </p>

        {/* Golden Diamond Divider */}
        <div className="flex items-center justify-center gap-3 w-56 mb-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37] to-[#d4af37]" />
          <div className="w-2.5 h-2.5 rotate-45 bg-[#d4af37] shadow-[0_0_10px_#d4af37]" />
          <div className="h-px w-full bg-gradient-to-l from-transparent via-[#d4af37] to-[#d4af37]" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <Link
            href="/apply"
            className="w-full sm:w-auto px-8 py-4 rounded-full gold-btn flex items-center justify-center gap-2.5 text-sm tracking-wider uppercase font-bold shadow-2xl"
          >
            <GraduationCap className="w-4 h-4 text-black" />
            <span>Apply for Admissions</span>
          </Link>

          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#d4af37]/50 hover:border-[#d4af37] bg-[#121212]/90 hover:bg-[#1a1a1a] text-neutral-200 hover:text-white transition duration-300 flex items-center justify-center gap-2.5 text-sm tracking-wider uppercase shadow-xl font-semibold"
          >
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span>Explore Programs</span>
          </a>

          <a
            href={`tel:+91${SITE_DATA.contact.phone}`}
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-neutral-800 hover:border-[#d4af37]/40 bg-black/50 text-neutral-300 hover:text-white transition duration-300 flex items-center justify-center gap-2 text-xs tracking-wider uppercase font-medium"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#f9e281]" />
            <span>Call: {SITE_DATA.contact.phoneFormatted}</span>
          </a>
        </div>

        {/* 4 Floating Highlight Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full max-w-4xl text-left">
          <div className="glass p-4 rounded-xl border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <Award className="w-4 h-4 text-[#f9e281]" />
              <span className="text-xs font-mono uppercase text-[#d4af37] font-semibold">
                Success
              </span>
            </div>
            <div className="text-lg font-serif font-bold text-white">98% Admission Rate</div>
            <div className="text-[11px] text-neutral-400">Top Accredited Institutions</div>
          </div>

          <div className="glass p-4 rounded-xl border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <GraduationCap className="w-4 h-4 text-[#f9e281]" />
              <span className="text-xs font-mono uppercase text-[#d4af37] font-semibold">
                Network
              </span>
            </div>
            <div className="text-lg font-serif font-bold text-white">50+ Universities</div>
            <div className="text-[11px] text-neutral-400">Govt Quota & Deemed Hubs</div>
          </div>

          <div className="glass p-4 rounded-xl border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <ShieldCheck className="w-4 h-4 text-[#f9e281]" />
              <span className="text-xs font-mono uppercase text-[#d4af37] font-semibold">
                Support
              </span>
            </div>
            <div className="text-lg font-serif font-bold text-white">Scholarship Aid</div>
            <div className="text-[11px] text-neutral-400">State & Merit Fee Guidance</div>
          </div>

          <div className="glass p-4 rounded-xl border border-[#d4af37]/25 hover:border-[#d4af37]/50 transition-colors">
            <div className="flex items-center gap-2 mb-1.5">
              <MapPin className="w-4 h-4 text-[#f9e281]" />
              <span className="text-xs font-mono uppercase text-[#d4af37] font-semibold">
                Location
              </span>
            </div>
            <div className="text-lg font-serif font-bold text-white">West Tambaram</div>
            <div className="text-[11px] text-neutral-400">Chennai - Walk-ins Welcome</div>
          </div>
        </div>

        {/* Discover Hint */}
        <a
          href="#about"
          className="mt-12 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 hover:text-[#d4af37] transition duration-300 group"
        >
          <span className="group-hover:tracking-wider transition-all">Scroll to Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#d4af37]" />
        </a>
      </div>
    </section>
  );
}
