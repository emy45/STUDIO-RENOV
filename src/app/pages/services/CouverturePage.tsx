import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { CONTACT } from '../../../config';
import couvertureImage1 from '../../../imports/AdobeStock_356531689-2.jpeg';
import couvertureImage2 from '../../../imports/couverture_2-2.jpeg';
import couvertureImage3 from '../../../imports/couverture_3-2.jpeg';

export function CouverturePage() {
  const navigate = useNavigate();

  const handleDevisClick = () => {
    navigate('/#contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const headerOffset = 100;
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
    'Couverture en tuiles et ardoises',
    'Réfection de toiture complète',
    'Zinguerie et gouttières',
    'Isolation de toiture',
    'Démoussage et nettoyage',
    'Réparations et entretien',
  ];

  const gallery = [
    couvertureImage1,
    couvertureImage2,
    couvertureImage3,
  ];

  return (
    <div className="bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={gallery[0]}
            alt="Couverture"
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
            Couverture & <span className="text-[#EFBF04]">Toiture</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Protection et rénovation de votre toiture pour une étanchéité parfaite
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
                Votre Toiture <span className="text-[#EFBF04]">Entre de Bonnes Mains</span>
              </h2>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                La toiture est l'élément essentiel qui protège votre habitation. Nous intervenons 
                pour tous vos travaux de couverture, de la rénovation complète aux réparations ponctuelles.
              </p>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Que vous souhaitiez poser une nouvelle couverture en tuiles ou ardoises, refaire votre 
                zinguerie ou simplement entretenir votre toiture, nous mettons notre savoir-faire à votre service 
                pour garantir l'étanchéité et la durabilité de votre toit.
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
              Protégez votre <span className="text-[#EFBF04]">habitation</span>
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
                href={`tel:${CONTACT.PHONE_OFFICE}`}
                className="border-2 border-[#EFBF04] text-[#EFBF04] hover:bg-[#EFBF04] hover:text-[#1A1A1A] px-8 py-4 rounded-md transition-all inline-flex items-center justify-center gap-2"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                <Phone className="w-5 h-5" />
                {CONTACT.PHONE_OFFICE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}