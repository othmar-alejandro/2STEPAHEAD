import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CreditCard, CheckCircle, ArrowLeft, Loader, Shield, Lock } from 'lucide-react';

const Payment = () => {
  const [searchParams] = useSearchParams();
  const [enrollmentData, setEnrollmentData] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Retrieve enrollment data from localStorage
    const storedData = localStorage.getItem('summerSATEnrollment');
    if (storedData) {
      setEnrollmentData(JSON.parse(storedData));
    }
  }, []);

  const handlePayment = () => {
    setIsProcessing(true);

    // Placeholder integration
    const paymentAmount = enrollmentData?.plan === 'full-payment' ? '1200' : '600';
    const paymentLink = `https://your-payment-processor.com/pay?amount=${paymentAmount}`;

    setTimeout(() => {
      window.location.href = paymentLink;
    }, 1000);
  };

  if (!enrollmentData) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center w-full">
          <div className="bg-white rounded-[2.5rem] p-12 shadow-xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">No Enrollment Data Found</h1>
            <p className="text-slate-600 mb-8">
              Please complete the enrollment form first.
            </p>
            <Link
              to="/test-prep#enroll"
              className="inline-flex items-center gap-2 bg-froyo-dark-blue text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <ArrowLeft size={20} />
              Back to Enrollment
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const planDetails = enrollmentData.plan === 'full-payment'
    ? { name: 'Pay in Full', amount: '$1,200', description: 'One-time payment for the complete Summer SAT Intensive course' }
    : { name: 'Payment Plan', amount: '$600', description: 'First payment of 2 installments ($600 x 2)' };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-froyo-light-blue/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-froyo-gold/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
            <Lock size={14} />
            Secure Enrollment
          </div>
          <h1 className="text-4xl md:text-6xl font-heading text-slate-900 mb-4 tracking-tight">
            Complete Your Enrollment
          </h1>
          <p className="text-xl text-slate-600">
            Summer SAT Intensive 2026
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Enrollment Summary */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="text-slate-900" size={20} />
              </div>
              Enrollment Summary
            </h2>

            <div className="space-y-6">
              <div className="group">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-froyo-dark-blue transition-colors">Student Name</p>
                <p className="text-xl text-slate-900 font-medium">{enrollmentData.studentName}</p>
              </div>

              <div className="group">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-froyo-dark-blue transition-colors">Parent Email</p>
                <p className="text-xl text-slate-900 font-medium">{enrollmentData.email}</p>
              </div>

              <div className="group">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1 group-hover:text-froyo-dark-blue transition-colors">Phone Number</p>
                <p className="text-xl text-slate-900 font-medium">{enrollmentData.phone}</p>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">Selected Plan</p>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-xl text-froyo-dark-blue font-bold mb-1">{planDetails.name}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{planDetails.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600 font-medium">Total Due Today</span>
                <span className="text-4xl font-heading font-bold text-froyo-dark-blue">{planDetails.amount}</span>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-gradient-to-br from-froyo-dark-blue to-[#00335c] rounded-[2.5rem] p-8 md:p-10 shadow-2xl text-white relative overflow-hidden">
            {/* Glossy Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <Lock size={24} className="text-froyo-gold" />
                </div>
                <h2 className="text-2xl font-bold">Secure Checkout</h2>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/10">
                <h3 className="font-bold text-sm uppercase tracking-widest mb-4 text-white/70">What's Included</h3>
                <ul className="space-y-3">
                  {[
                    '12 Live Sessions (June 30 - July 25)',
                    '24+ Hours of Expert Instruction',
                    'Personalized Study Plan',
                    'Weekly Practice Tests',
                    'Strategic Mastery Techniques',
                    'Small Group (Max 6 Students)'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-froyo-gold hover:bg-white hover:text-froyo-dark-blue text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                {isProcessing ? (
                  <>
                    <Loader className="animate-spin" size={24} />
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard size={24} />
                    <span className="relative z-10">Proceed to Payment</span>
                  </>
                )}
              </button>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs opacity-70">
                <Shield size={12} />
                <span>SSL Encrypted Payment Processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link
            to="/test-prep"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-froyo-dark-blue transition-colors font-bold text-sm uppercase tracking-wider group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Cancel & Return
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
