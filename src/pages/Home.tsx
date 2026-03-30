import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, Film, Users, Zap, Handshake, UserCheck, TrendingUp, Award, Heart, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../hooks/useAnalytics';
import { HomeCarousel } from '../components/HomeCarousel';

const Home = () => {
  const navigate = useNavigate();
  const [activeExpertise, setActiveExpertise] = useState<number | null>(null);

  const heroImage = 'https://i.imgur.com/pfz6zqD.jpeg';

  const expertise = [
    {
      icon: Film,
      title: 'Matchday Production',
      description: 'Couverture intégrale de vos matchs avec des angles cinématographiques et un montage professionnel. Highlights, behind-the-scenes et contenus médias pour vos diffusions.',
      image: 'https://i.imgur.com/ZWk9tSc.jpeg'
    },
    {
      icon: Users,
      title: 'Academy Immersion',
      description: 'Immersion dans le quotidien de vos académies. Documentaires sur l\'évolution des jeunes talents, visuels pour le recrutement et contenus inspirants pour vos audiences.',
      image: 'https://i.imgur.com/kAYWLmo.jpeg'
    },
    {
      icon: Zap,
      title: 'Club Branding',
      description: 'Modernisation de l\'image de votre club. Contenus adaptés à chaque plateforme (TikTok, Instagram, YouTube), storytelling visuel et branding cohérent.',
      image: 'https://i.imgur.com/LzFNFhx.jpeg'
    }
  ];

  const testimonials = [
    {
      name: 'CS Meaux Academy',
      image: 'https://upload.wikimedia.org/wikipedia/fr/a/ab/Logo_CS_Meaux_AF.svg',
      text: 'La qualité cinématographique de la couverture de notre saison a vraiment marqué les esprits. Un partenaire de confiance.',
      role: 'Production football'
    },
    {
      name: 'Ibengo Sport',
      image: 'https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/118721/--2.png',
      text: 'Un vrai professionnel qui comprend les enjeux du sport. Les contenus produits mettent parfaitement en valeur nos talents.',
      role: 'Couverture saisonnière'
    },
    {
      name: 'Onegoal Academy',
      image: 'https://onegoalshop.fr/cdn/shop/files/IMG_4488-removebg-preview.png?height=130&v=1763272482',
      text: 'Les vidéos promotionnelles réalisées nous ont permis d\'améliorer notre visibilité digitale de façon spectaculaire.',
      role: 'Branding & communication'
    }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="relative bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      
      {/* 1. HERO SECTION (Luxurious cinematic entrance) */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Ken Burns effect on background */}
        <motion.div
           className="absolute inset-0"
           initial={{ scale: 1.1 }}
           animate={{ scale: 1 }}
           transition={{ duration: 10, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="BKR Studio - Production Football"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Subtle radial gradient to focus center */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.p variants={fadeUpVariant} className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] mb-6 font-medium">
              BKR Studio
            </motion.p>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1.1] max-w-4xl">
              L'esthétique du <br/><span className="italic font-light text-gray-300">football moderne.</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Nous redéfinissons l'image des clubs ambitieux. Des contenus documentaires cinématographiques et un branding de prestige pour capter l'attention.
            </motion.p>
            
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row gap-6 items-center">
              <button
                onClick={() => { trackEvent('Hero', 'Click Voir nos projets'); navigate('/portfolio'); }}
                className="group relative px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative font-medium flex items-center gap-2">
                  Découvrir le portfolio <PlayCircle className="w-4 h-4" />
                </span>
              </button>
              
              <button
                onClick={() => { trackEvent('Hero', 'Click Travailler ensemble'); navigate('/contact'); }}
                className="group text-white font-medium flex items-center gap-2 hover:text-gray-300 transition-colors"
              >
                Nous contacter 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* 2. STRATEGY SECTION (Bento Box Layout) */}
      <section className="py-32 bg-[#FAF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-20 max-w-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Le pouvoir de <br/><span className="text-gray-500 italic">l'image stratégique.</span></h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed">
              Vos résultats sur le terrain ne suffisent plus. Plongez votre communauté au cœur de votre projet grâce à une communication visuelle premium qui attire naturellement les opportunités posant les bases d'un club moderne.
            </p>
          </motion.div>

          {/* Bento Box Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Bento Item 1 - Large */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2 md:row-span-2 bg-black text-white p-10 rounded-3xl flex flex-col justify-between group overflow-hidden relative shadow-lg"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-700" />
              <div>
                <Heart className="w-10 h-10 text-white/80 mb-6" strokeWidth={1.5} />
                <h3 className="text-3xl font-bold mb-4 tracking-tight">Magnétisme naturel</h3>
                <p className="text-gray-400 font-light text-lg leading-relaxed mb-8 max-w-md">
                  Racontez une histoire authentique. Les images haut de gamme permettent aux joueurs, familles et partenaires de se projeter immédiatement dans l'atmosphère unique de votre club.
                </p>
              </div>
              <ul className="space-y-3 font-light text-gray-300">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white" /> Inspiration quotidienne</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-white" /> Fidélisation de la communauté</li>
              </ul>
            </motion.div>

            {/* Bento Item 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-1 md:row-span-1 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <Handshake className="w-8 h-8 text-black mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3 tracking-tight">Attirer les Sponsors</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Une image forte valorise votre club auprès des marques et démultiplie vos opportunités de financement.
                </p>
              </div>
            </motion.div>

            {/* Bento Item 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 md:row-span-1 bg-white border border-gray-100 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <UserCheck className="w-8 h-8 text-black mb-5" strokeWidth={1.5} />
                <h3 className="text-xl font-bold mb-3 tracking-tight">Recruter les Talents</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  Les meilleurs profils vous choisissent aussi pour l'image que vous dégagez. Renforcez votre attractivité.
                </p>
              </div>
            </motion.div>

            {/* Bento Item 4 - Wide horizontal */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 md:row-span-1 bg-gray-50 border border-gray-200 p-8 rounded-3xl flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <TrendingUp className="w-6 h-6 text-black" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">Domination Digitale</h3>
              </div>
              <p className="text-gray-600 font-light leading-relaxed">
                Démarquez-vous du monde amateur. Des contenus produits pour engager massivement sur les réseaux, asseoir votre crédibilité et professionnaliser l'ensemble de votre communication.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO CAROUSEL */}
      <HomeCarousel />

      {/* 4. EXPERTISE SECTION (Dynamic Hover) */}
      <section className="py-40 bg-white relative overflow-hidden">
        {/* Dynamic Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence>
            {activeExpertise !== null && (
              <motion.img
                key={activeExpertise}
                src={expertise[activeExpertise].image}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full h-full object-cover"
              />
            )}
          </AnimatePresence>
          {/* Transition overlay */}
          <motion.div 
            className="absolute inset-0 bg-white"
            initial={false}
            animate={{ opacity: activeExpertise !== null ? 0 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className={`absolute inset-0 transition-opacity duration-1000 ${activeExpertise !== null ? 'bg-black/60' : 'bg-transparent'}`} />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
          >
            <div>
              <h2 className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight transition-colors duration-500 ${activeExpertise !== null ? 'text-white' : 'text-black'}`}>
                Expertises<br/>Sur-Mesure.
              </h2>
              <p className={`text-xl font-light max-w-xl transition-colors duration-500 ${activeExpertise !== null ? 'text-gray-300' : 'text-gray-500'}`}>
                L'art de capturer l'intensité. Des formats pensés pour chaque étape de la vie de votre club.
              </p>
            </div>
            <button
               // Navigate to Service Page, removing active hover so component unmount smoothly if needed
               onClick={() => { setActiveExpertise(null); navigate('/services'); }}
               className={`font-medium pb-2 border-b transition-colors duration-500 ${
                 activeExpertise !== null 
                   ? 'text-white border-white hover:text-gray-300 hover:border-gray-300' 
                   : 'text-black border-black hover:text-gray-500 hover:border-gray-500'
               }`}
            >
              Découvrir nos offres
            </button>
          </motion.div>

          {/* Cards container */}
          <div className="grid md:grid-cols-3 gap-8">
            {expertise.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveExpertise(index)}
                  onMouseLeave={() => setActiveExpertise(null)}
                  onClick={() => navigate('/services')}
                  className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-10 cursor-pointer shadow-sm hover:-translate-y-2 transition-transform duration-500"
                  style={{
                    backgroundColor: activeExpertise === index ? 'rgba(255,255,255,0.1)' : (activeExpertise !== null ? 'rgba(255,255,255,0.05)' : 'white')
                  }}
                >
                  <IconComponent 
                    className={`w-12 h-12 mb-8 transition-colors duration-500 ${
                      activeExpertise !== null ? 'text-white' : 'text-black'
                    }`} 
                    strokeWidth={1} 
                  />
                  <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors duration-500 ${
                    activeExpertise !== null ? 'text-white' : 'text-black'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`font-light leading-relaxed transition-colors duration-500 ${
                    activeExpertise !== null ? 'text-gray-300/90' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                  
                  <div className={`mt-10 flex items-center text-sm font-semibold uppercase tracking-wider transition-colors duration-500 ${
                    activeExpertise !== null ? 'text-white' : 'text-black'
                  }`}>
                    Détails <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS SECTION */}
      <section className="py-32 bg-[#1A1A1A] text-white rounded-t-[4rem] overflow-hidden -mt-16 relative z-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-800 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-24"
          >
            <div className="flex justify-center mb-6">
              <Award className="w-12 h-12 text-gray-400" strokeWidth={1} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ils élèvent leurs <span className="italic font-light text-gray-400">standards.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col relative"
              >
                {/* Visual quote mark */}
                <span className="absolute -top-10 -left-6 text-8xl text-gray-800/40 font-serif leading-none select-none">"</span>
                
                <div className="border-t border-gray-800 pt-8 flex-1">
                  <p className="text-xl text-gray-300 font-light italic leading-relaxed mb-10 relative z-10">
                    {testimonial.text}
                  </p>
                </div>
                
                <div className="flex items-center gap-5 mt-auto">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-white/5 border border-white/10 p-2 shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION */}
      <section className="bg-black relative py-40 border-t border-white/5 overflow-hidden">
        {/* Glow effect central */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 rounded-[100%] blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1]">
              Sublimez <br/><span className="italic font-light text-gray-400">votre image.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-14 max-w-2xl mx-auto leading-relaxed">
              Discutons de la stratégie visuelle qui correspond à vos ambitions.
            </p>
            <button
              onClick={() => { trackEvent('Footer CTA', 'Click Demarrer projet'); navigate('/contact'); }}
              className="px-12 py-5 bg-white text-black rounded-full font-medium sm:text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] flex items-center gap-3 mx-auto"
            >
              Démarrer le projet <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;