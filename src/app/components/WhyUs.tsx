import { motion } from 'motion/react';
import { User, MapPinHouse, Award, Clock } from 'lucide-react';

export function WhyUs() {
  const reasons = [
    {
      icon: User,
      title: 'Un Interlocuteur Unique',
      description:
        'Simplifiez vos travaux avec un seul artisan qui coordonne tous les corps de métier.',
    },
    {
      icon: MapPinHouse,
      title: '2 Agences',
      description: 'Présents à Fontainebleau et Paris pour vous servir au plus près.',
    },
    {
      icon: Award,
      title: 'Artisans Qualifiés',
      description: 'Équipe expérimentée garantissant des finitions de qualité.',
    },
    {
      icon: Clock,
      title: 'Réactivité',
      description: 'Devis rapide et intervention efficace pour concrétiser votre projet.',
    },
  ];

  return (
    <section className="py-8 sm:py-10 md:py-12 bg-[#1A1A1A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl mb-6 text-white text-center"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Pourquoi choisir <span className="text-[#EFBF04]">Studio Rénov ?</span>
          </h2>
          <p
            className="text-xl text-white/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Transformez votre intérieur facilement et sans stress
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-[#EFBF04]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#EFBF04]/30">
                <reason.icon className="w-10 h-10 text-[#EFBF04]" />
              </div>
              <h3
                className="text-xl mb-3 text-white"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                {reason.title}
              </h3>
              <p className="text-white/60" style={{ fontFamily: 'Raleway, sans-serif' }}>
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}