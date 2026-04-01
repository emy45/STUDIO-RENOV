import { Phone, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/4849376c5f907d3afbc682ca9b7821e026fcd7e1.png';
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const services = [
    { title: 'Peinture & Finitions', link: '/services/peinture-finitions' },
    { title: 'Sols, Plâtrerie & Cloisons', link: '/services/sols-platrerie-cloisons' },
    { title: 'Électricité & Plomberie', link: '/services/electricite-plomberie' },
    { title: 'Cuisine & Salle de Bain', link: '/services/cuisine-salle-de-bain' },
    { title: 'Menuiseries & Combles', link: '/services/menuiseries-combles' },
    { title: 'Couverture', link: '/services/couverture' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    // Navigate to home page first if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#EFBF04]/20"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo à gauche */}
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="Studio Renov" className="h-12 sm:h-16 md:h-20 w-auto" />
          </Link>

          {/* Navigation au centre-droit */}
          <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end mr-6">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                className="text-white/80 hover:text-[#EFBF04] transition-colors font-semibold"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Services
                <ChevronDown className="w-4 h-4 inline-block ml-1" />
              </button>
              {isServicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 top-full mt-2 bg-[#1A1A1A] backdrop-blur-sm border border-[#EFBF04]/30 rounded-lg shadow-xl shadow-[#EFBF04]/10 min-w-[280px]"
                >
                  <div className="py-3 px-2">
                    {services.map((service, index) => (
                      <Link
                        key={service.link}
                        to={service.link}
                        onClick={() => setIsServicesDropdownOpen(false)}
                        className="block text-white/80 hover:text-[#EFBF04] hover:bg-[#EFBF04]/10 transition-all px-4 py-2 rounded-md"
                        style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 500 }}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
            <button
              onClick={() => scrollToSection('showroom')}
              className="text-white/80 hover:text-[#EFBF04] transition-colors font-semibold"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Showroom
            </button>
            <button
              onClick={() => scrollToSection('realisations')}
              className="text-white/80 hover:text-[#EFBF04] transition-colors font-semibold"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Réalisations
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-[#EFBF04] transition-colors font-semibold"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Contact
            </button>
          </nav>

          {/* Boutons d'action à droite */}
          <div className="flex items-center gap-2 md:gap-4">
            <motion.a
              href="tel:0185480082"
              className="bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#1A1A1A] px-3 py-2 md:px-6 md:py-2 rounded-md transition-colors flex items-center gap-2 font-semibold shadow-lg shadow-[#EFBF04]/50 text-sm md:text-base"
              style={{ fontFamily: 'Raleway, sans-serif' }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">01.85.48.00.82</span>
            </motion.a>
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden xl:block bg-[#CC0000] hover:bg-[#CC0000]/90 text-white px-6 py-2 rounded-md transition-colors"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Devis Gratuit
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden py-4 border-t border-[#EFBF04]/20"
          >
            <div className="flex flex-col gap-4">
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-white/80 hover:text-[#EFBF04] transition-colors text-left py-2 font-semibold w-full flex items-center justify-between"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Services
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isMobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-2 space-y-2"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.link}
                        to={service.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-white/60 hover:text-[#EFBF04] transition-colors py-1 text-sm"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
              <button
                onClick={() => scrollToSection('showroom')}
                className="text-white/80 hover:text-[#EFBF04] transition-colors text-left py-2 font-semibold"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Showroom
              </button>
              <button
                onClick={() => scrollToSection('realisations')}
                className="text-white/80 hover:text-[#EFBF04] transition-colors text-left py-2 font-semibold"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Réalisations
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-[#EFBF04] transition-colors text-left py-2 font-semibold"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-[#CC0000] hover:bg-[#CC0000]/90 text-white px-6 py-3 rounded-md transition-colors text-center"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                Devis Gratuit
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}