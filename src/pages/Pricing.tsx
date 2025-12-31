import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Calculator, CreditCard, Calendar, MessageCircle, ArrowRight, Sparkles, Star } from 'lucide-react';

const Pricing = () => {
  const [animate, setAnimate] = useState(false);
  const [serviceType, setServiceType] = useState('personalized');
  const [duration, setDuration] = useState('60');
  const [location, setLocation] = useState('local');

  useEffect(() => {
    setAnimate(true);
  }, []);

  const pricingData: Record<string, Record<string, Record<string, number>>> = {
    homework: {
      '60': { local: 45, home5: 65, home10: 85 },
      '90': { local: 65, home5: 85, home10: 105 },
      '120': { local: 85, home5: 105, home10: 125 }
    },
    personalized: {
      '60': { local: 80, home5: 100, home10: 120 },
      '90': { local: 120, home5: 140, home10: 160 },
      '120': { local: 160, home5: 180, home10: 200 }
    },
    testprep: {
      '60': { local: 60, home5: 80, home10: 100 },
      '90': { local: 80, home5: 100, home10: 120 },
      '120': { local: 100, home5: 120, home10: 140 }
    },
    fullpackage: {
      '60': { local: 120, home5: 140, home10: 160 },
      '90': { local: 160, home5: 180, home10: 200 },
      '120': { local: 200, home5: 220, home10: 240 }
    }
  };

  const currentPrice = pricingData[serviceType]?.[duration]?.[location] || 0;

  const serviceTypes = [
    { id: 'homework', name: 'Homework Help', desc: 'Assignment support & accountability' },
    { id: 'personalized', name: 'Personalized Lessons', desc: 'Targeted skill building & mastery' },
    { id: 'testprep', name: 'Test Prep', desc: 'SAT, ACT, CLT preparation' },
    { id: 'fullpackage', name: 'Full Package', desc: 'Homework help + personalized lessons' }
  ];

  const addOns = [
    { name: 'Grade Monitoring', price: '$100/week', desc: '2x weekly grade updates and progress reports' },
    { name: 'Assignment Monitoring', price: '$180/week', desc: 'Daily check-ins + grade tracking' },
    { name: 'Group Sessions (2-4 students)', price: '20% off per student', desc: 'Same household or study group' }
  ];

  const packages = [
    { sessions: 10, discount: '5%', savings: 'Save on commitment' },
    { sessions: 20, discount: '10%', savings: 'Best value for semester' }
  ];

  const faqs = [
    { q: "What's included in the session rate?", a: "All rates include one-on-one instruction, custom materials, progress tracking, and parent communication. There are no hidden fees." },
    { q: "Can I switch between service types?", a: "Yes, you can adjust your service type at any time. Package discounts apply to the predominant service type used." },
    { q: "Do you offer sliding scale or scholarships?", a: "Limited scholarships are available for qualifying families. Contact us to discuss your situation." },
    { q: "What's the difference between Homework Help and Personalized Lessons?", a: "Homework Help focuses on completing current assignments and building study habits. Personalized Lessons include diagnostic assessment and targeted instruction to address specific knowledge gaps." },
    { q: "Is there a registration or assessment fee?", a: "No. The initial consultation and assessment are free with no obligation." }
  ];

  return (
    <div className="pt-24 pb-20 overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
              <Sparkles size={16} className="text-froyo-gold" />
              <span className="font-bold text-sm text-white uppercase tracking-wider">Transparent & Flexible</span>
            </span>
            <h1 className="text-5xl lg:text-[70px] leading-[1.1] font-heading mb-6">
              Invest in Their <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-froyo-gold to-froyo-light-blue">Future Success.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              Simple, transparent pricing personalized to your student's needs. No long-term contracts, just results.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <section className="py-20 lg:py-24 -mt-20 relative z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* Left: Configuration Controls */}
            <div className="flex-1 space-y-8">
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3 text-slate-800">
                  <div className="w-10 h-10 rounded-full bg-froyo-light-blue/20 flex items-center justify-center text-froyo-dark-blue">
                    <span className="font-bold">1</span>
                  </div>
                  Choose Service Type
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setServiceType(service.id)}
                      className={`relative p-6 rounded-2xl text-left transition-all duration-300 border-2 ${serviceType === service.id
                          ? 'border-froyo-dark-blue bg-froyo-dark-blue text-white shadow-lg scale-[1.02]'
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white'
                        }`}
                    >
                      {serviceType === service.id && (
                        <div className="absolute top-4 right-4 text-froyo-gold">
                          <CheckCircle size={20} fill="currentColor" className="text-white" />
                        </div>
                      )}
                      <div className="font-bold text-lg mb-2">{service.name}</div>
                      <div className={`text-sm ${serviceType === service.id ? 'opacity-80' : 'text-slate-400'}`}>
                        {service.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3 text-slate-800">
                  <div className="w-10 h-10 rounded-full bg-froyo-light-blue/20 flex items-center justify-center text-froyo-dark-blue">
                    <span className="font-bold">2</span>
                  </div>
                  Session Duration
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {['60', '90', '120'].map((min) => (
                    <button
                      key={min}
                      onClick={() => setDuration(min)}
                      className={`p-4 py-6 rounded-2xl font-bold text-center transition-all duration-300 border-2 ${duration === min
                          ? 'border-froyo-gold bg-froyo-gold text-white shadow-lg transform -translate-y-1'
                          : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-froyo-gold hover:text-froyo-gold'
                        }`}
                    >
                      <span className="text-xl md:text-2xl">{min}</span>
                      <span className="block text-xs uppercase tracking-wider opacity-80 mt-1">Mins</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3 text-slate-800">
                  <div className="w-10 h-10 rounded-full bg-froyo-light-blue/20 flex items-center justify-center text-froyo-dark-blue">
                    <span className="font-bold">3</span>
                  </div>
                  Select Location
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'local', title: 'West Kendall Facility', subtitle: 'No travel fee' },
                    { id: 'home5', title: 'In-Home (0-5 miles)', subtitle: '+$20 travel fee' },
                    { id: 'home10', title: 'In-Home (5-10 miles)', subtitle: '+$40 travel fee' }
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      onClick={() => setLocation(loc.id)}
                      className={`w-full p-5 rounded-2xl flex items-center justify-between transition-all duration-300 border-2 ${location === loc.id
                          ? 'border-froyo-dark-blue bg-white shadow-md'
                          : 'border-transparent bg-slate-50 text-slate-500 hover:bg-slate-100'
                        }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${location === loc.id ? 'border-froyo-dark-blue' : 'border-slate-300'
                          }`}>
                          {location === loc.id && <div className="w-3 h-3 rounded-full bg-froyo-dark-blue"></div>}
                        </div>
                        <div className="text-left">
                          <div className={`font-bold ${location === loc.id ? 'text-slate-900' : 'text-slate-600'}`}>
                            {loc.title}
                          </div>
                        </div>
                      </div>
                      <div className={`text-sm font-medium ${location === loc.id ? 'text-froyo-dark-blue' : 'text-slate-400'}`}>
                        {loc.subtitle}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sticky Price Display */}
            <div className="lg:w-[400px] xl:w-[450px]">
              <div className="sticky top-32">
                <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-froyo-gold rounded-full blur-[80px] opacity-20 -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-froyo-light-blue rounded-full blur-[80px] opacity-20 -ml-16 -mb-16"></div>

                  <div className="relative z-10 flex flex-col items-center text-center h-full">
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-6">Estimated Rate</p>

                    <div className="flex items-start justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold opacity-50 relative top-4">$</span>
                      <span className="text-8xl font-heading font-bold tracking-tighter transition-all duration-300">
                        {currentPrice}
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-slate-300 mb-10 backdrop-blur-sm border border-white/5">
                      <Clock size={14} />
                      <span>per {duration}-minute session</span>
                    </div>

                    <div className="w-full space-y-4">
                      <div className="flex justify-between text-sm text-slate-400 pb-4 border-b border-white/10">
                        <span>Service</span>
                        <span className="text-white">{serviceTypes.find(s => s.id === serviceType)?.name}</span>
                      </div>
                      <div className="flex justify-between text-sm text-slate-400 pb-4 border-b border-white/10">
                        <span>Total Duration</span>
                        <span className="text-white">{duration} Minutes</span>
                      </div>
                    </div>

                    <Link
                      to="/contact?referrer=pricing"
                      className="w-full bg-froyo-gold text-white mt-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 group"
                    >
                      <span>Book Now</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <p className="mt-6 text-xs text-slate-500 max-w-[250px]">
                      *Final price may vary based on specific requirements discussed during assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Bundles */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">Commitment Packages</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Save more when you commit to your student's long-term success. Packages never expire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Standard Rate - Context Card */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 flex flex-col">
              <div className="mb-6">
                <span className="bg-slate-200 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Pay-As-You-Go</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Single Session</h3>
              <p className="text-slate-500 mb-8">Standard flexibility for occasional help.</p>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-slate-300" /> No commitment
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-slate-300" /> Pay per visit
                </li>
              </ul>
            </div>

            {packages.map((pkg, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] p-8 shadow-xl border-2 border-froyo-dark-blue/5 hover:border-froyo-dark-blue/20 transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-froyo-gold text-white text-sm font-bold px-6 py-2 rounded-bl-2xl">
                  SAVE {pkg.discount}
                </div>
                <div className="mb-6 pt-2">
                  <span className="bg-froyo-light-blue/10 text-froyo-light-blue px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Popular Choice</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.sessions}-Session Bundle</h3>
                <p className="text-slate-500 mb-8">{pkg.savings}</p>

                <div className="w-full h-px bg-slate-100 mb-8"></div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={20} className="text-froyo-gold" />
                    {pkg.sessions} prepaid sessions
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={20} className="text-froyo-gold" />
                    Priority scheduling
                  </li>
                  <li className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle size={20} className="text-froyo-gold" />
                    Detailed progress reports
                  </li>
                </ul>

                <Link to="/contact" className="block w-full text-center py-4 rounded-xl border-2 border-froyo-dark-blue text-froyo-dark-blue font-bold hover:bg-froyo-dark-blue hover:text-white transition-colors">
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs & Add-ons */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Add-ons */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-8">Premium Add-Ons</h2>
              <div className="space-y-4">
                {addOns.map((addon, i) => (
                  <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-froyo-dark-blue group-hover:text-white transition-colors">
                        <Star size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{addon.name}</h4>
                        <p className="text-sm text-slate-500">{addon.desc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="block font-bold text-froyo-dark-blue">{addon.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Programs Highlight */}
            <div className="bg-gradient-to-br from-froyo-dark-blue to-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
              <div className="relative z-10">
                <div className="inline-block bg-froyo-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm mb-6">Featured Program</div>
                <h3 className="text-3xl font-heading font-bold mb-4">Summer SAT Intensive</h3>
                <p className="text-white/70 mb-8 text-lg">
                  Our comprehensive 4-week course designed to maximize score improvements. Includes materials, practice tests, and small group instruction.
                </p>
                <div className="flex items-end gap-2 mb-8">
                  <span className="text-5xl font-bold text-white">$1,200</span>
                  <span className="text-white/50 mb-2">/ full course</span>
                </div>
                <Link to="/test-prep" className="inline-flex items-center gap-2 bg-white text-froyo-dark-blue px-8 py-4 rounded-xl font-bold hover:bg-froyo-gold hover:text-white transition-all">
                  View Program Details <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-16 text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-bold text-lg text-slate-800">{faq.q}</h3>
                  <span className="bg-white w-8 h-8 rounded-full flex items-center justify-center shadow-sm text-froyo-dark-blue group-open:rotate-45 transition-transform">
                    <span className="text-xl">+</span>
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100/50 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-froyo-dark-blue/20"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Book your free assessment today and take the first step towards academic confidence.
          </p>
          <Link to="/contact?referrer=pricing" className="inline-flex items-center gap-2 bg-froyo-gold text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-slate-900 transition-all shadow-xl hover:scale-105 active:scale-95">
            <MessageCircle size={20} />
            Schedule Free Assessment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
