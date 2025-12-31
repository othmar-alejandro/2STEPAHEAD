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
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
              Free Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
              Study Tools & Techniques
            </h1>
            <p className="text-xl opacity-90 mb-4">
              Proven methods to improve focus and retention
            </p>
            <p className="text-lg opacity-80 mb-8">
              Master these study techniques to make your learning more effective and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Pomodoro Technique */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="text-froyo-gold" size={36} />
                <h2 className="text-3xl md:text-4xl font-heading">The Pomodoro Technique</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6">
                The Pomodoro Technique is a time management method that uses timed intervals to break work into manageable chunks, improving focus and preventing burnout.
              </p>
              <div className="space-y-4 mb-8">
                {pomodoroSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <p className="text-slate-700 pt-1">{step}</p>
                  </div>
                ))}
              </div>
              <a
                href="https://pomofocus.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-froyo-gold text-white px-6 py-3 rounded-full font-bold hover:bg-orange-400 transition-all"
              >
                Try Pomofocus Timer
                <ExternalLink size={18} />
              </a>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold mb-6 text-center">Why It Works</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="text-froyo-dark-blue" size={20} />
                    <h4 className="font-bold">Improved Focus</h4>
                  </div>
                  <p className="text-slate-600 text-sm">Knowing you only need to focus for 25 minutes makes it easier to avoid distractions.</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <Brain className="text-froyo-gold" size={20} />
                    <h4 className="font-bold">Prevents Mental Fatigue</h4>
                  </div>
                  <p className="text-slate-600 text-sm">Regular breaks help maintain mental freshness and prevent burnout.</p>
                </div>
                <div className="bg-white rounded-2xl p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <h4 className="font-bold">Track Progress</h4>
                  </div>
                  <p className="text-slate-600 text-sm">Counting pomodoros gives you a sense of accomplishment and helps measure productivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cornell Note-Taking */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FileText className="text-froyo-dark-blue" size={36} />
              <h2 className="text-3xl md:text-4xl font-heading">Cornell Note-Taking Method</h2>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A systematic approach to organizing notes that improves understanding and review
            </p>
          </div>

          {/* Visual Representation */}
          <div className="bg-white rounded-3xl p-8 shadow-lg mb-8 max-w-3xl mx-auto">
            <div className="border-2 border-slate-300 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="bg-froyo-dark-blue text-white p-4 text-center">
                <p className="font-bold">Name, Date, Subject, Topic</p>
              </div>
              {/* Main sections */}
              <div className="flex min-h-[300px]">
                {/* Cue Column */}
                <div className="w-1/3 border-r-2 border-slate-300 p-4 bg-froyo-cream/30">
                  <h4 className="font-bold text-froyo-dark-blue mb-2">Cue Column</h4>
                  <p className="text-sm text-slate-600">Questions, keywords, main ideas</p>
                  <p className="text-xs text-slate-400 mt-4">(Fill in after lecture)</p>
                </div>
                {/* Notes Column */}
                <div className="w-2/3 p-4">
                  <h4 className="font-bold text-froyo-dark-blue mb-2">Note-Taking Column</h4>
                  <p className="text-sm text-slate-600">Record notes during class</p>
                  <ul className="text-xs text-slate-500 mt-4 space-y-1">
                    <li>• Use abbreviations</li>
                    <li>• Skip lines between ideas</li>
                    <li>• Use symbols and diagrams</li>
                  </ul>
                </div>
              </div>
              {/* Summary */}
              <div className="border-t-2 border-slate-300 p-4 bg-slate-100">
                <h4 className="font-bold text-froyo-dark-blue mb-2">Summary</h4>
                <p className="text-sm text-slate-600">Write a brief summary of the main points after reviewing your notes</p>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2">During Class</h4>
              <p className="text-slate-600 text-sm">Take notes in the right column. Focus on main ideas, not every word.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2">After Class</h4>
              <p className="text-slate-600 text-sm">Fill in the cue column with questions and keywords that relate to your notes.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2">Review Time</h4>
              <p className="text-slate-600 text-sm">Cover the notes, use cues to test yourself, then write a summary at the bottom.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-froyo-dark-blue text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all"
            >
              Learn More at Cornell University
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* General Study Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Study Smarter</span>
            <h2 className="text-3xl md:text-4xl font-heading">General Study Tips</h2>
            <p className="text-xl text-slate-600 mt-4">
              Simple habits that make a big difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {studyTips.map((tip, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="text-froyo-gold" size={24} />
                  <h3 className="font-bold">{tip.title}</h3>
                </div>
                <p className="text-slate-600 text-sm">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Tools */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">More Tools</span>
            <h2 className="text-3xl md:text-4xl font-heading">Helpful Study Apps & Websites</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://pomofocus.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <Clock className="text-froyo-gold mb-3" size={28} />
              <h3 className="font-bold mb-2 group-hover:text-froyo-dark-blue transition-colors">Pomofocus</h3>
              <p className="text-slate-600 text-sm mb-3">Free online Pomodoro timer</p>
              <span className="text-froyo-dark-blue text-sm font-bold flex items-center gap-1">
                Visit <ExternalLink size={14} />
              </span>
            </a>

            <a
              href="https://www.notion.so/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <FileText className="text-slate-600 mb-3" size={28} />
              <h3 className="font-bold mb-2 group-hover:text-froyo-dark-blue transition-colors">Notion</h3>
              <p className="text-slate-600 text-sm mb-3">Digital notes & organization</p>
              <span className="text-froyo-dark-blue text-sm font-bold flex items-center gap-1">
                Visit <ExternalLink size={14} />
              </span>
            </a>

            <a
              href="https://quizlet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <Brain className="text-blue-500 mb-3" size={28} />
              <h3 className="font-bold mb-2 group-hover:text-froyo-dark-blue transition-colors">Quizlet</h3>
              <p className="text-slate-600 text-sm mb-3">Flashcards & study games</p>
              <span className="text-froyo-dark-blue text-sm font-bold flex items-center gap-1">
                Visit <ExternalLink size={14} />
              </span>
            </a>

            <a
              href="https://www.khanacademy.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
            >
              <Target className="text-green-500 mb-3" size={28} />
              <h3 className="font-bold mb-2 group-hover:text-froyo-dark-blue transition-colors">Khan Academy</h3>
              <p className="text-slate-600 text-sm mb-3">Free video lessons</p>
              <span className="text-froyo-dark-blue text-sm font-bold flex items-center gap-1">
                Visit <ExternalLink size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Need Help Developing Study Skills?</h2>
          <p className="text-xl opacity-90 mb-8">
            Beyond subject tutoring, we help students develop effective study habits, time management skills, and test-taking strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Schedule a Consultation
            </Link>
            <Link
              to="/resources/test-prep"
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-2"
            >
              Test Prep Resources
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyTools;
