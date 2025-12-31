import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if scrolled past threshold
      setScrolled(currentScrollY > 50);

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/2stepsaheadlogoweb.png" alt="2 Step Ahead" className="h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
          <Link to="/" className="hover:text-froyo-dark-blue transition-colors">Home</Link>
          <Link to="/about" className="hover:text-froyo-dark-blue transition-colors">About</Link>
          <Link to="/test-prep" className="hover:text-froyo-dark-blue transition-colors">SAT & Prep</Link>
          <Link to="/pricing" className="hover:text-froyo-dark-blue transition-colors">Pricing</Link>

          {/* Resources Dropdown */}
          <div className="relative group" onMouseEnter={() => setResourcesOpen(true)} onMouseLeave={() => setResourcesOpen(false)}>
            <button
              className="flex items-center gap-1 hover:text-froyo-dark-blue transition-colors py-2"
              aria-label="Resources menu"
              aria-expanded={resourcesOpen}
              aria-haspopup="true"
            >
              Resources
              <ChevronDown size={16} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </button>
            {resourcesOpen && (
              <div className="absolute top-full left-0 pt-2 w-56 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2">
                  <Link
                    to="/resources/test-prep"
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-froyo-dark-blue transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    SAT/ACT/CLT Resources
                  </Link>
                  <Link
                    to="/resources/ap-exams"
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-froyo-dark-blue transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    AP Exam Resources
                  </Link>
                  <Link
                    to="/resources/study-tools"
                    className="block px-4 py-2 hover:bg-slate-50 hover:text-froyo-dark-blue transition-colors"
                    onClick={() => setResourcesOpen(false)}
                  >
                    Study Tools
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="hover:text-froyo-dark-blue transition-colors">Contact</Link>
          <Link to="/contact" className="bg-froyo-dark-blue text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2">
            <MessageCircle size={18} />
            Schedule Assessment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-slate-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-4 border-t border-slate-100">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-semibold">About</Link>
          <Link to="/test-prep" onClick={() => setIsOpen(false)} className="text-lg font-semibold">SAT & Prep</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Pricing</Link>

          {/* Mobile Resources Section */}
          <div className="border-t border-slate-100 pt-4">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Resources</p>
            <Link to="/resources/test-prep" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-froyo-dark-blue">
              SAT/ACT/CLT Resources
            </Link>
            <Link to="/resources/ap-exams" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-froyo-dark-blue">
              AP Exam Resources
            </Link>
            <Link to="/resources/study-tools" onClick={() => setIsOpen(false)} className="block py-2 text-slate-600 hover:text-froyo-dark-blue">
              Study Tools
            </Link>
          </div>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Contact</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-froyo-dark-blue text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2">
            <MessageCircle size={20} />
            Schedule Assessment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
