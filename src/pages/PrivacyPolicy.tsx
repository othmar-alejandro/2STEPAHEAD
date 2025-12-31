import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
            <Shield size={16} className="text-froyo-gold" />
            <span className="font-bold text-sm text-froyo-gold uppercase tracking-wider">Privacy & Data Protection</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Your trust is our priority. We are committed to transparency and protecting the personal information of our students and families.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              2 Steps Ahead ("Company," "we," "us," or "our") is committed to protecting the privacy and security of personal information collected from students, parents, and guardians. This Privacy Policy explains how we collect, use, share, and protect information when you use our tutoring services or visit our website.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This policy applies to information collected through our website, in-person tutoring sessions, online tutoring sessions, enrollment forms, and all communications with our staff.
            </p>
          </section>

          {/* COPPA Compliance */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <div className="flex items-start gap-3">
              <Users className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">2. Children's Privacy (COPPA Compliance)</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We comply with the Children's Online Privacy Protection Act (COPPA) regarding the collection of personal information from children under 13 years of age.
                </p>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4">2.1 Parental Consent Required</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We do not knowingly collect personal information from children under 13 without verifiable parental consent. Before enrolling any student under age 13, we require:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li>Signed enrollment form from parent or legal guardian</li>
                  <li>Explicit consent for data collection and use</li>
                  <li>Payment authorization (which serves as identity verification)</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4">2.2 Parental Rights</h3>
                <p className="text-slate-700 leading-relaxed mb-2">
                  Parents and guardians have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li>Review all personal information collected about their child</li>
                  <li>Request deletion of their child's information (subject to legal record-keeping requirements)</li>
                  <li>Refuse to allow further collection or use of their child's information</li>
                  <li>Withdraw consent at any time (which may result in inability to provide tutoring services)</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4">2.3 Direct Communication with Minors</h3>
                <p className="text-slate-700 leading-relaxed">
                  We do not collect email addresses, phone numbers, or other contact information directly from children under 13. All communications regarding scheduling, billing, and student progress are directed to parents or guardians. Students aged 13-17 may communicate directly with tutors regarding assignments and scheduling with parental knowledge, but parents retain full access to all information.
                </p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Information We Collect</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">3.1 Student Information</h3>
            <p className="text-slate-600 leading-relaxed mb-2">We collect the following information about students:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Student name, age, grade level, and school</li>
              <li>Academic performance data (test scores, assignment grades, areas of difficulty)</li>
              <li>Learning needs and goals</li>
              <li>IEP, 504 plan, or other accommodations documentation (for special needs support)</li>
              <li>Session attendance records and progress notes</li>
              <li>For online sessions: IP addresses, device information, session recordings (if applicable)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">3.2 Parent/Guardian Information</h3>
            <p className="text-slate-600 leading-relaxed mb-2">We collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Parent/guardian name and contact information (email, phone number, address)</li>
              <li>Emergency contact information</li>
              <li>Payment information (credit card details processed through secure third-party payment processors)</li>
              <li>Communication preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">3.3 Website Usage Information</h3>
            <p className="text-slate-600 leading-relaxed mb-2">When you visit our website, we may automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address and general location (city/state level)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Cookies and similar tracking technologies (see our <Link to="/cookie-policy" className="text-froyo-dark-blue hover:underline font-medium">Cookie Policy</Link>)</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect solely for educational and business purposes:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.1 Providing Tutoring Services</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Conducting tutoring sessions and tracking student progress</li>
              <li>Developing individualized learning plans</li>
              <li>Communicating with parents about student performance</li>
              <li>Scheduling and coordinating sessions</li>
              <li>Preparing progress reports and evaluations</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.2 Business Operations</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Processing payments and managing billing</li>
              <li>Responding to inquiries and customer service requests</li>
              <li>Sending appointment reminders and important updates</li>
              <li>Improving our services and curriculum</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.3 What We Do NOT Do</h3>
            <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
              <p className="text-slate-700 leading-relaxed mb-2 font-semibold">We do NOT:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li>Sell or rent student information to third parties</li>
                <li>Use student data for advertising or marketing to children</li>
                <li>Share student information for commercial purposes</li>
                <li>Disclose student information except as described in this policy</li>
              </ul>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Information Sharing and Disclosure</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We maintain strict confidentiality of student information and share it only in the following limited circumstances:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.1 With Your Consent</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We will share student information with third parties (such as schools, other educational professionals, or testing organizations) only with explicit written consent from the parent or guardian.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.2 Service Providers</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may share information with trusted third-party service providers who assist with our operations, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li><strong>Payment processors</strong> (Stripe, Square, PayPal) - to process tuition payments</li>
              <li><strong>Video conferencing platforms</strong> (Zoom, Google Meet) - for online tutoring sessions</li>
              <li><strong>Scheduling software</strong> - for appointment management</li>
              <li><strong>Email service providers</strong> - for communications</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              These service providers are contractually required to protect the confidentiality and security of your information and may not use it for any purpose other than providing services to us.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.3 Legal Requirements</h3>
            <p className="text-slate-600 leading-relaxed mb-2">
              We may disclose information when required by law, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>In response to subpoenas, court orders, or other legal process</li>
              <li>To comply with mandatory reporting of suspected child abuse or neglect</li>
              <li>To protect the safety of students, staff, or the public</li>
              <li>To enforce our Terms of Service or protect our legal rights</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.4 Business Transfers</h3>
            <p className="text-slate-600 leading-relaxed">
              In the event of a merger, acquisition, or sale of all or part of our business, student information may be transferred to the acquiring entity, subject to the same privacy protections outlined in this policy. We will notify affected parties before any such transfer.
            </p>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We implement appropriate physical, technical, and administrative safeguards to protect student personal information from unauthorized access, disclosure, alteration, or destruction:
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">6.1 Technical Safeguards</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Encrypted data transmission using SSL/TLS protocols (HTTPS)</li>
              <li>Secure, password-protected storage of electronic records</li>
              <li>Regular software updates and security patches</li>
              <li>Firewall protection and intrusion detection systems</li>
              <li>Encrypted video conferencing platforms for online sessions</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">6.2 Administrative Safeguards</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Access controls limiting who can view student information</li>
              <li>Staff training on confidentiality and data protection</li>
              <li>Background checks for all personnel working with students</li>
              <li>Confidentiality agreements with employees and contractors</li>
              <li>Regular privacy and security assessments</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">6.3 Physical Safeguards</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Locked filing cabinets for paper records</li>
              <li>Restricted access to offices and storage areas</li>
              <li>Secure disposal of documents containing personal information (shredding)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">6.4 Data Breach Response</h3>
            <p className="text-slate-600 leading-relaxed">
              In the event of a data breach involving student personal information, we will notify affected parents/guardians within 72 hours of discovery, inform them of what information was compromised, and describe the steps we are taking to mitigate harm and prevent future incidents.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We retain student records and personal information as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li><strong>Active students:</strong> Information is retained for the duration of the tutoring relationship</li>
              <li><strong>Former students:</strong> Records are retained for 3 years after services end to provide continuity of service if the student returns and to comply with legal and tax requirements</li>
              <li><strong>After retention period:</strong> Records are securely destroyed (paper documents shredded, electronic files permanently deleted)</li>
              <li><strong>Financial records:</strong> Retained for 7 years as required by tax law</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Parents may request early deletion of student information, though we may need to retain certain records to comply with legal obligations (e.g., mandatory reporting documentation, financial records).
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Your Privacy Rights</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">8.1 Access and Review</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Parents and guardians have the right to access and review all personal information we have collected about their child, including academic records, progress notes, and attendance records.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">8.2 Correction</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you believe any information we maintain is inaccurate or incomplete, you may request that we correct or update it.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">8.3 Deletion</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may request deletion of your child's personal information, subject to our legal obligations to retain certain records (e.g., financial records, mandatory reporting documentation).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">8.4 Withdraw Consent</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may withdraw consent for data collection and use at any time by contacting us. Please note that withdrawal of consent may prevent us from providing tutoring services.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">8.5 Opt-Out of Communications</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              You may opt out of non-essential communications (newsletters, promotional emails) by using the unsubscribe link in emails or contacting us directly. You cannot opt out of essential communications related to scheduled sessions, billing, or important policy changes.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">8.6 Data Portability</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Upon request, we will provide you with a copy of your child's information in a portable format (PDF or CSV).
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">8.7 How to Exercise Your Rights</h3>
            <p className="text-slate-600 leading-relaxed">
              To exercise any of these rights, please contact us using the information in Section 12 below. We will respond to your request within 30 days.
            </p>
          </section>

          {/* FERPA */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. FERPA Compliance</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The Family Educational Rights and Privacy Act (FERPA) protects the privacy of student education records. While FERPA primarily applies to schools and educational institutions that receive federal funding, we follow FERPA principles as a best practice:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>Parents have the right to inspect and review their child's education records</li>
              <li>We seek parental consent before disclosing education records to third parties (except as permitted by law)</li>
              <li>Parents have the right to request amendments to inaccurate records</li>
              <li>For students 18 and older or attending college, privacy rights transfer to the student</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              If we provide services under a contract with a school, we act as a "school official" and may receive education records from the school without additional parental consent under FERPA's school official exception.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Websites and Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Our website may contain links to third-party websites, and we may use third-party services for online tutoring, scheduling, or payments. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Third-party services we may use include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>Zoom, Google Meet:</strong> Video conferencing (see their privacy policies for data handling)</li>
              <li><strong>Stripe, Square, PayPal:</strong> Payment processing (payment data is not stored on our servers)</li>
              <li><strong>Google Analytics:</strong> Website analytics (see our <Link to="/cookie-policy" className="text-froyo-dark-blue hover:underline font-medium">Cookie Policy</Link>)</li>
            </ul>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or services. Material changes will be communicated to active clients via email at least 30 days before taking effect. We encourage you to review this policy periodically. The "Last Updated" date at the top indicates when the policy was last revised.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact:
            </p>
            <div className="text-slate-700">
              <p className="font-semibold">Privacy Officer</p>
              <p className="font-semibold">2 Steps Ahead</p>
              <p>The Hammocks, FL</p>
              <p>Phone: (786) 282-9626</p>
              <p>Email: 2satutoring@gmail.com</p>
            </div>
            <p className="text-slate-600 leading-relaxed mt-4">
              We will respond to all privacy-related inquiries within 30 days.
            </p>
          </section>

          {/* State-Specific Rights */}
          <section className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-2xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="text-purple-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">13. State-Specific Privacy Rights</h2>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4">California Residents (CCPA/CPRA)</h3>
                <p className="text-slate-700 leading-relaxed mb-2">
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-4">
                  <li>Right to know what personal information we collect, use, disclose, and sell</li>
                  <li>Right to delete personal information (subject to exceptions)</li>
                  <li>Right to opt-out of sale of personal information (we do not sell information)</li>
                  <li>Right to non-discrimination for exercising your privacy rights</li>
                </ul>

                <h3 className="text-lg font-semibold text-slate-900 mb-2 mt-4">Florida Residents</h3>
                <p className="text-slate-700 leading-relaxed">
                  Florida law provides additional protections for education records and student privacy. We comply with Florida Statutes Chapter 1002 (Student and Parental Rights and Educational Choices) and Florida's data breach notification law (Florida Statute 501.171).
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Link
            to="/terms-of-service"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:border-froyo-dark-blue hover:text-froyo-dark-blue transition-colors"
          >
            View Terms of Service
          </Link>
          <Link
            to="/cookie-policy"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:border-froyo-dark-blue hover:text-froyo-dark-blue transition-colors"
          >
            View Cookie Policy
          </Link>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 text-froyo-dark-blue hover:text-slate-900 transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
