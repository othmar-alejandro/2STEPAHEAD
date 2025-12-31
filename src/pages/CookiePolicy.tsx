import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Eye, Shield, AlertCircle } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden mb-16">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-froyo-dark-blue rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-froyo-gold rounded-full blur-[120px] opacity-20 translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-xl mb-8">
            <Cookie size={16} className="text-froyo-gold" />
            <span className="font-bold text-sm text-froyo-gold uppercase tracking-wider">Cookie & Tracking Technologies</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">
            Cookie Policy
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            We use cookies to improve your experience. Learn more about how we use tracking technologies and how you can control them.
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. What Are Cookies?</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. Cookies help websites recognize your device and remember information about your visit, such as your preferences and actions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This Cookie Policy explains how 2 Steps Ahead ("we," "us," or "our") uses cookies and similar tracking technologies on our website. This policy should be read in conjunction with our <Link to="/privacy-policy" className="text-froyo-dark-blue hover:underline font-medium">Privacy Policy</Link>.
            </p>
          </section>

          {/* Important Notice */}
          <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <div className="flex items-start gap-3">
              <AlertCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-3">Important Notice About Children's Privacy</h2>
                <p className="text-slate-700 leading-relaxed mb-3">
                  Our website is intended for use by parents and guardians, not children under 13. We do not knowingly collect information from children through cookies or any other tracking technologies. If you are under 13, please do not use our website or provide any information to us.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Parents: Please supervise your children's internet use and help us protect their privacy by instructing them not to provide personal information through our website without your permission.
                </p>
              </div>
            </div>
          </section>

          {/* How We Use Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Keep you signed in to our website</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website and improve your experience</li>
              <li>Provide secure access to password-protected areas</li>
              <li>Analyze website traffic and performance</li>
              <li>Prevent fraud and enhance security</li>
            </ul>
          </section>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Types of Cookies We Use</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">3.1 Strictly Necessary Cookies (No Consent Required)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              These cookies are essential for our website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt out of these cookies.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Cookie Name</th>
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Purpose</th>
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-2 font-mono text-xs">session_id</td>
                    <td className="py-2 px-2">Maintains user login state and session continuity</td>
                    <td className="py-2 px-2">Session (expires when browser closes)</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-2 font-mono text-xs">XSRF-TOKEN</td>
                    <td className="py-2 px-2">Security token to prevent cross-site request forgery attacks</td>
                    <td className="py-2 px-2">Session</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-2 font-mono text-xs">cookie_consent</td>
                    <td className="py-2 px-2">Stores your cookie preferences and consent choices</td>
                    <td className="py-2 px-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">3.2 Analytics Cookies (Consent Required)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. We use this data to improve our website and services.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Cookie Name</th>
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Purpose</th>
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-2 font-mono text-xs">_ga</td>
                    <td className="py-2 px-2">Google Analytics: Distinguishes unique users and tracks sessions</td>
                    <td className="py-2 px-2">2 years</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-2 font-mono text-xs">_gid</td>
                    <td className="py-2 px-2">Google Analytics: Distinguishes unique users</td>
                    <td className="py-2 px-2">24 hours</td>
                  </tr>
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-2 font-mono text-xs">_gat</td>
                    <td className="py-2 px-2">Google Analytics: Throttles request rate</td>
                    <td className="py-2 px-2">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">3.3 Functional Cookies (Consent Required)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              These cookies enable enhanced functionality and personalization, such as remembering your preferences (e.g., language selection, form data).
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-300">
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Cookie Name</th>
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Purpose</th>
                    <th className="text-left py-2 px-2 font-bold text-slate-900">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-b border-slate-200">
                    <td className="py-2 px-2 font-mono text-xs">user_preferences</td>
                    <td className="py-2 px-2">Stores user preferences such as language and display settings</td>
                    <td className="py-2 px-2">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Third-Party Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Third-Party Cookies and Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may use third-party services that set their own cookies to provide functionality on our website. These third parties have their own privacy policies and cookie policies.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.1 Google Analytics</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to collect information about how visitors use our site. This information is used to compile reports and help us improve our website. The data collected is anonymous and does not identify individual users.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Learn more about how Google uses data: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Google's Privacy & Terms</a>
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              You can opt out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Google Analytics Opt-out Browser Add-on</a>.
            </p>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">4.2 Payment Processors</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              When you make payments through our website, payment processors (Stripe, Square, PayPal) may set their own cookies to facilitate secure transactions. We do not have access to or control over these cookies.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Stripe Privacy Policy</a></li>
              <li><a href="https://squareup.com/us/en/legal/general/privacy" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Square Privacy Policy</a></li>
              <li><a href="https://www.paypal.com/us/legalhub/privacy-full" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">PayPal Privacy Statement</a></li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. How to Manage and Delete Cookies</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.1 Cookie Consent Preferences</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              When you first visit our website, you will see a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl mb-6">
              <div className="flex items-center gap-3">
                <Settings className="text-amber-600" size={24} />
                <button className="text-froyo-dark-blue hover:underline font-semibold">
                  Update Cookie Preferences
                </button>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.2 Browser Settings</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most web browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies or to alert you when a cookie is being sent. However, if you disable or refuse cookies, some parts of our website may not function properly.
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Here's how to manage cookies in popular browsers:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-6">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Microsoft Edge</a></li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">5.3 Mobile Devices</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              For mobile devices, you can manage cookies and tracking through your device settings:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong>iOS:</strong> Settings → Safari → Block All Cookies</li>
              <li><strong>Android:</strong> Settings → Google → Ads → Opt out of Ads Personalization</li>
            </ul>
          </section>

          {/* Do Not Track */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Do Not Track Signals</h2>
            <p className="text-slate-600 leading-relaxed">
              Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Currently, there is no industry standard for how to respond to DNT signals. At this time, our website does not respond to DNT signals, but you can manage cookies through your browser settings or our cookie consent tool as described above.
            </p>
          </section>

          {/* International Users */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. International Users (GDPR & CCPA)</h2>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">7.1 European Union (GDPR)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you are located in the European Economic Area (EEA), you have specific rights regarding cookies under the General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
              <li>We will not set non-essential cookies until you provide explicit consent</li>
              <li>You have the right to withdraw consent at any time</li>
              <li>You can access, correct, or delete your personal data collected through cookies</li>
              <li>You have the right to data portability and the right to object to processing</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-6">7.2 California (CCPA/CPRA)</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you are a California resident, you have rights under the California Consumer Privacy Act:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Right to know what personal information is collected via cookies</li>
              <li>Right to delete information collected through cookies (with exceptions)</li>
              <li>Right to opt out of "sale" of personal information (we do not sell your data)</li>
              <li>Right to non-discrimination for exercising privacy rights</li>
            </ul>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Changes to This Cookie Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will notify you by updating the "Last Updated" date at the top of this policy and, if the changes are significant, we may provide additional notice (such as an email notification or website banner).
            </p>
          </section>

          {/* Contact */}
          <section className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions or concerns about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="text-slate-700">
              <p className="font-semibold">2 Steps Ahead</p>
              <p>The Hammocks, FL</p>
              <p>Phone: (786) 282-9626</p>
              <p>Email: 2satutoring@gmail.com</p>
            </div>
          </section>

          {/* Additional Resources */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Additional Resources</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              To learn more about cookies and online privacy, visit:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><a href="https://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">All About Cookies</a> - Independent information about cookies</li>
              <li><a href="https://youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">Your Online Choices</a> - Opt-out of behavioral advertising (EU)</li>
              <li><a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">DAA Opt-Out</a> - Digital Advertising Alliance opt-out tool (US)</li>
              <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="text-froyo-dark-blue hover:underline">NAI Opt-Out</a> - Network Advertising Initiative opt-out tool</li>
            </ul>
          </section>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
          <Link
            to="/privacy-policy"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:border-froyo-dark-blue hover:text-froyo-dark-blue transition-colors"
          >
            View Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-full font-medium border border-slate-200 hover:border-froyo-dark-blue hover:text-froyo-dark-blue transition-colors"
          >
            View Terms of Service
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

export default CookiePolicy;
