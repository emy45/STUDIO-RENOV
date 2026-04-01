import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import contactBg from 'figma:asset/4494841491e25a571ee480bb4e97a284352296f8.png';
import { CONTACT } from '../../config';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', address: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-10 md:py-12 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt="Aménagement d'espace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2
            className="text-4xl md:text-5xl mb-4 text-white"
            style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700 }}
          >
            Demandez Votre <span className="text-[#EFBF04]">Devis Gratuit</span>
          </h2>
          <p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            style={{ fontFamily: 'Raleway, sans-serif' }}
          >
            Déplacement offert pour l'établissement de votre devis
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#1A1A1A]/80 backdrop-blur-sm border border-[#EFBF04]/30 rounded-2xl p-8 md:p-12 shadow-2xl shadow-[#EFBF04]/10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white mb-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#EFBF04]/20 rounded-md text-white focus:outline-none focus:border-[#EFBF04] transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white mb-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#EFBF04]/20 rounded-md text-white focus:outline-none focus:border-[#EFBF04] transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white mb-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#EFBF04]/20 rounded-md text-white focus:outline-none focus:border-[#EFBF04] transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-white mb-2"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                  >
                    Adresse du projet *
                  </label>
                  <input
                    type="text"
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#EFBF04]/20 rounded-md text-white focus:outline-none focus:border-[#EFBF04] transition-colors"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    placeholder="123 Rue de la Paix, 77300 Fontainebleau"
                    autoComplete="street-address"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-white mb-2"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  Décrivez votre projet *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#EFBF04]/20 rounded-md text-white focus:outline-none focus:border-[#EFBF04] transition-colors resize-none"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                />
              </div>

              {status === 'success' && (
                <p className="text-green-400 text-center font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  ✓ Demande envoyée ! Nous vous contacterons rapidement.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center font-semibold" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#EFBF04] hover:bg-[#EFBF04]/90 disabled:opacity-60 text-[#1A1A1A] px-8 py-4 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#EFBF04]/30"
                style={{ fontFamily: 'Raleway, sans-serif', fontWeight: 600 }}
              >
                <Send className="w-5 h-5" />
                {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
            >
              <div className="bg-[#1A1A1A] border border-[#EFBF04]/20 rounded-lg p-4 text-center">
                <Phone className="w-5 h-5 text-[#EFBF04] mx-auto mb-2" />
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Téléphone
                </p>
                <a
                  href={`tel:${CONTACT.PHONE_MOBILE}`}
                  className="block text-white hover:text-[#EFBF04] transition-colors text-sm"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {CONTACT.PHONE_MOBILE_DISPLAY}
                </a>
              </div>

              <div className="bg-[#1A1A1A] border border-[#EFBF04]/20 rounded-lg p-4 text-center">
                <Mail className="w-5 h-5 text-[#EFBF04] mx-auto mb-2" />
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Email
                </p>
                <a
                  href={`mailto:${CONTACT.EMAIL}`}
                  className="text-white hover:text-[#EFBF04] transition-colors text-sm"
                  style={{ fontFamily: 'Raleway, sans-serif' }}
                >
                  {CONTACT.EMAIL}
                </a>
              </div>

              <div className="bg-[#1A1A1A] border border-[#EFBF04]/20 rounded-lg p-4 text-center">
                <MapPin className="w-5 h-5 text-[#EFBF04] mx-auto mb-2" />
                <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Nos Adresses
                </p>
                <p className="text-white text-xs" style={{ fontFamily: 'Raleway, sans-serif' }}>
                  Fontainebleau & Paris
                </p>
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
}