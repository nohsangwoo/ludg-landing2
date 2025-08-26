'use client';

import { useState, useEffect } from 'react';

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(true);

  const handleAcceptAll = () => {
    setIsVisible(false);
    // In a real app, you would save the cookie preference
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const handleRejectAll = () => {
    setIsVisible(false);
    localStorage.setItem('cookiesAccepted', 'false');
  };

  const handleCustomise = () => {
    // In a real app, this would open a customization modal
    console.log('Customize cookies clicked');
    setIsVisible(false);
  };

  // Check if cookies were already accepted
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 lg:left-8 lg:right-auto lg:max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50 animate-in slide-in-from-bottom-5">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">We value your privacy</h3>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <button 
          onClick={handleCustomise}
          className="px-4 py-2 text-sm font-medium text-pink-500 border border-pink-500 rounded-lg hover:bg-pink-50 transition-colors"
        >
          Customise
        </button>
        <button 
          onClick={handleRejectAll}
          className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Reject All
        </button>
        <button 
          onClick={handleAcceptAll}
          className="px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition-colors"
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
