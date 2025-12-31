import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, FileText, Calendar, Award, MessageCircle, ArrowRight, ClipboardCheck, Users } from 'lucide-react';

const Homeschool = () => {
  const services = [
    {
      title: 'Annual Evaluations',
      desc: 'State-compliant evaluations for Florida homeschool families',
      features: ['Portfolio review', 'Student assessment', 'Progress documentation', 'Letter of evaluation']
    },
    {
      title: 'Curriculum Consulting',
      desc: 'Guidance on selecting and implementing curriculum',
      features: ['Learning style assessment', 'Curriculum recommendations', 'Scope & sequence planning', 'Resource selection']
    },
    {
      title: 'Subject Tutoring',
      desc: 'One-on-one instruction in challenging subjects',
      features: ['Math instruction', 'Science labs & concepts', 'Writing & literature', 'Test preparation']
    },
    {
      title: 'Portfolio Management',
      desc: 'Help organizing and maintaining required documentation',
      features: ['Work sample organization', 'Progress tracking', 'Documentation guidance', 'Record keeping']
    }
  ];

  const benefits = [
    { title: 'Florida Compliance', desc: 'All services meet Florida homeschool statute requirements', icon: <ClipboardCheck size={24} /> },
    { title: 'Flexible Scheduling', desc: 'Sessions available to fit your homeschool routine', icon: <Calendar size={24} /> },
    { title: 'Experienced Educator', desc: '15+ years of classroom and tutoring experience', icon: <Award size={24} /> },
    { title: 'Individualized Support', desc: 'Services tailored to your family\'s needs', icon: <Users size={24} /> }
  ];

  const evaluationProcess = [
    { step: '01', title: 'Schedule Evaluation', desc: 'Contact us to schedule your annual evaluation appointment.' },
    { step: '02', title: 'Portfolio Review', desc: 'Bring work samples, attendance records, and curriculum materials.' },
    { step: '03', title: 'Student Assessment', desc: 'Brief conversation with student about their learning.' },
    { step: '04', title: 'Evaluation Letter', desc: 'Receive your official letter confirming educational progress.' }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                Homeschool Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
                Homeschool Support in South Florida
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Evaluations, Curriculum Guidance & Subject Tutoring
              </p>
              <p className="text-lg opacity-80 mb-8 max-w-lg">
                Comprehensive support for Florida homeschool families, including state-compliant annual evaluations, curriculum consulting, and one-on-one subject tutoring.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Schedule Evaluation
                </button>
                <Link to="/pricing" className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center gap-2">
                  View Pricing
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/homeschool-support.png"
                alt="Homeschool family learning"
                className="rounded-3xl shadow-2xl"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Why Homeschool Families Choose Us</h2>
            <p className="text-xl text-slate-600">Support designed specifically for the unique needs of homeschooling</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-froyo-dark-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-froyo-dark-blue">
                  {benefit.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-heading">Comprehensive Homeschool Support</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-froyo-dark-blue mb-2">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Evaluation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Annual Evaluations</span>
            <h2 className="text-3xl md:text-4xl font-heading">How the Evaluation Process Works</h2>
            <p className="text-xl text-slate-600 mt-4">Florida law requires annual evaluation of homeschool students. The process is simple and stress-free.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {evaluationProcess.map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-froyo-cream/30 rounded-3xl p-8 border border-froyo-gold/20">
            <h3 className="text-xl font-bold mb-4">What to Bring to Your Evaluation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Log of educational activities',
                'Work samples (dated)',
                'List of curriculum/materials used',
                'Attendance record',
                'Any standardized test scores',
                'Previous year\'s evaluation (if applicable)'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Florida Compliance Info */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">Florida Homeschool Compliance</h2>
              <p className="text-xl opacity-90 mb-8">
                Florida Statute 1002.41 requires homeschool families to maintain a portfolio and complete an annual evaluation. All evaluation services meet these requirements.
              </p>
              <ul className="space-y-4">
                {[
                  'Evaluations conducted by a Florida-certified teacher',
                  'Compliance with Florida Statute 1002.41',
                  'Official letter documenting educational progress',
                  'Guidance on portfolio requirements'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <FileText className="text-froyo-gold mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Annual Evaluation Options</h3>
              <p className="opacity-90 mb-6">
                Florida homeschool law allows for evaluation by:
              </p>
              <ul className="space-y-3">
                {[
                  'Florida-certified teacher (our service)',
                  'Licensed psychologist',
                  'Standardized test administration',
                  'State assessment participation'
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
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Homeschool Services Pricing</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-2">Annual Evaluation</h3>
              <p className="text-slate-600 mb-4">State-compliant portfolio review and evaluation letter</p>
              <p className="text-4xl font-heading text-froyo-dark-blue mb-4">Contact for Quote</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Portfolio review
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Student assessment
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Official evaluation letter
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-2">Subject Tutoring</h3>
              <p className="text-slate-600 mb-4">One-on-one instruction in any subject area</p>
              <p className="text-4xl font-heading text-froyo-dark-blue mb-4">$80-160</p>
              <p className="text-sm text-slate-500 mb-4">per session (varies by duration/location)</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Personalized curriculum support
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Challenging subject instruction
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Test preparation
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline">
              View Complete Pricing Details
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Homeschool FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "When should I schedule my annual evaluation?", a: "Evaluations should be completed by the end of your homeschool year (typically by June if following a traditional schedule). We recommend scheduling 2-4 weeks before your deadline." },
              { q: "What if my child is behind grade level?", a: "The evaluation focuses on progress, not grade-level benchmarks. As long as your child is making educational progress, the evaluation will reflect that positively." },
              { q: "Do you evaluate multiple children in one family?", a: "Yes! Multi-child family discounts are available for annual evaluations. Contact us for family pricing." },
              { q: "Can you help me choose a curriculum?", a: "Absolutely. Curriculum consulting services include assessment of your child's learning style and recommendations for materials that fit your teaching approach and goals." },
              { q: "Do you offer tutoring for homeschool co-op groups?", a: "Yes, small group instruction is available for homeschool co-ops. This is a cost-effective option for subjects like science labs or writing workshops." }
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
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Ready to Schedule Your Evaluation?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Contact us to schedule your annual evaluation or discuss how we can support your homeschool journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              <MessageCircle size={20} />
              Schedule Evaluation
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

export default Homeschool;
