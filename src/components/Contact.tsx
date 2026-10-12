"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Engineering (BE / B.Tech)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#0e0e0e] relative border-t border-[#d4af37]/15">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]/80">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2">
            <span className="gold-text">Contact Our Counselors</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
            Visit our counseling desk in West Tambaram, start a step-by-step application, or request a callback.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* Contact Grid: Details + Application Portal Link & Callback Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office Details & QR */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass p-8 rounded-2xl relative border border-[#d4af37]/25">
              <h3 className="text-xl font-serif font-bold gold-text mb-6">
                West Tambaram Office
              </h3>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                      Location
                    </div>
                    <p className="text-sm text-neutral-200 mt-1 leading-relaxed">
                      {SITE_DATA.contact.address}
                    </p>
                    <a
                      href={SITE_DATA.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#f9e281] hover:underline mt-1.5"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                      Phone Number
                    </div>
                    <a
                      href={`tel:+91${SITE_DATA.contact.phone}`}
                      className="text-base font-semibold text-white hover:text-[#f9e281] transition-colors mt-0.5 block"
                    >
                      {SITE_DATA.contact.phoneFormatted}
                    </a>
                    <span className="text-xs text-neutral-400">Tap to call our desk directly</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                      Official Email
                    </div>
                    <a
                      href={`mailto:${SITE_DATA.contact.email}`}
                      className="text-sm font-semibold text-white hover:text-[#f9e281] transition-colors mt-0.5 block break-all"
                    >
                      {SITE_DATA.contact.email}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                      Working Hours
                    </div>
                    <p className="text-sm text-neutral-200 mt-0.5">
                      {SITE_DATA.contact.workingHours}
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#181818] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Globe className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <div className="text-xs uppercase font-mono tracking-wider text-neutral-400">
                      Website
                    </div>
                    <p className="text-sm text-neutral-200 mt-0.5 font-mono">
                      {SITE_DATA.contact.website}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Card */}
            <div className="glass p-6 rounded-2xl flex items-center gap-6 border border-[#d4af37]/20">
              <div className="w-24 h-24 bg-white p-2 rounded-xl shrink-0 flex items-center justify-center relative overflow-hidden shadow-md">
                <Image
                  src="/assets/qrcode.png"
                  alt="Scan QR Code to Connect"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-base">
                  Instant Smartphone Access
                </h4>
                <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                  Scan to save our counseling contact details directly into your smartphone.
                </p>
                <a
                  href={SITE_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-semibold mt-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Start WhatsApp Chat →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Application Portal Banner & Quick Callback */}
          <div className="lg:col-span-7 space-y-6">
            {/* Dedicated Application Portal Highlight Box */}
            <div className="glass p-8 rounded-2xl border-2 border-[#d4af37]/40 relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#18150f] via-[#121212] to-[#0c0c0c]">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/40 text-xs font-semibold text-[#f9e281]">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Dedicated Application Portal</span>
                </div>
                <span className="text-[11px] font-mono uppercase text-emerald-400 font-semibold flex items-center gap-1">
                  ● 2026 Admissions Open
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                Apply for Admissions Online
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                Ready to take the next step? Complete our guided <strong className="text-white">3-Step Stepper Application Form</strong> to choose your program, submit qualifications, and secure counselor priority.
              </p>

              <Link
                href="/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full gold-btn text-xs font-bold uppercase tracking-wider shadow-xl group"
              >
                <span>Launch 3-Step Application Form</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Quick Callback Request Card */}
            <div className="glass p-8 rounded-2xl border border-neutral-800">
              <h4 className="text-lg font-serif font-bold text-white mb-1">
                Prefer a Quick Phone Callback?
              </h4>
              <p className="text-xs text-neutral-400 mb-6">
                Leave your number below and an education advisor will call you directly.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center animate-in fade-in duration-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <h5 className="font-serif font-bold text-white text-base">Callback Scheduled!</h5>
                  <p className="text-xs text-neutral-300 mt-1">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We will call you at <strong className="text-white">{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-xs text-[#f9e281] hover:underline"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1">
                      Stream of Interest
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm cursor-pointer"
                    >
                      <option value="Engineering (BE / B.Tech)">Engineering (BE / B.Tech)</option>
                      <option value="Medical & Nursing (MBBS / B.Sc)">Medical & Nursing (MBBS / B.Sc)</option>
                      <option value="Arts & Science (B.Com / BCA / BBA)">Arts & Science (B.Com / BCA / BBA)</option>
                      <option value="Diploma Courses (Polytechnic)">Diploma Courses (Polytechnic)</option>
                      <option value="PG Programs (MBA / MCA / M.Tech)">PG Programs (MBA / MCA / M.Tech)</option>
                      <option value="Govt & Private Quota Guidance">Govt & Private Quota Guidance</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-full border border-[#d4af37]/60 hover:border-[#d4af37] bg-[#141414] hover:bg-[#1c1c1c] text-neutral-200 hover:text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-[#f9e281]" />
                    <span>{isSubmitting ? "Requesting Callback..." : "Request Fast Callback"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
