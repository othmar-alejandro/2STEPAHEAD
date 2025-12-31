import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Calendar, Target, BookOpen, TrendingUp, Award, MessageCircle, ArrowRight, Users, Star } from 'lucide-react';

const TestPrep = () => {
  const [activeTest, setActiveTest] = useState('sat');

  const tests = {
    sat: {
      name: 'SAT Prep',
      fullName: 'Scholastic Assessment Test',
      description: 'Comprehensive preparation for the digital SAT, covering Reading, Writing, and Math sections with diagnostic-driven strategies.',
      sections: ['Reading & Writing', 'Math (Calculator)', 'Math (No Calculator)'],
      duration: '3 hours',
      scoring: '400-1600',
      features: [
        'Full diagnostic assessment to identify weak areas',
        'Targeted practice on high-yield topics',
        'Test-taking strategies and time management',
        'Regular practice tests with detailed analysis',
        'College Board materials and official practice'
      ]
    },
    act: {
      name: 'ACT Prep',
      fullName: 'American College Testing',
      description: 'Strategic preparation for all four ACT sections plus optional Writing, with emphasis on pacing and content mastery.',
      sections: ['English', 'Math', 'Reading', 'Science', 'Writing (Optional)'],
      duration: '2 hours 55 min (+ 40 min Writing)',
      scoring: '1-36',
      features: [
        'Science reasoning strategies',
        'Fast-paced reading techniques',
        'Math content review through pre-calculus',
        'Grammar and rhetoric mastery',
        'Optional essay preparation'
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
        'Logic and reasoning development',
        'Grammar in context',
        'Mathematical reasoning focus',
        'Ideal for classical/homeschool students'
      ]
    }
  };

  const currentTest = tests[activeTest as keyof typeof tests];

  const process = [
    {
      step: '01',
      title: 'Diagnostic Assessment',
      desc: 'A full-length practice test establishes your baseline score and identifies specific areas for improvement.',
      icon: <Target className="text-white" size={24} />
    },
    {
      step: '02',
      title: 'Personalized Study Plan',
      desc: 'Based on diagnostic results, a customized curriculum targets your weak areas while reinforcing strengths.',
      icon: <BookOpen className="text-white" size={24} />
    },
    {
      step: '03',
      title: 'Strategic Instruction',
      desc: 'One-on-one sessions focus on content review, test-taking strategies, and time management techniques.',
      icon: <Clock className="text-white" size={24} />
    },
    {
      step: '04',
      title: 'Practice & Refine',
      desc: 'Regular practice tests track progress and allow for strategy adjustments leading up to test day.',
      icon: <TrendingUp className="text-white" size={24} />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                Test Preparation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
                SAT, ACT & CLT Preparation in West Kendall
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-lg">
                Diagnostic-driven test prep that identifies weak areas, builds targeted skills, and develops strategies for maximum score improvement.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Schedule Free Diagnostic
                </button>
                <Link to="/pricing" className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center gap-2">
                  View Pricing
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
                alt="Student studying for test"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Test Selector */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Choose Your Test</h2>

          {/* Test Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(tests).map(([key, test]) => (
              <button
                key={key}
                onClick={() => setActiveTest(key)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeTest === key
                    ? 'bg-froyo-dark-blue text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {test.name}
              </button>
            ))}
          </div>

          {/* Test Details */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-heading text-froyo-dark-blue mb-2">{currentTest.name}</h3>
                <p className="text-slate-500 mb-4">{currentTest.fullName}</p>
                <p className="text-lg text-slate-700 mb-6">{currentTest.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4">
                    <Clock className="text-froyo-dark-blue mb-2" size={20} />
                    <p className="text-sm text-slate-500">Duration</p>
                    <p className="font-bold">{currentTest.duration}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <Award className="text-froyo-dark-blue mb-2" size={20} />
                    <p className="text-sm text-slate-500">Score Range</p>
                    <p className="font-bold">{currentTest.scoring}</p>
                  </div>
                </div>

                <h4 className="font-bold text-lg mb-3">Test Sections:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentTest.sections.map((section) => (
                    <span key={section} className="bg-froyo-dark-blue/10 text-froyo-dark-blue px-3 py-1 rounded-full text-sm font-medium">
                      {section}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {currentTest.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl lg:text-[50px] font-heading text-slate-900 mb-6">
              Diagnostic-Driven Test Prep
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Every student's preparation begins with identifying exactly where they need to improve—no wasted time on areas already mastered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100">
                <div className={`w-14 h-14 rounded-2xl ${
                  i === 0 ? 'bg-froyo-light-blue' :
                  i === 1 ? 'bg-froyo-gold' :
                  i === 2 ? 'bg-froyo-dark-blue' :
                  'bg-green-500'
                } flex items-center justify-center mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <span className="text-4xl font-heading text-slate-200">{item.step}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summer SAT Intensive */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-froyo-gold text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-4 inline-block">
                Summer 2025
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[50px] font-heading mb-6">
                Summer SAT Intensive
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Master the August SAT with our immersive 4-week comprehensive course. Limited to 6 students for maximum attention.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 rounded-xl p-4">
                  <Calendar className="text-froyo-gold mb-2" size={24} />
                  <p className="font-bold">June 30 – July 25</p>
                  <p className="text-sm opacity-80">Mon, Wed, Fri</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <Clock className="text-froyo-gold mb-2" size={24} />
                  <p className="font-bold">10am – 12pm</p>
                  <p className="text-sm opacity-80">12 sessions total</p>
                </div>
              </div>

              <div className="text-4xl font-heading text-froyo-gold mb-4">$1,200</div>
              <p className="opacity-80 mb-6">Or 2 payments of $600</p>

              <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95">
                Reserve Your Spot
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Program Includes:</h3>
              <ul className="space-y-4">
                {[
                  '36 hours of intensive instruction',
                  '3 full-length practice tests',
                  'All materials and workbooks included',
                  'Diagnostic assessment and score report',
                  'Weekly progress updates to parents',
                  'Test-day strategies and preparation'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Test Prep Pricing</h2>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-slate-500 mb-2">60 minutes</p>
                <p className="text-4xl font-heading text-froyo-dark-blue">$60-100</p>
                <p className="text-sm text-slate-500">Based on location</p>
              </div>
              <div className="text-center border-x border-slate-200">
                <p className="text-slate-500 mb-2">90 minutes</p>
                <p className="text-4xl font-heading text-froyo-dark-blue">$80-120</p>
                <p className="text-sm text-slate-500">Based on location</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 mb-2">120 minutes</p>
                <p className="text-4xl font-heading text-froyo-dark-blue">$100-140</p>
                <p className="text-sm text-slate-500">Based on location</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/pricing" className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline">
                View Full Pricing Details
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Test Prep FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How long before the test should I start prep?", a: "Ideally, start 3-6 months before your test date for comprehensive preparation. Intensive programs can be effective with 4-8 weeks of focused study." },
              { q: "How much can I expect my score to improve?", a: "Score improvement varies by student, but with consistent effort, most students see 100-200+ point improvements on the SAT. The diagnostic assessment helps set realistic goals." },
              { q: "Do you provide practice materials?", a: "Yes, all necessary materials are included—official practice tests, workbooks, and supplementary resources. No additional purchases required." },
              { q: "What if I need to reschedule a session?", a: "We require 24-hour notice for cancellations. Sessions can be rescheduled based on availability." },
              { q: "Do you offer group test prep?", a: "The Summer SAT Intensive is a small group program (max 6 students). Individual sessions are also available for personalized attention." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Start With a Free Diagnostic</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free diagnostic assessment to identify your starting point and create a personalized test prep plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Schedule Free Diagnostic
            </button>
            <Link to="/" className="bg-white text-froyo-dark-blue px-8 py-4 rounded-full font-bold text-lg border-2 border-froyo-dark-blue hover:bg-froyo-dark-blue hover:text-white transition-all flex items-center justify-center gap-2">
              Back to Home
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPrep;
