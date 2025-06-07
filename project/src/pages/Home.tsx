import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, Instagram, Youtube, Phone, Mail, MapPin, Star, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const heroImage = 'https://i.imgur.com/ZPGdAaK.jpeg';
  
  const portfolioImages = [
    {
      src: 'https://i.imgur.com/JIjjRP2.jpeg',
      alt: 'Photo de mariage - Couple dans un moment intime',
      category: 'Mariage'
    },
    {
      src: 'https://i.imgur.com/3fFcCB1.jpeg',
      alt: 'Portrait professionnel en studio',
      category: 'Portrait'
    },
    {
      src: 'https://i.imgur.com/BuP8W0m.jpeg',
      alt: 'Photo sportive - Match de football',
      category: 'Sport'
    },
    {
      src: 'https://i.imgur.com/YAeTnOQ.jpeg',
      alt: 'Événement culturel à Reims',
      category: 'Événement'
    },
    {
      src: 'https://i.imgur.com/REvU6Ra.jpeg',
      alt: 'Paysage naturel',
      category: 'Nature'
    },
    {
      src: 'https://i.imgur.com/VumIUAP.jpeg',
      alt: 'Photo d\'équipe sportive',
      category: 'Sport'
    }
  ];

  const testimonials = [
    {
      name: 'Oumi & Ali',
      image: 'https://i.imgur.com/wmFZbza.jpeg',
      text: 'Bakar a su capturer tous les moments magiques de notre mariage avec talent et discrétion. Les photos sont magnifiques et naturelles !',
      rating: 5,
      event: 'Mariage à Meaux'
    },
    {
      name: 'CS Meaux Academy',
      image: 'https://i.imgur.com/VbD673J.jpeg',
      text: 'Un vrai professionnel qui comprend les enjeux du sport. Les photos et vidéos sont dynamiques et mettent parfaitement en valeur nos joueurs.',
      rating: 5,
      event: 'Tournoi et entrainement de football'
    },
    {
      name: 'Alain',
      image: 'https://i.imgur.com/j34Uwrg.jpeg',
      text: 'Séance photo portrait exceptionnelle ! Bakar sait mettre à l\'aise et sublimer chaque personne qu\'il photographie.',
      rating: 5,
      event: 'Séance portrait'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="BKR Studio - Photographie professionnelle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Photographe et vidéaste à Meaux et Reims
            </motion.h1>
            <motion.p
              className="text-xl text-white mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Je capture vos moments les plus précieux avec un style cinématographique unique
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Me contacter
              </button>
              <button
                onClick={() => navigate('/portfolio')}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Voir mon portfolio
              </button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-8 w-8" />
        </motion.div>
      </div>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez une sélection de mes meilleures réalisations en photographie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                  <p className="text-lg font-medium mb-2">{image.category}</p>
                  <button
                    onClick={() => navigate('/portfolio')}
                    className="px-4 py-2 border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors"
                  >
                    Voir plus
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/portfolio')}
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Voir tout le portfolio
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ils me font confiance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de mes clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Prêt à capturer vos moments ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-moi pour discuter de votre projet et obtenir un devis personnalisé
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Me contacter
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">BKR Studio</h3>
              <p className="text-gray-400">
                Photographe & Vidéaste professionnel
                <br />
                Basé à Meaux et Reims
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +33 7 67 70 23 23
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  bkr.studio77@gmail.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Île de France et Grand Est
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/services#mariage" className="hover:text-white transition-colors">
                    Mariage
                  </a>
                </li>
                <li>
                  <a href="/services#portrait" className="hover:text-white transition-colors">
                    Portrait
                  </a>
                </li>
                <li>
                  <a href="/services#evenement" className="hover:text-white transition-colors">
                    Événementiel
                  </a>
                </li>
                <li>
                  <a href="/services#corporate" className="hover:text-white transition-colors">
                    Corporate
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Suivez-moi</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/bakar_tout_long?igsh=ZHJtNTdpczRvbXM4&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@BKR-STUDIO-Prod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="text-sm">
              © {new Date().getFullYear()} BKR Studio. Tous droits réservés.
            </p>
            <div className="mt-2 space-x-4 text-sm">
              <a href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <span>|</span>
              <a href="/politique-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;