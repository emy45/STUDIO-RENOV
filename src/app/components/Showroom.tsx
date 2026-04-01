import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import showroomImage from 'figma:asset/674df72e1dab1bf67878c2dec9a6ceac4d8f13fa.png';
import { ADDRESSES } from '../../config';

export function Showroom() {
  return (
    <section id="showroom" className="py-8 sm:py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Visitez Notre <span className="text-[#EFBF04]">Showroom</span>
          </h2>
          <p
            className="text-base sm:text-lg text-white/70 mb-6"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Inspirez-vous et choisissez vos matériaux sur place avec notre accompagnement personnalisé.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-[#0D0D0D] border border-[#EFBF04]/20 rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#EFBF04] flex-shrink-0 mt-1" />
                <div>
                  <h3
                    className="text-lg sm:text-xl mb-2 text-white"
                    style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
                  >
                    Showroom Fontainebleau
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {ADDRESSES.FONTAINEBLEAU.STREET}
                    <br />
                    {ADDRESSES.FONTAINEBLEAU.CITY}
                  </p>
                </div>
              </div>
            </div>

            {/* Image mobile - Apparaît ici après l'adresse du showroom en mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:hidden relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden group"
            >
              <img
                src={showroomImage}
                alt="Showroom Studio Renov - 46 rue du Château, Fontainebleau"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-40" />
              <div className="absolute inset-0 border-2 border-[#EFBF04]/30 rounded-lg pointer-events-none" />
            </motion.div>

            <div className="bg-[#0D0D0D] border border-[#EFBF04]/20 rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#EFBF04] flex-shrink-0 mt-1" />
                <div>
                  <h3
                    className="text-lg sm:text-xl mb-2 text-white"
                    style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
                  >
                    Bureau Paris
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    {ADDRESSES.PARIS.STREET}
                    <br />
                    {ADDRESSES.PARIS.CITY}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image desktop - Reste à droite sur grand écran */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative h-[300px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden group"
          >
            <img
              src={showroomImage}
              alt="Showroom Studio Renov - 46 rue du Château, Fontainebleau"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-40" />
            <div className="absolute inset-0 border-2 border-[#EFBF04]/30 rounded-lg pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}