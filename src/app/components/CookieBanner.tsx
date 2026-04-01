import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-[#1A1A1A] border border-[#EFBF04]/30 rounded-lg shadow-2xl shadow-[#EFBF04]/20">
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-start gap-3 sm:gap-4">
                <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-[#EFBF04] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3
                    className="text-lg sm:text-xl text-white mb-2"
                    style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
                  >
                    Gestion des cookies
                  </h3>
                  <p
                    className="text-white/80 text-xs sm:text-sm md:text-base mb-4"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Nous utilisons des cookies pour améliorer votre expérience de navigation, 
                    analyser le trafic du site et personnaliser le contenu. En cliquant sur 
                    "Accepter", vous consentez à notre utilisation des cookies.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAccept}
                      className="bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#1A1A1A] px-6 py-2.5 rounded-md transition-all shadow-lg shadow-[#EFBF04]/20 text-sm sm:text-base"
                      style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
                    >
                      Accepter
                    </button>
                    <button
                      onClick={handleDecline}
                      className="bg-transparent border border-[#EFBF04]/30 hover:border-[#EFBF04] text-white px-6 py-2.5 rounded-md transition-all text-sm sm:text-base"
                      style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
                    >
                      Refuser
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-white/60 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Fermer"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}