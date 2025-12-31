import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, BookOpen, Heart, Users, MessageCircle, ArrowRight, GraduationCap, Leaf, Sparkles, Zap, Shield, Star, Microscope } from 'lucide-react';

// --- Premium Badge Components ---

const ExcellenceSeal = () => (
  <div className="relative w-24 h-24 flex-shrink-0 group">
    {/* Glow Effect */}
    <div className="absolute inset-0 bg-froyo-gold/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Outer Gold Ring (Metallic Gradient) */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FDB931] via-[#F59E0B] to-[#B45309] shadow-lg p-1">
      {/* Inner Blue Circle */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#004e8a] to-[#00335c] flex items-center justify-center relative overflow-hidden border-[3px] border-[#FDB931] shadow-inner">
        {/* Shine Effect */}
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rotate-45 transform origin-bottom-right" />

        {/* Decorative Laurels/Icon */}
        <div className="absolute inset-1 border-2 border-dashed border-white/20 rounded-full" />

        {/* Center Icon */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Award className="text-[#FDB931] drop-shadow-md" size={36} strokeWidth={1.5} />
          <div className="mt-1 flex gap-0.5">
            {[1, 2, 3].map(i => (
              <Star key={i} size={8} className="text-[#FDB931] fill-[#FDB931]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SubjectMasteryIcon = () => (
  <div className="relative w-24 h-24 flex-shrink-0 group">
    <div className="absolute inset-0 bg-froyo-light-blue/40 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Hexagon/Circle Shape - Modern Tech/Science Feel */}
    <div className="absolute inset-0 rounded-2xl rotate-3 bg-gradient-to-br from-froyo-light-blue to-froyo-dark-blue shadow-lg p-1 transition-transform group-hover:rotate-6 duration-500">
      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center relative overflow-hidden border-2 border-white shadow-inner">

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-froyo-dark-blue to-transparent" />

        {/* Floating Icons Composition */}
        <div className="relative z-10 grid grid-cols-2 gap-1 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
          <BookOpen className="text-froyo-dark-blue" size={24} />
          <Microscope className="text-froyo-light-blue" size={24} />
          <Zap className="text-froyo-gold" size={24} />
          <GraduationCap className="text-slate-600" size={24} />
        </div>

        {/* Center Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-slate-100">
            <Sparkles className="text-froyo-dark-blue fill-froyo-gold/20" size={24} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const values = [
    {
      icon: <Heart size={28} />,
      title: 'Teaching by Vocation',
      desc: 'There is no greater joy than watching a student grasp a difficult concept. Teaching isn\'t just a job—it\'s my life\'s work.'
    },
    {
      icon: <Users size={28} />,
      title: 'Personalized Attention',
      desc: 'No two students learn alike. I tailor every lesson to match your child\'s unique learning style, pace, and interests.'
    },
    {
      icon: <Leaf size={28} />,
      title: 'Lifelong Learning',
      desc: 'Education extends beyond test scores. I foster curiosity and critical thinking that students will carry with them forever.'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence & Dedication',
      desc: 'I bring meticulous attention to detail and a commitment to doing things right, from lesson planning to progress tracking.'
    }
  ];

  const credentials = {
    certification: [
      'Florida Certified Teacher',
      'Bilingual (English & Spanish)'
    ],
    experience: [
      'AP Environmental Science Instructor',
      'High School Biology Teacher',
      'Former FIU Adjunct Lab Instructor'
    ],
    education: [
      'Bachelor\'s Degree in Biology'
    ]
  };

  const subjectGroups = [
    {
      title: 'Science & Math',
      items: ['Biology & Life Sciences', 'AP Environmental Science', 'General Chemistry', 'Algebra & Geometry', 'Trigonometry & Statistics']
    },
    {
      title: 'Humanities & Prep',
      items: ['American History & Civics', 'SAT & ACT Preparation', 'Study Skills & Organization']
    }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-50 overflow-hidden">
        {/* Ambient Backgrounds */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-froyo-light-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-froyo-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 transition-all duration-1000 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                <Sparkles size={16} className="text-froyo-gold" />
                <span className="font-bold text-sm text-slate-800 uppercase tracking-wider">About Us</span>
              </div>

              <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading text-slate-900">
                Meet Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-dark-blue to-froyo-light-blue">Child's Tutor.</span>
              </h1>

              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Over 15 years of experience helping students succeed. Partnering with a dedicated educator who genuinely cares about your child's growth.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact" className="bg-froyo-dark-blue text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2">
                  <MessageCircle size={20} />
                  Schedule a Consultation
                </Link>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/tutor-photo.jpg"
                  alt="Claudia Alvarez"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-3xl font-heading font-bold mb-1">Claudia Alvarez</p>
                  <p className="text-white/90 font-medium">Founder & Lead Tutor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio / Story Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32">
                <span className="text-9xl font-heading font-bold text-slate-50 absolute -top-10 -left-10 -z-10 select-none">
                  BIO
                </span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-slate-900">
                  A Teacher by <span className="text-froyo-light-blue">Vocation</span>
                </h2>
                <div className="bg-froyo-cream/30 p-8 rounded-[2rem] border border-froyo-gold/20 mb-8 relative">
                  <div className="absolute -top-4 -left-4 text-froyo-gold/50">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.896 14.321 15.908 14.929 15.036C15.539 14.164 16.324 13.435 17.283 12.849C18.242 12.261 19.349 11.968 20.605 11.968L20.605 9.176C19.167 9.176 17.859 9.531 16.681 10.241C15.503 10.951 14.544 11.916 13.804 13.136C13.064 14.356 12.694 15.719 12.694 17.225L12.694 21L14.017 21ZM4.017 21L4.017 18C4.017 16.896 4.321 15.908 4.929 15.036C5.539 14.164 6.324 13.435 7.283 12.849C8.242 12.261 9.349 11.968 10.605 11.968L10.605 9.176C9.167 9.176 7.859 9.531 6.681 10.241C5.503 10.951 4.544 11.916 3.804 13.136C3.064 14.356 2.694 15.719 2.694 17.225L2.694 21L4.017 21Z" /></svg>
                  </div>
                  <p className="text-xl font-medium text-slate-800 italic relative z-10">
                    "I consider myself an eternal student, always eager to expand my knowledge. The world is full of wonders waiting to be explored, and I want to share that sense of discovery with every student I work with."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 prose prose-lg text-slate-600">
              <p className="lead text-2xl text-slate-800 leading-relaxed font-light mb-8">
                Some people find their calling early. For me, it was always teaching. There is nothing more rewarding than being in a room full of students captivated by a lesson.
              </p>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I began tutoring in 2006 and have been a classroom teacher since 2011. My professional journey has taken me from the university laboratory at <strong>FIU</strong>, where I served as an adjunct lab instructor, to the high school classroom where I currently teach <strong>Biology</strong> and <strong>AP Environmental Science</strong> in Miami Dade County.
                </p>
                <p>
                  Throughout my career, I've developed a deep understanding of how students learn and what it takes to help them succeed. I don't just teach content; I teach <em>how to learn</em>. I've created countless educational tools, guided notes, and study guides tailored to help students master challenging material and build lasting study habits.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-12 not-prose">
                <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-froyo-dark-blue/10 p-2 rounded-xl">
                      <GraduationCap className="text-froyo-dark-blue" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Academic Background</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">With a degree in Biology and years of experience teaching at both the high school and university level, I bring both subject matter expertise and pedagogical skill to every session.</p>
                </div>
                <div className="bg-white p-8 rounded-[2rem] shadow-lg border border-slate-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-froyo-light-blue/10 p-2 rounded-xl">
                      <BookOpen className="text-froyo-light-blue" size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Teaching Philosophy</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">I believe every student can succeed with the right support. My approach focuses on understanding each student's unique learning style and building their confidence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Core Values</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-900">What Guides My Teaching</h2>
            <p className="text-xl text-slate-600">
              These core values shape every interaction with students and families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="w-16 h-16 bg-froyo-dark-blue/5 rounded-2xl flex items-center justify-center mb-6 text-froyo-dark-blue">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Subjects Split */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Credentials Card */}
            <div className="bg-gradient-to-br from-[#0a2342] to-[#006BB8] text-white rounded-[3rem] p-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-6">
                  <div className="text-center md:text-left">
                    <div className="inline-block bg-white/10 text-froyo-gold font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4 border border-white/10">
                      Verified Expertise
                    </div>
                    <h2 className="text-4xl font-heading font-bold text-white">
                      Qualifications
                    </h2>
                  </div>
                  <ExcellenceSeal />
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-froyo-gold font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2 justify-center md:justify-start">
                      <Award size={16} /> Certifications
                    </h3>
                    <div className="space-y-4">
                      {credentials.certification.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-xl font-medium">
                          <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                            <CheckCircle className="text-green-400" size={16} />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <h3 className="text-froyo-gold font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2 justify-center md:justify-start">
                      <BookOpen size={16} /> Experience
                    </h3>
                    <div className="space-y-4">
                      {credentials.experience.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-xl text-white/90">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                            <CheckCircle className="text-white/40" size={16} />
                          </div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subjects Card */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-froyo-gold/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-6">
                  <div className="text-center md:text-left">
                    <div className="inline-block bg-froyo-dark-blue/5 text-froyo-dark-blue font-bold px-4 py-1 rounded-full text-xs uppercase tracking-widest mb-4 border border-froyo-dark-blue/10">
                      Academic Focus
                    </div>
                    <h2 className="text-4xl font-heading font-bold text-slate-900">
                      Subjects Tutored
                    </h2>
                  </div>
                  <SubjectMasteryIcon />
                </div>

                <div className="flex-grow space-y-10">
                  {subjectGroups.map((group, groupIndex) => (
                    <div key={groupIndex}>
                      <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-xl justify-center md:justify-start">
                        {groupIndex === 0 ? <Zap className="text-froyo-gold" size={24} /> : <GraduationCap className="text-froyo-light-blue" size={24} />}
                        {group.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        {group.items.map((item, i) => (
                          <span key={i} className="bg-slate-50 text-slate-700 px-5 py-3 rounded-2xl text-base font-medium border border-slate-100 hover:border-froyo-gold hover:bg-white hover:shadow-lg transition-all cursor-default">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Parents Trust Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-slate-900">Why Families <br /><span className="text-froyo-dark-blue">Trust Us</span></h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                When you're searching for help for your child, you want someone who truly understands both the academic challenges and the emotional journey your family is on.
              </p>
              <ul className="space-y-6">
                {[
                  'Direct communication with the same experienced educator every session',
                  'Personalized approach based on your child\'s specific needs',
                  'Regular progress updates so you always know how things are going',
                  'Flexible scheduling to fit your family\'s busy life',
                  'A genuine investment in your child\'s long term success'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm shrink-0 mt-1 shadow-sm">✓</div>
                    <span className="text-slate-700 font-medium text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="bg-froyo-dark-blue text-white rounded-[3rem] p-12 shadow-2xl relative z-10 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-0 right-0 w-80 h-80 bg-froyo-light-blue rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/20">
                    <Shield className="w-8 h-8 text-froyo-gold" />
                  </div>

                  <h3 className="text-3xl font-heading font-bold mb-6">Not a Tutoring Agency</h3>
                  <p className="opacity-90 mb-6 text-lg leading-relaxed">
                    When you contact 2 Step Ahead, you're reaching out directly to me. There's no call center, no matching algorithm, no revolving door of different tutors. You get one dedicated educator who knows your child's strengths, challenges, and goals.
                  </p>
                  <p className="opacity-90 text-lg leading-relaxed">
                    This consistency builds trust with students and allows for truly personalized instruction that adapts as your child grows.
                  </p>

                  <div className="mt-10 pt-8 border-t border-white/20">
                    <div className="font-heading font-bold text-xl tracking-wider uppercase text-froyo-gold">2 Step Ahead Tutoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-slate-900">Partner in Your Child's Success</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Schedule a free consultation to discuss your child's needs and learn how we can help them achieve their academic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-froyo-gold text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              Schedule Consultation
            </Link>
            <Link
              to="/pricing"
              className="bg-white text-froyo-dark-blue px-10 py-5 rounded-full font-bold text-lg border-2 border-froyo-dark-blue hover:bg-froyo-dark-blue hover:text-white transition-all flex items-center justify-center gap-3"
            >
              View Pricing
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
