import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import electricalPanelImage from 'figma:asset/ebe74fb9e2c8db63629f5afab8d49a6649a3b40f.png';
import windowInstallImage from 'figma:asset/9b6a1ad5ec798f02a9be7874e6993e9f11fda0a0.png';
import couvertureImage from '../../imports/AdobeStock_356531689-2.jpeg';

export function Services() {
  const services = [
    {
      image: 'https://images.unsplash.com/photo-1770677350521-d5fdcbd74367?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHBhaW50aW5nJTIwd2FsbCUyMGx1eHVyeXxlbnwxfHx8fDE3NzQ2MTY5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Peinture & Finitions',
      description: 'Enduit, papier peint, peinture professionnelle pour des finitions impeccables',
      tags: ['Peinture', 'Enduit', 'Papier peint'],
      link: '/services/peinture-finitions',
    },
    {
      image: 'https://images.unsplash.com/photo-1769736436809-eab3de70b175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwYXJxdWV0JTIwZmxvb3JpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQ1MTMyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sols, Plâtrerie & Cloisons',
      description: 'Parquet, carrelage, faïence, création de cloisons BA13, plâtrerie',
      tags: ['Carrelage', 'Parquet', 'BA13', 'Plâtrerie'],
      link: '/services/sols-platrerie-cloisons',
    },
    {
      image: electricalPanelImage,
      title: 'Électricité & Plomberie',
      description: 'Installation électrique aux normes, plomberie et installation sanitaire',
      tags: ['Électricité', 'Plomberie', 'Sanitaire', 'Normes'],
      link: '/services/electricite-plomberie',
    },
    {
      image: 'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0NjE2OTIzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Cuisine & Salle de Bain',
      description: 'Conception et aménagement sur mesure de cuisines et salles de bain modernes',
      tags: ['Sur mesure', 'Cuisine', 'Salle de bain', 'Aménagement'],
      link: '/services/cuisine-salle-de-bain',
    },
    {
      image: windowInstallImage,
      title: 'Menuiseries & Combles',
      description: 'Portes, fenêtres, placards, aménagement et transformation de combles',
      tags: ['Menuiseries', 'Combles', 'Isolation', 'Placards'],
      link: '/services/menuiseries-combles',
    },
    {
      image: couvertureImage,
      title: 'Couverture',
      description: 'Réfection de toiture, tuiles, ardoises, zinguerie et isolation',
      tags: ['Toiture', 'Tuiles', 'Ardoises', 'Zinguerie'],
      link: '/services/couverture',
    },
  ];

  return (
    <section id="services" className="py-8 sm:py-10 md:py-12 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-white text-center"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Nos <span className="text-[#EFBF04]">Services</span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Un seul artisan pour tous vos travaux de rénovation intérieure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="block"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#0D0D0D] border border-[#EFBF04]/30 rounded-lg overflow-hidden hover:border-[#EFBF04] transition-all hover:transform hover:scale-105 group flex flex-col h-full cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  <h3
                    className="text-xl mb-3 text-white"
                    style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-white/60 mb-4 flex-grow"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto justify-center">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-[#EFBF04]/10 border border-[#EFBF04]/30 rounded-full text-sm text-[#EFBF04]"
                        style={{ fontFamily: 'Raleway, sans-serif' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}