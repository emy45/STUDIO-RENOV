import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LegalNoticeProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LegalNotice({ isOpen, onClose }: LegalNoticeProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-4 md:inset-10 z-50 bg-[#1A1A1A] border border-[#EFBF04]/30 rounded-xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#0D0D0D] border-b border-[#EFBF04]/30 p-6 flex items-center justify-between">
              <h2
                className="text-3xl text-white"
                style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
              >
                Mentions <span className="text-[#EFBF04]">Légales</span>
              </h2>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                aria-label="Fermer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto space-y-6 text-white/80" style={{ fontFamily: 'Raleway, sans-serif' }}>
                
                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    1. Informations légales
                  </h3>
                  <p className="mb-2">
                    <strong className="text-white">Raison sociale :</strong> Studio Renov
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Forme juridique :</strong> Entreprise individuelle
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">SIRET :</strong> 878 831 312
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Dirigeant :</strong> Éric Beautour
                  </p>
                  <p className="mb-2">
                    <strong className="text-white">Adresses :</strong>
                  </p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>46 rue du Château, 77300 Fontainebleau</li>
                    <li>9 rue des Colonnes, 75002 Paris</li>
                  </ul>
                  <p className="mt-2">
                    <strong className="text-white">Téléphone :</strong> 06.27.81.22.28 / 01.85.48.00.82
                  </p>
                  <p>
                    <strong className="text-white">Email :</strong> studiorenovfr@gmail.com
                  </p>
                </section>

                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    2. Hébergement
                  </h3>
                  <p>
                    Ce site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    3. Propriété intellectuelle
                  </h3>
                  <p>
                    L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété 
                    exclusive de Studio Renov, sauf mention contraire. Toute reproduction, distribution ou 
                    utilisation sans autorisation préalable est strictement interdite.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    4. Données personnelles
                  </h3>
                  <p className="mb-2">
                    Les informations recueillies via le formulaire de contact sont destinées à Studio Renov 
                    pour le traitement de votre demande de devis. Conformément au RGPD et à la loi Informatique 
                    et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition 
                    au traitement de vos données personnelles.
                  </p>
                  <p>
                    Pour exercer ces droits, contactez-nous à : studiorenovfr@gmail.com
                  </p>
                </section>

                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    5. Cookies
                  </h3>
                  <p>
                    Ce site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez 
                    accepter ou refuser les cookies via la bannière qui s'affiche lors de votre première visite.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    6. Responsabilité
                  </h3>
                  <p>
                    Studio Renov s'efforce de fournir des informations exactes et à jour sur ce site. 
                    Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des 
                    informations mises à disposition. Studio Renov ne pourra être tenue responsable des 
                    erreurs, omissions ou résultats obtenus suite à l'utilisation de ces informations.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    7. Liens hypertextes
                  </h3>
                  <p>
                    Ce site peut contenir des liens vers d'autres sites. Studio Renov n'exerce aucun contrôle 
                    sur ces sites et décline toute responsabilité quant à leur contenu.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                    8. Droit applicable
                  </h3>
                  <p>
                    Les présentes mentions légales sont soumises au droit français. Tout litige relatif à 
                    l'utilisation de ce site relève de la compétence exclusive des tribunaux français.
                  </p>
                </section>

                <section className="border-t border-[#EFBF04]/20 pt-6">
                  <p className="text-sm text-white/60">
                    <strong className="text-white">Conception et création du site :</strong>{' '}
                    <a
                      href="https://www.emy-com.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#EFBF04] hover:text-[#EFBF04]/80 transition-colors"
                    >
                      www.emy-com.fr
                    </a>
                  </p>
                  <p className="text-sm text-white/60 mt-2">
                    Dernière mise à jour : Mars 2026
                  </p>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#0D0D0D] border-t border-[#EFBF04]/30 p-4 text-center">
              <button
                onClick={onClose}
                className="bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#1A1A1A] px-6 py-2.5 rounded-md transition-all shadow-lg shadow-[#EFBF04]/20"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}