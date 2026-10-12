"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0b0b0b] relative border-t border-[#d4af37]/15">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]/80">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2">
            <span className="gold-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
            Find answers to common queries regarding admissions, counseling, and scholarships.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {SITE_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="glass rounded-xl border border-neutral-800 transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg md:text-xl font-semibold text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#d4af37] shrink-0" />
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#181818] border border-[#d4af37]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#d4af37]/20 border-[#d4af37]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#d4af37]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-neutral-300 text-sm md:text-base leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-14 p-8 rounded-2xl glass text-center border border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-xl font-serif font-bold text-white">
              Still have questions about admissions?
            </h4>
            <p className="text-sm text-neutral-400 mt-1">
              Our career counselors in West Tambaram are ready to assist you.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full gold-btn flex items-center gap-2 text-xs font-bold tracking-wider uppercase shrink-0"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
