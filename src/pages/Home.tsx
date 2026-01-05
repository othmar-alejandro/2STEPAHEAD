import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Users,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  Calendar,
  CreditCard,
  Search,
  MessageCircle
} from 'lucide-react';

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
              In-Person Specialist Tutor
            </span>

            <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading text-slate-900">
              Turning Academic <br /> Challenges Into <br />
              <span className="relative inline-block text-slate-900 mt-2">
                <span className="relative z-10">Lasting Confidence.</span>
                <svg className="absolute w-[105%] h-[40%] left-0 bottom-2 -z-10 text-froyo-gold opacity-40" viewBox="0 0 200 60" preserveAspectRatio="none">
                  <path d="M5,5 C50,0 150,0 195,5 C200,10 200,50 195,55 C150,60 50,60 5,55 C0,50 0,10 5,5 Z" fill="currentColor" />
                </svg>
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              With over 15 years of experience providing personalized, in-person tutoring that addresses each student's specific learning needs through comprehensive evaluation and customized instruction.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link to="/contact" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 inline-block">
                Schedule Free Assessment
              </Link>
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
        <div className="mt-20 bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 mx-auto max-w-6xl relative z-30">
          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end" onSubmit={e => e.preventDefault()}>
            <div className="space-y-2">
              <label className="font-bold text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Calendar size={14} /> Learning Plan
              </label>
              <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl p-3.5 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-froyo-dark-blue focus:border-froyo-dark-blue transition-all">
                <option>Select Plan</option>
                <option>Homework Help</option>
                <option>Personalized Lessons</option>
                <option>Test Prep (SAT/ACT/CLT)</option>
                <option>Full Package</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-bold text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <MapPin size={14} /> Location
              </label>
              <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl p-3.5 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-froyo-dark-blue focus:border-froyo-dark-blue transition-all">
                <option>West Kendall</option>
                <option>In-Home (&lt; 5mi)</option>
                <option>In-Home (5-10mi)</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-bold text-xs text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Users size={14} /> Grade Level
              </label>
              <select className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl p-3.5 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-froyo-dark-blue focus:border-froyo-dark-blue transition-all">
                <option>High School</option>
                <option>Middle School</option>
                <option>Elementary</option>
                <option>Pre-K</option>
              </select>
            </div>
            <Link to="/contact" className="bg-froyo-dark-blue text-white font-bold py-3.5 px-6 rounded-xl hover:bg-slate-800 transition-all shadow-lg h-[54px] flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
              <MessageCircle size={20} />
              Get Started
            </Link>
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
              In large classrooms, even bright students can fall behind.
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Every student learns differently. Your child's unique learning style will be evaluated and addressed through one-on-one attention and customized strategies designed to build both skills and confidence.
            </p>
            <div className="space-y-4">
              {[
                "Comprehensive assessment to identify specific knowledge gaps",
                "Customized learning strategies based on individual needs",
                "Supportive environment focused on building mastery and confidence"
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
      desc: "Comprehensive support in Math, Reading, Science, and Social Studies. Beyond homework completion, sessions focus on strengthening foundational skills for long-term academic success.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80",
      features: ["Diagnostic Assessment", "Customized Learning Plans", "Progress Monitoring"],
      link: "/services/high-school"
    },
    {
      title: "Homeschool Support",
      desc: "Curriculum design, portfolio management, and annual evaluation services for homeschooling families in South Florida. Ensure compliance while maintaining educational excellence.",
      image: "/homeschool-support.png",
      features: ["Curriculum Planning", "Portfolio Review", "State-Compliant Evaluations"],
      link: "/services/homeschool"
    },
    {
      title: "Test Prep (SAT/ACT/CLT)",
      desc: "Diagnostic-driven SAT and ACT preparation. Your student's baseline is evaluated, weak areas are identified, and targeted strategies are provided to improve scores efficiently.",
      image: "https://images.unsplash.com/photo-1543269664-7eef42226a21?auto=format&fit=crop&w=600&q=80",
      features: ["Diagnostic Testing", "Targeted Practice", "Strategy Development"],
      link: "/test-prep"
    },
    {
      title: "ADHD & Learning Support",
      desc: "Specialized instruction for students with ADHD, Autism, and gifted learners. Strategies are designed to work with each student's strengths while building skills to overcome challenges.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
      features: ["Strength-Based Methods", "Focus & Organization Skills", "Individualized Pacing"],
      link: "/services/special-needs"
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
          <div className="hidden lg:block sticky top-40 self-start">
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

            <div className="mt-8 bg-froyo-cream/30 p-6 rounded-2xl border border-froyo-gold/20">
              <p className="font-bold text-slate-700 mb-2">Need help choosing?</p>
              <a href="#contact" className="text-froyo-dark-blue font-bold hover:underline">Schedule a free assessment →</a>
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

                  <Link to={s.link} className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-froyo-dark-blue transition-colors flex items-center justify-center gap-2 group/btn">
                    Learn More
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
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
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      plan: formData.get('sat-plan'),
      studentName: formData.get('student-name'),
      email: formData.get('email'),
      phone: formData.get('phone')
    };

    // Store form data in localStorage for the payment page
    localStorage.setItem('summerSATEnrollment', JSON.stringify(data));

    // Redirect to payment page
    window.location.href = '/payment';
  };

  return (
    <section id="sat" className="py-24 bg-froyo-dark-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-froyo-light-blue rounded-full filter blur-[120px] opacity-20 -mr-48 -mt-48"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-froyo-gold text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">Exclusive Summer 2026</span>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] mb-6">Summer SAT Intensive</h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">Master the August SAT with our immersive 4-week comprehensive course. Limited seats available.</p>
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
            <h3 className="text-2xl font-bold mb-6">Reserve Your Spot</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Select Plan</label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 bg-white border-2 border-froyo-dark-blue rounded-xl cursor-pointer">
                      <input type="radio" name="sat-plan" value="full-payment" defaultChecked className="w-5 h-5 accent-froyo-dark-blue" />
                      <div className="flex justify-between w-full items-center">
                        <span className="font-bold">Pay in Full</span>
                        <span className="text-froyo-dark-blue font-bold">$1,200</span>
                      </div>
                    </label>
                    <label className="flex items-center gap-3 p-4 bg-white border-2 border-slate-200 rounded-xl cursor-pointer hover:border-slate-300 transition-colors">
                      <input type="radio" name="sat-plan" value="payment-plan" className="w-5 h-5 accent-froyo-dark-blue" />
                      <div className="flex justify-between w-full items-center">
                        <span className="font-bold">Payment Plan</span>
                        <span className="text-slate-500 font-bold">2 x $600</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="col-span-2">
                  <input type="text" name="student-name" placeholder="Student's Full Name" required className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-froyo-dark-blue outline-none" />
                </div>
                <div>
                  <input type="email" name="email" placeholder="Parent Email" required className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-froyo-dark-blue outline-none" />
                </div>
                <div>
                  <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-froyo-dark-blue outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-froyo-gold text-white py-5 rounded-xl font-bold text-lg hover:bg-orange-400 transition-colors mt-4 flex items-center justify-center gap-2 shadow-xl">
                Continue to Payment <ArrowRight size={20} />
              </button>
              <p className="text-center text-xs text-slate-500">After submitting, you'll be redirected to complete your payment and secure your spot.</p>
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
      title: "Comprehensive Evaluation",
      desc: "Every student begins with a thorough assessment of their learning style, current knowledge gaps, and academic goals to establish a clear baseline.",
      icon: <Search className="text-white" size={24} />,
      color: "bg-froyo-light-blue"
    },
    {
      num: "02",
      title: "Identify Learning Gaps",
      desc: "Assessment results are analyzed to pinpoint exactly where your child needs support—whether it's foundational concepts, study skills, or test-taking strategies.",
      icon: <Search className="text-white" size={24} />,
      color: "bg-froyo-gold"
    },
    {
      num: "03",
      title: "Customized Instruction",
      desc: "A personalized learning plan is created with targeted lessons, practice materials, and strategies designed to strengthen weak areas and build academic confidence.",
      icon: <BookOpen className="text-white" size={24} />,
      color: "bg-froyo-dark-blue"
    },
    {
      num: "04",
      title: "Track & Adjust",
      desc: "Progress is monitored consistently, with regular updates provided to parents and adjustments made as needed to ensure continuous improvement.",
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
            From Assessment to <span className="text-froyo-light-blue">Achievement</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A systematic approach focused on identifying gaps, building skills, and tracking measurable progress through every step of your child's learning journey.
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
            <h3 className="text-3xl text-white font-bold mb-6">Why Parents Choose 2 Steps Ahead</h3>
            <p className="text-slate-300 text-lg mb-8">
              Beyond test scores and grades, students develop critical thinking skills, study strategies, and academic confidence that serve them throughout their educational journey and beyond.
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
      tagline: "Assignment Support",
      price: "$45-85",
      focus: "Guided assistance with assignments and daily accountability.",
      features: ["Assignment completion support", "Concept clarification", "Study organization skills", "60-120 min sessions"],
      color: "bg-white"
    },
    {
      name: "Personalized Lessons",
      tagline: "Skill Building",
      price: "$80-160",
      focus: "Targeted instruction to address knowledge gaps and build mastery.",
      features: ["Diagnostic assessment", "Custom curriculum design", "Foundational skill development", "Regular progress tracking"],
      color: "border-froyo-gold border-2 bg-froyo-cream/10",
      featured: true
    },
    {
      name: "Full Package",
      tagline: "Comprehensive Support",
      price: "$120-200",
      focus: "Combined homework assistance and personalized instruction.",
      features: ["Assignment help + skill building", "Custom study materials", "Ongoing parent communication", "Complete academic support"],
      color: "bg-froyo-dark-blue text-white"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-[60px] mb-6">Learning Plans Designed for Your Student's Needs</h2>
          <p className="text-xl text-slate-600">Clear pricing based on session duration and location. No hidden fees.</p>
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
              <Link to={`/contact?plan=${tier.name.toLowerCase().replace(/ /g, '-')}`} className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center ${tier.name.includes("Full") ? "bg-white text-froyo-dark-blue hover:bg-froyo-gold" : "bg-froyo-dark-blue text-white hover:bg-slate-800"}`}>
                Choose Plan
              </Link>
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
      active: true
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

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-[50px] mb-8">Begin Your Child's Academic Journey</h2>
            <p className="text-xl opacity-70 mb-12 max-w-lg">
              Schedule a free consultation to discuss your child's specific needs and determine the most effective learning plan.
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
                  <p className="text-xl">786-282-9626</p>
                  <p className="opacity-70">2satutoring@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Service Area Map */}
            <div className="mt-12 w-full h-64 bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 relative group">
              <img
                src="/hammocks-map.png"
                alt="Service Area Map - The Hammocks & West Kendall"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700">
                <p className="text-sm font-bold text-froyo-gold flex items-center gap-2">
                  <MapPin size={14} /> The Hammocks, FL
                </p>
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
              <Link to="/contact" className="w-full bg-froyo-gold text-white py-5 rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-froyo-gold/20 flex items-center justify-center">
                Schedule Free Assessment
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="antialiased">
      <Hero />
      <ProblemSolution />
      <StickyPrograms />
      <SummerSAT />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
