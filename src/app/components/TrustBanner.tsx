import { motion } from 'motion/react';
import { Check, Clock, MapPin, Sparkles } from 'lucide-react';

export function TrustBanner() {
  const features = [
    { icon: Check, text: 'Devis gratuit' },
    { icon: MapPin, text: 'Déplacement offert' },
    { icon: Clock, text: 'Réponse rapide' },
    { icon: Sparkles, text: 'Clé en main' },
  ];

  return (
    <section className="bg-[#CC0000] py-4 sm:py-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}>
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}