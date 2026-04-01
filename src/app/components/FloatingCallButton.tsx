import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { CONTACT } from '../../config';

export function FloatingCallButton() {
  return (
    <motion.a
      href={`tel:${CONTACT.PHONE_MOBILE}`}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#EFBF04] hover:bg-[#EFBF04]/90 text-[#1A1A1A] p-3 sm:p-4 rounded-full shadow-2xl z-50"
      aria-label="Appeler Studio Renov"
      animate={{
        boxShadow: [
          '0 20px 50px -10px rgba(239, 191, 4, 0.6)',
          '0 20px 60px 0px rgba(239, 191, 4, 0.8)',
          '0 20px 50px -10px rgba(239, 191, 4, 0.6)',
        ],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.a>
  );
}