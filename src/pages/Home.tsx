import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowDown, ArrowRight, Film, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../hooks/useAnalytics';
import { HomeCarousel } from '../components/HomeCarousel';

const Home = () => {
  const { ref: expertiseRef, inView: expertiseInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: strategyRef, inView: strategyInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const navigate = useNavigate();

  const heroImage = 'https://i.imgur.com/pfz6zqD.jpeg';

  const expertise = [
    {
      icon: Film,
      title: 'Matchday Production',
      description: 'Couverture intégrale de vos matchs avec des angles cinématographiques et un montage professionnel. Highlights, behind-the-scenes et contenus médias pour vos diffusions.'
    },
    {
      icon: Users,
      title: 'Academy Immersion',
      description: 'Immersion dans le quotidien de vos académies. Documentaires sur l\'évolution des jeunes talents, visuels pour le recrutement et contenus inspirants pour vos audiences.'
    },
    {
      icon: Zap,
      title: 'Club Branding & Social Media',
      description: 'Modernisation de l\'image de votre club. Contenus adaptés à chaque plateforme (TikTok, Instagram, YouTube), storytelling visuel et branding cohérent.'
    }
  ];

  const testimonials = [
    {
      name: 'CS Meaux Academy',
      image: 'https://upload.wikimedia.org/wikipedia/fr/a/ab/Logo_CS_Meaux_AF.svg',
      text: 'Un vrai professionnel qui comprend les enjeux du sport. Les contenus produits mettent parfaitement en valeur notre projet de club et nos jeunes talents.',
      rating: 5,
      event: 'Production football'
    },
    {
      name: 'Ibengo Sport',
      image: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/118721/--2.png',
      text: 'La qualité cinématographique de la couverture de notre saison a vraiment marqué les esprits. Un partenaire de confiance pour notre club.',
      rating: 5,
      event: 'Couverture saisonnière'
    },
    {
      name: 'Onegoal Academy',
      image: 'https://onegoalshop.fr/cdn/shop/files/IMG_4488-removebg-preview.png?height=130&v=1763272482',
      text: 'Les vidéos promotionnelles réalisées nous ont permis d\'améliorer notre visibilité digitale et d\'attirer de nouveaux sponsors pour notre association sportive.',
      rating: 5,
      event: 'Branding & communication'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="BKR Studio - Production Football"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-4">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Football Visual Storytelling
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Nous accompagnons les clubs ambitieux dans la modernisation de leur image à travers des contenus immersifs et cinématographiques.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { trackEvent('Hero', 'Click Voir nos projets'); navigate('/portfolio'); }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg"
              >
                Voir nos projets
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => { trackEvent('Hero', 'Click Travailler ensemble'); navigate('/contact'); }}
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                Travailler ensemble
                <ArrowRight className="w-5 h-5" />
              </motion.button>
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

      {/* Strategy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4" ref={strategyRef}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={strategyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">Pourquoi l'image est stratégique pour un club ?</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Dans le football moderne, l'image est un levier de croissance. <span className="font-semibold">Sponsors, recrutement, visibilité digitale, attractivité des talents</span> : un club structuré doit maîtriser sa communication visuelle.
            </p>
          </motion.div>
        </div>
      </section>

      <HomeCarousel />

      {/* Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4" ref={expertiseRef}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={expertiseInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Nos expertises</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trois domaines clés pour transformer votre présence visuelle
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={expertiseInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={ctaInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Les clubs nous font confiance</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les retours d'expérience de nos partenaires
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    decoding="async"
                    className={`w-14 h-14 rounded-full object-cover mr-4 ${(testimonial.name === 'Onegoal Academy' || testimonial.name === 'Ibengo Sport' || testimonial.name === 'CS Meaux Academy') ? 'bg-black p-1' : ''}`}
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.event}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 text-center" ref={ctaRef}>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={ctaInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">Transformez votre image</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Discutons de votre projet de club et construisons ensemble une stratégie visuelle adaptée à vos ambitions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { trackEvent('Footer CTA', 'Click Travailler avec nous'); navigate('/contact'); }}
              className="bg-white text-black px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center gap-2"
            >
              Travailler avec nous
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;