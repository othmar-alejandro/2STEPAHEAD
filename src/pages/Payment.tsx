import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CreditCard, CheckCircle, ArrowLeft, Loader } from 'lucide-react';

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

    // Here you would integrate with your payment processor
    // Examples:
    // - Stripe: window.location.href = 'https://buy.stripe.com/your-payment-link'
    // - PayPal: window.location.href = 'https://paypal.me/your-link'
    // - Square: window.location.href = 'https://square.link/your-link'

    // For now, we'll redirect to a placeholder
    // REPLACE THIS URL WITH YOUR ACTUAL PAYMENT PROCESSOR LINK
    const paymentAmount = enrollmentData?.plan === 'full-payment' ? '1200' : '600';
    const paymentLink = `https://your-payment-processor.com/pay?amount=${paymentAmount}`;

    // Redirect to payment processor
    setTimeout(() => {
      window.location.href = paymentLink;
    }, 1000);
  };

  if (!enrollmentData) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-slate-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">No Enrollment Data Found</h1>
            <p className="text-slate-600 mb-8">
              Please complete the enrollment form first.
            </p>
            <Link
              to="/#sat"
              className="inline-flex items-center gap-2 bg-froyo-dark-blue text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors"
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
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-slate-900 mb-4">
            Complete Your Enrollment
          </h1>
          <p className="text-xl text-slate-600">
            Summer SAT Intensive 2025
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Enrollment Summary */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Enrollment Summary</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Student Name</p>
                <p className="text-lg text-slate-900 font-medium">{enrollmentData.studentName}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Parent Email</p>
                <p className="text-lg text-slate-900 font-medium">{enrollmentData.email}</p>
              </div>

              <div>
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Phone Number</p>
                <p className="text-lg text-slate-900 font-medium">{enrollmentData.phone}</p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider mb-1">Payment Plan</p>
                <p className="text-lg text-froyo-dark-blue font-bold">{planDetails.name}</p>
                <p className="text-sm text-slate-600 mt-1">{planDetails.description}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600 font-medium">Amount Due Today</span>
                <span className="text-3xl font-bold text-froyo-dark-blue">{planDetails.amount}</span>
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-gradient-to-br from-froyo-dark-blue to-froyo-light-blue rounded-3xl p-8 shadow-xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard size={32} />
              <h2 className="text-2xl font-bold">Secure Payment</h2>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">What's Included</h3>
              <ul className="space-y-3">
                {[
                  '12 Live Sessions (June 30 - July 25)',
                  '24+ Hours of Expert Instruction',
                  'Personalized Study Plan',
                  'Weekly Practice Tests',
                  'Strategic Mastery Techniques',
                  'Small Group (Max 6 Students)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-froyo-gold flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-froyo-gold text-white py-4 rounded-xl font-bold text-lg hover:bg-orange-400 transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  Redirecting to Payment...
                </>
              ) : (
                <>
                  <CreditCard size={20} />
                  Proceed to Secure Payment
                </>
              )}
            </button>

            <p className="text-xs text-center mt-4 opacity-80">
              You will be redirected to our secure payment processor to complete your transaction.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-8">
          <Link
            to="/#sat"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-froyo-dark-blue transition-colors font-medium"
          >
            <ArrowLeft size={18} />
            Back to Enrollment Form
          </Link>
        </div>

        {/* Security Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-md border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            Secure Transaction
          </h3>
          <p className="text-sm text-slate-600">
            Your payment information is processed securely through our encrypted payment processor.
            We never store your credit card information. After successful payment, you'll receive a
            confirmation email with all course details and next steps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
