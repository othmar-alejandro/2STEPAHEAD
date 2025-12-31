import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const resourceLinks = [
    { name: "AP Study Guides", href: "#" },
    { name: "SAT Practice Tests", href: "#" },
    { name: "Pomodoro Timer", href: "#" },
    { name: "Cornell Note Taking", href: "#" }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/2stepsaheadlogo.png" alt="2 Step Ahead" className="w-32 h-32 object-contain bg-slate-800 rounded-lg p-1" />
              <span className="text-2xl font-heading text-white">2 Step Ahead</span>
            </div>
            <p className="max-w-sm mb-6 opacity-80">
              Empowering students to achieve their full potential through personalized tutoring and mentorship in South Florida.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer"></div>
              <div className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer"></div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Free Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="hover:text-froyo-gold transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={14} /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 2 Step Ahead Tutoring. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
