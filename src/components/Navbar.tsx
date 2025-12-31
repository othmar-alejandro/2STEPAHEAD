import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/2stepsaheadlogo.png" alt="2 Step Ahead" className="w-32 h-32 object-contain group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
          <Link to="/" className="hover:text-froyo-dark-blue transition-colors">Home</Link>
          <Link to="/test-prep" className="hover:text-froyo-dark-blue transition-colors">SAT & Prep</Link>
          <Link to="/pricing" className="hover:text-froyo-dark-blue transition-colors">Pricing</Link>
          <a href="#contact" className="hover:text-froyo-dark-blue transition-colors">Contact</a>
          <button className="bg-froyo-dark-blue text-white px-6 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-lg flex items-center gap-2">
            <MessageCircle size={18} />
            Schedule Assessment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-4 border-t border-slate-100">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Home</Link>
          <Link to="/test-prep" onClick={() => setIsOpen(false)} className="text-lg font-semibold">SAT & Prep</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Pricing</Link>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-lg font-semibold">Contact</a>
          <button className="bg-froyo-dark-blue text-white py-4 rounded-xl font-bold flex justify-center items-center gap-2">
            <MessageCircle size={20} />
            Schedule Assessment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
