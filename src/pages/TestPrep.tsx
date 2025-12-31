import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Target, Award, ArrowRight, TrendingUp } from 'lucide-react';

const TestPrep = () => {
  const [activeTest, setActiveTest] = useState('sat');
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const tests = {
    sat: {
      name: 'SAT Prep',
      fullName: 'Scholastic Assessment Test',
      description: 'Comprehensive preparation for the digital SAT, covering Reading, Writing, and Math sections with diagnostic-driven strategies.',
      sections: ['Reading & Writing', 'Math (Calculator)', 'Math (No Calculator)'],
      duration: '3 hours',
      scoring: '400-1600',
      features: [
        'Full diagnostic assessment',
        'Targeted practice on high-yield topics',
        'Time management strategies',
        'Official practice tests'
      ]
    },
    act: {
      name: 'ACT Prep',
      fullName: 'American College Testing',
      description: 'Strategic preparation for all four ACT sections plus optional Writing, with emphasis on pacing and content mastery.',
      sections: ['English', 'Math', 'Reading', 'Science', 'Writing (Optional)'],
      duration: '2 hours 55 min',
      scoring: '1-36',
      features: [
        'Science reasoning strategies',
        'Fast-paced reading techniques',
        'Math content review',
        'Grammar mastery'
      ]
    },
    clt: {
      name: 'CLT Prep',
      fullName: 'Classic Learning Test',
      description: 'Preparation for the CLT, accepted by over 200 colleges, with focus on classical texts and logical reasoning.',
      sections: ['Verbal Reasoning', 'Grammar/Writing', 'Quantitative Reasoning'],
      duration: '2 hours',
      scoring: '10-120',
      features: [
        'Classical literature analysis',
        'Logic and reasoning',
        'Grammar in context',
        'Mathematical reasoning'
      ]
    }
  };

  const currentTest = tests[activeTest as keyof typeof tests];

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
                <span className="font-bold text-sm text-slate-800 uppercase tracking-wider">Top-Tier Prep</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-[1.1] font-heading text-slate-900 tracking-tight">
                Master the Test. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-dark-blue to-froyo-light-blue">Ace Your Future.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed border-l-4 border-froyo-gold pl-6">
                Diagnostic-driven preparation that identifies weak areas, builds targeted skills, and delivers results.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact?service=test-prep" className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-froyo-dark-blue transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2">
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
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-green-500" />
                  <span>Custom Plans</span>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className={`relative transition-all duration-1000 delay-300 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="relative z-10">
                <img
                  src="/test-prep-focus.png"
                  alt="Test Prep Focus"
                  className="rounded-[3rem] shadow-2xl border-[10px] border-white w-full object-cover aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Floating Glass Cards - Hidden on mobile */}
                <div className="hidden md:block absolute top-10 -left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-[bounce_4s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Improvement</p>
                      <p className="font-bold text-slate-900">+150 Points</p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block absolute bottom-20 -right-5 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-[bounce_5s_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="bg-froyo-gold/20 p-2 rounded-lg text-froyo-gold">
                      <Award size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase">Admissions</p>
                      <p className="font-bold text-slate-900">Top Tier</p>
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

      {/* The "Zig Zag" Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img
                  src="/test-prep-success.png"
                  alt="Test Success"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-froyo-dark-blue/20 mix-blend-multiply"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-froyo-gold rounded-full blur-3xl opacity-30 -z-10 hidden md:block"></div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-froyo-light-blue font-bold tracking-widest uppercase mb-4 block">The Stakes</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                It's More Than Just a <span className="text-froyo-dark-blue underline decoration-froyo-gold/50 decoration-4 underline-offset-8">Number</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Standardized test scores open doors to scholarships, honors programs, and dream colleges. We help you walk through them.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Scholarships", desc: "Qualify for Bright Futures and merit aid." },
                  { title: "Admissions", desc: "Stand out in a competitive applicant pool." },
                  { title: "Confidence", desc: "Walk into test day knowing you're ready." }
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

      {/* Section 2: Test Selector (Dark Variant) */}
      <section className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-light-blue rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3 opacity-10"></div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Choose Your Path</h2>
            <div className="flex flex-wrap justify-center gap-2 bg-white/10 p-1.5 rounded-3xl backdrop-blur-sm border border-white/10">
              {Object.entries(tests).map(([key, test]) => (
                <button
                  key={key}
                  onClick={() => setActiveTest(key)}
                  className={`px-6 py-3 rounded-full font-bold transition-all duration-300 text-sm md:text-base ${activeTest === key
                    ? 'bg-froyo-gold text-slate-900 shadow-lg scale-105'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {test.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl transition-all duration-500 relative overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 relative z-10">
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h3 className="text-3xl md:text-4xl font-heading text-white mb-2">{currentTest.name}</h3>
                  <p className="text-lg font-medium text-froyo-light-blue">{currentTest.fullName}</p>
                </div>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  {currentTest.description}
                </p>

                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock size={16} className="text-froyo-gold" />
                      <span className="text-xs font-bold text-slate-400 uppercase">Duration</span>
                    </div>
                    <p className="font-bold text-lg text-white">{currentTest.duration}</p>
                  </div>
                  <div className="bg-white/10 px-6 py-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={16} className="text-froyo-gold" />
                      <span className="text-xs font-bold text-slate-400 uppercase">Score Range</span>
                    </div>
                    <p className="font-bold text-lg text-white">{currentTest.scoring}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-lg text-slate-900">
                <h4 className="font-bold text-xl mb-6 text-froyo-dark-blue">Program Highlights</h4>
                <ul className="space-y-4">
                  {currentTest.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                        <CheckCircle size={14} className="text-green-600" />
                      </div>
                      <span className="text-slate-600 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-slate-100">
                  <Link to="/contact?service=test-prep" className="w-full bg-froyo-dark-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors group/btn">
                    Start Prep
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Process (Bento Style) */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-froyo-dark-blue font-bold tracking-widest uppercase mb-4 block">Our Methodology</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-slate-900">Diagnostic-Driven</h2>
            <p className="text-xl text-slate-600">We don't guess. We test.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 grid-rows-1 md:grid-rows-2 h-auto md:h-[600px]">
            {/* Large Card */}
            <div className="md:col-span-1 md:row-span-2 bg-froyo-dark-blue rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group min-h-[400px]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-froyo-light-blue rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-froyo-gold" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Initial Diagnostic</h3>
                <p className="text-slate-300 leading-relaxed">
                  Every student starts with a full-length practice test to identify specific content gaps and pacing issues.
                </p>
              </div>
              <div className="mt-8">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-froyo-gold w-3/4"></div>
                </div>
                <div className="flex justify-between text-xs font-bold mt-2 text-froyo-gold uppercase">
                  <span>Analysis</span>
                  <span>Strategy</span>
                </div>
              </div>
            </div>

            {/* Medium Card */}
            <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-lg border border-slate-100 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden hover:shadow-xl transition-shadow">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-froyo-gold/10 rounded-full blur-2xl"></div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Strategic Practice</h3>
                <p className="text-slate-600">
                  We focus on high-yield topics and test-taking strategies—like when to guess and how to spot traps.
                </p>
              </div>
              <div className="hidden sm:block w-32 h-32 bg-slate-100 rounded-full flex-shrink-0 flex items-center justify-center">
                <Target size={40} className="text-froyo-dark-blue" />
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Clock className="text-green-500" /> Time Management
              </h3>
              <p className="text-slate-500 text-sm">Learning to pace effectively under pressure.</p>
            </div>

            {/* Small Card 2 */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border border-slate-100 hover:-translate-y-1 transition-transform">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <CheckCircle className="text-froyo-gold" /> Mock Exams
              </h3>
              <p className="text-slate-500 text-sm">Simulating test day conditions to reduce anxiety.</p>
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
              Ready to Score Higher?
            </h2>
            <p className="text-2xl text-slate-300 font-light">
              Schedule your free diagnostic assessment today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
              <Link to="/contact?service=test-prep" className="bg-froyo-gold text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-froyo-dark-blue transition-all shadow-lg hover:shadow-2xl scale-100 hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                Schedule Diagnostic <ArrowRight />
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

export default TestPrep;
