import { Phone, Mail, MapPin } from 'lucide-react';
import logoImage from 'figma:asset/25ba44032818706ad073e562b071f95f220e1525.png';
import { useState } from 'react';
import { LegalNotice } from './LegalNotice';

export function Footer() {
  const [isLegalNoticeOpen, setIsLegalNoticeOpen] = useState(false);

  return (
    <>
      <footer className="bg-[#1A1A1A] border-t border-[#EFBF04]/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logoImage} alt="Studio Renov" className="h-12 sm:h-16 w-auto mb-4" />
              <p className="text-white/60 mb-4" style={{ fontFamily: 'Raleway, sans-serif' }}>
                Rénovation intérieure clé en main. Un seul artisan pour tous vos travaux.
              </p>
              <p className="text-white/60 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
                SIRET : 878 831 312
              </p>
            </div>

            <div>
              <h3
                className="text-xl mb-4 text-white"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:0627812228"
                  className="flex items-center gap-2 text-white/60 hover:text-[#EFBF04] transition-colors"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  <Phone className="w-4 h-4" />
                  <span>06.27.81.22.28</span>
                </a>
                <a
                  href="tel:0185480082"
                  className="flex items-center gap-2 text-white/60 hover:text-[#EFBF04] transition-colors"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  <Phone className="w-4 h-4" />
                  <span>01.85.48.00.82</span>
                </a>
                <a
                  href="mailto:studiorenovfr@gmail.com"
                  className="flex items-center gap-2 text-white/60 hover:text-[#EFBF04] transition-colors break-all"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>studiorenovfr@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3
                className="text-xl mb-4 text-white"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                Nos Adresses
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2 text-white/60" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <div>
                    <p>46 rue du Château</p>
                    <p>77300 Fontainebleau</p>
                  </div>
                </div>
                <div className="flex items-start gap-2 text-white/60" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                  <div>
                    <p>9 rue des Colonnes</p>
                    <p>75002 Paris</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#EFBF04]/20 pt-8 text-center">
            <p className="text-white/60 text-sm" style={{ fontFamily: 'Raleway, sans-serif' }}>
              © 2026 Studio Renov. Tous droits réservés. |{' '}
              <button
                onClick={() => setIsLegalNoticeOpen(true)}
                className="text-white/80 hover:text-[#EFBF04] transition-colors underline"
              >
                Mentions légales
              </button>
              {' '}|{' '}
              <a
                href="https://www.emy-com.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EFBF04] hover:text-[#EFBF04]/80 transition-colors"
              >
                www.emy-com.fr
              </a>
            </p>
          </div>
        </div>
      </footer>

      <LegalNotice isOpen={isLegalNoticeOpen} onClose={() => setIsLegalNoticeOpen(false)} />
    </>
  );
}