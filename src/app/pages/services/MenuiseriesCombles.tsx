import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import windowInstallImage from 'figma:asset/9b6a1ad5ec798f02a9be7874e6993e9f11fda0a0.png';
import atticInsulationImage from 'figma:asset/1467392c38f47fb915563eeacd0f9864e64b6daa.png';

export function MenuiseriesCombles() {
  const navigate = useNavigate();

  const handleDevisClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = 100; // Hauteur du header fixe
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const features = [
    'Pose de portes intérieures',
    'Installation de fenêtres',
    'Placards et dressings sur mesure',
    'Aménagement de combles',
    'Isolation thermique et phonique',
    'Création d\'escaliers',
  ];

  const gallery = [
    windowInstallImage,
    atticInsulationImage,
    'https://images.unsplash.com/photo-1615911577983-e2bb805354b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHRpYyUyMGNvbnZlcnNpb24lMjBiZWRyb29tJTIwbW9kZXJufGVufDF8fHx8MTc3NDYxNzMxNXww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={gallery[0]}
            alt="Menuiseries & Combles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/90 via-[#0D0D0D]/70 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#EFBF04] hover:text-white transition-colors mb-6"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux services
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl mb-4 text-white"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Menuiseries & <span className="text-[#EFBF04]">Combles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Menuiseries sur mesure et transformation de combles en espaces de vie
          </motion.p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-[#1A1A1A]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl mb-6 text-white"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
              >
                Du Sur-Mesure <span className="text-[#EFBF04]">d'Exception</span>
              </h2>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Nos menuiseries intérieures sont conçues pour s'intégrer parfaitement à votre décoration. 
                Portes, fenêtres, placards et dressings sont réalisés sur mesure avec des matériaux nobles.
              </p>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                L'aménagement de combles permet de gagner de précieux mètres carrés. Nous transformons 
                ces espaces en chambres, bureaux ou dressings fonctionnels et lumineux.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-[#0D0D0D] p-4 rounded-lg border border-[#EFBF04]/20"
                >
                  <CheckCircle className="w-6 h-6 text-[#EFBF04] flex-shrink-0 mt-1" />
                  <span
                    className="text-white text-lg"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-[#0D0D0D]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl mb-12 text-white text-center"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Nos <span className="text-[#EFBF04]">Réalisations</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-80 rounded-lg overflow-hidden group"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Réalisation ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-10 md:py-12 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-3xl md:text-4xl mb-6 text-white"
              style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
            >
              Optimisez <span className="text-[#EFBF04]">votre espace</span>
            </h2>
            <p
              className="text-xl text-white/70 mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'Raleway, sans-serif' }}
            >
              Devis gratuit sous 24h - Déplacement offert sur Fontainebleau et Paris
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDevisClick}
                className="bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#1A1A1A] px-8 py-4 rounded-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                Demander un devis
              </button>
              <a
                href="tel:0185480082"
                className="border-2 border-[#EFBF04] text-[#EFBF04] hover:bg-[#EFBF04] hover:text-[#1A1A1A] px-8 py-4 rounded-md transition-all inline-flex items-center justify-center gap-2"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                <Phone className="w-5 h-5" />
                01.85.48.00.82
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}