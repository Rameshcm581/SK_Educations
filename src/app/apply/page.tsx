"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  MessageCircle,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

function StepperForm() {
  const searchParams = useSearchParams();
  const initialServiceFromQuery = searchParams.get("service");

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "COLLEGE ADMISSION",
    stream: "Engineering (BE / B.Tech)",
    name: "",
    phone: "",
    email: "",
    city: "Chennai",
    qualification: "12th Std Completed",
    marks: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialServiceFromQuery) {
      setFormData((prev) => ({
        ...prev,
        service: decodeURIComponent(initialServiceFromQuery),
      }));
    }
  }, [initialServiceFromQuery]);

  const servicesList = [
    "COLLEGE ADMISSION",
    "CAREER COUNSELLING",
    "SCHOLARSHIP ASSISTANCE",
    "INTERNSHIP SUPPORT",
    "PLACEMENT ASSISTANCE",
    "SKILL DEVELOPMENT",
  ];

  const streamsList = [
    "Engineering (BE / B.Tech)",
    "Medical & Nursing (MBBS / B.Sc)",
    "Arts & Science (B.Com / BCA / BBA)",
    "Diploma Courses (Polytechnic)",
    "PG Programs (MBA / MCA / M.Tech)",
    "Govt & Private Quota Guidance",
  ];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === 1) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!formData.name || !formData.phone) {
        alert("Please provide both your name and phone number to proceed.");
        return;
      }
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setCurrentStep(4);
    }, 700);
  };

  const resetForm = () => {
    setSubmitted(false);
    setCurrentStep(1);
    setFormData({
      service: "COLLEGE ADMISSION",
      stream: "Engineering (BE / B.Tech)",
      name: "",
      phone: "",
      email: "",
      city: "Chennai",
      qualification: "12th Std Completed",
      marks: "",
      message: "",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Counseling Desk Information & Help */}
      <div className="lg:col-span-4 space-y-6">
        <div className="glass p-6 md:p-8 rounded-2xl relative border border-[#d4af37]/30">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37]">
            Admission Desk
          </span>
          <h3 className="text-xl font-serif font-bold text-white mt-1 mb-4">
            Personalized Guidance
          </h3>
          <p className="text-xs md:text-sm text-neutral-300 leading-relaxed mb-6">
            Our experienced counselors in West Tambaram evaluate student cutoff marks, institutional accreditations, and quota availability to guide you toward your ideal college.
          </p>

          <div className="space-y-4 text-xs">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-400 block font-mono uppercase text-[10px]">Direct Helpline</span>
                <a href={`tel:+91${SITE_DATA.contact.phone}`} className="text-white hover:text-[#f9e281] font-semibold text-sm">
                  {SITE_DATA.contact.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-400 block font-mono uppercase text-[10px]">Email Support</span>
                <a href={`mailto:${SITE_DATA.contact.email}`} className="text-white hover:text-[#f9e281] truncate block">
                  {SITE_DATA.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-400 block font-mono uppercase text-[10px]">Walk-in Center</span>
                <span className="text-neutral-200 leading-relaxed block">{SITE_DATA.contact.address}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <div>
                <span className="text-neutral-400 block font-mono uppercase text-[10px]">Working Hours</span>
                <span className="text-neutral-200">{SITE_DATA.contact.workingHours}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-800">
            <a
              href={SITE_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 hover:border-emerald-500 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Have Urgent Queries? Chat via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Trust Badges Box */}
        <div className="glass p-5 rounded-xl border border-[#d4af37]/20 flex items-center justify-around text-center text-xs">
          <div>
            <div className="font-serif font-bold text-lg gold-text">98%</div>
            <div className="text-[10px] uppercase font-mono text-neutral-400">Success Rate</div>
          </div>
          <div className="h-8 w-px bg-neutral-800" />
          <div>
            <div className="font-serif font-bold text-lg gold-text">50+</div>
            <div className="text-[10px] uppercase font-mono text-neutral-400">Institutions</div>
          </div>
          <div className="h-8 w-px bg-neutral-800" />
          <div>
            <div className="font-serif font-bold text-lg gold-text">100%</div>
            <div className="text-[10px] uppercase font-mono text-neutral-400">Free Counseling</div>
          </div>
        </div>
      </div>

      {/* Right Column: Multi-Step Stepper Form */}
      <div className="lg:col-span-8 glass p-8 md:p-10 rounded-2xl relative shadow-2xl border border-[#d4af37]/35">
        {/* Stepper Progress Bar Header */}
        {!submitted && (
          <div className="mb-8">
            <div className="flex items-center justify-between relative mb-2">
              {[
                { step: 1, label: "01. Service" },
                { step: 2, label: "02. Student Details" },
                { step: 3, label: "03. Academic Profile" },
              ].map((s) => {
                const isActive = currentStep === s.step;
                const isCompleted = currentStep > s.step;

                return (
                  <div
                    key={s.step}
                    className="flex flex-col items-center relative z-10 cursor-pointer"
                    onClick={() => {
                      if (s.step < currentStep) setCurrentStep(s.step);
                    }}
                  >
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                        isCompleted
                          ? "bg-[#d4af37] text-black shadow-[0_0_12px_#d4af37]"
                          : isActive
                          ? "bg-black border-2 border-[#d4af37] text-[#f9e281] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                          : "bg-[#181818] border border-neutral-700 text-neutral-500"
                      }`}
                    >
                      {isCompleted ? "✓" : `0${s.step}`}
                    </div>
                    <span
                      className={`text-[11px] font-mono mt-1 uppercase tracking-wider transition-colors ${
                        isActive
                          ? "text-[#f9e281] font-semibold"
                          : isCompleted
                          ? "text-neutral-300"
                          : "text-neutral-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}

              {/* Connecting Line */}
              <div className="absolute top-4 left-6 right-6 h-0.5 bg-neutral-800 -z-0">
                <div
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#f9e281] transition-all duration-300"
                  style={{
                    width:
                      currentStep === 1
                        ? "0%"
                        : currentStep === 2
                        ? "50%"
                        : "100%",
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: Select Service & Stream */}
        {currentStep === 1 && (
          <form onSubmit={handleNext} className="space-y-6 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-mono uppercase text-[#d4af37] tracking-wider">
                Step 01 of 03
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1">
                Select Guidance Service & Stream
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Choose the educational service you wish to apply for:
              </p>
            </div>

            {/* 6 Services Radio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {servicesList.map((srv) => {
                const isSelected = formData.service === srv;

                return (
                  <div
                    key={srv}
                    onClick={() => setFormData({ ...formData, service: srv })}
                    className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-[#d4af37]/15 border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)] text-white"
                        : "bg-black/50 border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <span className="text-xs font-semibold tracking-wide uppercase">
                      {srv}
                    </span>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? "border-[#d4af37] bg-[#d4af37]"
                          : "border-neutral-700"
                      }`}
                    >
                      {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Preferred Stream Dropdown */}
            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-2">
                Preferred Academic Stream *
              </label>
              <select
                value={formData.stream}
                onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/70 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm cursor-pointer"
              >
                {streamsList.map((stream) => (
                  <option key={stream} value={stream} className="bg-[#141414]">
                    {stream}
                  </option>
                ))}
              </select>
            </div>

            <div className="pt-4 flex justify-end border-t border-neutral-800">
              <button
                type="submit"
                className="px-7 py-3.5 rounded-full gold-btn text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Continue: Student Details</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Student & Contact Details */}
        {currentStep === 2 && (
          <form onSubmit={handleNext} className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-mono uppercase text-[#d4af37] tracking-wider">
                Step 02 of 03
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1">
                Student & Contact Details
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Provide student or parent contact information for counselor callbacks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                  Student / Parent Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                  City / District *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Chennai / Tambaram / Madurai"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-neutral-800">
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-xs uppercase tracking-wider text-neutral-300 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="px-7 py-3.5 rounded-full gold-btn text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>Continue: Academic Profile</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Academic Profile & Goals */}
        {currentStep === 3 && (
          <form onSubmit={handleFinalSubmit} className="space-y-5 animate-in fade-in duration-200">
            <div>
              <span className="text-xs font-mono uppercase text-[#d4af37] tracking-wider">
                Step 03 of 03
              </span>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-white mt-1">
                Academic Profile & Goals
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Provide academic status so we can match you with eligible government/private quotas and colleges.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                  Current Academic Status *
                </label>
                <select
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/70 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm cursor-pointer"
                >
                  <option value="12th Std Appearing" className="bg-[#141414]">12th Std Appearing</option>
                  <option value="12th Std Completed" className="bg-[#141414]">12th Std Completed</option>
                  <option value="Polytechnic Diploma" className="bg-[#141414]">Polytechnic Diploma</option>
                  <option value="Undergraduate Degree" className="bg-[#141414]">Undergraduate Degree</option>
                  <option value="Graduate / Working" className="bg-[#141414]">Graduate / Working</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                  Marks / Percentage / Cutoff (Approx)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 85% or 175 Cutoff"
                  value={formData.marks}
                  onChange={(e) => setFormData({ ...formData, marks: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase font-mono tracking-wider text-neutral-300 mb-1.5">
                Target Institutions or Questions
              </label>
              <textarea
                rows={3}
                placeholder="Mention preferred colleges, budget, or scholarship queries..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/60 border border-neutral-800 focus:border-[#d4af37] focus:outline-none text-white text-sm resize-none"
              />
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-neutral-800">
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-xs uppercase tracking-wider text-neutral-300 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 rounded-full gold-btn text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-2xl disabled:opacity-50"
              >
                <Send className="w-4 h-4 text-black" />
                <span>{isSubmitting ? "Submitting Application..." : "Submit Application ✦"}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: Success Confirmation Screen */}
        {currentStep === 4 && submitted && (
          <div className="text-center py-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-950 border-2 border-emerald-500/60 flex items-center justify-center mx-auto mb-4 shadow-[0_0_25px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-9 h-9 text-emerald-400" />
            </div>

            <span className="text-xs font-mono uppercase text-emerald-400 tracking-widest font-semibold">
              Application Priority Confirmed
            </span>
            <h3 className="text-2xl font-serif font-bold text-white mt-1">
              Thank You, {formData.name}!
            </h3>
            <p className="text-sm text-neutral-300 mt-2 max-w-md mx-auto leading-relaxed">
              Your admission guidance application has been registered. Our senior counselor from West Tambaram will contact you at{" "}
              <strong className="text-white">{formData.phone}</strong> within 2 business hours.
            </p>

            {/* Application Summary Box */}
            <div className="my-6 p-4 rounded-xl bg-black/60 border border-neutral-800 text-left max-w-md mx-auto text-xs space-y-1.5 font-mono">
              <div className="flex justify-between text-neutral-400">
                <span>Applied Service:</span>
                <span className="text-[#f9e281] font-semibold">{formData.service}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Target Stream:</span>
                <span className="text-white">{formData.stream}</span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Location:</span>
                <span className="text-white">{formData.city}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/918925965098?text=Hello%20SK%20Education,%20I%20just%20submitted%20my%20application%20for%20${encodeURIComponent(
                  formData.service
                )}%20(${encodeURIComponent(formData.stream)})%20for%20${encodeURIComponent(
                  formData.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Chat</span>
              </a>

              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-neutral-700 hover:border-[#d4af37] text-xs text-neutral-300 transition-colors uppercase tracking-wider"
              >
                Submit Another Application
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f0ece4] selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
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
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        {/* Banner */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#f9e281] mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Official Admission Portal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
            <span className="gold-text">Student Application Desk</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-400 mt-2 max-w-2xl leading-relaxed">
            Begin your admission guidance journey in 3 simple steps. Complete the form below to connect directly with senior counselors.
          </p>
        </div>

        {/* Stepper Form wrapped in Suspense for searchParams */}
        <Suspense
          fallback={
            <div className="p-12 text-center text-neutral-400 font-mono text-sm">
              Loading Application Desk...
            </div>
          }
        >
          <StepperForm />
        </Suspense>
      </main>
    </div>
  );
}
