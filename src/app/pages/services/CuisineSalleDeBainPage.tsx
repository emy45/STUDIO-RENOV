import { motion } from 'motion/react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import bathroomImage from 'figma:asset/197fbaeb81fa5fdf73c9707f399bb645328aa9b3.png';

export function CuisineSalleDeBainPage() {
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

  const kitchenFeatures = [
    'Conception sur mesure',
    'Pose de meubles et électroménager',
    'Plans de travail de qualité',
    'Crédence et carrelage mural',
    'Installation électrique et plomberie',
    'Optimisation de l\'espace',
  ];

  const bathroomFeatures = [
    'Conception d\'espaces modernes',
    'Installation de douches à l\'italienne',
    'Pose de baignoires et sanitaires',
    'Carrelage mural et au sol',
    'Plomberie et robinetterie',
    'Éclairage et ventilation',
  ];

  const kitchenGallery = [
    'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NjE2OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1653087881002-071d4c840f9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwY2FiaW5ldHMlMjBkZXNpZ258ZW58MXx8fHwxNzc0NjE3MzEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760072513457-651955c7074d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaXNsYW5kJTIwbWFyYmxlJTIwY291bnRlcnRvcHxlbnwxfHx8fDE3NzQ2MTczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  const bathroomGallery = [
    bathroomImage,
    'https://images.unsplash.com/photo-1758448018619-4cbe2250b9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzaG93ZXIlMjBsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NzQ2MTczMTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1760564019103-81cd3c225cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVlc3RhbmRpbmclMjBiYXRodHViJTIwbHV4dXJ5fGVufDF8fHx8MTc3NDYxNzMxNHww&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  return (
    <div className="bg-[#0D0D0D]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={kitchenGallery[0]}
            alt="Cuisine & Salle de Bain"
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
            Cuisine & <span className="text-[#EFBF04]">Salle de Bain</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Conception et aménagement d'espaces sur mesure, alliant élégance et fonctionnalité
          </motion.p>
        </div>
      </section>

      {/* Cuisine Section */}
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
                La Cuisine de <span className="text-[#EFBF04]">vos Rêves</span>
              </h2>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Votre cuisine est le cœur de votre maison. Nous créons des espaces sur mesure 
                qui allient esthétique et fonctionnalité, adaptés à votre style de vie.
              </p>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                De la conception à l'installation, nous vous accompagnons dans toutes les étapes 
                pour créer une cuisine qui vous ressemble, avec des matériaux de qualité.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {kitchenFeatures.map((feature, index) => (
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

      {/* Kitchen Gallery Section */}
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
            Nos Cuisines <span className="text-[#EFBF04]">Sur Mesure</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {kitchenGallery.map((image, index) => (
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
                  alt={`Cuisine ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salle de Bain Section */}
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
                Un Espace de <span className="text-[#EFBF04]">Bien-être</span>
              </h2>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Transformez votre salle de bain en un véritable havre de paix. Nous créons des espaces 
                raffinés et fonctionnels qui allient confort, esthétique et durabilité.
              </p>
              <p
                className="text-white/70 mb-6 text-lg"
                style={{ fontFamily: 'Raleway, sans-serif' }}
              >
                Du choix des matériaux à l'installation finale, chaque détail est pensé pour créer 
                une salle de bain qui répond à vos attentes et s'adapte à votre quotidien.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {bathroomFeatures.map((feature, index) => (
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

      {/* Bathroom Gallery Section */}
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
            Nos Salles de Bain <span className="text-[#EFBF04]">Modernes</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {bathroomGallery.map((image, index) => (
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
                  alt={`Salle de bain ${index + 1}`}
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
              Créons ensemble vos <span className="text-[#EFBF04]">espaces de vie</span>
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
