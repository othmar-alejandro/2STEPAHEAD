import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Clock, FileText, MessageCircle, ArrowRight, CheckCircle, Brain, Target, BookOpen } from 'lucide-react';

const StudyTools = () => {
  const pomodoroSteps = [
    'Choose a task to work on',
    'Set a timer for 25 minutes',
    'Work on the task with full focus until the timer rings',
    'Take a short 5-minute break',
    'After 4 pomodoros, take a longer 15-30 minute break',
    'Repeat the cycle'
  ];

  const cornellSections = [
    { name: 'Cue Column', desc: 'Left side (2.5 inches) - Write questions, keywords, or main ideas after the lecture', width: '30%' },
    { name: 'Note-Taking Column', desc: 'Right side (6 inches) - Record lecture notes, ideas, and details during class', width: '70%' },
    { name: 'Summary Section', desc: 'Bottom (2 inches) - Write a brief summary of the main points after reviewing', width: '100%' }
  ];

  const studyTips = [
    { title: 'Create a Dedicated Study Space', desc: 'Find a quiet, well-lit area free from distractions. Keep all your materials organized and within reach.' },
    { title: 'Use Active Recall', desc: 'Instead of re-reading notes, test yourself on the material. Cover your notes and try to recall key concepts.' },
    { title: 'Space Out Your Study Sessions', desc: 'Distribute your studying over multiple days rather than cramming. This improves long-term retention.' },
    { title: 'Teach What You Learn', desc: 'Explaining concepts to someone else (or even to yourself) helps solidify your understanding.' },
    { title: 'Take Regular Breaks', desc: 'Your brain needs rest to process information. Use techniques like the Pomodoro method to stay fresh.' },
    { title: 'Get Enough Sleep', desc: 'Sleep is crucial for memory consolidation. Aim for 8-9 hours per night, especially before exams.' }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
            <span className="font-bold text-sm text-froyo-gold uppercase tracking-wider">Productivity & Methods</span>
          </span>
          <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading mb-6">
            Study Smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-gold to-froyo-light-blue">Not Just Harder.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Master these proven techniques to improve focus, retention, and efficiency in your daily study sessions.
          </p>
        </div>
      </section>

      {/* Pomodoro Technique */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 shadow-sm">
                  <Clock size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900">The Pomodoro Technique</h2>
              </div>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                A time management method that uses timed intervals to break work into manageable chunks, separated by short breaks.
              </p>

              <div className="space-y-6 mb-10">
                {pomodoroSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm mt-1">
                      {i + 1}
                    </div>
                    <p className="text-slate-700 font-medium text-lg leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <a
                href="https://pomofocus.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-600 transition-all hover:scale-105 active:scale-95"
              >
                Try Pomofocus Timer
                <ExternalLink size={20} />
              </a>
            </div>

            {/* Visual Timer Graphic (Static) */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative shadow-2xl max-w-sm w-full border border-slate-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/20 rounded-full blur-[60px] pointer-events-none"></div>
                <div className="relative z-10">
                  <h3 className="text-red-400 font-bold uppercase tracking-widest mb-8">Focus Timer</h3>
                  <div className="text-[120px] leading-none font-bold tabular-nums mb-8 tracking-tighter">25:00</div>
                  <div className="flex justify-center gap-6">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-400 transition-colors shadow-lg">
                      <span className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></span>
                    </div>
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  <p className="mt-10 text-slate-400 text-sm">
                    "Work for 25 minutes, then take a 5 minute break."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cornell Note-Taking */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Cornell Note-Taking</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A systematic format for organizing notes that forces you to engage with the material.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Sheet */}
            <div className="bg-white rounded-[2rem] shadow-xl p-2 md:p-8 border border-slate-200 lg:order-2">
              <div className="border border-slate-300 min-h-[500px] flex flex-col bg-white relative">
                {/* Header Area */}
                <div className="h-24 border-b-2 border-slate-800 p-4 relative">
                  <div className="absolute top-4 right-4 text-xs text-slate-400 font-handwriting">Name, Date, Class</div>
                  <div className="flex items-center justify-center h-full text-slate-300 text-lg uppercase tracking-widest font-bold">Header</div>
                </div>

                <div className="flex flex-1">
                  {/* Cue Column */}
                  <div className="w-1/3 border-r-2 border-slate-800 p-4 bg-yellow-50/50">
                    <div className="text-center text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Cues</div>
                    <div className="space-y-8">
                      <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                      <div className="h-2 bg-slate-200 rounded w-2/3"></div>
                    </div>
                  </div>

                  {/* Notes Column */}
                  <div className="w-2/3 p-4">
                    <div className="text-center text-xs text-slate-400 uppercase tracking-widest font-bold mb-4">Notes</div>
                    <div className="space-y-4">
                      <div className="h-2 bg-slate-100 rounded w-full"></div>
                      <div className="h-2 bg-slate-100 rounded w-11/12"></div>
                      <div className="h-2 bg-slate-100 rounded w-4/5"></div>
                      <div className="h-2 bg-slate-100 rounded w-full"></div>
                      <div className="h-2 bg-slate-100 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>

                {/* Summary Area */}
                <div className="h-32 border-t-2 border-slate-800 p-4 bg-green-50/30">
                  <div className="text-center text-xs text-slate-400 uppercase tracking-widest font-bold mb-2">Summary</div>
                  <div className="space-y-2 px-8">
                    <div className="h-2 bg-slate-200 rounded w-full"></div>
                    <div className="h-2 bg-slate-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanations */}
            <div className="space-y-6 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Record (Right Column)</h3>
                <p className="text-slate-600">During class, write down concise sentences. Focus on ideas and facts.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-froyo-gold text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Reduce (Left Column)</h3>
                <p className="text-slate-600">After class, write questions or keywords in the cue column that trigger the information on the right.</p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Reflect (Bottom)</h3>
                <p className="text-slate-600">Summarize the entire page in 2-3 sentences at the bottom to consolidate your learning.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Study Tips Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Best Practices</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900">Proven Study Habits</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyTips.map((tip, i) => (
              <div key={i} className="bg-slate-50 rounded-[2.5rem] p-10 hover:bg-froyo-dark-blue hover:text-white transition-all duration-300 group cursor-default">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-froyo-gold shadow-sm group-hover:bg-white/10 group-hover:text-white transition-colors">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="font-bold text-xl">{tip.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Tools */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-slate-900 mb-6">Digital Toolbox</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our recommended apps and websites to keep you organized and on track.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Pomofocus', desc: 'Simple Pomodoro timer', icon: Clock, link: 'https://pomofocus.io/', color: 'text-red-500' },
              { name: 'Notion', desc: 'All-in-one workspace', icon: FileText, link: 'https://www.notion.so/', color: 'text-slate-800' },
              { name: 'Quizlet', desc: 'Flashcards & games', icon: Brain, link: 'https://quizlet.com/', color: 'text-blue-500' },
              { name: 'Khan Academy', desc: 'Free video lessons', icon: Target, link: 'https://www.khanacademy.org/', color: 'text-green-500' }
            ].map((tool, i) => (
              <a
                key={i}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[2rem] p-8 hover:-translate-y-2 transition-transform shadow-sm hover:shadow-xl border border-slate-100 group"
              >
                <div className={`w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 ${tool.color} group-hover:scale-110 transition-transform`}>
                  <tool.icon size={32} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">{tool.name}</h3>
                <p className="text-slate-500 mb-6 text-sm">{tool.desc}</p>
                <div className="flex items-center gap-2 text-froyo-dark-blue font-bold text-sm group-hover:gap-3 transition-all">
                  Visit Website <ArrowRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-froyo-dark-blue/20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading mb-8">Ready to Level Up Your Study Skills?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Our tutors don't just teach subjects; they teach you HOW to learn. Book a session to build a personalized study plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-froyo-gold text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyTools;
