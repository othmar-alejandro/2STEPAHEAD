import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, CheckCircle, MessageCircle, ArrowRight, Target, Clock, FileText } from 'lucide-react';

const TestPrepResources = () => {
  const selfStudySteps = [
    'Read all of the content in the official guide',
    'Complete at least 10 timed practice problems per section',
    'Check your answers only after completing the set',
    'Continue practicing until you feel confident with the section',
    'Take a timed full section test',
    'Grade your test and identify weak areas',
    'Repeat until you achieve your desired score'
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
            <span className="font-bold text-sm text-froyo-gold uppercase tracking-wider">Free Preparation Materials</span>
          </span>
          <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading mb-6">
            Everything You Need <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-gold to-froyo-light-blue">To Succeed.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            We believe in accessible education. These curated resources will help you self-study effectively and reach your target score.
          </p>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-slate-900/50 backdrop-blur-sm border-b border-white/5 py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-slate-400">
            <strong>Transparency Note:</strong> Some links below are affiliate links which help support our free content at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Self-Study Methodology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Proven Self-Study Method</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfStudySteps.map((step, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-froyo-dark-blue/5 rounded-full blur-2xl -mr-6 -mt-6 group-hover:bg-froyo-dark-blue/10 transition-colors"></div>
                <span className="block text-5xl font-heading font-bold text-slate-200 mb-4 group-hover:text-froyo-dark-blue transition-colors">0{i + 1}</span>
                <p className="text-slate-700 font-medium relative z-10 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Study Guides */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Essential Books</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We highly recommend starting with materials directly from the test makers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SAT Guide */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:-translate-y-1 transition-transform">
              <div className="w-32 h-40 bg-slate-200 rounded-xl flex-shrink-0 flex items-center justify-center shadow-inner">
                <BookOpen size={48} className="text-slate-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Official Digital SAT Guide</h3>
                <p className="text-slate-500 mb-4 text-sm">By The College Board</p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  The definitive guide containing 4 full-length practice tests, detailed explanations, and everything you need to know about the digital format.
                </p>
                <a
                  href="https://amzn.to/4hPRVJW"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:text-froyo-gold transition-colors"
                >
                  View on Amazon <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* ACT Guide */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:-translate-y-1 transition-transform">
              <div className="w-32 h-40 bg-slate-200 rounded-xl flex-shrink-0 flex items-center justify-center shadow-inner">
                <BookOpen size={48} className="text-slate-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">Official ACT Prep Guide</h3>
                <p className="text-slate-500 mb-4 text-sm">By ACT, Inc.</p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Known as the "Red Book", this is the only guide with real ACT practice tests from the test makers. Analyzing these is crucial for success.
                </p>
                <a
                  href="https://amzn.to/4kd8Cka"
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:text-froyo-gold transition-colors"
                >
                  View on Amazon <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Digital Resources</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SAT Card */}
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-froyo-dark-blue rounded-full blur-[80px] opacity-50 -mr-16 -mt-16 group-hover:opacity-70 transition-opacity"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                  <Target size={32} className="text-froyo-gold" />
                </div>
                <h3 className="text-3xl font-bold mb-2">SAT Info</h3>
                <p className="text-slate-400 mb-8">Official practice tests and Khan Academy partnership.</p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle className="text-green-400" size={18} /> Digital SAT Practice
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle className="text-green-400" size={18} /> 6 Practice Exams
                  </li>
                </ul>

                <a href="https://www.collegeboard.org/" target="_blank" rel="noopener" className="w-full bg-white text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-froyo-gold hover:text-white transition-all">
                  College Board <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* ACT Card */}
            <div className="bg-slate-50 text-slate-900 rounded-[2.5rem] p-10 border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <FileText size={32} className="text-froyo-dark-blue" />
                </div>
                <h3 className="text-3xl font-bold mb-2">ACT Prep</h3>
                <p className="text-slate-500 mb-8">Official website resources and free practice test.</p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="text-green-500" size={18} /> Free Practice Test
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="text-green-500" size={18} /> ACT QuizMe
                  </li>
                </ul>

                <div className="flex flex-col gap-3">
                  <a href="https://www.act.org/" target="_blank" rel="noopener" className="w-full bg-slate-200 text-slate-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-froyo-dark-blue hover:text-white transition-all">
                    ACT.org <ExternalLink size={16} />
                  </a>
                  <a href="https://quizme.act.org/" target="_blank" rel="noopener" className="w-full bg-white border-2 border-slate-200 text-slate-600 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-froyo-gold hover:text-froyo-gold transition-all">
                    QuizMe <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* CLT Card */}
            <div className="bg-slate-50 text-slate-900 rounded-[2.5rem] p-10 border border-slate-200 relative overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <Clock size={32} className="text-froyo-light-blue" />
                </div>
                <h3 className="text-3xl font-bold mb-2">CLT Exam</h3>
                <p className="text-slate-500 mb-8">The alternative standard for classical education.</p>

                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="text-green-500" size={18} /> Online Practice Tests
                  </li>
                  <li className="flex items-center gap-3 text-sm font-medium text-slate-700">
                    <CheckCircle className="text-green-500" size={18} /> Analytics & Scoring
                  </li>
                </ul>

                <a href="https://www.cltexam.com/tests/practice-test/" target="_blank" rel="noopener" className="w-full bg-slate-200 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-froyo-dark-blue hover:text-white transition-all">
                  Practice Tests <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-froyo-dark-blue text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-froyo-gold/10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading mb-8">Need More Than Self-Study?</h2>
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
            Personalized 1-on-1 tutoring is the fastest way to identify your specific weaknesses and double your improvement rate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-froyo-gold text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Book Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPrepResources;
