import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, BookOpen, Heart, Users, MessageCircle, ArrowRight, GraduationCap, Leaf } from 'lucide-react';

const About = () => {
  const credentials = [
    'Florida Certified Teacher',
    'Bachelor\'s Degree in Biology',
    'AP Environmental Science Instructor',
    'High School Biology Teacher',
    'Former FIU Adjunct Lab Instructor',
    'Bilingual (English & Spanish)'
  ];

  const subjects = [
    'Biology & Life Sciences',
    'AP Environmental Science',
    'General Chemistry',
    'Algebra & Geometry',
    'Trigonometry & Statistics',
    'American History & Civics',
    'SAT & ACT Preparation',
    'Study Skills & Organization'
  ];

  const values = [
    {
      icon: <Heart size={28} />,
      title: 'Teaching by Vocation',
      desc: 'There is no greater joy than watching a student grasp a difficult concept or discover a passion for learning. Every session is an opportunity to make a real difference in a young person\'s life.'
    },
    {
      icon: <Users size={28} />,
      title: 'Personalized Attention',
      desc: 'Every student learns differently. Through careful assessment and ongoing observation, instruction is tailored to match each student\'s unique learning style and pace.'
    },
    {
      icon: <Leaf size={28} />,
      title: 'Lifelong Learning',
      desc: 'Education extends beyond test scores. Students are encouraged to develop curiosity, critical thinking skills, and a genuine appreciation for knowledge that will serve them throughout their lives.'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence & Dedication',
      desc: 'Meticulous attention to detail and a commitment to doing things right. Whether developing study materials or tracking student progress, nothing is left to chance.'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-heading mb-6 leading-tight">
                Meet Your Child's Tutor
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Over 15 years of experience helping students succeed
              </p>
              <p className="text-lg opacity-80 mb-8">
                When you work with 2 Step Ahead, you're not just hiring a tutoring service. You're partnering with a dedicated educator who genuinely cares about your child's academic growth and personal development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Schedule a Consultation
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <img
                  src="/tutor-photo.jpg"
                  alt="Claudia Alvarez, Founder of 2 Step Ahead Tutoring"
                  className="rounded-3xl shadow-2xl w-full max-w-md object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80';
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg">
                  <p className="font-bold text-froyo-dark-blue text-lg">Claudia Alvarez</p>
                  <p className="text-slate-600 text-sm">Founder & Lead Tutor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center">A Teacher by Vocation</h2>

            <div className="bg-slate-50 rounded-3xl p-8 mb-8">
              <p className="text-lg text-slate-700 mb-6">
                Some people find their calling early. For me, it was always teaching. There is nothing more rewarding than being in a room full of students captivated by a lesson, working through an experiment together, or watching that moment when a difficult concept finally clicks.
              </p>
              <p className="text-lg text-slate-700 mb-6">
                I began tutoring in 2006 and have been a classroom teacher since 2011. My journey has taken me from the university laboratory at FIU, where I served as an adjunct lab instructor, to the high school classroom where I currently teach Biology and AP Environmental Science in Miami Dade County.
              </p>
              <p className="text-lg text-slate-700">
                Throughout my career, I've developed a deep understanding of how students learn and what it takes to help them succeed. I've created countless educational tools including guided notes, worksheets, and study guides tailored to help students master challenging material.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-froyo-cream/30 rounded-2xl p-6 border border-froyo-gold/20">
                <GraduationCap className="text-froyo-dark-blue mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Academic Background</h3>
                <p className="text-slate-600">
                  With a degree in Biology and years of experience teaching at both the high school and university level, I bring both subject matter expertise and pedagogical skill to every tutoring session.
                </p>
              </div>
              <div className="bg-froyo-cream/30 rounded-2xl p-6 border border-froyo-gold/20">
                <BookOpen className="text-froyo-dark-blue mb-4" size={32} />
                <h3 className="text-xl font-bold mb-3">Teaching Philosophy</h3>
                <p className="text-slate-600">
                  I believe every student can succeed with the right support. My approach focuses on understanding each student's unique learning style and building their confidence alongside their knowledge.
                </p>
              </div>
            </div>

            <p className="text-lg text-slate-700 text-center italic">
              "I consider myself an eternal student, always eager to expand my knowledge. The world is full of wonders waiting to be explored, and I want to share that sense of discovery with every student I work with."
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading mb-6">Credentials & Qualifications</h2>
              <p className="text-slate-600 mb-8">
                Your child deserves an educator with proven expertise and a track record of success. Here's what I bring to every tutoring session:
              </p>
              <div className="space-y-3">
                {credentials.map((credential, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-heading mb-6">Subjects Tutored</h2>
              <p className="text-slate-600 mb-8">
                While my primary expertise is in the sciences, years of tutoring have given me experience across a wide range of subjects:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {subjects.map((subject, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-xl p-3 shadow-sm">
                    <div className="w-2 h-2 bg-froyo-gold rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium">{subject}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">What Guides My Teaching</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These core values shape every interaction with students and families
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-slate-50 rounded-3xl p-8">
                <div className="w-14 h-14 bg-froyo-dark-blue/10 rounded-xl flex items-center justify-center mb-4 text-froyo-dark-blue">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Parents Choose Us */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading mb-6">Why Parents Trust Us</h2>
              <p className="text-xl opacity-90 mb-8">
                When you're searching for help for your child, you want someone who truly understands both the academic challenges and the emotional journey your family is on.
              </p>
              <ul className="space-y-4">
                {[
                  'Direct communication with the same experienced educator every session',
                  'Personalized approach based on your child\'s specific needs',
                  'Regular progress updates so you always know how things are going',
                  'Flexible scheduling to fit your family\'s busy life',
                  'A genuine investment in your child\'s long term success'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Not a Tutoring Agency</h3>
              <p className="opacity-90 mb-6">
                When you contact 2 Step Ahead, you're reaching out directly to me. There's no call center, no matching algorithm, no revolving door of different tutors. You get one dedicated educator who knows your child's strengths, challenges, and goals.
              </p>
              <p className="opacity-90">
                This consistency builds trust with students and allows for truly personalized instruction that adapts as your child grows and progresses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free consultation to discuss your child's needs and learn how we can help them achieve their academic goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Schedule Consultation
            </Link>
            <Link
              to="/pricing"
              className="bg-white text-froyo-dark-blue px-8 py-4 rounded-full font-bold text-lg border-2 border-froyo-dark-blue hover:bg-froyo-dark-blue hover:text-white transition-all flex items-center justify-center gap-2"
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

export default About;
