import { SITE_DATA } from "@/data/siteContent";

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-[#0e0e0e] relative border-t border-[#d4af37]/15">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]/80">
            Academic Programs
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mt-2">
            <span className="gold-text">COURSES & ADMISSIONS</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
            Government & Private Sector Admission Support across Accredited Institutions
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-4" />
        </div>

        {/* 6 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_DATA.courses.map((course) => (
            <div
              key={course.number}
              className="group glass p-8 rounded-2xl flex flex-col justify-between shine-effect hover:border-[#d4af37]/60 transition-all duration-300 relative"
            >
              <div>
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-serif font-extrabold text-[#d4af37]/30 group-hover:text-[#d4af37] transition-colors">
                    {course.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#171717] border border-[#d4af37]/20 flex items-center justify-center text-xs font-mono text-[#f9e281]">
                    ✦
                  </div>
                </div>

                {/* Course Name */}
                <h3 className="text-xl font-serif font-bold gold-text mb-3 tracking-wide">
                  {course.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {course.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap gap-1.5">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-[#161616] text-neutral-400 border border-neutral-800 group-hover:border-[#d4af37]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
