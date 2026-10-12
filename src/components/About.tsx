import { CheckCircle2, Award, Users, Landmark, Clock } from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export default function About() {
  const statIcons = [Award, Users, Landmark, Clock];

  return (
    <section id="about" className="py-24 bg-[#0e0e0e] relative border-t border-[#d4af37]/15">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]/80">
            Who We Are
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2">
            <span className="gold-text">About Us</span>
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mission Card */}
          <div className="lg:col-span-7 glass p-8 md:p-10 rounded-2xl relative">
            <span className="inline-block px-3 py-1 rounded-md bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#f9e281] mb-4">
              Our Vision & Mission
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
              Premier Education Partner & Career Catalyst
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-4 text-base md:text-lg">
              <strong className="text-white">SK Education Services</strong> is a trusted education consultancy headquartered in West Tambaram, Chennai. We are dedicated to mentoring students through every milestone of their academic journey — from course selection and college applications to scholarship acquisition and campus placement.
            </p>
            <p className="text-neutral-400 leading-relaxed mb-6">
              Our mission is to bridge the gap between ambition and achievement. Whether you are aiming for prestigious Engineering colleges, premier Medical & Nursing institutions, Arts & Science programs, or postgraduate degrees, our expert counselors ensure you secure the rightful path suited to your strengths and aspirations.
            </p>

            {/* Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-800">
              {[
                "100% Verified College Affiliations",
                "Personalized 1-on-1 Mentorship",
                "Scholarship & Fee Concession Support",
                "Transparent & Ethical Guidance",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {SITE_DATA.stats.map((stat, idx) => {
              const Icon = statIcons[idx % statIcons.length];
              return (
                <div
                  key={stat.label}
                  className="glass p-6 rounded-2xl text-center group hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1b1b1b] border border-[#d4af37]/30 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#d4af37] transition duration-300">
                    <Icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-serif font-extrabold gold-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
