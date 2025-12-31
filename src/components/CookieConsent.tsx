import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Settings, Shield, CheckCircle } from 'lucide-react';

// Add keyframe animations
const styles = `
  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
        // Apply cookie preferences
        applyCookiePreferences(saved);
      } catch (e) {
        console.error('Error loading cookie preferences');
      }
    }
  }, []);

  const applyCookiePreferences = (prefs: CookiePreferences) => {
    // In a real implementation, you would:
    // 1. Enable/disable Google Analytics based on prefs.analytics
    // 2. Enable/disable other tracking scripts based on preferences

    if (prefs.analytics) {
      // Example: Enable Google Analytics
      // window.gtag('consent', 'update', { analytics_storage: 'granted' });
      console.log('Analytics cookies enabled');
    } else {
      // Disable analytics
      console.log('Analytics cookies disabled');
    }

    if (prefs.functional) {
      console.log('Functional cookies enabled');
    } else {
      console.log('Functional cookies disabled');
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    const consentData = {
      ...prefs,
      timestamp: new Date().toISOString(),
      version: '1.0'
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    applyCookiePreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      functional: false
    };
    savePreferences(onlyNecessary);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Cannot disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Inject animations */}
      <style>{styles}</style>

      {/* Cookie Consent Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6" style={{ animation: 'slideUp 0.5s ease-out' }}>
          <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border-2 border-slate-200 overflow-hidden">
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      We Value Your Privacy
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Your data, your choice
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleRejectAll}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-2"
                  aria-label="Close and reject all"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-slate-600 leading-relaxed mb-4">
                  We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content.
                  By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                  <Link to="/cookie-policy" className="text-froyo-dark-blue hover:underline font-medium">
                    Cookie Policy
                  </Link>
                  {' '}and{' '}
                  <Link to="/privacy-policy" className="text-froyo-dark-blue hover:underline font-medium">
                    Privacy Policy
                  </Link>.
                </p>

                {/* Cookie Categories Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle size={16} className="text-green-600" />
                      <span className="text-sm font-bold text-green-900">Necessary</span>
                    </div>
                    <p className="text-xs text-green-700">Always active - Required for the site to function</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Shield size={16} className="text-slate-600" />
                      <span className="text-sm font-bold text-slate-900">Analytics</span>
                    </div>
                    <p className="text-xs text-slate-600">Help us improve our website</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                      <Settings size={16} className="text-slate-600" />
                      <span className="text-sm font-bold text-slate-900">Functional</span>
                    </div>
                    <p className="text-xs text-slate-600">Remember your preferences</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 bg-white text-slate-700 border-2 border-slate-200 px-6 py-3 rounded-full font-bold hover:border-froyo-dark-blue hover:text-froyo-dark-blue transition-all flex items-center justify-center gap-2"
                >
                  <Settings size={18} />
                  Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 bg-slate-100 text-slate-700 px-6 py-3 rounded-full font-bold hover:bg-slate-200 transition-all"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-froyo-dark-blue text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  Accept All
                </button>
              </div>

              {/* GDPR Notice */}
              <p className="text-xs text-slate-400 mt-4 text-center">
                By continuing to use this site, you agree to our use of cookies and data practices.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-200 bg-slate-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-froyo-dark-blue/10 rounded-2xl flex items-center justify-center">
                    <Settings className="text-froyo-dark-blue" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Cookie Preferences</h2>
                    <p className="text-sm text-slate-600">Choose which cookies you want to allow</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-slate-400 hover:text-slate-600 transition-colors p-2"
                  aria-label="Close settings"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Necessary Cookies */}
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle size={20} className="text-green-600" />
                      <h3 className="text-lg font-bold text-green-900">Strictly Necessary Cookies</h3>
                    </div>
                    <p className="text-sm text-green-700 leading-relaxed">
                      These cookies are essential for the website to function properly. They enable core functionality such as security,
                      network management, and accessibility. You cannot opt out of these cookies.
                    </p>
                    <p className="text-xs text-green-600 mt-2 font-medium">
                      Examples: Session cookies, security tokens, load balancing
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-green-600 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <p className="text-xs text-green-700 mt-1 font-medium">Always On</p>
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-froyo-light-blue transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={20} className="text-slate-700" />
                      <h3 className="text-lg font-bold text-slate-900">Analytics Cookies</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      This helps us improve our website and services.
                    </p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">
                      Examples: Google Analytics (_ga, _gid, _gat)
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.analytics
                          ? 'bg-froyo-dark-blue justify-end'
                          : 'bg-slate-300 justify-start'
                      } px-1`}
                      aria-label="Toggle analytics cookies"
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                    </button>
                    <p className="text-xs text-slate-600 mt-1 font-medium">
                      {preferences.analytics ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-froyo-light-blue transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Settings size={20} className="text-slate-700" />
                      <h3 className="text-lg font-bold text-slate-900">Functional Cookies</h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences,
                      language selection, and region.
                    </p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">
                      Examples: Language preferences, display settings, form data
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all ${
                        preferences.functional
                          ? 'bg-froyo-dark-blue justify-end'
                          : 'bg-slate-300 justify-start'
                      } px-1`}
                      aria-label="Toggle functional cookies"
                    >
                      <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                    </button>
                    <p className="text-xs text-slate-600 mt-1 font-medium">
                      {preferences.functional ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                </div>
              </div>

              {/* More Information */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
                <p className="text-sm text-blue-900">
                  <strong>Want to learn more?</strong> Visit our{' '}
                  <Link to="/cookie-policy" className="text-froyo-dark-blue hover:underline font-semibold">
                    Cookie Policy
                  </Link>
                  {' '}for detailed information about each cookie type and how to manage them.
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-slate-200 bg-slate-50">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="flex-1 bg-white text-slate-700 border-2 border-slate-200 px-6 py-3 rounded-full font-bold hover:border-slate-300 transition-all"
                >
                  Reject All
                </button>
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 bg-froyo-dark-blue text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  Save My Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-froyo-gold text-white px-6 py-3 rounded-full font-bold hover:bg-orange-400 transition-all shadow-lg"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
