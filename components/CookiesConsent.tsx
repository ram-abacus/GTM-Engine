'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setIsMounted(true);
    try {
      const consent = localStorage.getItem('cookieConsent');
      if (!consent) {
        setIsVisible(true);
      }
    } catch (error) {
      console.log('localStorage not available');
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsents = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(allConsents));
    } catch (error) {
      console.log('localStorage not available');
    }
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalConsents = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(minimalConsents));
    } catch (error) {
      console.log('localStorage not available');
    }
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    } catch (error) {
      console.log('localStorage not available');
    }
    setIsVisible(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'necessary') return;
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isMounted || !isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40" style={{ backgroundColor: 'rgba(15, 23, 42, 0.5)' }} />

      {/* Cookie Banner */}
      <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50 bg-white rounded-lg shadow-2xl overflow-hidden">
        {!showSettings ? (
          <div className="p-6 space-y-4">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 transition"
              style={{ color: 'rgb(37, 99, 235)' }}
            >
              <X size={20} />
            </button>

            <div className="!mt-0">
              <h3 className="text-lg font-bold mb-2" style={{ color: 'rgb(15, 23, 42)' }}>
                🍪 Cookie Preferences
              </h3>
              <p className="text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
                We use cookies to enhance your experience, analyze traffic, and for marketing purposes. You can choose which types of cookies to accept.
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={handleAcceptAll}
                className="w-full py-2 rounded-lg font-semibold text-white transition hover:shadow-lg"
                style={{ backgroundColor: 'rgb(37, 99, 235)' }}
              >
                Accept All Cookies
              </button>
              <button
                onClick={handleRejectAll}
                className="w-full py-2 rounded-lg font-semibold transition"
                style={{ backgroundColor: 'rgb(15, 23, 42)', color: 'white' }}
              >
                Reject All
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="w-full py-2 rounded-lg font-semibold transition border-2"
                style={{ borderColor: 'rgb(37, 99, 235)', color: 'rgb(37, 99, 235)' }}
              >
                Customize Settings
              </button>
            </div>

            <p className="text-xs text-center" style={{ color: 'rgb(107, 114, 128)' }}>
              <a href="/GTM-engine/cookies-policy/" className="underline hover:no-underline" style={{ color: 'rgb(37, 99, 235)' }}>
                Cookie Policy
              </a>
              {' • '}
              <a href="/GTM-engine/privacy-policy/" className="underline hover:no-underline" style={{ color: 'rgb(37, 99, 235)' }}>
                Privacy Policy
              </a>
            </p>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-4 right-4 transition"
              style={{ color: 'rgb(37, 99, 235)' }}
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-bold" style={{ color: 'rgb(15, 23, 42)' }}>
              Cookie Settings
            </h3>

            <div className="space-y-3">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: 'rgb(15, 23, 42, 0.1)', backgroundColor: 'rgb(15, 23, 42, 0.02)' }}>
                <div>
                  <p className="font-semibold" style={{ color: 'rgb(15, 23, 42)' }}>
                    Necessary Cookies
                  </p>
                  <p className="text-xs" style={{ color: 'rgb(107, 114, 128)' }}>
                    Always active - Essential for site functionality
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="w-5 h-5 rounded cursor-not-allowed"
                  style={{ accentColor: 'rgb(37, 99, 235)' }}
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: 'rgb(15, 23, 42, 0.1)', backgroundColor: 'rgb(15, 23, 42, 0.02)' }}>
                <div>
                  <p className="font-semibold" style={{ color: 'rgb(15, 23, 42)' }}>
                    Analytics Cookies
                  </p>
                  <p className="text-xs" style={{ color: 'rgb(107, 114, 128)' }}>
                    Help us understand how you use our site
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => togglePreference('analytics')}
                  className="w-5 h-5 rounded cursor-pointer"
                  style={{ accentColor: 'rgb(37, 99, 235)' }}
                />
              </div>

              {/* Marketing Cookies */}
              <div className="flex items-center justify-between p-3 rounded-lg border" style={{ borderColor: 'rgb(15, 23, 42, 0.1)', backgroundColor: 'rgb(15, 23, 42, 0.02)' }}>
                <div>
                  <p className="font-semibold" style={{ color: 'rgb(15, 23, 42)' }}>
                    Marketing Cookies
                  </p>
                  <p className="text-xs" style={{ color: 'rgb(107, 114, 128)' }}>
                    Used for personalized advertising
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => togglePreference('marketing')}
                  className="w-5 h-5 rounded cursor-pointer"
                  style={{ accentColor: 'rgb(37, 99, 235)' }}
                />
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <button
                onClick={handleSavePreferences}
                className="w-full py-2 rounded-lg font-semibold text-white transition hover:shadow-lg"
                style={{ backgroundColor: 'rgb(37, 99, 235)' }}
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowSettings(false)}
                className="w-full py-2 rounded-lg font-semibold transition border-2"
                style={{ borderColor: 'rgb(15, 23, 42)', color: 'rgb(15, 23, 42)' }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}