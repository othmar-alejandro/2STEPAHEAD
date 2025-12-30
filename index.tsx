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
  CreditCard
} from 'lucide-react';

// --- Types ---
interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-froyo-dark-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">2</div>
          <span className={`text-2xl font-heading tracking-tighter ${scrolled ? 'text-froyo-dark-blue' : 'text-white'}`}>
            2 Step Ahead
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-semibold">
          <a href="#home" className={`${scrolled ? 'text-slate-700' : 'text-white'} hover:text-froyo-gold transition-colors`}>Home</a>
          <a href="#sat" className={`${scrolled ? 'text-slate-700' : 'text-white'} hover:text-froyo-gold transition-colors`}>SAT/ACT Courses</a>
          <a href="#pricing" className={`${scrolled ? 'text-slate-700' : 'text-white'} hover:text-froyo-gold transition-colors`}>Tutoring Plans</a>
          <div className="group relative">
            <button className={`${scrolled ? 'text-slate-700' : 'text-white'} flex items-center gap-1 hover:text-froyo-gold transition-colors`}>
              Services <ChevronDown size={16} />
            </button>
            <div className="absolute top-full -left-4 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-white shadow-xl rounded-xl p-4 w-64 border border-slate-100">
                <a href="#services" className="block p-3 hover:bg-slate-50 rounded-lg text-slate-700">Homeschooling & Co-ops</a>
                <a href="#services" className="block p-3 hover:bg-slate-50 rounded-lg text-slate-700">Special Needs Support</a>
                <a href="#services" className="block p-3 hover:bg-slate-50 rounded-lg text-slate-700">College Counseling</a>
              </div>
            </div>
          </div>
          <a href="#resources" className={`${scrolled ? 'text-slate-700' : 'text-white'} hover:text-froyo-gold transition-colors`}>Free Resources</a>
          <button className="bg-froyo-gold text-white px-6 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-froyo-gold/20">
            Book Consultation
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu size={28} className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-4">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Home</a>
          <a href="#sat" onClick={() => setIsOpen(false)} className="text-xl font-semibold text-froyo-dark-blue">SAT/ACT Courses</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Tutoring Plans</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Services</a>
          <a href="#resources" onClick={() => setIsOpen(false)} className="text-xl font-semibold">Free Resources</a>
          <button className="bg-froyo-gold text-white py-4 rounded-xl font-bold">Book Consultation</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-[60px] leading-tight text-white max-w-4xl mx-auto mb-6 animate-fade-in">
          Cookie Cutters Are For Baking. <span className="text-froyo-gold">Education Requires a Personal Touch.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in delay-200">
          Expert K-12 Tutoring, SAT Prep, and Homeschool Support in South Florida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-300">
          <a href="#sat" className="bg-white text-froyo-dark-blue px-8 py-4 rounded-full font-bold text-lg hover:bg-froyo-cream transition-colors w-full sm:w-auto text-center">
            View Summer SAT Course
          </a>
          <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all w-full sm:w-auto text-center">
            Book Consultation
          </button>
        </div>
      </div>

      {/* Trust Strip */}
      <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md py-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-20">
          <div className="flex items-center gap-3 text-white">
            <CheckCircle className="text-froyo-gold" size={24} />
            <span className="font-semibold">15+ Years Exp</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <CheckCircle className="text-froyo-gold" size={24} />
            <span className="font-semibold">Special Needs Certified</span>
          </div>
          <div className="flex items-center gap-3 text-white">
            <CheckCircle className="text-froyo-gold" size={24} />
            <span className="font-semibold">Custom Curriculums</span>
          </div>
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
  const sections = [
    { 
      title: "K-12 Tutoring", 
      desc: "Math, English, Science, and Humanities. We don't just help with homework; we build foundations.",
      icon: <GraduationCap size={40} />,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Homeschool Support", 
      desc: "Co-op management, curriculum design, and evaluation services for homeschooling families in South Florida.",
      icon: <Users size={40} />,
      image: "https://images.unsplash.com/photo-1491843351663-8c436628b644?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Test Prep (SAT/ACT)", 
      desc: "Strategic test prep designed to maximize scores without the burnout. Proven methodology.",
      icon: <BookOpen size={40} />,
      image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=600&q=80"
    },
    { 
      title: "Special Needs", 
      desc: "Certified expertise in ADHD, Dyslexia, and Anxiety support. We adapt to the student, not the other way around.",
      icon: <Monitor size={40} />,
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="sticky-scroll-container grid lg:grid-cols-2 gap-12">
          {/* Left: Sticky Info */}
          <div className="sticky-side lg:pt-20">
            <h2 className="text-5xl lg:text-[60px] mb-8">Our Programs</h2>
            <div className="space-y-4">
              {sections.map((s, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`w-full text-left p-6 rounded-2xl transition-all border ${activeTab === i ? 'bg-white shadow-xl border-froyo-gold border-2' : 'bg-transparent border-transparent grayscale hover:grayscale-0 opacity-60 hover:opacity-100'}`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${activeTab === i ? 'text-froyo-dark-blue' : 'text-slate-400'}`}>
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{s.title}</h3>
                      {activeTab === i && <p className="mt-2 text-slate-600 animate-fade-in">{s.desc}</p>}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Scrolling Images */}
          <div className="space-y-12 py-12 lg:pt-20">
            {sections.map((s, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-2xl relative group h-[400px] lg:h-[600px]">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-3xl font-bold mb-2">{s.title}</h3>
                    <p className="text-lg opacity-90 max-w-md">Transforming academic potential into reality.</p>
                  </div>
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
            <h3 className="text-3xl font-bold mb-8">The Value Stack</h3>
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

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const faqs = [
    { q: "What are the travel fees?", a: "For in-person sessions, there is no fee for locations within 5 miles of West Kendall. For 5-10 miles, a $15 per session travel fee applies." },
    { q: "Can we do a group session?", a: "Absolutely! We offer a 20% discount for groups of 2-4 students who want to study together." },
    { q: "What is your cancellation policy?", a: "We require 24 hours notice for all cancellations. Late cancellations are subject to 50% of the session fee." }
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

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">The "Add-On" Menu</h3>
            <div className="space-y-4">
              {[
                { name: "Grade Monitoring", price: "$100/wk", desc: "We track portals, assignments, and test dates for you." },
                { name: "Assignment Monitoring", price: "$180/wk", desc: "Daily check-ins to ensure 100% completion of all tasks." }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div>
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                  <span className="text-froyo-dark-blue font-bold whitespace-nowrap">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-8">The "Fine Print" FAQ</h3>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 last:border-0 pb-4">
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
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [active, setActive] = useState(0);
  const items: Testimonial[] = [
    {
      quote: "2 Step Ahead transformed my daughter's math scores in just 3 months. She went from a C- to an A and actually enjoys her homework now!",
      author: "Maria Gonzalez",
      role: "Parent of 10th Grader",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "The SAT prep was a game changer. My score increased by 210 points, and I got into my top choice university. Highly recommend!",
      author: "Julian Rivers",
      role: "Class of 2024 Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "Finally found a tutor who understands ADHD. They don't just teach the subject; they teach my son how to organize his brain.",
      author: "Sarah Thompson",
      role: "Parent of 7th Grader",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  useEffect(() => {
    const int = setInterval(() => setActive(p => (p + 1) % items.length), 5000);
    return () => clearInterval(int);
  }, []);

  return (
    <section className="py-24 bg-froyo-cream/30">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-12">
          <Star className="inline text-froyo-gold mx-1" fill="#FFC973" />
          <Star className="inline text-froyo-gold mx-1" fill="#FFC973" />
          <Star className="inline text-froyo-gold mx-1" fill="#FFC973" />
          <Star className="inline text-froyo-gold mx-1" fill="#FFC973" />
          <Star className="inline text-froyo-gold mx-1" fill="#FFC973" />
        </div>
        
        <div className="relative min-h-[300px]">
          {items.map((item, i) => (
            <div 
              key={i} 
              className={`absolute inset-0 transition-all duration-700 flex flex-col items-center ${active === i ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
              <blockquote className="text-2xl md:text-3xl italic font-medium text-slate-800 mb-8 leading-relaxed">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-4 text-left">
                <img src={item.image} alt={item.author} className="w-16 h-16 rounded-full border-2 border-froyo-gold" />
                <div>
                  <h4 className="font-bold text-xl">{item.author}</h4>
                  <p className="text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {items.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full transition-all ${active === i ? 'bg-froyo-dark-blue w-8' : 'bg-slate-300'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Resources = () => {
  const links = [
    { category: "AP Subjects", items: ["AP Biology (Bozeman Science)", "AP US History Study Guides", "AP Calculus Practice Exam"] },
    { category: "SAT/ACT", items: ["College Board Practice Tests", "Khan Academy SAT Roadmap", "ACT Prep Guide 2025"] },
    { category: "Study Skills", items: ["Cornell Note Taking Method", "Pomodoro Focus Timer", "Active Recall Strategies"] }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-[50px] mb-4">Student Resources Library</h2>
            <p className="text-lg text-slate-600">The best tools for academic success, curated by our experts.</p>
          </div>
          <button className="bg-froyo-dark-blue text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-colors">
            Get Free AP Study Guides <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {links.map((group, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-froyo-gold rounded-full"></div>
                {group.category}
              </h3>
              <ul className="space-y-4">
                {group.items.map((link, j) => (
                  <li key={j}>
                    <a href="#" className="flex items-center gap-3 text-slate-700 hover:text-froyo-dark-blue hover:translate-x-1 transition-all group">
                      <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center group-hover:bg-froyo-light-blue/10 transition-colors">
                        <ArrowRight size={14} className="text-slate-400 group-hover:text-froyo-dark-blue" />
                      </div>
                      <span className="font-semibold">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
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
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-froyo-dark-blue rounded flex items-center justify-center text-white font-bold">2</div>
          <span className="text-xl font-heading text-white">2 Step Ahead</span>
        </div>
        <p className="text-sm">© 2025 2 Step Ahead Tutoring & Education Support. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
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
      <Pricing />
      <Testimonials />
      <Resources />
      <Contact />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);