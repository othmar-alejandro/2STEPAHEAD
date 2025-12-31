import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, BookOpen, Pencil, Shapes, Music, MessageCircle, ArrowRight, Sparkles, Heart } from 'lucide-react';

const PreK = () => {
  const skills = [
    { category: 'Literacy Foundations', items: ['Letter Recognition', 'Letter Sounds', 'Print Awareness', 'Rhyming & Phonemic Awareness', 'Story Comprehension'] },
    { category: 'Number Sense', items: ['Counting (1-20+)', 'Number Recognition', 'One-to-One Correspondence', 'Basic Shapes', 'Patterns & Sorting'] },
    { category: 'Fine Motor Skills', items: ['Pencil Grip', 'Letter Formation', 'Cutting Skills', 'Coloring Within Lines', 'Name Writing'] },
    { category: 'School Readiness', items: ['Following Directions', 'Taking Turns', 'Listening Skills', 'Independence', 'Focus & Attention'] }
  ];

  const signs = [
    { title: 'Delayed Speech', desc: 'Behind peers in vocabulary or sentence formation', icon: <MessageCircle size={24} /> },
    { title: 'Letter Confusion', desc: 'Difficulty recognizing or remembering letters', icon: <BookOpen size={24} /> },
    { title: 'Fine Motor Struggles', desc: 'Trouble with pencil grip or cutting', icon: <Pencil size={24} /> },
    { title: 'Attention Challenges', desc: 'Difficulty sitting still or following directions', icon: <Shapes size={24} /> }
  ];

  const outcomes = [
    'Kindergarten readiness',
    'Letter & number recognition',
    'Early reading skills',
    'Proper pencil grip',
    'Confidence in learning',
    'Social-emotional growth'
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                Ages 3-5
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
                Pre-K Tutoring in West Kendall
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Kindergarten Readiness & Early Learning Support
              </p>
              <p className="text-lg opacity-80 mb-8 max-w-lg">
                The preschool years are a critical window for learning. Play-based, developmentally appropriate instruction helps young children build the foundation for school success while fostering a love of learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact?service=LPre-LK" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
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
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80"
                alt="Young child learning"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signs Your Child May Benefit */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Signs Your Child May Benefit</h2>
            <p className="text-xl text-slate-600">Early intervention makes a significant difference. Consider tutoring if you notice:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {signs.map((sign, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-froyo-dark-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-froyo-dark-blue">
                  {sign.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{sign.title}</h3>
                <p className="text-slate-600 text-sm">{sign.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-heading">How Pre-K Tutoring Works</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Initial Evaluation', desc: 'Developmental milestones, pre-academic skills, and learning style are assessed through play-based observation.', color: 'bg-froyo-light-blue' },
              { step: '02', title: 'Customized Strategy', desc: 'A learning plan focuses on kindergarten readiness skills while respecting your child\'s pace and interests.', color: 'bg-froyo-gold' },
              { step: '03', title: 'Play-Based Learning', desc: 'Sessions use games, songs, art, and hands-on activities to make learning engaging and age-appropriate.', color: 'bg-froyo-dark-blue' },
              { step: '04', title: 'Parent Partnership', desc: 'Regular updates and home activity suggestions help reinforce learning between sessions.', color: 'bg-green-500' }
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

      {/* Skills Developed */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Skills Developed</h2>
            <p className="text-xl text-slate-600">Building the foundation for kindergarten and beyond</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-froyo-dark-blue mb-4">{skill.category}</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {skill.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-700 text-sm">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={14} />
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
                With consistent, play-based instruction, young children develop the skills and confidence needed for a successful kindergarten transition.
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
              <Heart className="text-froyo-gold mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-4">Nurturing Approach</h3>
              <p className="opacity-90 mb-6">
                Pre-K tutoring prioritizes your child's emotional development alongside academics:
              </p>
              <ul className="space-y-3">
                {[
                  'Patience and encouragement',
                  'Celebrating every milestone',
                  'Building confidence through success',
                  'Making learning feel like play',
                  'Respecting individual pace'
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
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Pre-K Tutoring Rates</h2>

          <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <p className="text-slate-600 mb-4">Sessions for young children are typically 45-60 minutes</p>
              <p className="text-4xl font-heading text-froyo-dark-blue mb-2">$45-100</p>
              <p className="text-slate-500">per session, based on duration and location</p>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-lg mb-4 text-center">Session Format</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-bold text-froyo-dark-blue">45 min</p>
                  <p className="text-sm text-slate-500">Ages 3-4</p>
                </div>
                <div className="border-x border-slate-200">
                  <p className="font-bold text-froyo-dark-blue">60 min</p>
                  <p className="text-sm text-slate-500">Ages 4-5</p>
                </div>
                <div>
                  <p className="font-bold text-froyo-dark-blue">Flexible</p>
                  <p className="text-sm text-slate-500">Based on attention span</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/pricing" className="inline-flex items-center gap-2 text-froyo-dark-blue font-bold hover:underline">
                View Complete Pricing Details
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
              { q: "Is my 3-year-old too young for tutoring?", a: "Not necessarily. Some 3-year-olds benefit from early intervention, especially for speech/language delays or fine motor challenges. Sessions are play-based and follow the child's lead." },
              { q: "How is Pre-K tutoring different from preschool?", a: "Tutoring provides individualized attention that preschool classrooms can't offer. Skills are targeted specifically to your child's needs and learning pace." },
              { q: "Will my child have to sit still the whole time?", a: "No! Sessions include movement, songs, and frequent activity changes. Young children learn best through play and exploration." },
              { q: "How do I know if my child is ready for kindergarten?", a: "The initial assessment evaluates kindergarten readiness across all domains. A clear picture of strengths and areas for growth is provided." },
              { q: "Can you work with children who have developmental delays?", a: "Yes. Sessions can be adapted for children with various developmental needs. Coordination with therapists (OT, Speech) is available with parent permission." }
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
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Prepare Your Child for Kindergarten Success</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free assessment to understand your child's developmental readiness and create a plan for growth.
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

export default PreK;
