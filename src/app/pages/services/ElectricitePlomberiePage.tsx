import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import electricalPanelImage from 'figma:asset/ebe74fb9e2c8db63629f5afab8d49a6649a3b40f.png';
import boilerImage from 'figma:asset/945e5cdc4ebc38b0cea0ee32c699d8340bac274a.png';

export function ElectricitePlomberiePage() {
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
    'Installation électrique complète',
    'Mise aux normes électriques',
    'Plomberie sanitaire',
    'Installation de chauffage',
    'Dépannage et réparation',
    'Certification et garantie',
  ];

  const gallery = [
    electricalPanelImage,
    boilerImage,
    'https://images.unsplash.com/photo-1769763917830-7b9c8317329d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMHNpbmslMjBiYXNpbnxlbnwxfHx8fDE3NzQ2MTk0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={gallery[0]}
            alt="Électricité & Plomberie"
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
            Électricité & <span className="text-[#EFBF04]">Plomberie</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Installations conformes aux normes pour votre sécurité et votre confort
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
                Sécurité & <span className="text-[#EFBF04]">Performance</span>
              </h2>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Nos installations électriques et de plomberie respectent scrupuleusement les normes 
                en vigueur pour garantir votre sécurité et celle de votre habitation.
              </p>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                De la simple prise électrique au tableau complet, de la robinetterie à l'installation 
                sanitaire complète, nous intervenons sur tous types de projets avec professionnalisme.
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
              Besoin d'une installation <span className="text-[#EFBF04]">aux normes</span> ?
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