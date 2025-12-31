import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../config/contact';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: CONTACT_INFO.phone,
      href: `tel:${CONTACT_INFO.phoneRaw}`
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`
    },
    {
      icon: <MapPin size={24} />,
      title: 'Service Area',
      content: CONTACT_INFO.serviceArea,
      href: null
    },
    {
      icon: <Clock size={24} />,
      title: 'Hours',
      content: CONTACT_INFO.hours,
      href: null
    }
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-froyo-dark-blue to-froyo-light-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block bg-froyo-gold text-white font-bold tracking-widest uppercase text-sm px-4 py-2 rounded-full mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 mb-4">
              Ready to help your child succeed
            </p>
            <p className="text-lg opacity-80">
              Schedule a free consultation to discuss your child's needs and how we can help them achieve their academic goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-froyo-dark-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-froyo-dark-blue">
                  {info.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                {info.href ? (
                  <a href={info.href} className="text-froyo-dark-blue hover:underline">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-slate-600">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Embed Placeholder */}
            <div>
              <h2 className="text-3xl font-heading mb-6">Schedule Your Free Consultation</h2>
              <p className="text-slate-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to schedule your free assessment.
              </p>

              {/* Google Form Embed */}
              <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdoGdZIB8Bh-OlDXhjUZYNpFIYuNpnL8eY9rlT3buE8oDAT5w/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="w-full"
                >
                  Loading form...
                </iframe>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="text-3xl font-heading mb-6">What to Expect</h2>

              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Initial Conversation</h3>
                      <p className="text-slate-600">
                        We'll discuss your child's current academic situation, challenges, and goals to understand how we can best help.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Free Assessment</h3>
                      <p className="text-slate-600">
                        A diagnostic evaluation to identify your child's learning style, strengths, and areas that need improvement.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-froyo-dark-blue text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Customized Plan</h3>
                      <p className="text-slate-600">
                        We'll create a personalized learning plan with clear goals and a recommended session schedule.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-froyo-gold text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Begin Sessions</h3>
                      <p className="text-slate-600">
                        Start your child's journey toward academic success with one-on-one tutoring sessions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {[
              {
                q: "How quickly can we start tutoring sessions?",
                a: "We typically schedule the initial assessment within a week of your inquiry. Regular sessions can begin immediately after the assessment is complete."
              },
              {
                q: "Do you offer in-home tutoring or only at your location?",
                a: "We offer both! Sessions can be held at our West Kendall location or at your home (within our service area). Home visits include a small travel fee."
              },
              {
                q: "What is your cancellation policy?",
                a: "We require 24 hours notice for cancellations. Sessions cancelled with less notice may be charged at the full rate."
              },
              {
                q: "Do you offer group sessions or only one-on-one?",
                a: "While our primary focus is one-on-one tutoring for maximum personalization, we do offer small group sessions (2-4 students) at a discounted rate per student."
              },
              {
                q: "How do I know if my child is making progress?",
                a: "We provide regular progress updates and maintain open communication with parents. You'll receive feedback after each session and periodic comprehensive progress reports."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact CTA */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Prefer to Call?</h2>
          <p className="text-xl opacity-90 mb-8">
            We're happy to answer any questions over the phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
