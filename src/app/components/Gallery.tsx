import { motion } from 'motion/react';
import { useState } from 'react';
import peintureApres from 'figma:asset/e61acc0256f48ab82b196d9a895ebf4c6dc61bf8.png';
import cuisineApres from 'figma:asset/a3a5f7e28778420e122802ba371dc677ec598eef.png';
import comblesApres from 'figma:asset/a569a53a00c36cab128031dc5d727be3c8592ea1.png';

export function Gallery() {
  const [activeTab, setActiveTab] = useState<'all' | 'painting' | 'kitchen' | 'attic'>('all');

  const projects = [
    {
      category: 'painting',
      after: peintureApres,
      title: 'Peinture et Finition',
      location: 'Paris 16e',
    },
    {
      category: 'kitchen',
      after: cuisineApres,
      title: 'Cuisine Moderne',
      location: 'Fontainebleau',
    },
    {
      category: 'attic',
      after: comblesApres,
      title: 'Aménagement de Combles',
      location: 'Brétigny-sur-Orge',
    },
  ];

  const filteredProjects =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <section id="realisations" className="py-8 sm:py-10 md:py-12 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-white text-center"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Nos <span className="text-[#EFBF04]">Réalisations</span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Découvrez quelques unes de nos réalisations
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 md:px-6 py-2 rounded-md transition-all text-sm md:text-base ${
                activeTab === 'all'
                  ? 'bg-[#EFBF04] text-[#1A1A1A]'
                  : 'bg-[#1A1A1A] text-white border border-[#EFBF04]/20 hover:border-[#EFBF04]/60'
              }`}
              style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
            >
              Tout
            </button>
            <button
              onClick={() => setActiveTab('attic')}
              className={`px-4 md:px-6 py-2 rounded-md transition-all text-sm md:text-base hidden sm:block ${
                activeTab === 'attic'
                  ? 'bg-[#EFBF04] text-[#1A1A1A]'
                  : 'bg-[#1A1A1A] text-white border border-[#EFBF04]/20 hover:border-[#EFBF04]/60'
              }`}
              style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
            >
              Aménagement de Combles
            </button>
            <button
              onClick={() => setActiveTab('kitchen')}
              className={`px-4 md:px-6 py-2 rounded-md transition-all text-sm md:text-base ${
                activeTab === 'kitchen'
                  ? 'bg-[#EFBF04] text-[#1A1A1A]'
                  : 'bg-[#1A1A1A] text-white border border-[#EFBF04]/20 hover:border-[#EFBF04]/60'
              }`}
              style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
            >
              Cuisines
            </button>
            <button
              onClick={() => setActiveTab('painting')}
              className={`px-4 md:px-6 py-2 rounded-md transition-all text-sm md:text-base ${
                activeTab === 'painting'
                  ? 'bg-[#EFBF04] text-[#1A1A1A]'
                  : 'bg-[#1A1A1A] text-white border border-[#EFBF04]/20 hover:border-[#EFBF04]/60'
              }`}
              style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
            >
              Peinture
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#1A1A1A] border border-[#EFBF04]/20 rounded-lg overflow-hidden hover:border-[#EFBF04]/60 transition-all group"
            >
              <div className="relative">
                {project.before ? (
                  <div className="grid grid-cols-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute top-2 left-2 bg-[#1A1A1A]/80 text-white px-3 py-1 rounded-full text-sm z-10">
                        Avant
                      </div>
                      <img
                        src={project.before}
                        alt={`${project.title} - Avant`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute top-2 right-2 bg-[#EFBF04] text-[#1A1A1A] px-3 py-1 rounded-full text-sm z-10">
                        Après
                      </div>
                      <img
                        src={project.after}
                        alt={`${project.title} - Après`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.after}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3
                  className="text-xl mb-2 text-white"
                  style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
                >
                  {project.title}
                </h3>
                <p className="text-white/60" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}