import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen, CheckCircle, MessageCircle, ArrowRight, Youtube, FileText, Lightbulb, Beaker, Leaf, Target, Dna } from 'lucide-react';

const APResources = () => {
  const generalTips = [
    {
      title: 'Master the Fundamentals',
      desc: 'Before diving into external resources, ensure you understand the core concepts from your class notes and textbook.',
      icon: BookOpen
    },
    {
      title: 'Use AP Classroom',
      desc: 'Topic videos and unit progress checks from College Board are the best way to gauge your readiness.',
      icon: Target
    },
    {
      title: 'Practice FRQs',
      desc: 'Reviewing past Free Response Questions is the single best way to prepare for the written portion.',
      icon: FileText
    },
    {
      title: 'Watch Reviews',
      desc: 'Live review sessions on YouTube can help clarify difficult topics and provide last-minute tips.',
      icon: Youtube
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
            <span className="font-bold text-sm text-froyo-gold uppercase tracking-wider">Advanced Placement</span>
          </span>
          <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading mb-6">
            Master Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-gold to-froyo-light-blue">AP Exams.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Curated study guides, video channels, and practice materials for our most popular science subjects.
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

      {/* General Study Tips */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">Success Strategies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalTips.map((tip, i) => (
              <div key={i} className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-froyo-dark-blue group-hover:bg-froyo-dark-blue group-hover:text-white transition-colors">
                  <tip.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{tip.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AP Biology Resources */}
      <section className="py-24 bg-slate-50 relative overflow-hidden" id="biology">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shadow-sm transform -rotate-3">
              <Dna size={40} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">AP Biology</h2>
              <p className="text-xl text-slate-600">Comprehensive resources for the living world</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Primary Resource - YouTube */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>

              <div>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Top Recommendation</span>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">AP Bio Penguins</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Hosted by Mrs. Jones, this is widely considered the gold standard for AP Biology review. Her "Review Guide" and daily follow-along videos are indispensable.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-green-500" size={20} /> 300+ Page Review Guide
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-green-500" size={20} /> Instagram Review Q&A
                  </li>
                </ul>
              </div>
              <a href="https://apbiopenguins.weebly.com/" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-froyo-gold transition-colors">
                Visit Website <ExternalLink size={18} />
              </a>
            </div>

            {/* Right Column - Books & Tools */}
            <div className="space-y-6">
              <div className="bg-white rounded-[2rem] p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <Youtube className="text-red-500" size={32} />
                  <h4 className="font-bold text-lg">Bozeman Science</h4>
                </div>
                <p className="text-slate-600 text-sm mb-6">Mr. Anderson's classic conceptual videos are perfect for understanding specific mechanisms.</p>
                <a href="http://www.bozemanscience.com/ap-biology/" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue font-bold text-sm hover:underline">Watch Videos &rarr;</a>
              </div>

              <div className="bg-white rounded-[2rem] p-8 shadow-md border border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="text-froyo-gold" size={32} />
                  <h4 className="font-bold text-lg">Prep Book Pick</h4>
                </div>
                <p className="text-slate-600 text-sm mb-4">Barron's AP Biology Premium</p>
                <a href="https://amzn.to/3Bw8R5d" target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-800 px-4 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-2 hover:bg-slate-200 transition-colors">
                  View on Amazon <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AP Environmental Science Resources */}
      <section className="py-24 bg-white relative overflow-hidden" id="environmental">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex items-center gap-6 mb-12">
            <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm transform rotate-3">
              <Leaf size={40} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">AP Environmental Science</h2>
              <p className="text-xl text-slate-600">Tools for understanding our planet's systems</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Primary Resource - YouTube */}
            <div className="lg:col-span-2 bg-slate-50 rounded-[2.5rem] p-10 shadow-lg border border-slate-100 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[60px] -mr-16 -mt-16 pointer-events-none"></div>

              <div>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Must Watch</span>
                <h3 className="text-3xl font-bold mb-4 text-slate-900">Mr. Smedes</h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  The "Biblical" resource for APES. His videos cover every single topic in the CED in perfect detail. He also offers an amazing Ultimate Review Packet.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-emerald-500" size={20} /> Topic-by-Topic Videos
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-emerald-500" size={20} /> Exam Review Live Streams
                  </li>
                </ul>
              </div>
              <div className="flex gap-4">
                <a href="https://www.youtube.com/@MrSmedes" target="_blank" rel="noopener noreferrer" className="flex-1 bg-red-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-700 transition-colors">
                  <Youtube size={18} /> Channel
                </a>
                <a href="https://www.ultimatereviewpacket.com/courses/apes" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white border-2 border-slate-200 text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-emerald-500 hover:text-emerald-600 transition-colors">
                  Review Packet
                </a>
              </div>
            </div>

            {/* Right Column - Books & Tools */}
            <div className="space-y-6">
              <div className="bg-white rounded-[2rem] p-8 shadow-md border border-slate-100 h-full flex flex-col justify-center">
                <div className="w-16 h-16 bg-froyo-gold/10 rounded-2xl flex items-center justify-center mb-6 text-froyo-gold">
                  <BookOpen size={32} />
                </div>
                <h4 className="font-bold text-xl mb-2">Princeton Review APES</h4>
                <p className="text-slate-600 mb-6">Consistently rated as the most aligned prep book for Environmental Science.</p>
                <a href="https://amzn.to/3ZAyKYt" target="_blank" rel="noopener noreferrer" className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors">
                  View on Amazon <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other AP Subjects Placeholder */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
            <div className="w-20 h-20 bg-froyo-light-blue/20 rounded-full flex items-center justify-center mx-auto mb-6 text-froyo-dark-blue">
              <Beaker size={40} />
            </div>
            <h2 className="text-3xl font-heading font-bold mb-4">More Subjects Coming Soon</h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto">
              We're currently compiling resources for AP Chemistry, Physics, and Calculus.
              Have a specific request? Let us know!
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:text-froyo-gold transition-colors">
              Request a Subject Resource <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-froyo-dark-blue text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-froyo-gold/10"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading mb-8">Need Support for AP Courses?</h2>
          <p className="text-xl text-slate-200 mb-12 max-w-2xl mx-auto">
            AP courses move fast. Our tutors can help you keep up with the curriculum and prepare effectively for the exam in May.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?services=ap"
              className="bg-froyo-gold text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Book AP Tutoring
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};


export default APResources;
