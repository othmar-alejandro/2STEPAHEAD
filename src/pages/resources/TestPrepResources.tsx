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
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
              SAT, ACT & CLT Study Resources
            </h1>
            <p className="text-xl opacity-90 mb-4">
              Free materials to help you prepare for college entrance exams
            </p>
            <p className="text-lg opacity-80 mb-8">
              We understand that not every family can afford private tutoring. These resources can help you self-study effectively and improve your scores on your own.
            </p>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <div className="bg-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-slate-600 text-center">
            <strong>Disclosure:</strong> Some links on this page are affiliate links. We may earn a small commission at no extra cost to you.
          </p>
        </div>
      </div>

      {/* Self-Study Methodology */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Study Method</span>
            <h2 className="text-3xl md:text-4xl font-heading">The Self-Study Approach</h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              Follow this proven 7-step methodology to maximize your test prep effectiveness
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {selfStudySteps.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Official Study Guides (Affiliate) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Recommended Books</span>
            <h2 className="text-3xl md:text-4xl font-heading">Official Study Guides</h2>
            <p className="text-xl text-slate-600 mt-4">
              The best preparation materials come directly from the test makers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* SAT Guide */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-froyo-dark-blue" size={32} />
                <h3 className="text-2xl font-bold">SAT Official Guide</h3>
              </div>
              <p className="text-slate-600 mb-4">
                <strong>The Official Digital SAT Study Guide</strong> from College Board contains real practice tests, detailed answer explanations, and proven strategies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Written by the test makers
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Full-length practice tests
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Detailed answer explanations
                </li>
              </ul>
              <a
                href="https://amzn.to/4hPRVJW"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-froyo-gold text-white px-6 py-3 rounded-full font-bold hover:bg-orange-400 transition-all"
              >
                View on Amazon
                <ExternalLink size={18} />
              </a>
            </div>

            {/* ACT Guide */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-froyo-dark-blue" size={32} />
                <h3 className="text-2xl font-bold">ACT Official Guide</h3>
              </div>
              <p className="text-slate-600 mb-4">
                <strong>The Official ACT Prep & Subject Guides 2024-2025</strong> provides comprehensive preparation for all sections of the ACT.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  From the ACT organization
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Covers all test sections
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Real practice questions
                </li>
              </ul>
              <a
                href="https://amzn.to/4kd8Cka"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 bg-froyo-gold text-white px-6 py-3 rounded-full font-bold hover:bg-orange-400 transition-all"
              >
                View on Amazon
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free SAT Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">SAT</span>
            <h2 className="text-3xl md:text-4xl font-heading">Free SAT Resources</h2>
          </div>

          <div className="bg-gradient-to-br from-froyo-dark-blue to-froyo-light-blue rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">College Board Official Practice</h3>
                <p className="opacity-90 mb-6">
                  The College Board, creator of the SAT, offers free practice materials directly on their website:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>5 printable practice exams with answer keys</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>1 digital practice exam (simulates test day)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Detailed answer explanations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={20} />
                    <span>Khan Academy partnership for free prep</span>
                  </li>
                </ul>
                <a
                  href="https://www.collegeboard.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-froyo-dark-blue px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-all"
                >
                  Visit College Board
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-40 h-40 bg-white/20 rounded-full flex items-center justify-center">
                  <Target size={80} className="text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free ACT Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">ACT</span>
            <h2 className="text-3xl md:text-4xl font-heading">Free ACT Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ACT.org */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-froyo-dark-blue" size={32} />
                <h3 className="text-2xl font-bold">ACT Official Website</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Create a free account on ACT.org to access official practice materials, including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Free practice test
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Test prep resources
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Score reports and analysis
                </li>
              </ul>
              <a
                href="https://www.act.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-froyo-dark-blue text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
              >
                Visit ACT.org
                <ExternalLink size={18} />
              </a>
            </div>

            {/* ACT QuizMe */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-froyo-gold" size={32} />
                <h3 className="text-2xl font-bold">ACT QuizMe</h3>
              </div>
              <p className="text-slate-600 mb-4">
                A gamified learning platform from ACT that makes practice fun and engaging:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Interactive quiz format
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Covers all ACT sections
                </li>
                <li className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                  Track your progress
                </li>
              </ul>
              <a
                href="https://quizme.act.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-froyo-gold text-white px-6 py-3 rounded-full font-bold hover:bg-orange-400 transition-all"
              >
                Try ACT QuizMe
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Free CLT Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">CLT</span>
            <h2 className="text-3xl md:text-4xl font-heading">Free CLT Resources</h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              The Classic Learning Test (CLT) is an alternative to the SAT/ACT, accepted by many colleges
            </p>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Official CLT Practice Tests</h3>
                <p className="text-slate-600 mb-6">
                  The CLT website offers free practice tests that mirror the actual exam format:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span>Full-length practice tests</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span>Answer explanations</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span>Timed test simulation</span>
                  </li>
                </ul>
                <a
                  href="https://www.cltexam.com/tests/practice-test/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-froyo-dark-blue text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
                >
                  Access CLT Practice Tests
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="hidden md:block">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="font-bold text-lg mb-4">What is the CLT?</h4>
                  <p className="text-slate-600 text-sm">
                    The Classic Learning Test is a college entrance exam designed to measure reasoning and critical thinking through engagement with classic texts. It's accepted at 200+ colleges and universities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Need Personalized Test Prep?</h2>
          <p className="text-xl opacity-90 mb-8">
            While these resources are great for self-study, personalized tutoring can help you identify weak areas and develop targeted strategies for maximum improvement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/test-prep"
              className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Learn About Our Test Prep
            </Link>
            <Link
              to="/pricing"
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-2"
            >
              View Pricing
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPrepResources;
