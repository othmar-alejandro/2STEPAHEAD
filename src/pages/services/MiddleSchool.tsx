import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Brain, Target, Users, MessageCircle, ArrowRight, Lightbulb, TrendingUp, Sparkles, Star, ChevronRight, Award } from 'lucide-react';

const MiddleSchool = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const subjects = [
    { category: 'Mathematics', items: ['Pre-Algebra', 'Algebra I', 'Geometry Foundations', 'Math Problem Solving'] },
    { category: 'Science', items: ['Life Science', 'Earth Science', 'Physical Science', 'Scientific Method'] },
    { category: 'English', items: ['Reading Comprehension', 'Essay Writing', 'Grammar & Vocabulary', 'Research Skills'] },
    { category: 'Social Studies', items: ['US History', 'World Geography', 'Civics', 'Current Events'] },
    { category: 'Study Skills', items: ['Note-Taking', 'Test Preparation', 'Time Management', 'Organization'] }
  ];

  const outcomes = [
    'Stronger foundation for high school',
    'Improved organizational skills',
    'Better grades across subjects',
    'Increased academic confidence',
    'Effective study strategies',
    'Preparation for advanced courses'
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-froyo-light-blue/20 to-transparent rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className={`space-y-8 transition-all duration-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-froyo-gold"></span>
                <span className="font-bold text-sm text-slate-800 uppercase tracking-wider">Grades 6-8</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-[1.1] font-heading text-slate-900 tracking-tight">
                Middle School <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-dark-blue to-froyo-light-blue">Elevated.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed border-l-4 border-froyo-gold pl-6">
                Bridge the gap to high school with confidence. We build the independent study habits and core skills needed for future success.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact?service=middle-school" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-froyo-dark-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
                <Link to="/pricing" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg border-2 border-slate-100 hover:border-slate-900 transition-all flex items-center justify-center gap-2">
                  View Pricing
                </Link>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm font-bold text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Subject Mastery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Study Skills</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className={`relative transition-all duration-1000 delay-300 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative z-10">
                <img
                  src="/middle-school-hero.png"
                  alt="Middle School Students"
                  className="rounded-[3rem] shadow-2xl border-[10px] border-white w-full object-cover aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Floating Glass Cards - Hidden on mobile */}
                <div className="hidden md:block absolute top-10 -left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-[bounce_4s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Growth</p>
                      <p className="font-bold text-slate-900">Accelerated</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute bottom-20 -right-5 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-[bounce_5s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="bg-froyo-gold/20 p-2 rounded-lg text-froyo-gold">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Confidence</p>
                      <p className="font-bold text-slate-900">Unstoppable</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-froyo-dark-blue to-froyo-light-blue rounded-[3.5rem] -z-10 opacity-20 rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The "Zig Zag" Section - Breaking the Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img
                  src="/middle-school-study.png"
                  alt="Student Organizing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-froyo-dark-blue/20 mix-blend-multiply"></div>
              </div>
              {/* Abstract Shape */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-froyo-gold rounded-full blur-3xl opacity-30 -z-10"></div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-froyo-light-blue font-bold tracking-widest uppercase mb-4 block">The Reality</span>
              <h2 className="text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                Middle School is a <span className="text-froyo-dark-blue underline decoration-froyo-gold/50 decoration-4 underline-offset-8">Critical Bridge</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                It's not just about grades anymore. It's about juggling multiple teachers, managing complex schedules, and building the independence needed for high school.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Academic Transition", desc: "Adjusting to increased workload and expectations." },
                  { title: "Organization", desc: "Managing notes, binders, and digital assignments." },
                  { title: "Self-Advocacy", desc: "Learning to ask for help and communicate with teachers." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border-l-4 border-transparent hover:border-froyo-gold cursor-default group">
                    <div className="mt-1 transition-transform group-hover:scale-110">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                      <p className="text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Subjects */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-light-blue rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-froyo-gold font-bold tracking-widest uppercase mb-4 block">Comprehensive Support</span>
              <h2 className="text-5xl font-heading font-bold mb-8 leading-tight">
                Master Every <br />Subject.
              </h2>
              <p className="text-xl text-slate-300 mb-12">
                From Pre-Algebra to Earth Science, our expert tutors provide the deep content knowledge needed to excel.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {subjects.map((sub, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                    <h3 className="font-bold text-xl mb-3 text-froyo-light-blue group-hover:text-white transition-colors">{sub.category}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                      {sub.items.slice(0, 3).map((item, j) => (
                        <span key={j}>{item}{j < 2 ? ' • ' : ''}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1576328076946-44c1d483478b?auto=format&fit=crop&w=400&q=80" className="rounded-[2rem] translate-y-12 shadow-2xl" alt="Math" />
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80" className="rounded-[2rem] shadow-2xl" alt="Science" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Process (Bento Style) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-froyo-dark-blue font-bold tracking-widest uppercase mb-4 block">Our Methodology</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-slate-900">The Path to Success</h2>
            <p className="text-xl text-slate-600">A systematic approach to academic excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 grid-rows-2 h-auto md:h-[600px]">
            {/* Large Card */}
            <div className="md:col-span-1 md:row-span-2 bg-froyo-dark-blue rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-froyo-light-blue rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-froyo-gold" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Diagnostic Assessment</h3>
                <p className="text-slate-300 leading-relaxed">
                  We verify foundational skills in math and reading to ensure students are ready for grade-level content.
                </p>
              </div>
              <div className="mt-8">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-froyo-gold w-3/4"></div>
                </div>
                <div className="flex justify-between text-xs font-bold mt-2 text-froyo-gold uppercase">
                  <span>Knowledge</span>
                  <span>Gaps</span>
                </div>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 flex items-center gap-8 relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-froyo-gold/10 rounded-full blur-2xl"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Customized Strategy</h3>
                <p className="text-slate-600">
                  We design a learning plan that balances current homework help with long-term skill building.
                </p>
              </div>
              <div className="hidden sm:block w-32 h-32 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <BookOpen size={40} className="text-froyo-dark-blue" />
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="text-green-500" /> Direct Instruction
              </h3>
              <p className="text-slate-500 text-sm">Interactive sessions that make complex concepts clickable.</p>
            </div>

            {/* Small Card 2 */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Award className="text-froyo-gold" /> Check-Ins
              </h3>
              <p className="text-slate-500 text-sm">Regular updates on progress, organization, and grades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Banner */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-froyo-dark-blue to-[#00335c] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-froyo-light-blue rounded-full blur-[120px] opacity-30"></div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-7xl font-heading font-bold text-white tracking-tight">
              Bridge the Gap.
            </h2>
            <p className="text-2xl text-slate-300 font-light">
              Give your student the tools to navigate middle school with confidence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Link to="/contact?service=middle-school" className="bg-froyo-gold text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-froyo-dark-blue transition-all shadow-lg hover:shadow-2xl scale-100 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                Schedule Assessment <ArrowRight />
              </Link>
              <Link to="/pricing" className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MiddleSchool;
