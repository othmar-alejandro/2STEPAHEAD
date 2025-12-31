import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../config/contact';

const Footer = () => {
  const resourceLinks = [
    { name: "AP Study Guides", href: "/resources/ap-exams", isExternal: false },
    { name: "SAT Practice Tests", href: "/resources/test-prep", isExternal: false },
    { name: "Pomodoro Timer", href: "/resources/study-tools", isExternal: false },
    { name: "Cornell Note Taking", href: "/resources/study-tools", isExternal: false }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 mt-0">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-slate-800 pb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/2stepsaheadlogoweb.png" alt="2 Step Ahead" className="w-32 h-32 object-contain bg-slate-800 rounded-lg p-1" />
              <span className="text-2xl font-heading text-white">2 Step Ahead</span>
            </div>
            <p className="max-w-sm mb-6 opacity-80">
              Empowering students to achieve their full potential through personalized tutoring and mentorship in South Florida.
            </p>
            <div className="flex gap-4">
              {/* Social media links - only show if URLs are configured */}
              {SOCIAL_LINKS.facebook && (
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer flex items-center justify-center">
                  <Facebook size={18} className="text-white" />
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer flex items-center justify-center">
                  <Instagram size={18} className="text-white" />
                </a>
              )}
              {SOCIAL_LINKS.linkedin && (
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 bg-slate-800 rounded-full hover:bg-froyo-gold transition-colors cursor-pointer flex items-center justify-center">
                  <Linkedin size={18} className="text-white" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Free Resources</h4>
            <ul className="space-y-4">
              {resourceLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="hover:text-froyo-gold transition-colors flex items-center gap-2 text-sm">
                    <ArrowRight size={14} /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} {CONTACT_INFO.businessName}. All rights reserved.</p>
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
