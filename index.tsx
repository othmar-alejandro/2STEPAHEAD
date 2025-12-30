import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ChevronDown,
  Menu,
  X,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Users,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  Monitor,
  Calendar,
  CreditCard,
  Search,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

// --- Components ---

// Updated Navbar
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <img src="/2stepsaheadlogo.png" alt="2 Step Ahead" className="w-32 h-32 object-contain group-hover:scale-105 transition-transform" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
          <a href="#home" className="hover:text-froyo-dark-blue transition-colors">Home</a>
          <a href="#sat" className="hover:text-froyo-dark-blue transition-colors">SAT & Prep</a>
          <a href="#pricing" className="hover:text-froyo-dark-blue transition-colors">Tutoring</a>
          <a href="#resources" className="hover:text-froyo-dark-blue transition-colors">Resources</a>
          <button className="bg-froyo-dark-blue text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2">
            <MessageCircle size={18} />
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-4 border-t border-slate-100">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Home</a>
          <a href="#sat" onClick={() => setIsOpen(false)} className="text-lg font-semibold">SAT & Prep</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Tutoring</a>
          <a href="#resources" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Resources</a>
          <button className="bg-froyo-dark-blue text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2">
            <MessageCircle size={20} />
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
      {/* Ambient Background Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-light-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <span className="inline-block text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm bg-froyo-dark-blue/10 px-4 py-2 rounded-full">
              Online Specialist Tutor
            </span>

            <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading text-slate-900">
              Cookie Cutters <br /> Are For Baking. <br />
              <span className="relative inline-block text-slate-900 mt-2">
                <span className="relative z-10">Education Requires a Personal Touch.</span>
                <svg className="absolute w-[105%] h-[40%] left-0 bottom-2 -z-10 text-froyo-gold opacity-40" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <path d="M5,5 C50,0 150,0 195,5 C200,10 200,50 195,55 C150,60 50,60 5,55 C0,50 0,10 5,5 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Expert K-12 Tutoring, SAT Prep, and Homeschool Support. We provide friendly, personalized treatment for every student's unique learning style.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95">
                Book Consultation
              </button>
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                    <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Tutor" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                  +12
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-bold text-slate-500">Available Now</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-froyo-dark-blue"></div>
                <span className="text-sm font-bold text-slate-500">Certified Experts</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Background Circle Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-froyo-gold via-froyo-cream to-froyo-light-blue rounded-full blur-sm opacity-80 scale-90"></div>
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full scale-95"></div>

            {/* Main Image */}
            <div className="relative z-10">
              <img
                src="/hero-tutor.png"
                alt="Tutor"
                className="w-full relative z-10 rounded-[3rem] shadow-2xl border-8 border-white"
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute top-10 -left-8 z-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-pulse">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Success Rate</p>
                <p className="text-lg font-bold">98%</p>
              </div>
            </div>

            <div className="absolute bottom-20 -right-8 z-20 bg-white p-4 rounded-2xl shadow-xl animate-pulse delay-700">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-froyo-dark-blue/10 p-2 rounded-lg">
                  <BookOpen className="text-froyo-dark-blue" size={20} />
                </div>
                <span className="font-bold">Subjects</span>
              </div>
              <div className="flex -space-x-2">
                <span className="bg-slate-100 px-2 py-1 rounded text-xs font-semibold">Math</span>
                <span className="bg-slate-100 px-2 py-1 rounded text-xs font-semibold">SAT</span>
                <span className="bg-slate-100 px-2 py-1 rounded text-xs font-semibold">Science</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Bar (Floating Bottom) */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl border border-slate-100 p-4 md:p-6 mx-auto max-w-5xl relative z-30">
          <form className="grid md:grid-cols-4 gap-4 items-end" onSubmit={e => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-bold text-sm text-slate-500 uppercase flex items-center gap-2">
                <Calendar size={14} /> Subject
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-semibold focus:outline-none focus:ring-2 focus:ring-froyo-dark-blue">
                <option>Select Subject</option>
                <option>Mathematics</option>
                <option>Sciences</option>
                <option>English / LA</option>
                <option>SAT / ACT Prep</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-bold text-sm text-slate-500 uppercase flex items-center gap-2">
                <MapPin size={14} /> Location
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-semibold focus:outline-none focus:ring-2 focus:ring-froyo-dark-blue">
                <option>Online (Zoom)</option>
                <option>In-Person (Kendall)</option>
                <option>In-Person (Home)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-bold text-sm text-slate-500 uppercase flex items-center gap-2">
                <Users size={14} /> Level
              </label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 font-semibold focus:outline-none focus:ring-2 focus:ring-froyo-dark-blue">
                <option>High School</option>
                <option>Middle School</option>
                <option>Elementary</option>
              </select>
            </div>
            <button className="bg-froyo-dark-blue text-white font-bold p-3 rounded-xl hover:bg-slate-800 transition-colors shadow-lg h-[50px] flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Book Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-froyo-dark-blue font-bold tracking-widest uppercase text-sm mb-4 block">Personalized Learning</span>
            <h2 className="text-4xl md:text-5xl lg:text-[50px] leading-tight mb-6">
              Is your child lost in a classroom of 50 students?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Every student learns differently. We provide the undivided attention and custom strategy needed to turn struggle into strength.
            </p>
            <div className="space-y-4">
              {[
                "1-on-1 focus on specific knowledge gaps",
                "Study strategies tailored to their personality",
                "Encouraging environment that builds confidence"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 bg-froyo-light-blue/10 p-1 rounded">
                    <CheckCircle className="text-froyo-light-blue" size={20} />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-froyo-gold/20 rounded-3xl -rotate-2"></div>
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
              alt="Student success"
              className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StickyPrograms = () => {
  const [activeTab, setActiveTab] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      title: "K-12 Tutoring",
      desc: "Math, English, Science, and Humanities. We don't just help with homework; we build foundations.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
      features: ["Personalized Learning Plans", "Homework Assistance", "Subject Mastery"]
    },
    {
      title: "Homeschool Support",
      desc: "Co-op management, curriculum design, and evaluation services for homeschooling families in South Florida.",
      image: "/homeschool-support.png",
      features: ["Curriculum Design", "Portfolio Management", "Annual Evaluations"]
    },
    {
      title: "Test Prep (SAT/ACT)",
      desc: "Strategic test prep designed to maximize scores without the burnout. Proven methodology.",
      image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=600&q=80",
      features: ["Score Improvement Guarantee", "Practice Tests", "Strategy Workshops"]
    },
    {
      title: "Special Needs",
      desc: "Certified expertise in ADHD, Dyslexia, and Anxiety support. We adapt to the student, not the other way around.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
      features: ["IEP Support", "Multi-Sensory Learning", "Executive Function Coaching"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveTab(index);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
    );

    imageRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    setActiveTab(index);
    imageRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl lg:text-[60px] mb-12 font-heading text-slate-800">Our Programs</h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left: Sticky Info List */}
          <div className="hidden lg:block sticky top-32">
            <div className="space-y-6">
              {sections.map((s, i) => (
                <button
                  key={i}
                  onClick={() => scrollToSection(i)}
                  className={`w-full text-left transition-all duration-300 group`}
                >
                  <h3 className={`text-3xl font-bold mb-2 transition-colors ${activeTab === i ? 'text-froyo-dark-blue scale-105' : 'text-slate-300 hover:text-slate-400'}`}>
                    {s.title}
                  </h3>
                  <div className={`overflow-hidden transition-all duration-500 ${activeTab === i ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-slate-600 text-sm font-medium border-l-4 border-froyo-gold pl-4">
                      {s.desc.substring(0, 60)}...
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-12 bg-froyo-cream/30 p-6 rounded-2xl border border-froyo-gold/20">
              <p className="font-bold text-slate-700 mb-2">Need help choosing?</p>
              <a href="#contact" className="text-froyo-dark-blue font-bold hover:underline">Schedule a free consultation →</a>
            </div>
          </div>

          {/* Right: Scrolling Full Cards */}
          <div className="space-y-24 pb-20">
            {sections.map((s, i) => (
              <div
                key={i}
                data-index={i}
                ref={(el) => (imageRefs.current[i] = el)}
                className="bg-white rounded-[2.5rem] p-3 shadow-2xl border border-slate-100 overflow-hidden group transition-all duration-500"
              >
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-8">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="px-6 pb-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">{s.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    {s.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {s.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <CheckCircle size={18} className="text-green-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-froyo-dark-blue transition-colors flex items-center justify-center gap-2 group/btn">
                    Learn More
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const SummerSAT = () => {
  return (
    <section id="sat" className="py-24 bg-froyo-dark-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-froyo-light-blue rounded-full filter blur-[120px] opacity-20 -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-froyo-gold text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">Exclusive Summer 2025</span>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] mb-6">Summer SAT Intensive</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Master the August SAT with our immersive 4-week bootcamp. Limited seats available.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <Calendar className="text-froyo-gold mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Schedule</h3>
            <p className="opacity-80">June 30 – July 25</p>
            <p className="opacity-80">Mon, Wed, Fri | 10am - 12pm</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <MapPin className="text-froyo-gold mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Location</h3>
            <p className="opacity-80">West Kendall Facility</p>
            <p className="opacity-80">Private In-Person Sessions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <Clock className="text-froyo-gold mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-2">Instruction</h3>
            <p className="opacity-80">24+ Hours of Live Teaching</p>
            <p className="opacity-80">Max 6 Students per Group</p>
          </div>
        </div>

        <div className="bg-white text-slate-900 rounded-[40px] p-8 md:p-16 shadow-2xl grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">Course Features</h3>
            <div className="space-y-6">
              {[
                { title: "12 Live Sessions", desc: "Intensive 2-hour blocks covering Math & R&W." },
                { title: "Personalized Study Plan", desc: "Custom homework path based on your diagnostic." },
                { title: "Strategic Mastery", desc: "Learn the shortcuts the College Board doesn't want you to know." },
                { title: "Weekly Practice Tests", desc: "Simulated exam environments with deep review." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-froyo-gold/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="text-froyo-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-6">Secure Your Student's Seat</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Select Plan</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 bg-white border-2 border-froyo-dark-blue rounded-xl cursor-pointer">
                      <input type="radio" name="sat-plan" defaultChecked className="w-5 h-5 accent-froyo-dark-blue" />
                      <div className="flex justify-between w-full items-center">
                        <span className="font-bold">Pay in Full</span>
                        <span className="text-froyo-dark-blue font-bold">$1,200</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 bg-white border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors">
                      <input type="radio" name="sat-plan" className="w-5 h-5 accent-froyo-dark-blue" />
                      <div className="flex justify-between w-full items-center">
                        <span className="font-bold">Payment Plan</span>
                        <span className="text-slate-500 font-bold">2 x $600</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="col-span-2">
                  <input type="text" placeholder="Student's Full Name" className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-froyo-dark-blue outline-none" />
                </div>
                <div>
                  <input type="email" placeholder="Parent Email" className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-froyo-dark-blue outline-none" />
                </div>
                <div>
                  <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-froyo-dark-blue outline-none" />
                </div>
                <div className="col-span-2">
                  <div className="relative">
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                    <input type="text" placeholder="Card Information" className="w-full p-4 pl-12 rounded-xl border border-slate-300 focus:ring-2 focus:ring-froyo-dark-blue outline-none" />
                  </div>
                </div>
              </div>
              <button className="w-full bg-froyo-dark-blue text-white py-5 rounded-xl font-bold text-lg hover:bg-slate-800 transition-colors mt-4 flex items-center justify-center gap-2">
                Enroll Now - Secure Checkout <ArrowRight size={20} />
              </button>
              <p className="text-center text-xs text-slate-500">Payments secured via Stripe. Seats are non-refundable after June 15th.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const steps = [
    {
      num: "01",
      title: "Assess & Understand",
      desc: "We don't guess. We start with a deep dive into your student's unique learning style, current gaps, and academic goals.",
      icon: <Search className="text-white" size={24} />,
      color: "bg-froyo-light-blue"
    },
    {
      num: "02",
      title: "The Perfect Match",
      desc: "Chemistry matters. We pair assessments with our roster of expert mentors to find the personality fit that sparks motivation.",
      icon: <Users className="text-white" size={24} />,
      color: "bg-froyo-gold"
    },
    {
      num: "03",
      title: "Custom Execution",
      desc: "We build a tailored roadmap. No generic worksheets—just targeted strategies designed to turn weaknesses into superpowers.",
      icon: <MapPin className="text-white" size={24} />,
      color: "bg-froyo-dark-blue"
    },
    {
      num: "04",
      title: "Measurable Growth",
      desc: "We track progress weekly. You'll see the confidence build and the grades rise, backed by regular updates and communication.",
      icon: <Star className="text-white" size={24} />,
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Line */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-50 -z-10 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The 2 Step Method</span>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-heading text-slate-900 mb-6">
            From Struggle to <span className="text-froyo-light-blue">Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We've refined a process that goes beyond simple tutoring. It's a complete academic transformation system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.icon}
                </div>
                <span className="absolute top-8 right-8 text-6xl font-bold text-slate-100 -z-10 group-hover:text-slate-200 transition-colors">
                  {step.num}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-froyo-gold rounded-full blur-[80px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-froyo-light-blue rounded-full blur-[80px] opacity-20"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl text-white font-bold mb-6">Why families trust us?</h3>
            <p className="text-slate-300 text-lg mb-8">
              "This isn't just about passing a test. It's about giving your child the tools to handle any challenge life throws at them. That's the 2 Step Ahead promise."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <CheckCircle size={16} className="text-green-400" />
                <span>No Contracts</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <CheckCircle size={16} className="text-green-400" />
                <span>Satisfaction Guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                <CheckCircle size={16} className="text-green-400" />
                <span>Top 1% Tutors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: "Homework Help",
      tagline: "The Basic Support",
      price: "$45-65",
      focus: "Finishing assignments & daily accountability.",
      features: ["Assignment review", "Subject clarification", "Executive function coaching", "Virtual or In-person options"],
      color: "bg-white"
    },
    {
      name: "Personalized Lessons",
      tagline: "The Academic Pro",
      price: "$80-105",
      focus: "Closing learning gaps & advanced mastery.",
      features: ["Custom lesson planning", "Deep conceptual teaching", "Advanced subject support", "Progress reporting"],
      color: "border-froyo-gold border-2 bg-froyo-cream/10",
      featured: true
    },
    {
      name: "The Full Package",
      tagline: "Total Academic Overhaul",
      price: "$120-150",
      focus: "Complete K-12 academic management.",
      features: ["Daily homework + lessons", "Teacher communication", "Priority scheduling", "Curriculum oversight"],
      color: "bg-froyo-dark-blue text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[60px] mb-6">Flexible Plans for Every Student</h2>
          <p className="text-xl text-slate-600">Transparent pricing. Professional results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, i) => (
            <div key={i} className={`p-8 rounded-[40px] shadow-xl flex flex-col ${tier.color}`}>
              {tier.featured && <span className="bg-froyo-gold text-white px-4 py-1 rounded-full text-xs font-bold self-start mb-4 uppercase">Most Popular</span>}
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              <p className="opacity-70 mb-6">{tier.tagline}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="opacity-70">/hr</span>
              </div>
              <p className="font-semibold mb-6">Focus: {tier.focus}</p>
              <div className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f, j) => (
                  <div key={j} className="flex gap-3">
                    <CheckCircle className={tier.name.includes("Full") ? "text-froyo-gold" : "text-froyo-dark-blue"} size={20} />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.name.includes("Full") ? "bg-white text-froyo-dark-blue hover:bg-froyo-gold" : "bg-froyo-dark-blue text-white hover:bg-slate-800"}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: "What are the travel fees?", a: "For in-person sessions, there is no fee for locations within 5 miles of West Kendall. For 5-10 miles, a $15 per session travel fee applies." },
    { q: "Can we do a group session?", a: "Absolutely! We offer a 20% discount for groups of 2-4 students who want to study together." },
    { q: "What is your cancellation policy?", a: "We require 24 hours notice for all cancellations. Late cancellations are subject to 50% of the session fee." }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-center text-slate-800">Common Questions</h3>
        <div className="space-y-4 bg-white p-8 rounded-[2.5rem] shadow-xl">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-slate-100 last:border-0 pb-4">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left flex justify-between items-center py-4 font-bold text-lg text-slate-700 hover:text-froyo-dark-blue transition-colors"
              >
                {faq.q}
                <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="pb-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  // Static data for demonstration
  const testimonials = [
    {
      name: "Christine Jackson",
      handle: "luminous_statue_35",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
      quote: "2 Step Ahead transformed my daughter's math scores in just 3 months. She went from a C- to an A!"
    },
    {
      name: "Yasmine Garcia",
      handle: "pendulous_ukulele_30",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      quote: "Finally found a tutor who understands ADHD. They teach my son how to organize his brain, not just the subject.",
      active: true // Conceptually active
    },
    {
      name: "Sakura Palastri",
      handle: "salubrious_producer_83",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      quote: "The SAT prep was a game changer. My score increased by 210 points and I got into my dream school."
    },
    {
      name: "Bác. Lỡ Lĩnh",
      handle: "puckish_cookies_38",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=150&q=80",
      quote: "Professional, reliable, and incredibly effective. The weekly reports kept us perfectly in the loop."
    },
    {
      name: "Ibrahim Mahmud",
      handle: "limpid_cupcake_68",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      quote: "Our son actually looks forward to his sessions. The tutors are engaging and make learning fun again."
    },
    {
      name: "Margaret Taylor",
      handle: "amatory_clerk_73",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      quote: "We tried other centers, but the 1-on-1 attention here is unmatched. Worth every penny."
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Mesh Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-6">
            <Star size={16} className="text-slate-800" />
            <span className="font-bold text-sm text-slate-800 uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-[60px] font-bold text-slate-900 mb-6 font-heading">Our trusted clients</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500">
            Our mission is to drive progress and enhance the lives of our students by delivering superior educational support that exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`bg-white rounded-[2.5rem] p-10 shadow-xl flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300 ${t.active ? 'md:-mt-8 shadow-2xl relative z-10 scale-105 border border-slate-100' : ''}`}
            >
              <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full mb-6 object-cover shadow-lg border-2 border-white" />
              <h3 className="text-xl font-bold text-slate-900 mb-1">{t.name}</h3>
              <p className="text-sm text-slate-400 mb-8 font-medium">@{t.handle}</p>
              <p className="text-slate-600 leading-relaxed font-medium mb-10">
                "{t.quote}"
              </p>
              <div className="mt-auto">
                <div className="bg-indigo-50/50 p-4 rounded-full">
                  <svg className="w-6 h-6 text-indigo-200 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.2936 14.929 13.935C15.539 12.576 16.486 11.218 17.769 9.859L17.585 9.613C16.877 9.871 16.147 10 15.394 10C13.437 10 12.016 8.528 12.016 6.326C12.016 4.123 13.437 2.651 15.394 2.651C17.701 2.651 19.57 4.295 19.57 8.356C19.57 14.504 15.939 19.336 14.017 21ZM5 21L5 18C5 16.896 5.30401 15.2936 5.91201 13.935C6.52201 12.576 7.46901 11.218 8.752 9.859L8.568 9.613C7.86 9.871 7.13 10 6.377 10C4.42 10 3 8.528 3 6.326C3 4.123 4.42 2.651 6.377 2.651C8.68301 2.651 10.553 4.295 10.553 8.356C10.553 14.504 6.921 19.336 5 21Z" /></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = () => {
  return null; // Moved to Footer
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-[50px] mb-8">Start the academic overhaul today.</h2>
            <p className="text-xl opacity-70 mb-12 max-w-lg">
              Not sure which plan is right for you? Book a free 15-minute consultation to discuss your student's goals.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-froyo-dark-blue flex items-center justify-center text-white">
                  <MapPin size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-froyo-gold uppercase tracking-widest text-sm">Our Service Area</h4>
                  <p className="text-xl">West Kendall / The Hammocks, FL</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-froyo-dark-blue flex items-center justify-center text-white">
                  <GraduationCap size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-froyo-gold uppercase tracking-widest text-sm">Contact Us</h4>
                  <p className="text-xl">(305) 555-0123</p>
                  <p className="opacity-70">info@2stepahead.com</p>
                </div>
              </div>
            </div>

            {/* Placeholder for Map */}
            <div className="mt-12 w-full h-64 bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 flex items-center justify-center grayscale opacity-50">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 opacity-20" size={48} />
                <p className="text-slate-500">Service Area Map View</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[40px] p-8 md:p-12 text-slate-900 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Student Information Form</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Student Name</label>
                  <input type="text" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Grade Level</label>
                  <select className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none transition-all">
                    <option>Elementary (K-5)</option>
                    <option>Middle School (6-8)</option>
                    <option>High School (9-12)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Subject Needed</label>
                <input type="text" placeholder="e.g. Algebra 2, SAT Reading" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Primary Goal</label>
                <textarea rows={4} placeholder="Tell us what you're looking to achieve..." className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white outline-none transition-all"></textarea>
              </div>
              <button className="w-full bg-froyo-gold text-white py-5 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-froyo-gold/20">
                Book My Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const resourceLinks = [
    { name: "AP Study Guides", href: "#" },
    { name: "SAT Practice Tests", href: "#" },
    { name: "Pomodoro Timer", href: "#" },
    { name: "Cornell Note Taking", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/2stepsaheadlogo.png" alt="2 Step Ahead" className="w-32 h-32 object-contain bg-slate-800 rounded-lg p-1" />
              <span className="text-2xl font-heading text-white">2 Step Ahead</span>
            </div>
            <p className="max-w-sm mb-6 opacity-80">
              Empowering students to achieve their full potential through personalized tutoring and mentorship in South Florida.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Free Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-froyo-gold transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={14} /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 2 Step Ahead Tutoring. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="antialiased">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <StickyPrograms />
      <SummerSAT />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);