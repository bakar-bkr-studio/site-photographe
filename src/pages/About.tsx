import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Film, Target, Users, Zap, MapPin, ArrowRight } from 'lucide-react';

const About = () => {
  const { ref: valuesRef, inView: valuesInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: achievementsRef, inView: achievementsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const achievements = [
    { icon: Film, label: "Productions Football", value: "30+" },
    { icon: Users, label: "Clubs Partenaires", value: "15+" },
    { icon: Zap, label: "Matchs Couverts", value: "100+" },
    { icon: Target, label: "Académies", value: "8+" }
  ];

  const testimonials = [
    {
      name: "CS Meaux Academy",
      role: "Club de Football",
      image: "https://i.imgur.com/VbD673J.jpeg",
      text: "Un véritable professionnel qui comprend les enjeux du sport. La qualité cinématographique de ses productions a transformé notre communication.",
      rating: 5
    },
    {
      name: "Onegoal Academy",
      role: "Équipe compétition",
      image: "https://i.imgur.com/cusGwVF.jpeg",
      text: "Les contenus produits pour notre saison nous ont permis de nous démarquer. Un partenaire de confiance et de qualité.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src="https://i.imgur.com/2toUB9N.jpeg"
          alt="BKR Studio - Production Football"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Une immersion totale au cœur du football
            </h1>
            <p className="text-xl text-white/90">
              Raconter le football amateur avec l'intensité d'un club professionnel
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Story Section */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-8">Notre Approche</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Je m'appelle Aboubakar, fondateur de BKR Studio. Depuis plusieurs saisons, j'accompagne des clubs ambitieux dans la structuration de leur image et la production de contenus immersifs.
                </p>
                <p>
                  Mon objectif est simple : <span className="font-semibold">raconter le football amateur avec l'intensité et l'esthétique d'un club professionnel.</span>
                </p>
                <p>
                  Accès vestiaires, entraînements, académies, matchday : je travaille au plus près des joueurs et du staff pour capturer l'essence du club. Chaque production est conçue pour valoriser votre projet, attirer des talents et renforcer votre visibilité digitale.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/BuP8W0m.jpeg"
                alt="BKR Studio en action"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </section>

        {/* Vision & Values */}
        <section className="mb-20">
          <motion.div
            ref={valuesRef}
            initial={{ y: 20, opacity: 0 }}
            animate={valuesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Notre Vision & Nos Valeurs</h2>

            {/* Vision Block */}
            <div className="bg-gradient-to-br from-black to-gray-900 text-white p-12 rounded-xl mb-12">
              <div className="flex items-start gap-6">
                <Target className="w-12 h-12 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Notre Vision</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Devenir une référence en production visuelle football en Île-de-France, en accompagnant les clubs ambitieux dans leur transformation digitale et leur structuration d'image.
                  </p>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-black">
                <Film className="w-12 h-12 mb-4 text-black" />
                <h3 className="text-xl font-bold mb-3">Excellence Cinématographique</h3>
                <p className="text-gray-700">
                  Qualité professionnelle sur chaque production, équipement haut de gamme et post-production soignée.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-black">
                <Users className="w-12 h-12 mb-4 text-black" />
                <h3 className="text-xl font-bold mb-3">Partenariat de Proximité</h3>
                <p className="text-gray-700">
                  Relation de confiance au plus près de votre club, compréhension de vos enjeux sportifs et d'image.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-black">
                <Zap className="w-12 h-12 mb-4 text-black" />
                <h3 className="text-xl font-bold mb-3">Résultats Mesurables</h3>
                <p className="text-gray-700">
                  Contenus conçus pour améliorer votre visibilité, attirer sponsors et talents, structurer votre communication.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={valuesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Notre Expertise Football</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black text-white p-8 rounded-xl">
                <Film className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Matchday Production</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Couverture intégrale des matchs
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Highlights professionnels
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Contenus médias & diffusion
                  </li>
                </ul>
              </div>
              <div className="bg-black text-white p-8 rounded-xl">
                <Users className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Academy Immersion</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Documentaires talents
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Visuels recrutement
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Contenus Academy
                  </li>
                </ul>
              </div>
              <div className="bg-black text-white p-8 rounded-xl">
                <Zap className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-4">Club Branding & Social</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Stratégie réseaux sociaux
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Identité visuelle club
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-400">→</span>
                    Contenus TikTok/Instagram/YouTube
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Achievements */}
        <section className="mb-20" ref={achievementsRef}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center border-t-4 border-black"
                initial={{ y: 20, opacity: 0 }}
                animate={achievementsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-black" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Ce que disent nos partenaires</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={achievementsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-xl border-l-4 border-black"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-black to-gray-900 text-white p-12 rounded-xl text-center">
            <MapPin className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Basés en Île-de-France</h2>
            <p className="text-lg text-gray-200 mb-8">
              Nous accompagnons les clubs ambitieux de la région pour transformer leur image et structurer leur communication visuelle.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold"
            >
              Discutons de votre projet
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;