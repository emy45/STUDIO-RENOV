import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import heroImage from 'figma:asset/197fbaeb81fa5fdf73c9707f399bb645328aa9b3.png';
import { CONTACT } from '../../config';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 100; // Hauteur du header fixe
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Rénovation de luxe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/95 via-[#1A1A1A]/80 to-[#1A1A1A]/60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIwMSwxNjgsNzYsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
      </div>

      <div className="container mx-auto px-4 z-10 pt-24 md:pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-7xl mb-6 text-white"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, lineHeight: 1.2 }}
            >Rénovation Intérieure<br /><span className="text-[#EFBF04]">& Couverture</span></h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-white/90 mb-4"
              style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 300 }}
            >
              Un seul artisan pour tous vos travaux
            </p>

            <p
              className="text-base sm:text-lg text-white/70 mb-8"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Fontainebleau & Paris
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-[#CC0000] hover:bg-[#CC0000]/90 text-white px-8 py-4 rounded-md transition-all transform hover:scale-105 shadow-lg shadow-[#CC0000]/30 text-center"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                Devis Gratuit
              </button>
              <a
                href={`tel:${CONTACT.PHONE_MOBILE}`}
                className="border-2 border-[#EFBF04] text-[#EFBF04] hover:bg-[#EFBF04] hover:text-[#1A1A1A] px-8 py-4 rounded-md transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                <Phone className="w-5 h-5" />
                Appeler Maintenant
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}