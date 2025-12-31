import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, CheckCircle, MessageCircle, ArrowRight, Youtube, FileText, Lightbulb, Beaker, Leaf } from 'lucide-react';

const APResources = () => {
  const generalTips = [
    'Review your class notes and any materials provided by your teacher',
    'Utilize AP Classroom topic videos and unit progress checks',
    'Watch College Board\'s live-streamed AP exam reviews on YouTube'
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
              AP Exam Study Resources
            </h1>
            <p className="text-xl opacity-90 mb-4">
              Comprehensive resources to help you prepare for AP exams
            </p>
            <p className="text-lg opacity-80 mb-8">
              These curated resources from experienced educators can help supplement your AP coursework and prepare you for exam success.
            </p>
          </div>
        </div>
      </section>

      {/* General Study Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Getting Started</span>
            <h2 className="text-3xl md:text-4xl font-heading">General AP Study Recommendations</h2>
          </div>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <Lightbulb className="text-froyo-gold flex-shrink-0" size={32} />
              <p className="text-lg text-slate-700">
                Before diving into external resources, make sure you've mastered the fundamentals from your own coursework:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {generalTips.map((tip, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="w-10 h-10 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="text-slate-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AP Biology Resources */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Beaker className="text-froyo-dark-blue" size={36} />
            <h2 className="text-3xl md:text-4xl font-heading">AP Biology Resources</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Teachers Pay Teachers */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-froyo-gold" size={28} />
                <h3 className="text-xl font-bold">Study Guides & Curriculum</h3>
              </div>
              <p className="text-slate-600 mb-4">
                <strong>BUNDLE AP Biology Full Year Curriculum Review/Learning Guides for Each Unit</strong>
              </p>
              <p className="text-slate-500 text-sm mb-4">
                By Science of Curiosity on Teachers Pay Teachers
              </p>
              <p className="text-slate-600 mb-6">
                Comprehensive learning guides covering all units of AP Biology, perfect for review and reinforcement throughout the year.
              </p>
              <a
                href="https://www.teacherspayteachers.com/Product/BUNDLE-AP-Biology-Full-Year-Curriculum-ReviewLearning-Guides-for-Each-Unit-7283730"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-froyo-dark-blue text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
              >
                View on TPT
                <ExternalLink size={18} />
              </a>
            </div>

            {/* Bozeman Science */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="text-red-500" size={28} />
                <h3 className="text-xl font-bold">Video Lessons</h3>
              </div>
              <p className="text-slate-600 mb-4">
                <strong>Bozeman Science - AP Biology Video Essentials</strong>
              </p>
              <p className="text-slate-500 text-sm mb-4">
                By Mr. Anderson
              </p>
              <p className="text-slate-600 mb-6">
                Excellent video explanations covering all major AP Biology concepts. Mr. Anderson breaks down complex topics into understandable lessons.
              </p>
              <a
                href="https://www.youtube.com/@baborozeman"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-full font-bold hover:bg-red-600 transition-all"
              >
                Watch on YouTube
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AP Environmental Science Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Leaf className="text-green-600" size={36} />
            <h2 className="text-3xl md:text-4xl font-heading">AP Environmental Science (APES)</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mr. Smeedes Videos */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <Youtube className="text-red-500" size={24} />
                <h3 className="text-lg font-bold">Mr. Smeedes' Videos</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Comprehensive video playlist covering Units 1-9 of AP Environmental Science.
              </p>
              <a
                href="https://linktr.ee/jordan.dischinger.smedes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline"
              >
                Access Resources
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Mrs. Coats' Notes */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-froyo-gold" size={24} />
                <h3 className="text-lg font-bold">Mrs. Coats' Guided Notes</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Detailed guided notes organized by unit to help structure your study sessions.
              </p>
              <a
                href="https://drive.google.com/drive/folders/1VkFwFl9Y4qPl5wXEPnPJhYLtUQhRX1Fv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline"
              >
                View on Google Drive
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Science of Curiosity APES */}
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="text-green-600" size={24} />
                <h3 className="text-lg font-bold">Science of Curiosity</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Additional APES study materials and curriculum guides from Teachers Pay Teachers.
              </p>
              <a
                href="https://www.teacherspayteachers.com/Store/Science-Of-Curiosity"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline"
              >
                Browse Resources
                <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* Featured APES Resource */}
          <div className="mt-8 bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Mr. Smeedes' Complete APES Resources</h3>
                <p className="opacity-90 mb-6">
                  Jordan Dischinger-Smedes provides a comprehensive collection of AP Environmental Science materials including video lessons, study guides, and practice resources for all 9 units.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-300 flex-shrink-0" size={18} />
                    <span>Unit-by-unit video explanations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-300 flex-shrink-0" size={18} />
                    <span>FRQ practice and tips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="text-green-300 flex-shrink-0" size={18} />
                    <span>Exam review materials</span>
                  </li>
                </ul>
                <a
                  href="https://linktr.ee/jordan.dischinger.smedes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:bg-slate-100 transition-all"
                >
                  Visit Mr. Smeedes' Linktree
                  <ExternalLink size={18} />
                </a>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                  <Leaf size={60} className="text-white/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More AP Subjects Coming Soon */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">More Subjects</span>
            <h2 className="text-3xl md:text-4xl font-heading">Additional AP Resources</h2>
            <p className="text-xl text-slate-600 mt-4">
              Resources for other AP subjects coming soon
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'AP Chemistry', icon: <Beaker size={24} /> },
              { name: 'AP Physics', icon: <Lightbulb size={24} /> },
              { name: 'AP US History', icon: <BookOpen size={24} /> },
              { name: 'AP World History', icon: <BookOpen size={24} /> },
              { name: 'AP English Language', icon: <FileText size={24} /> },
              { name: 'AP English Literature', icon: <FileText size={24} /> },
              { name: 'AP Calculus AB/BC', icon: <Lightbulb size={24} /> },
              { name: 'AP Statistics', icon: <Lightbulb size={24} /> },
              { name: 'AP Psychology', icon: <Lightbulb size={24} /> }
            ].map((subject, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 opacity-60">
                <div className="flex items-center gap-3">
                  <div className="text-slate-400">{subject.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-500">{subject.name}</h3>
                    <p className="text-sm text-slate-400">Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600">
              Have a resource suggestion? <a href="mailto:2satutoring@gmail.com" className="text-froyo-dark-blue font-bold hover:underline">Let us know!</a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Need Personalized AP Tutoring?</h2>
          <p className="text-xl opacity-90 mb-8">
            While these resources are helpful for self-study, one-on-one tutoring can help you master difficult concepts and develop effective exam strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services/high-school"
              className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              High School Tutoring
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

export default APResources;
