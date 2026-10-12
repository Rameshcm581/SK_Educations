import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] flex flex-col items-center justify-center p-6 select-none">
      {/* Background radial spotlight */}
      <div className="absolute inset-0 bg-radial-gradient from-[#d4af37]/15 via-transparent to-transparent pointer-events-none" />

      {/* Brand Shield & Square Logo Frame with Corner Brackets */}
      <div className="relative mb-6 flex items-center justify-center">
        {/* Golden Corner Brackets */}
        <div className="absolute -inset-3 pointer-events-none">
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4af37]" />
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4af37]" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4af37]" />
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4af37]" />
        </div>

        <div className="relative w-24 h-24 rounded-xl bg-white border border-[#d4af37] p-2 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.35)] overflow-hidden">
          <Image
            src="/assets/logo.png"
            alt="SK Education Services"
            width={85}
            height={85}
            priority
            className="object-contain"
          />
        </div>
      </div>

      <h2 className="text-lg md:text-xl font-serif font-extrabold tracking-[0.25em] text-white uppercase mb-1">
        <span className="gold-text">SK Education</span> Services
      </h2>
      <p className="text-[11px] font-mono tracking-[0.25em] text-[#d4af37]/80 uppercase mb-6">
        Guiding Today · Shaping Tomorrow
      </p>

      {/* Hairline Progress Bar */}
      <div className="w-56 h-0.5 bg-neutral-900 rounded-full overflow-hidden border border-[#d4af37]/30 relative">
        <div className="h-full bg-gradient-to-r from-[#d4af37] via-[#fff3ad] to-[#d4af37] animate-progress" />
      </div>
    </div>
  );
}
