export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
}

export interface CourseItem {
  number: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const SITE_DATA = {
  name: "SK Education Services",
  tagline: "Guiding Today. Shaping Tomorrow.",
  subtitle: "Your gateway to global academic excellence",
  contact: {
    address: "No.36, 2nd Floor, Duraiswami Reddy Street, West Tambaram, Chennai-600045",
    phone: "8925965098",
    phoneFormatted: "+91 89259 65098",
    email: "Career@skeducationservice.com",
    workingHours: "Mon - Sat: 9:00 AM - 6:00 PM",
    website: "www.skeducationservice.com",
    whatsappUrl: "https://wa.me/918925965098?text=Hi%20SK%20Education%20Services,%20I%20want%20to%20know%20more%20about%20admissions%20guidance",
    mapsUrl: "https://maps.google.com/?q=No.36+Duraiswami+Reddy+Street+West+Tambaram+Chennai+600045",
  },
  stats: [
    { value: "98%", label: "Success Rate" },
    { value: "500+", label: "Students Guided" },
    { value: "50+", label: "Partner Universities" },
    { value: "10+", label: "Years Experience" },
  ],
  services: [
    {
      id: "college-admission",
      title: "COLLEGE ADMISSION",
      desc: "UG, PG, Diploma, Engineering, Medical, Nursing, Paramedical, Arts & Science, and MBA admissions with premier accredited institutions.",
      iconName: "GraduationCap",
    },
    {
      id: "career-counselling",
      title: "CAREER COUNSELLING",
      desc: "Personalized psychometric evaluation and 1-on-1 counseling to choose the right academic path for a thriving future.",
      iconName: "Compass",
    },
    {
      id: "scholarship-assistance",
      title: "SCHOLARSHIP ASSISTANCE",
      desc: "Expert guidance for state, central government, and merit-based private scholarships to support your educational journey.",
      iconName: "Award",
    },
    {
      id: "internship-support",
      title: "INTERNSHIP SUPPORT",
      desc: "Build real-world experience, boost confidence, and prepare for career success with premier industry internship placements.",
      iconName: "Briefcase",
    },
    {
      id: "placement-assistance",
      title: "PLACEMENT ASSISTANCE",
      desc: "Dedicated support for resume building, mock interviews, and access to campus recruitment drives across top firms.",
      iconName: "TrendingUp",
    },
    {
      id: "skill-development",
      title: "SKILL DEVELOPMENT",
      desc: "Practical career-readiness programs, technical workshops, and soft skills training to enhance student employability.",
      iconName: "Sparkles",
    },
  ],
  courses: [
    {
      number: "01",
      name: "ENGINEERING",
      desc: "BE / B.Tech in Computer Science, AI & DS, Civil, Mechanical, Electrical, Electronics & Communication.",
      tags: ["BE", "B.Tech", "AI & ML", "CSE", "ECE", "Mechanical"],
    },
    {
      number: "02",
      name: "MEDICAL & NURSING",
      desc: "MBBS, BDS, B.Sc Nursing, GNM, Allied Health Sciences, Pharmacy, and specialized Paramedical Courses.",
      tags: ["MBBS", "BDS", "B.Sc Nursing", "GNM", "B.Pharm", "Allied Health"],
    },
    {
      number: "03",
      name: "ARTS & SCIENCE",
      desc: "Comprehensive undergraduate programs: BA, B.Sc, B.Com, BBA, BCA, MA, M.Sc, M.Com, MBA across top colleges.",
      tags: ["B.Com", "BCA", "BBA", "B.Sc", "MBA", "M.Sc"],
    },
    {
      number: "04",
      name: "DIPLOMA COURSES",
      desc: "Polytechnic Diploma in Core Engineering, Nursing Diploma, Paramedical Diploma, and technical certifications.",
      tags: ["Polytechnic", "Engineering Diploma", "Medical Tech"],
    },
    {
      number: "05",
      name: "PG PROGRAMS",
      desc: "Higher education specializations: M.Tech, MBA, MCA, M.Sc Nursing, MD, MS, and advanced Executive PG Diplomas.",
      tags: ["M.Tech", "MBA", "MCA", "M.Sc Nursing", "PG Diploma"],
    },
    {
      number: "06",
      name: "GOVT & PRIVATE ADMISSIONS",
      desc: "Dedicated counsel & quota navigation for Government Colleges, Leading Private Universities & Deemed Institutions.",
      tags: ["Govt Quota", "Deemed Univ", "Direct Admissions", "Counselling"],
    },
  ],
  faqs: [
    {
      question: "What services do you offer?",
      answer: "We offer end-to-end education consulting, career counseling, admission assistance for colleges & universities, scholarship guidance, internship support, and placement readiness programs.",
    },
    {
      question: "How can I apply for admission through SK Education Services?",
      answer: "You can apply directly using our online Inquiry Form on this page, or contact our counseling desk by phone (+91 89259 65098) or email (Career@skeducationservice.com). Our advisors will evaluate your profile and guide you through selecting institutions, documentation, and admission confirmation.",
    },
    {
      question: "Do you help with scholarships and financial aid?",
      answer: "Yes, we provide extensive support identifying government schemes, institutional fee concessions, and private merit scholarships to help reduce student financial burden.",
    },
    {
      question: "Where is your office located and what are the working hours?",
      answer: "Our office is located at No.36, 2nd Floor, Duraiswami Reddy Street, West Tambaram, Chennai-600045. We are open Monday to Saturday from 9:00 AM to 6:00 PM.",
    },
    {
      question: "Can parents visit directly for in-person counseling?",
      answer: "Absolutely! We welcome parents and students for free face-to-face counseling at our Tambaram office. You can also call ahead to schedule an appointment with a senior counselor.",
    },
  ],
  navLinks: [
    { label: "Home", href: "/#hero" },
    { label: "About Us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Courses", href: "/#courses" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" },
  ],
};
