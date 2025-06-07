import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Camera, Award, Users, Heart, Lightbulb, Clock, MapPin, Star, ArrowRight } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const achievements = [
    { icon: Camera, label: "Projets Réalisés", value: "200+" },
    { icon: Users, label: "Clients Satisfaits", value: "50+" },
    { icon: Award, label: "Années d'Expérience", value: "5+" },
    { icon: Heart, label: "Evénements Capturés", value: "30+" }
  ];

  const testimonials = [
    {
      name: "Oumi et Ali",
      role: "Mariés en 2022",
      image: "https://i.imgur.com/JIjjRP2.jpeg",
      text: "Bakar a su capturer l'essence de notre journée avec talent et discrétion. Les photos sont magnifiques !",
      rating: 5
    },
    {
      name: "CS Meaux Academy",
      role: "Club de Football",
      image: "https://i.imgur.com/VbD673J.jpeg",
      text: "Un véritable professionnel qui comprend les enjeux du sport. Qualité exceptionnelle !",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src="https://i.imgur.com/hpQfzgY.png"
          alt="BKR Studio en action"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              À Propos de BKR Studio
            </h1>
            <p className="text-xl text-white/90">
              Capturant l'essence de vos moments précieux depuis 2021
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
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Je m'appelle Aboubakar, fondateur de BKR Studio. Ma passion pour la photographie a commencé dès le collège, où je capturais déjà les moments du quotidien avec mes amis et ma famille.
                </p>
                <p>
                  En 2021, j'ai décidé de transformer cette passion en profession, par la suite en créant BKR Studio pour offrir des services de photographie et vidéographie professionnels à Meaux et Reims.
                </p>
                <p>
                  Aujourd'hui, je suis fier d'avoir accompagné des centaines de clients dans la capture de leurs moments les plus précieux, des mariages aux événements sportifs, en passant par les portraits professionnels.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.imgur.com/3fFcCB1.jpeg"
                alt="Portrait du photographe"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </section>

        {/* Mission & Values */}
        <section className="mb-20">
          <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Notre Mission & Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <Lightbulb className="w-12 h-12 mb-4 text-black" />
                <h3 className="text-xl font-bold mb-4">Créativité</h3>
                <p className="text-gray-700">
                  Chaque projet est une nouvelle opportunité de créer quelque chose d'unique et de mémorable.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <Heart className="w-12 h-12 mb-4 text-black" />
                <h3 className="text-xl font-bold mb-4">Passion</h3>
                <p className="text-gray-700">
                  La photographie n'est pas qu'un métier, c'est une véritable passion qui guide chacune de mes réalisations.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <Users className="w-12 h-12 mb-4 text-black" />
                <h3 className="text-xl font-bold mb-4">Proximité</h3>
                <p className="text-gray-700">
                  Une relation de confiance avec mes clients est la clé pour des résultats exceptionnels.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Notre Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Photographie</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Camera className="w-5 h-5 mr-3" />
                    Mariages & Événements
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    Portraits & Famille
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 mr-3" />
                    Sport & Action
                  </li>
                </ul>
              </div>
              <div className="bg-black text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Vidéographie</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Camera className="w-5 h-5 mr-3" />
                    Films de mariage
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 mr-3" />
                    Vidéos corporate
                  </li>
                  <li className="flex items-center">
                    <Award className="w-5 h-5 mr-3" />
                    Événements sportifs
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Achievements */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-black" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Ce que disent nos clients</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section className="mb-20">
          <div className="bg-gray-50 p-8 rounded-xl text-center">
            <MapPin className="w-12 h-12 mx-auto mb-6 text-black" />
            <h2 className="text-2xl font-bold mb-4">Où nous trouver</h2>
            <p className="text-gray-700 mb-6">
              Basé à Meaux en Seine-et-Marne (77) et à Reims dans la Marne (51),<br />
              nous intervenons dans toute l'Île-de-France et le Grand Est.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;