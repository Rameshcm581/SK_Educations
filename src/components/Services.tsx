import Link from "next/link";
import {
  GraduationCap,
  Compass,
  Award,
  Briefcase,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function Services() {
  const iconMap: Record<string, React.ElementType> = {
    GraduationCap,
    Compass,
    Award,
    Briefcase,
    TrendingUp,
    Sparkles,
  };

  return (
    <section id="services" className="py-24 bg-[#0b0b0b] relative border-t border-[#d4af37]/15">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]/80">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2">
            <span className="gold-text">OUR SERVICES</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
            Click on any service card below to open our dedicated step-by-step admission application desk.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_DATA.services.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;

            return (
              <Link
                key={service.id}
                href={`/apply?service=${encodeURIComponent(service.title)}`}
                className="group relative glass p-8 rounded-2xl flex flex-col justify-between hover:-translate-y-2 hover:border-[#d4af37] cursor-pointer transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Top Bar with Icon & Action Prompt */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-[#171717] border border-[#d4af37]/30 flex items-center justify-center group-hover:border-[#d4af37] group-hover:bg-[#202020] transition duration-300">
                      <Icon className="w-7 h-7 text-[#d4af37] group-hover:scale-110 transition duration-300" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#d4af37]/70 group-hover:text-[#f9e281] flex items-center gap-1">
                      <span>Apply</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold gold-text mb-3 tracking-wide">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Animated Gold Bottom Hover Line */}
                <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 group-hover:text-[#f9e281] transition-colors">
                    Start Step-by-Step Application
                  </span>
                  <div className="h-0.5 w-8 bg-[#d4af37]/30 group-hover:w-16 group-hover:bg-[#d4af37] transition-all duration-300" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
