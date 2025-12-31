import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, GraduationCap, Target, Clock, Users, MessageCircle, ArrowRight, Award, TrendingUp } from 'lucide-react';

const HighSchool = () => {
  const subjects = [
    { category: 'Mathematics', items: ['Algebra I & II', 'Geometry', 'Pre-Calculus', 'Calculus', 'Statistics', 'AP Math Courses'] },
    { category: 'Science', items: ['Biology', 'Chemistry', 'Physics', 'Environmental Science', 'AP Sciences'] },
    { category: 'English', items: ['Literature Analysis', 'Essay Writing', 'Research Papers', 'AP English', 'College Essays'] },
    { category: 'Social Studies', items: ['US History', 'World History', 'Government', 'Economics', 'AP History'] },
    { category: 'Test Prep', items: ['SAT', 'ACT', 'CLT', 'AP Exams', 'PERT', 'College Placement'] }
  ];

  const challenges = [
    { title: 'Falling Grades', desc: 'Struggling to maintain GPA in challenging courses', icon: <TrendingUp size={24} /> },
    { title: 'AP Course Load', desc: 'Managing multiple advanced placement courses', icon: <BookOpen size={24} /> },
    { title: 'College Prep Stress', desc: 'Balancing academics with SAT/ACT preparation', icon: <GraduationCap size={24} /> },
    { title: 'Study Skills', desc: 'Lacking effective study strategies for high school demands', icon: <Target size={24} /> }
  ];

  const outcomes = [
    'Improved grades and GPA',
    'Stronger college applications',
    'Better test scores (SAT/ACT)',
    'Effective study habits',
    'Increased confidence',
    'Time management skills'
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                Grades 9-12
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
                High School Tutoring in West Kendall
              </h1>
              <p className="text-xl opacity-90 mb-4">
                College Prep, AP Support, and Grade Recovery
              </p>
              <p className="text-lg opacity-80 mb-8 max-w-lg">
                Personalized academic support designed to help high school students excel in challenging coursework, prepare for college admissions, and build the skills needed for academic success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact?service=high-school" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Schedule Free Assessment
                </Link>
                <Link to="/pricing" className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center gap-2">
                  View Pricing
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                alt="High school student studying"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Common Challenges Addressed</h2>
            <p className="text-xl text-slate-600">High school brings unique academic pressures. Sessions are designed to address:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-froyo-dark-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-froyo-dark-blue">
                  {challenge.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{challenge.title}</h3>
                <p className="text-slate-600 text-sm">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Process</span>
            <h2 className="text-3xl md:text-4xl font-heading">How High School Tutoring Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Evaluation', desc: 'Academic strengths, weaknesses, and goals are assessed through diagnostic testing and transcript review.', color: 'bg-froyo-light-blue' },
              { step: '02', title: 'Customized Strategy', desc: 'A targeted learning plan is developed based on current courses, GPA goals, and college aspirations.', color: 'bg-froyo-gold' },
              { step: '03', title: 'Direct Instruction', desc: 'One-on-one sessions focus on content mastery, study strategies, and building academic confidence.', color: 'bg-froyo-dark-blue' },
              { step: '04', title: 'Ongoing Assessment', desc: 'Progress is tracked through grade monitoring with regular parent communication and plan adjustments.', color: 'bg-green-500' }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100">
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Subjects Covered</h2>
            <p className="text-xl text-slate-600">Support available across all core high school subjects and standardized tests</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-froyo-dark-blue mb-4">{subject.category}</h3>
                <ul className="space-y-2">
                  {subject.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">Expected Outcomes</h2>
              <p className="text-xl opacity-90 mb-8">
                Students typically see measurable improvement within 8-12 weeks of consistent tutoring.
              </p>
              <ul className="grid grid-cols-2 gap-4">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <Award className="text-froyo-gold mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">College Preparation Focus</h3>
              <p className="opacity-90 mb-6">
                High school tutoring includes comprehensive support for the college application process:
              </p>
              <ul className="space-y-3">
                {[
                  'SAT/ACT score improvement strategies',
                  'College essay brainstorming and review',
                  'AP exam preparation',
                  'Course selection guidance',
                  'GPA recovery plans'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">High School Tutoring Rates</h2>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-slate-500 mb-2">Homework Help</p>
                <p className="text-3xl font-heading text-froyo-dark-blue">$45-85</p>
                <p className="text-sm text-slate-500">per session</p>
              </div>
              <div className="text-center border-x border-slate-200">
                <p className="text-slate-500 mb-2">Personalized Lessons</p>
                <p className="text-3xl font-heading text-froyo-dark-blue">$80-160</p>
                <p className="text-sm text-slate-500">per session</p>
              </div>
              <div className="text-center">
                <p className="text-slate-500 mb-2">Full Package</p>
                <p className="text-3xl font-heading text-froyo-dark-blue">$120-200</p>
                <p className="text-sm text-slate-500">per session</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-slate-600 mb-4">Rates vary by session duration (60/90/120 min) and location</p>
              <Link to="/pricing" className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline">
                View Complete Pricing Calculator
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How often should my high schooler meet with a tutor?", a: "Most students benefit from 1-2 sessions per week. Students in AP courses or preparing for standardized tests may need additional sessions during peak periods." },
              { q: "Can tutoring help with college applications?", a: "Yes. In addition to academic support, assistance is available for college essay writing, application review, and SAT/ACT preparation." },
              { q: "Do you work with students who have IEPs or 504 plans?", a: "Absolutely. Instruction can be adapted to accommodate learning differences and work in coordination with school accommodations." },
              { q: "What if my student needs help in multiple subjects?", a: "Multi-subject support is available. Sessions can focus on different subjects as needed, and priority areas are identified during the initial assessment." },
              { q: "How quickly will I see grade improvement?", a: "Most students see noticeable improvement within 4-6 weeks. Significant grade recovery typically occurs within one grading period of consistent tutoring." }
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
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Ready to Improve Your High Schooler's Grades?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free assessment to evaluate your student's needs and create a personalized learning plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?service=high-school" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Schedule Free Assessment
            </Link>
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

export default HighSchool;
