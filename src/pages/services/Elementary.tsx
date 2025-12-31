import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Puzzle, Star, Heart, MessageCircle, ArrowRight, Sparkles, Calculator } from 'lucide-react';

const Elementary = () => {
  const subjects = [
    { category: 'Reading', items: ['Phonics & Decoding', 'Reading Fluency', 'Comprehension Strategies', 'Vocabulary Building'] },
    { category: 'Mathematics', items: ['Number Sense', 'Addition & Subtraction', 'Multiplication & Division', 'Fractions & Decimals', 'Word Problems'] },
    { category: 'Writing', items: ['Handwriting', 'Sentence Structure', 'Paragraph Writing', 'Creative Writing', 'Spelling'] },
    { category: 'Study Skills', items: ['Following Directions', 'Organization', 'Focus & Attention', 'Test-Taking Basics'] }
  ];

  const challenges = [
    { title: 'Reading Struggles', desc: 'Difficulty with phonics, fluency, or comprehension', icon: <BookOpen size={24} /> },
    { title: 'Math Gaps', desc: 'Missing foundational number sense or operations', icon: <Calculator size={24} /> },
    { title: 'Focus Issues', desc: 'Trouble staying on task or completing work', icon: <Star size={24} /> },
    { title: 'Confidence', desc: 'Anxiety about school or reluctance to try', icon: <Heart size={24} /> }
  ];

  const outcomes = [
    'Grade-level reading ability',
    'Math fact fluency',
    'Improved handwriting',
    'Stronger study habits',
    'Increased confidence',
    'Love of learning'
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                Grades K-5
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
                Elementary Tutoring in West Kendall
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Building Strong Foundations for Lifelong Learning
              </p>
              <p className="text-lg opacity-80 mb-8 max-w-lg">
                The elementary years establish the academic foundation for everything that follows. Patient, engaging instruction helps young learners master essential skills while developing a positive relationship with learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact?service=LElementary" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
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
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
                alt="Elementary student learning"
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
            <p className="text-xl text-slate-600">Every child learns at their own pace. Tutoring provides individualized support for:</p>
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
            <h2 className="text-3xl md:text-4xl font-heading">How Elementary Tutoring Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Evaluation', desc: 'Reading level, math skills, and learning style are assessed using age-appropriate diagnostic tools.', color: 'bg-froyo-light-blue' },
              { step: '02', title: 'Customized Strategy', desc: 'A learning plan is created that addresses gaps while keeping sessions engaging and confidence-building.', color: 'bg-froyo-gold' },
              { step: '03', title: 'Direct Instruction', desc: 'Sessions use multisensory, hands-on approaches that make learning interactive and memorable.', color: 'bg-froyo-dark-blue' },
              { step: '04', title: 'Ongoing Assessment', desc: 'Progress is tracked and shared with parents regularly, with celebration of every milestone.', color: 'bg-green-500' }
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
            <p className="text-xl text-slate-600">Foundational skills that prepare students for academic success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((subject, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-froyo-dark-blue mb-4">{subject.category}</h3>
                <ul className="grid grid-cols-2 gap-2">
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
                Elementary students thrive with consistent, positive support. With regular tutoring, children develop both skills and confidence.
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
              <Sparkles className="text-froyo-gold mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Engaging Learning Approach</h3>
              <p className="opacity-90 mb-6">
                Elementary tutoring uses methods designed to make learning fun and effective:
              </p>
              <ul className="space-y-3">
                {[
                  'Hands-on manipulatives for math',
                  'Interactive reading activities',
                  'Games that reinforce skills',
                  'Positive reinforcement',
                  'Movement breaks as needed'
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
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Elementary Tutoring Rates</h2>

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
              { q: "How young is too young for tutoring?", a: "Tutoring can benefit children as young as kindergarten, especially for reading readiness and early math concepts. Sessions for younger children are shorter and more play-based." },
              { q: "My child doesn't like school. Can tutoring help?", a: "Often, children who dislike school are struggling with foundational skills. Tutoring addresses gaps in a supportive environment, which typically improves both performance and attitude toward learning." },
              { q: "How long are elementary tutoring sessions?", a: "For younger elementary students (K-2), 45-60 minute sessions work best. Older elementary students (3-5) typically do well with 60-90 minute sessions." },
              { q: "Do you work with children who have learning differences?", a: "Yes. Instruction can be adapted for students with dyslexia, ADHD, and other learning differences. See our ADHD & Learning Support page for more information." },
              { q: "How do you keep young children engaged?", a: "Sessions incorporate hands-on activities, games, movement, and frequent variety. Learning is made interactive and fun while still being academically rigorous." }
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
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Give Your Child a Strong Academic Start</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free assessment to understand your child's current skill level and create a plan for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
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

export default Elementary;
