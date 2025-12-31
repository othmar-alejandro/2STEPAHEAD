import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Brain, Heart, Target, Lightbulb, MessageCircle, ArrowRight, Users, Puzzle, Clock } from 'lucide-react';

const SpecialNeeds = () => {
  const populations = [
    {
      title: 'ADHD',
      desc: 'Students with attention challenges benefit from structured sessions with built-in movement breaks and multi-sensory learning approaches.',
      strategies: ['Chunked instruction', 'Movement integration', 'Visual schedules', 'Frequent check-ins']
    },
    {
      title: 'Autism Spectrum',
      desc: 'Sessions adapted to individual sensory needs and communication styles, with consistent routines and clear expectations.',
      strategies: ['Predictable structure', 'Visual supports', 'Special interest integration', 'Sensory considerations']
    },
    {
      title: 'Dyslexia',
      desc: 'Multisensory reading instruction using research-based approaches that build decoding skills and reading confidence.',
      strategies: ['Orton-Gillingham based methods', 'Multisensory phonics', 'Fluency practice', 'Accommodations support']
    },
    {
      title: 'Gifted Learners',
      desc: 'Enrichment and acceleration for students who need more challenge, with focus on critical thinking and deeper exploration.',
      strategies: ['Advanced content', 'Depth over breadth', 'Independent projects', 'Critical thinking focus']
    }
  ];

  const approach = [
    { title: 'Strength-Based', desc: 'Sessions build on what students do well to address areas of challenge', icon: <Lightbulb size={24} /> },
    { title: 'Individualized', desc: 'Every student\'s unique profile guides instruction and accommodations', icon: <Puzzle size={24} /> },
    { title: 'Patient & Supportive', desc: 'A calm, encouraging environment reduces anxiety and builds confidence', icon: <Heart size={24} /> },
    { title: 'Flexible Pacing', desc: 'Content and timing adapt to student needs in the moment', icon: <Clock size={24} /> }
  ];

  const outcomes = [
    'Improved academic performance',
    'Better focus and attention',
    'Increased self-confidence',
    'Effective study strategies',
    'Reduced school anxiety',
    'Self-advocacy skills'
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                Specialized Support
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
                ADHD & Learning Support in West Kendall
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Specialized Instruction for Diverse Learners
              </p>
              <p className="text-lg opacity-80 mb-8 max-w-lg">
                Every brain is different. Specialized tutoring for students with ADHD, Autism, Dyslexia, and giftedness adapts to individual learning profiles and builds on each student's unique strengths.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact?service=LSpecial-LNeeds" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Schedule Free Consultation
                </Link>
                <Link to="/pricing" className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center gap-2">
                  View Pricing
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80"
                alt="Student receiving specialized instruction"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Our Approach to Diverse Learners</h2>
            <p className="text-xl text-slate-600">Instruction is adapted to meet each student where they are</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-froyo-dark-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-froyo-dark-blue">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Populations Served */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Specialized Support</span>
            <h2 className="text-3xl md:text-4xl font-heading">Students Served</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {populations.map((pop, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-froyo-dark-blue mb-2">{pop.title}</h3>
                <p className="text-slate-600 mb-6">{pop.desc}</p>
                <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 mb-3">Strategies Used:</h4>
                <ul className="space-y-2">
                  {pop.strategies.map((strategy, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      {strategy}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Process</span>
            <h2 className="text-3xl md:text-4xl font-heading">How Specialized Tutoring Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Comprehensive Intake', desc: 'Discussion of diagnoses, school accommodations (IEP/504), and parent concerns to build a complete picture.', color: 'bg-froyo-light-blue' },
              { step: '02', title: 'Learning Profile', desc: 'Observation and assessment identify strengths, challenges, sensory needs, and optimal learning conditions.', color: 'bg-froyo-gold' },
              { step: '03', title: 'Adapted Instruction', desc: 'Sessions are designed around the student\'s profile, with flexibility built in to respond to daily needs.', color: 'bg-froyo-dark-blue' },
              { step: '04', title: 'Ongoing Communication', desc: 'Regular updates to parents, and coordination with school and therapists as needed.', color: 'bg-green-500' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] p-8 shadow-lg border border-slate-100">
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

      {/* Expected Outcomes */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">Expected Outcomes</h2>
              <p className="text-xl opacity-90 mb-8">
                With specialized support, students develop both academic skills and the self-awareness to advocate for their learning needs.
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
              <h3 className="text-2xl font-bold mb-4">Beyond Academics</h3>
              <p className="opacity-90 mb-6">
                Specialized tutoring addresses the whole student:
              </p>
              <ul className="space-y-3">
                {[
                  'Executive function skills (planning, organization)',
                  'Emotional regulation strategies',
                  'Self-advocacy development',
                  'Building on strengths and interests',
                  'Reducing shame around learning differences'
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

      {/* IEP/504 Support */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-froyo-cream/30 rounded-3xl p-8 md:p-12 border border-froyo-gold/20">
            <div className="text-center mb-8">
              <Users className="text-froyo-dark-blue mx-auto mb-4" size={40} />
              <h2 className="text-3xl font-heading mb-4">IEP & 504 Plan Support</h2>
              <p className="text-xl text-slate-600">Tutoring can complement and reinforce school accommodations</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4">How Tutoring Supports School Plans:</h3>
                <ul className="space-y-3">
                  {[
                    'Reinforces IEP goals in a 1-on-1 setting',
                    'Practices using accommodations effectively',
                    'Builds skills that support classroom success',
                    'Provides progress data for IEP meetings'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Coordination Available:</h3>
                <ul className="space-y-3">
                  {[
                    'Communication with teachers (with permission)',
                    'Alignment with therapy goals (OT, Speech)',
                    'Documentation for school meetings',
                    'Attendance at IEP meetings (if requested)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Specialized Tutoring Rates</h2>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-8">
              <p className="text-slate-600 mb-4">Personalized Lessons (recommended for specialized support)</p>
              <p className="text-4xl font-heading text-froyo-dark-blue mb-2">$80-160</p>
              <p className="text-slate-500">per session, based on duration and location</p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 text-center">Session Options</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-bold text-froyo-dark-blue">60 min</p>
                  <p className="text-sm text-slate-500">Standard session</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="font-bold text-froyo-dark-blue">90 min</p>
                  <p className="text-sm text-slate-500">Extended focus</p>
                </div>
                <div>
                  <p className="font-bold text-froyo-dark-blue">120 min</p>
                  <p className="text-sm text-slate-500">Deep work session</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/pricing" className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline">
                View Complete Pricing Calculator
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Do you have training in working with students with ADHD?", a: "Yes. Over 15 years of experience includes extensive work with students who have attention challenges, and ongoing professional development in evidence-based ADHD strategies." },
              { q: "My child has an IEP. Can you help?", a: "Absolutely. Tutoring reinforces IEP goals and helps students practice using their accommodations. With permission, coordination with the school team is available." },
              { q: "What if my child has meltdowns or shuts down?", a: "Sessions are designed to minimize frustration through appropriate pacing, breaks, and sensory awareness. When dysregulation happens, it's handled with patience and used as a learning opportunity." },
              { q: "Do you work with twice-exceptional (2e) students?", a: "Yes. Twice-exceptional students (gifted with a learning difference) benefit from instruction that challenges their intellect while supporting their specific needs." },
              { q: "How do you handle medication timing and side effects?", a: "Session timing can be scheduled around medication effectiveness. Observations about focus and energy levels are shared with parents to support conversations with providers." }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Ready to Support Your Unique Learner?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free consultation to discuss your child's learning profile and how specialized tutoring can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Schedule Free Consultation
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

export default SpecialNeeds;
