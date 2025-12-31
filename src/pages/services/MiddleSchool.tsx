import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Brain, Target, Users, MessageCircle, ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

const MiddleSchool = () => {
  const subjects = [
    { category: 'Mathematics', items: ['Pre-Algebra', 'Algebra I', 'Geometry Foundations', 'Math Problem Solving'] },
    { category: 'Science', items: ['Life Science', 'Earth Science', 'Physical Science', 'Scientific Method'] },
    { category: 'English Language Arts', items: ['Reading Comprehension', 'Essay Writing', 'Grammar & Vocabulary', 'Research Skills'] },
    { category: 'Social Studies', items: ['US History', 'World Geography', 'Civics', 'Current Events'] },
    { category: 'Study Skills', items: ['Note-Taking', 'Test Preparation', 'Time Management', 'Organization'] }
  ];

  const challenges = [
    { title: 'Academic Transition', desc: 'Adjusting from elementary to middle school expectations', icon: <TrendingUp size={24} /> },
    { title: 'Multiple Teachers', desc: 'Managing different teaching styles and expectations', icon: <Users size={24} /> },
    { title: 'Increased Workload', desc: 'Handling homework across multiple subjects', icon: <BookOpen size={24} /> },
    { title: 'Building Independence', desc: 'Developing self-directed study habits', icon: <Lightbulb size={24} /> }
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
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                Grades 6-8
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
                Middle School Tutoring in West Kendall
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Building Foundations for High School Success
              </p>
              <p className="text-lg opacity-80 mb-8 max-w-lg">
                Middle school is a critical transition period. Personalized support helps students master challenging content, develop study skills, and build confidence for the academic demands ahead.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Schedule Free Assessment
                </button>
                <Link to="/pricing" className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center gap-2">
                  View Pricing
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80"
                alt="Middle school student learning"
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
            <p className="text-xl text-slate-600">The middle school years bring unique academic and developmental challenges:</p>
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
            <h2 className="text-3xl md:text-4xl font-heading">How Middle School Tutoring Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Evaluation', desc: 'Current academic standing, learning style, and areas of difficulty are assessed through diagnostic testing.', color: 'bg-froyo-light-blue' },
              { step: '02', title: 'Customized Strategy', desc: 'A learning plan is developed that addresses gaps while building skills for upcoming challenges.', color: 'bg-froyo-gold' },
              { step: '03', title: 'Direct Instruction', desc: 'Sessions combine content review, homework support, and skill-building in an engaging format.', color: 'bg-froyo-dark-blue' },
              { step: '04', title: 'Ongoing Assessment', desc: 'Regular check-ins with parents ensure progress is on track and adjustments are made as needed.', color: 'bg-green-500' }
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
            <p className="text-xl text-slate-600">Comprehensive support for all middle school core subjects</p>
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
                With consistent support, middle school students develop the academic foundation and study habits essential for high school success.
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
              <Brain className="text-froyo-gold mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Critical Skill Development</h3>
              <p className="opacity-90 mb-6">
                Middle school tutoring focuses on skills that translate directly to high school and beyond:
              </p>
              <ul className="space-y-3">
                {[
                  'Critical thinking and analysis',
                  'Written communication skills',
                  'Mathematical reasoning',
                  'Research and citation',
                  'Self-advocacy and independence'
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
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Middle School Tutoring Rates</h2>

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
              { q: "My child did well in elementary school. Why do they need tutoring now?", a: "Middle school introduces more complex concepts, multiple teachers, and greater independence expectations. Many students who excelled earlier struggle with this transition. Tutoring provides the bridge to develop new skills." },
              { q: "How do you help with organizational skills?", a: "Sessions include explicit instruction on note-taking, binder organization, assignment tracking, and study planning. These skills are practiced alongside academic content." },
              { q: "Can tutoring help prepare my student for advanced high school courses?", a: "Yes. Middle school is the ideal time to build the strong foundation needed for honors and AP courses. Sessions focus on both current content and preparation for upcoming challenges." },
              { q: "How often should my middle schooler receive tutoring?", a: "Most students benefit from 1-2 sessions per week. Students struggling significantly or preparing for specific goals may need additional support." },
              { q: "Do you communicate with my child's teachers?", a: "With parent permission, communication with teachers can be arranged to ensure tutoring aligns with classroom expectations and upcoming assessments." }
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
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Set Your Middle Schooler Up for Success</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free assessment to identify your student's needs and build a plan for academic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Schedule Free Assessment
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

export default MiddleSchool;
