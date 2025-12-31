import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Users, Calculator, CreditCard, Calendar, MessageCircle, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [serviceType, setServiceType] = useState('personalized');
  const [duration, setDuration] = useState('60');
  const [location, setLocation] = useState('local');

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

  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-froyo-dark-blue font-bold tracking-[0.2em] uppercase text-sm bg-froyo-dark-blue/10 px-4 py-2 rounded-full mb-6">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[60px] font-heading text-slate-900 mb-6">
            Clear Pricing, No Hidden Fees
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Select your service type, session duration, and location to see exact pricing.
            All rates include materials and progress tracking.
          </p>
        </div>
      </section>

      {/* Interactive Pricing Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-froyo-dark-blue rounded-xl flex items-center justify-center">
                <Calculator className="text-white" size={24} />
              </div>
              <h2 className="text-2xl font-bold">Pricing Calculator</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Service Type */}
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Service Type
                </label>
                <div className="space-y-2">
                  {serviceTypes.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setServiceType(service.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        serviceType === service.id
                          ? 'bg-froyo-dark-blue text-white shadow-lg'
                          : 'bg-white border border-slate-200 hover:border-froyo-dark-blue'
                      }`}
                    >
                      <div className="font-bold">{service.name}</div>
                      <div className={`text-sm ${serviceType === service.id ? 'opacity-80' : 'text-slate-500'}`}>
                        {service.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                  <Clock size={14} className="inline mr-2" />
                  Session Duration
                </label>
                <div className="space-y-2">
                  {['60', '90', '120'].map((min) => (
                    <button
                      key={min}
                      onClick={() => setDuration(min)}
                      className={`w-full p-4 rounded-xl font-bold transition-all ${
                        duration === min
                          ? 'bg-froyo-gold text-white shadow-lg'
                          : 'bg-white border border-slate-200 hover:border-froyo-gold'
                      }`}
                    >
                      {min} minutes
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                  <MapPin size={14} className="inline mr-2" />
                  Location
                </label>
                <div className="space-y-2">
                  <button
                    onClick={() => setLocation('local')}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      location === 'local'
                        ? 'bg-froyo-light-blue text-white shadow-lg'
                        : 'bg-white border border-slate-200 hover:border-froyo-light-blue'
                    }`}
                  >
                    <div className="font-bold">West Kendall Facility</div>
                    <div className={`text-sm ${location === 'local' ? 'opacity-80' : 'text-slate-500'}`}>No travel fee</div>
                  </button>
                  <button
                    onClick={() => setLocation('home5')}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      location === 'home5'
                        ? 'bg-froyo-light-blue text-white shadow-lg'
                        : 'bg-white border border-slate-200 hover:border-froyo-light-blue'
                    }`}
                  >
                    <div className="font-bold">In-Home (within 5mi)</div>
                    <div className={`text-sm ${location === 'home5' ? 'opacity-80' : 'text-slate-500'}`}>+$20 travel fee</div>
                  </button>
                  <button
                    onClick={() => setLocation('home10')}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      location === 'home10'
                        ? 'bg-froyo-light-blue text-white shadow-lg'
                        : 'bg-white border border-slate-200 hover:border-froyo-light-blue'
                    }`}
                  >
                    <div className="font-bold">In-Home (5-10mi)</div>
                    <div className={`text-sm ${location === 'home10' ? 'opacity-80' : 'text-slate-500'}`}>+$40 travel fee</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Price Display */}
            <div className="bg-white rounded-2xl p-8 text-center border-2 border-froyo-gold">
              <p className="text-slate-500 font-medium mb-2">Your Session Rate</p>
              <div className="text-5xl md:text-6xl font-heading text-froyo-dark-blue mb-2">
                ${currentPrice}
              </div>
              <p className="text-slate-500">per {duration}-minute session</p>
              <Link to="/contact?referrer=pricing" className="mt-6 bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 inline-block text-center">
                Schedule Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Package Discounts</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.sessions} className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{pkg.sessions}-Session Bundle</h3>
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full font-bold">
                    {pkg.discount} OFF
                  </span>
                </div>
                <p className="text-slate-600">{pkg.savings}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Add-On Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {addOns.map((addon) => (
              <div key={addon.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                <p className="text-froyo-dark-blue font-bold text-lg mb-2">{addon.price}</p>
                <p className="text-slate-600 text-sm">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-16 bg-froyo-dark-blue text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Special Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <Calendar className="text-froyo-gold mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Summer SAT Intensive</h3>
              <p className="text-3xl font-heading text-froyo-gold mb-4">$1,200</p>
              <p className="opacity-80 mb-4">4-week comprehensive course (June 30 – July 25)</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>12 sessions (36 hours total)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>All materials included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>3 full practice tests</span>
                </li>
              </ul>
              <p className="text-sm opacity-70 mt-4">Or 2 payments of $600</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <Users className="text-froyo-gold mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-2">Homeschool Evaluation</h3>
              <p className="text-3xl font-heading text-froyo-gold mb-4">Custom Quote</p>
              <p className="opacity-80 mb-4">Annual evaluation services for Florida homeschool families</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>State-compliant evaluations</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Portfolio review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span>Progress documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Payment Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6">
              <CreditCard className="text-froyo-dark-blue mb-4" size={28} />
              <h3 className="text-xl font-bold mb-4">Accepted Payment Methods</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Credit/Debit Cards</li>
                <li>• Zelle</li>
                <li>• Venmo</li>
                <li>• Cash (in-person only)</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl p-6">
              <Calendar className="text-froyo-dark-blue mb-4" size={28} />
              <h3 className="text-xl font-bold mb-4">Policies</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• 24-hour cancellation notice required</li>
                <li>• Payment due at time of session</li>
                <li>• Package payments due upfront</li>
                <li>• No refunds after program start</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "What's included in the session rate?", a: "All rates include one-on-one instruction, custom materials, progress tracking, and parent communication. There are no hidden fees." },
              { q: "Can I switch between service types?", a: "Yes, you can adjust your service type at any time. Package discounts apply to the predominant service type used." },
              { q: "Do you offer sliding scale or scholarships?", a: "Limited scholarships are available for qualifying families. Contact us to discuss your situation." },
              { q: "What's the difference between Homework Help and Personalized Lessons?", a: "Homework Help focuses on completing current assignments and building study habits. Personalized Lessons include diagnostic assessment and targeted instruction to address specific knowledge gaps." },
              { q: "Is there a registration or assessment fee?", a: "No. The initial consultation and assessment are free with no obligation." }
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
          <h2 className="text-3xl md:text-4xl font-heading mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Schedule a free consultation to discuss your child's needs and find the right learning plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact?referrer=pricing" className="bg-froyo-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-400 transition-all shadow-xl shadow-froyo-gold/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
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

export default Pricing;
