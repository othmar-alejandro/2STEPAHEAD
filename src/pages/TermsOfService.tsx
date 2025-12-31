import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
            <FileText size={16} className="text-froyo-gold" />
            <span className="font-bold text-sm text-froyo-gold uppercase tracking-wider">Legal Framework</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            Terms of Service
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Our commitment to quality education and your agreement with us. Please read these terms carefully before using our services.
          </p>
          <div className="mt-8 text-sm text-slate-400 font-mono bg-slate-800/50 inline-block px-4 py-2 rounded-lg border border-slate-700">
            Last Updated: December 31, 2024
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4">

        {/* Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 space-y-12">

          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you (the "Client," "Parent," or "Guardian") and 2 Steps Ahead ("Company," "we," "us," or "our"), a tutoring service located in The Hammocks, Florida.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By enrolling in our tutoring services, scheduling a session, or using our website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services Provided</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              2 Steps Ahead provides supplemental educational tutoring services for students Pre-K through Grade 12, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>One-on-one and small group tutoring in Math, Reading, Science, and Social Studies</li>
              <li>Test preparation services (SAT, ACT, CLT, AP exams)</li>
              <li>Homeschool support including curriculum consulting and annual evaluations</li>
              <li>Specialized instruction for students with ADHD, Autism, dyslexia, and gifted learners</li>
              <li>Summer SAT Intensive programs</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Services may be provided in-person at our location in The Hammocks, Florida, or online via video conferencing platforms as agreed upon at enrollment.
            </p>
          </section>

          {/* Educational Outcomes Disclaimer */}
          <section className="bg-orange-50 border-l-4 border-froyo-gold p-6 rounded-r-2xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-froyo-gold flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">3. No Guarantee of Results</h2>
                <p className="text-slate-700 leading-relaxed mb-3">
                  <strong>IMPORTANT:</strong> 2 Steps Ahead makes no warranties, express or implied, regarding academic outcomes, grade improvements, test score increases, or college admissions success. While we provide high-quality tutoring services in good faith and according to industry standards, academic achievement depends on numerous factors including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>Student effort, engagement, and regular attendance</li>
                  <li>Completion of assigned homework and practice materials</li>
                  <li>Prior academic preparation and foundational skills</li>
                  <li>Individual learning styles and differences</li>
                  <li>External circumstances beyond our control</li>
                </ul>
                <p className="text-slate-700 leading-relaxed mt-3">
                  Parents and students acknowledge that tutoring is a supplemental educational service and does not guarantee specific results.
                </p>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.1 Rates and Payment Methods</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Tutoring rates are set forth in our <Link to="/pricing" className="text-froyo-dark-blue hover:underline font-medium">Pricing</Link> page and confirmed at enrollment. Payment may be made via credit card, debit card, bank transfer, PayPal, Venmo, or check (for established clients).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.2 Payment Due Date</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Payment is due within 24 hours after each tutoring session unless otherwise agreed in writing. For package programs (including Summer SAT Intensive), payment terms will be specified at enrollment.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.3 Summer SAT Intensive Payment Plans</h3>
            <p className="text-slate-600 leading-relaxed mb-2">Clients enrolling in the Summer SAT Intensive program may choose from:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li><strong>Pay in Full:</strong> One-time payment of $1,200 due at enrollment</li>
              <li><strong>Payment Plan:</strong> Two installments of $600 each (first payment due at enrollment, second payment due at program midpoint)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              The initial payment or deposit for Summer SAT Intensive enrollments is non-refundable if cancellation occurs within 7 days of the program start date.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.4 Late Payment</h3>
            <p className="text-slate-600 leading-relaxed">
              Accounts more than 7 days past due may be subject to a late fee of 2% per month (24% annual percentage rate). Tutoring sessions may be suspended until the account is brought current. Clients remain responsible for all collection costs, including reasonable attorney's fees, incurred in collecting past-due amounts.
            </p>
          </section>

          {/* Cancellation and Refund Policy */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Cancellation and Refund Policy</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.1 Notice Requirement</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Clients must provide at least <strong>24 hours' advance notice</strong> to cancel or reschedule a tutoring session without penalty. Cancellations or rescheduling requests made with less than 24 hours' notice will result in the full session fee being charged.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.2 No-Show Policy</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Students who fail to attend a scheduled session without any prior notice ("no-show") will be charged the full session fee with no option to reschedule.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.3 Emergency Exceptions</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              In cases of documented illness, family emergency, or unavoidable school conflict, we may offer one complimentary rescheduling per month at our sole discretion. Documentation may be requested.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.4 Tutor Cancellations</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              If 2 Steps Ahead must cancel a session due to tutor illness or emergency, the session will be rescheduled at no charge to the client, or a credit will be applied to the client's account.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.5 Program Cancellation and Refunds</h3>
            <p className="text-slate-600 leading-relaxed mb-2">
              For package programs (including Summer SAT Intensive), refunds are calculated as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Cancellation 14+ days before program start: Full refund minus any non-refundable deposit</li>
              <li>Cancellation 7-13 days before program start: 50% refund</li>
              <li>Cancellation within 7 days of program start: No refund</li>
              <li>After program begins: Pro-rata refund for unused sessions minus 20% administrative fee</li>
            </ul>
          </section>

          {/* Technology Requirements */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Technology Requirements (Online Sessions)</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For online tutoring sessions, students must have:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Reliable internet connection (minimum 5 Mbps download/upload speed recommended)</li>
              <li>Webcam and microphone (built-in or external)</li>
              <li>Device capable of running video conferencing software (Zoom, Google Meet, etc.)</li>
              <li>Quiet, distraction-free environment for tutoring sessions</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              2 Steps Ahead is not responsible for technology failures, internet outages, platform disruptions, or client equipment issues. We do not provide technical support for client devices or internet connectivity. Sessions missed due to client technology issues are subject to the standard cancellation policy.
            </p>
          </section>

          {/* Liability Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">7.1 Standard of Care</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              2 Steps Ahead agrees to provide tutoring services with reasonable care, skill, and diligence consistent with industry standards for professional tutoring services in Florida.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">7.2 Maximum Liability</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              To the maximum extent permitted by law, 2 Steps Ahead's total liability for any claims arising from tutoring services shall not exceed the total amount paid by the client for services in the 90 days preceding the claim.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">7.3 Exclusion of Consequential Damages</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              2 Steps Ahead shall not be liable for any indirect, incidental, special, or consequential damages including but not limited to lost educational opportunities, emotional distress, impacts on college admissions, or loss of scholarships.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">7.4 Assumption of Risk (In-Person Sessions)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              By participating in in-person tutoring sessions at our location in The Hammocks, Florida, clients acknowledge and voluntarily assume all risks associated with attendance, including but not limited to injuries occurring on premises, accidents during arrival or departure, and interaction with other students or staff.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">7.5 Release of Liability</h3>
            <p className="text-slate-600 leading-relaxed">
              Client releases and holds harmless 2 Steps Ahead, its owners, employees, and contractors from any claims, damages, or injuries arising from participation in tutoring services, except in cases of gross negligence or intentional misconduct.
            </p>
          </section>

          {/* Special Needs Support */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Scope of Special Needs Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              2 Steps Ahead provides academic tutoring support for students with ADHD, Autism, dyslexia, and other learning differences. <strong>We are not licensed therapists, medical professionals, psychologists, or special education specialists.</strong> Our services supplement but do not replace:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Individualized Education Programs (IEPs)</li>
              <li>504 accommodation plans</li>
              <li>Occupational therapy, speech therapy, or physical therapy</li>
              <li>Psychological counseling or behavioral therapy</li>
              <li>Medical treatment or diagnosis</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              If tutors observe learning, behavioral, or developmental concerns beyond the scope of academic tutoring, we will recommend appropriate professional evaluation but are not responsible for diagnosis or treatment.
            </p>
          </section>

          {/* Minor Supervision */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Supervision of Minors</h2>
            <p className="text-slate-600 leading-relaxed">
              Tutors are not acting in loco parentis (in place of parents) and are not responsible for general child supervision, transportation, or behavioral management outside the tutoring session itself. Parents/guardians remain responsible for student safety before, during, and after sessions. For in-person sessions, parents must ensure timely drop-off and pick-up of students.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Confidentiality and Privacy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              2 Steps Ahead regards all student information as confidential and will not disclose student personal information, academic performance data, or session details to third parties except:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>With explicit written consent from parent/guardian</li>
              <li>As required by law or court order</li>
              <li>To protect the safety of the student or others</li>
              <li>In response to suspected child abuse or neglect (mandatory reporting)</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              For complete details on data collection, use, and protection, please review our <Link to="/privacy-policy" className="text-froyo-dark-blue hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </section>

          {/* Conduct Standards */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Code of Conduct</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">11.1 Professional Behavior</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              All students, parents, and tutors are expected to maintain respectful, professional behavior during all interactions. 2 Steps Ahead maintains a zero-tolerance policy for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Harassment, bullying, or discriminatory behavior of any kind</li>
              <li>Verbal or physical abuse</li>
              <li>Threats or intimidation</li>
              <li>Inappropriate or offensive language</li>
              <li>Violation of safety protocols</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">11.2 Consequences for Violations</h3>
            <p className="text-slate-600 leading-relaxed">
              Violations of this Code of Conduct may result in immediate termination of services without refund. 2 Steps Ahead reserves the right to refuse service to any individual whose behavior is deemed disruptive, threatening, or incompatible with a productive learning environment.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Termination of Services</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">12.1 Termination by Client</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Clients may terminate services at any time by providing written notice (email acceptable). Refunds for prepaid sessions or packages will be calculated according to Section 5.5 above.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">12.2 Termination by Company</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              2 Steps Ahead may terminate services immediately without notice for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Violations of the Code of Conduct</li>
              <li>Non-payment or repeated late payment</li>
              <li>Misrepresentation or provision of false information</li>
              <li>Failure to comply with these Terms</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              In cases of termination by the Company for cause, no refunds will be provided for prepaid services.
            </p>
          </section>

          {/* Background Checks */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Background Checks and Compliance</h2>
            <p className="text-slate-600 leading-relaxed">
              All tutors employed or contracted by 2 Steps Ahead undergo comprehensive background checks and fingerprinting as required by Florida law, including compliance with the Jessica Lunsford Act. 2 Steps Ahead maintains all necessary business licenses and ensures tutors hold appropriate educational certifications for the subjects and grade levels they teach.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All lesson plans, teaching materials, handouts, practice tests, and proprietary content created or provided by 2 Steps Ahead remain the intellectual property of the Company. Clients may not reproduce, distribute, or commercially exploit these materials without written permission.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Use of student work samples, photographs, or testimonials for marketing purposes requires explicit written consent from the parent/guardian.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">15.1 Informal Resolution</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              In the event of any dispute, claim, or controversy arising from these Terms or the services provided, the parties agree to first attempt to resolve the matter through good-faith negotiation.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">15.2 Mediation</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              If informal resolution is unsuccessful within 30 days, the parties agree to participate in mediation before a neutral mediator in Miami-Dade County, Florida, before pursuing litigation or arbitration.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">15.3 Statute of Limitations</h3>
            <p className="text-slate-600 leading-relaxed">
              Any claims arising from these Terms or the services provided must be filed within one (1) year from the date the claim arose, regardless of any statute of limitations that might otherwise apply.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Governing Law and Jurisdiction</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of laws principles. Any legal action or proceeding arising from these Terms shall be brought exclusively in the state or federal courts located in Miami-Dade County, Florida, and the parties consent to the jurisdiction of such courts.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              2 Steps Ahead reserves the right to modify these Terms at any time. Material changes will be communicated to active clients via email at least 14 days before taking effect. Continued use of our services after changes become effective constitutes acceptance of the modified Terms. The "Last Updated" date at the top of this document indicates when Terms were last revised.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Entire Agreement</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms, together with our Privacy Policy and any enrollment agreements or service contracts, constitute the entire agreement between the client and 2 Steps Ahead regarding tutoring services and supersede all prior agreements, understandings, or representations, whether written or oral.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">19. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For questions about these Terms of Service, please contact:
            </p>
            <div className="text-slate-700">
              <p className="font-semibold">2 Steps Ahead</p>
              <p>The Hammocks, FL</p>
              <p>Phone: (786) 282-9626</p>
              <p>Email: 2satutoring@gmail.com</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-froyo-dark-blue/5 border-l-4 border-froyo-dark-blue p-6 rounded-r-2xl">
            <div className="flex items-start gap-3">
              <Shield className="text-froyo-dark-blue flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Acknowledgment</h2>
                <p className="text-slate-700 leading-relaxed">
                  By enrolling in tutoring services, scheduling a session, or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you are enrolling a minor child, you represent that you are the parent or legal guardian with authority to agree to these Terms on behalf of the student.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-froyo-dark-blue hover:text-slate-900 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
