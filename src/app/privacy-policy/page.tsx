import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { SITE_DATA } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Privacy Policy | SK Education Services",
  description:
    "Privacy Policy for SK Education Services. Learn how we handle student counseling records, admission applications, and personal data with utmost confidentiality.",
  alternates: {
    canonical: "https://www.skeducationservice.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f0ece4] selection:bg-[#d4af37]/30 selection:text-white">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[#0b0b0b]/90 backdrop-blur-md border-b border-[#d4af37]/20 py-4 px-6 md:px-12">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
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
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Page Banner */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-xs font-semibold text-[#f9e281] mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Policy Document</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight">
            <span className="gold-text">Privacy Policy</span>
          </h1>
          <p className="text-sm md:text-base text-neutral-400 mt-3 leading-relaxed">
            Effective Date: October 2026 | Last Updated: October 12, 2026
          </p>
        </div>

        {/* Introduction Callout */}
        <div className="glass p-6 md:p-8 rounded-2xl mb-12 border border-[#d4af37]/30 relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#1b1b1b] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <Lock className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-white mb-2">
                Our Commitment to Student Privacy
              </h2>
              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                At <strong className="text-white">SK Education Services</strong>, accessible from{" "}
                <Link href="/" className="text-[#f9e281] hover:underline">
                  skeducationservice.com
                </Link>
                , we hold student and parental trust in the highest regard. This Privacy Policy
                explains how we collect, handle, safeguard, and disclose your personal and academic
                information during educational counseling, college admissions, scholarship
                guidance, and placement support.
              </p>
            </div>
          </div>
        </div>

        {/* Structured Sections */}
        <div className="space-y-10 text-neutral-300 text-sm md:text-base leading-relaxed">
          {/* Section 1 */}
          <section className="border-b border-neutral-800/80 pb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-sm font-mono text-[#d4af37]">01.</span>
              Information We Collect
            </h3>
            <p className="mb-4">
              When you consult with our counselors, submit an admission inquiry form, or visit our
              Tambaram counseling center, we may collect the following details:
            </p>
            <ul className="space-y-2.5 pl-2">
              {[
                "Personal Identifiers: Full Name, Date of Birth, Gender, and Category (for quota eligibility).",
                "Contact Details: Mobile Number, WhatsApp Number, Email Address, and Residential Address.",
                "Academic Records: 10th & 12th standard marksheets, Graduation GPA, Entrance Exam scores (NEET, JEE, TANCET, etc.).",
                "Course Preferences: Desired stream (Engineering, Medical, Nursing, Arts & Science, PG) and institutional choices.",
                "Inquiry Information: Any specific queries, notes, or background shared during 1-on-1 counseling.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-b border-neutral-800/80 pb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-sm font-mono text-[#d4af37]">02.</span>
              How We Use Your Information
            </h3>
            <p className="mb-3">
              We strictly utilize the information gathered for legitimate educational purposes,
              including:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="text-[#d4af37]">✦</span>
                <span>
                  <strong>Admissions Processing:</strong> Submitting applications and verifying
                  eligibility with approved colleges and deemed universities.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#d4af37]">✦</span>
                <span>
                  <strong>Career Counseling:</strong> Providing custom guidance based on student
                  merit, psychometric aptitude, and career aspirations.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#d4af37]">✦</span>
                <span>
                  <strong>Scholarship Guidance:</strong> Identifying central, state, and
                  institutional fee concessions for which the student is eligible.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#d4af37]">✦</span>
                <span>
                  <strong>Communication:</strong> Providing counseling appointment updates, cutoff
                  notifications, and admission status via phone, SMS, WhatsApp, or email.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-b border-neutral-800/80 pb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-sm font-mono text-[#d4af37]">03.</span>
              Confidentiality & Non-Disclosure
            </h3>
            <p className="mb-4">
              <strong className="text-white">We do not sell, rent, lease, or trade</strong> student
              or parent personal data to third-party telemarketing companies, ad networks, or
              unaffiliated lead brokers.
            </p>
            <p>
              Information is only shared with accredited academic institutions, universities, and
              examination or scholarship authorities strictly upon your authorization for the
              purpose of securing admissions.
            </p>
          </section>

          {/* Section 4 */}
          <section className="border-b border-neutral-800/80 pb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-sm font-mono text-[#d4af37]">04.</span>
              Data Protection & Security
            </h3>
            <p className="mb-4">
              We implement industry-standard technical and operational safeguards to protect your
              personal records from unauthorized access, loss, or alteration. All digital data
              transmitted through our website is protected using secure SSL/TLS encryption. Physical
              admission forms submitted at our Tambaram center are stored securely with restricted
              staff access.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-b border-neutral-800/80 pb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-sm font-mono text-[#d4af37]">05.</span>
              Cookies & Analytics
            </h3>
            <p className="mb-4">
              Our website uses basic functional cookies and anonymous web analytics to ensure proper
              navigation, measure page responsiveness, and optimize user experience across mobile
              and desktop devices. You may disable cookies in your web browser preferences at any
              time.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-b border-neutral-800/80 pb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-sm font-mono text-[#d4af37]">06.</span>
              Your Rights as a Student or Parent
            </h3>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="text-[#d4af37]">✔</span>
                <span>Request a copy of the personal and academic records we maintain.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#d4af37]">✔</span>
                <span>Request immediate correction or updating of incorrect contact details.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#d4af37]">✔</span>
                <span>
                  Opt out of future counseling updates or request the deletion of your inquiry data.
                </span>
              </li>
            </ul>
          </section>

          {/* Section 7: Contact & Grievance */}
          <section className="glass p-8 rounded-2xl border border-[#d4af37]/30 mt-8">
            <h3 className="text-xl font-serif font-bold gold-text mb-4">
              Contact Desk & Grievance Officer
            </h3>
            <p className="text-neutral-300 mb-6">
              If you have any questions or concerns regarding our Privacy Policy or data handling
              practices, please reach out to our administration desk:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-mono text-neutral-400">Office Address</div>
                  <div className="text-white mt-0.5">{SITE_DATA.contact.address}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-mono text-neutral-400">Phone</div>
                  <a
                    href={`tel:+91${SITE_DATA.contact.phone}`}
                    className="text-white hover:text-[#f9e281] transition-colors mt-0.5 block"
                  >
                    {SITE_DATA.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-mono text-neutral-400">Email</div>
                  <a
                    href={`mailto:${SITE_DATA.contact.email}`}
                    className="text-white hover:text-[#f9e281] transition-colors mt-0.5 block"
                  >
                    {SITE_DATA.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-mono text-neutral-400">Working Hours</div>
                  <div className="text-white mt-0.5">{SITE_DATA.contact.workingHours}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full gold-btn text-xs uppercase tracking-wider font-bold"
              >
                <ArrowLeft className="w-4 h-4 text-black" />
                <span>Return to Homepage</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
