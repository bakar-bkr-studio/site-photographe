import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Youtube } from 'lucide-react';
import { trackEvent } from '../hooks/useAnalytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const data = new URLSearchParams();
      data.append('form-name', 'contact');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('subject', formData.subject);
      data.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Votre message a bien été envoyé ! Nous vous répondrons dans les plus brefs délais.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        trackEvent('Contact', 'Formulaire envoyé');
      } else {
        throw new Error('Erreur réseau');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialClick = (platform: string) => {
    trackEvent('Social', `Clic ${platform}`);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-12 max-w-4xl mx-auto"
        >
          <h2 className="text-xl font-semibold text-blue-800 mb-3">Contact direct par email</h2>
          <p className="text-blue-700 mb-4">
            Pour nous contacter rapidement, envoyez-nous un email directement à :
          </p>
          <a 
            href="mailto:bkr.studio77@gmail.com?subject=Contact depuis le site web"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            onClick={() => handleSocialClick('Email direct')}
          >
            bkr.studio77@gmail.com
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-8">Informations de contact</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-4" />
                <span>+33 7 67 70 23 23</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-4" />
                <span>bkr.studio77@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-4" />
                <span>Île de France et Grand Est</span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/bakar_tout_long?igsh=ZHJtNTdpczRvbXM4&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  onClick={() => handleSocialClick('Instagram')}
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@BKR-STUDIO-Prod" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black"
                  onClick={() => handleSocialClick('YouTube')}
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {submitStatus && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="matchday">Matchday Production</option>
                  <option value="academy">Academy Immersion</option>
                  <option value="branding">Club Branding & Social Media</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  required
                >
                </textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-black text-white hover:bg-gray-800 cursor-pointer'
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;