import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, FileText, Calendar, Award, MessageCircle, ArrowRight, ClipboardCheck, Users, Sparkles, Star, ChevronRight } from 'lucide-react';

const Homeschool = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const services = [
    {
      title: 'Annual Evaluations',
      desc: 'State-compliant evaluations for Florida homeschool families. Simple, stress-free, and supportive.',
      features: ['Portfolio review', 'Student assessment', 'Progress documentation', 'Letter of evaluation']
    },
    {
      title: 'Curriculum Consulting',
      desc: 'Not sure which curriculum fits? We assess your child\'s learning style and recommend the best materials.',
      features: ['Learning style assessment', 'Curriculum recommendations', 'Scope & sequence planning', 'Resource selection']
    },
    {
      title: 'Subject Tutoring',
      desc: 'Expert instruction for those challenging subjects like high school math or science labs.',
      features: ['Math instruction', 'Science labs & concepts', 'Writing & literature', 'Test preparation']
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/homeschool-hero-new.png"
            className="w-full h-full object-cover opacity-10"
            alt="Background pattern"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50/90 to-slate-50"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
            {/* Badge */}
            <div className={`transition-all duration-700 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-md">
                <Sparkles size={18} className="text-froyo-gold" />
                <span className="font-bold text-sm text-slate-800 uppercase tracking-wider">Florida Homeschool Support</span>
              </div>
            </div>

            {/* Heading */}
            <h1 className={`text-6xl md:text-[90px] font-heading text-slate-900 leading-[0.9] tracking-tight transition-all duration-700 delay-100 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Confidently <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-dark-blue to-froyo-light-blue">Homeschool.</span>
            </h1>

            {/* Subtext */}
            <p className={`text-2xl text-slate-600 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Expert guidance for your family's unique journey. From annual evaluations to curriculum planning, we're your partners in education.
            </p>

            {/* Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link to="/contact?service=homeschool" className="bg-froyo-dark-blue text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3">
                Schedule Evaluation <Calendar size={18} />
              </Link>
              <Link to="/pricing" className="bg-white text-slate-700 px-10 py-5 rounded-full font-bold text-lg border border-slate-200 hover:border-froyo-dark-blue hover:text-froyo-dark-blue transition-all flex items-center justify-center gap-2">
                View Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 opacity-60 grayscale transition-all duration-1000 delay-500 ${animate ? 'opacity-60 blur-0' : 'opacity-0 blur-sm'}`}>
              <div className="flex items-center gap-2 font-bold justify-center"><ClipboardCheck /> FL Statute Compliant</div>
              <div className="flex items-center gap-2 font-bold justify-center"><Award /> Certified Teachers</div>
              <div className="flex items-center gap-2 font-bold justify-center"><BookOpen /> Custom Curriculum</div>
              <div className="flex items-center gap-2 font-bold justify-center"><Users /> Family Discounts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section: The Evaluation Process */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              {/* Image Cluster */}
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="/homeschool-evaluation.png"
                  alt="Mom teaching child"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-full h-full bg-froyo-light-blue/10 rounded-[3rem] -z-10"></div>
            </div>

            <div>
              <span className="text-froyo-gold font-bold tracking-widest uppercase mb-4 block">Stress-Free Compliance</span>
              <h2 className="text-5xl font-heading font-bold text-slate-900 mb-8">
                Annual Evaluations <br /> Made Simple.
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Florida law requires an annual educational evaluation. We make this process a positive check-in on your child's progress rather than a stressful test.
              </p>

              <div className="space-y-8">
                {[
                  { title: "Portfolio Review", desc: "We review samples of work from the year.", icon: <BookOpen className="text-white" size={20} />, color: "bg-froyo-light-blue" },
                  { title: "Student Chat", desc: "A brief, friendly conversation with your learner.", icon: <MessageCircle className="text-white" size={20} />, color: "bg-froyo-gold" },
                  { title: "Official Letter", desc: "Signed evaluation letter for your district.", icon: <FileText className="text-white" size={20} />, color: "bg-green-500" }
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Cards - Horizontal Scroll Layout */}
      <section className="py-32 bg-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[150px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">More Than Just Evaluations</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">We support every aspect of your homeschooling experience.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-10 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-froyo-dark-blue flex items-center justify-center mb-8 shadow-lg">
                  {i === 0 ? <ClipboardCheck className="text-white" size={32} /> :
                    i === 1 ? <BookOpen className="text-white" size={32} /> :
                      <Users className="text-white" size={32} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 pt-6 border-t border-slate-100">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <CheckCircle size={16} className="text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-froyo-gold rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-10"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white leading-tight">
              Start Your Year Right.
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
              Schedule your evaluation or consultation today to ensure a compliant and successful school year.
            </p>
            <Link to="/contact?service=homeschool" className="inline-block bg-white text-froyo-dark-blue px-12 py-5 rounded-full font-bold text-xl hover:bg-froyo-dark-blue hover:text-white transition-all shadow-xl hover:shadow-2xl hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homeschool;
