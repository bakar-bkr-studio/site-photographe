import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { trackEvent } from '../hooks/useAnalytics';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName: string;
  packagePrice: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, packageName, packagePrice }) => {
  const [submitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      trackEvent('Modal', `Ouverture - ${packageName}`);
    }
  }, [isOpen, packageName]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      firstInputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70"
          />
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-[500px] max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-xl"
            style={{
              margin: '2rem auto',
              minHeight: 'min-content'
            }}
          >
            <button
              onClick={() => {
                trackEvent('Modal', `Fermeture - ${packageName}`);
                onClose();
              }}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Fermer"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6">Réserver {packageName}</h2>
              <p className="text-gray-600 mb-6">
                Prix indicatif : {packagePrice}
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Réservation par email</h3>
                <p className="text-blue-700 mb-3">
                  Pour effectuer votre réservation, veuillez nous contacter directement par email à :
                </p>
                <a 
                  href="mailto:bkr.studio77@gmail.com?subject=Réservation - {packageName}&body=Bonjour,%0D%0A%0D%0AJe souhaite réserver le service : {packageName}%0D%0APrix indicatif : {packagePrice}%0D%0A%0D%0AMes informations :%0D%0A- Nom :%0D%0A- Prénom :%0D%0A- Téléphone :%0D%0A- Date souhaitée :%0D%0A%0D%0AMessage :%0D%0A"
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  bkr.studio77@gmail.com
                </a>
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-lg mb-6 ${
                  submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-gray-600 text-center mb-4">
                  Le formulaire de réservation en ligne sera bientôt disponible.
                </p>
                <p className="text-gray-600 text-center">
                  En attendant, utilisez le lien email ci-dessus pour nous contacter directement.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 opacity-50 pointer-events-none">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    Prénom *
                  </label>
                  <input
                    ref={firstInputRef}
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    required
                    min={today}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-shadow"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    disabled
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-shadow resize-none"
                    placeholder="Détails supplémentaires sur votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={true}
                  className="w-full bg-gray-400 text-white py-3 px-6 rounded-lg cursor-not-allowed"
                >
                  Formulaire temporairement indisponible
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;