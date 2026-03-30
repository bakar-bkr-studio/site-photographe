import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Film, Target, Users, Zap, MapPin, ArrowRight } from 'lucide-react';
import { trackEvent } from '../hooks/useAnalytics';

// Animated Counter Component for the Manifesto stats
const AnimatedCounter = ({ from, to, duration = 2 }: { from: number, to: number, duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const About = () => {
  const navigate = useNavigate();

  const achievements = [
    { label: "Productions", value: 30, suffix: "+" },
    { label: "Clubs", value: 15, suffix: "+" },
    { label: "Matchs", value: 100, suffix: "+" },
    { label: "Académies", value: 8, suffix: "+" }
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white pb-0">
      
      {/* 1. HERO SECTION (Cinematic Entry) */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Ken Burns effect */}
        <motion.div
           className="absolute inset-0"
           initial={{ scale: 1.15 }}
           animate={{ scale: 1 }}
           transition={{ duration: 15, ease: "easeOut" }}
        >
          <img
            src="https://i.imgur.com/2toUB9N.jpeg"
            alt="BKR Studio - Production Football"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.85)_100%)]" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUpVariant} className="w-12 h-[1px] bg-white/50 mb-8" />
            <motion.p variants={fadeUpVariant} className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] mb-6 font-medium">
              Notre Histoire
            </motion.p>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1] max-w-5xl">
              Derrière l'objectif, <br/><span className="italic font-light text-gray-300">l'intensité du sport.</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Nous racontons le football amateur avec les codes esthétiques de l'élite professionnelle.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. ÉDITORIAL / NOTRE APPROCHE */}
      <section className="py-32 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Sticky Label */}
            <motion.div 
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <span className="text-sm uppercase tracking-widest font-semibold text-gray-400 border-b border-gray-200 pb-4 inline-block w-full">
                  L'Approche BKR
                </span>
                <div className="mt-8 hidden lg:block">
                  <img
                    src="https://i.imgur.com/hpQfzgY.png"
                    alt="BKR Studio Logo"
                    className="w-32 opacity-20 grayscale"
                  />
                </div>
              </div>
            </motion.div>

            {/* Editorial Content */}
            <motion.div 
              className="lg:col-span-9"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 
                variants={fadeUpVariant}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-12 leading-[1.1]"
              >
                Mon objectif est simple : raconter votre projet avec <span className="italic font-light text-gray-400">l'intensité et l'esthétisme</span> d'un club professionnel.
              </motion.h2>

              <div className="grid md:grid-cols-2 gap-12 md:gap-16 text-lg font-light leading-relaxed text-gray-600">
                <motion.div variants={fadeUpVariant} className="space-y-6">
                  <p>
                    Je m'appelle <strong className="font-semibold text-black">Aboubakar</strong>, fondateur de BKR Studio. Depuis plusieurs saisons, j'accompagne des clubs ambitieux dans la structuration de leur image et la production de contenus documentaires immersifs.
                  </p>
                  <p>
                    Aujourd'hui, les résultats sur le terrain ne suffisent plus pour exister. La manière dont vous présentez votre club au monde — sur les réseaux sociaux, auprès des sponsors, face aux jeunes talents — détermine votre envergure.
                  </p>
                </motion.div>
                
                <motion.div variants={fadeUpVariant} className="space-y-6">
                  <p>
                    Vestiaires, entraînements, académies, jours de match... Je m'immerge au plus près des joueurs et du staff technique pour capturer l'essence véritable de votre environnement.
                  </p>
                  <p>
                    Chaque production, qu'il s'agisse d'un highlight de match ou d'un documentaire sur l'académie, est une pièce maîtresse pour valoriser votre structure, attirer de nouveaux partenariats et marquer les esprits durablement.
                  </p>
                </motion.div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. LE MANIFESTE (Vision & Stats) */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-600 rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="mb-24 md:w-2/3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className="flex items-center gap-4 mb-8">
              <Target className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
              <span className="text-sm uppercase tracking-[0.2em] text-gray-400">La Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Devenir la référence francilienne en production visuelle sportive, en transformant les clubs amateurs en <span className="italic font-light text-gray-400">marques premium.</span>
            </h2>
          </motion.div>

          {/* Numbers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10" >
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="py-12 md:py-16 border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 flex flex-col items-center justify-center text-center px-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                <div className="text-6xl md:text-7xl font-bold tracking-tighter mb-4 flex items-baseline justify-center">
                  <AnimatedCounter from={0} to={item.value} />
                  <span className="text-4xl font-light text-gray-500">{item.suffix}</span>
                </div>
                <div className="text-sm md:text-base uppercase tracking-widest text-gray-400 font-medium">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NOS VALEURS (Sleek Whitespace Grid) */}
      <section className="py-32 md:py-48 bg-[#FAF9F6] relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Les piliers du <span className="italic font-light text-gray-500">studio.</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: Film,
                title: "Excellence Cinématographique",
                desc: "Rendu professionnel, étalonnage haut de gamme et narration visuelle. Nous utilisons les mêmes codes que les régies professionnelles pour chaque montage."
              },
              {
                icon: Users,
                title: "Partenariat de Proximité",
                desc: "Une immersion au cœur du vestiaire. Nous créons des relations de confiance absolue avec le staff et les joueurs pour capter l'authenticité du terrain."
              },
              {
                icon: Zap,
                title: "Résultats Mesurables",
                desc: "L'image n'est pas qu'esthétique. Chaque contenu est conçu pour générer de l'engagement social, attirer de nouveaux partenaires ou recruter des talents bruts."
              }
            ].map((val, idx) => (
              <motion.div
                key={idx}
                className="bg-white p-10 lg:p-14 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                <val.icon className="w-10 h-10 mb-8 text-black" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{val.title}</h3>
                <p className="font-light text-gray-600 leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TÉMOIGNAGE STAR */}
      <section className="py-32 md:py-40 bg-white border-t border-gray-100 overflow-hidden">
         <div className="max-w-5xl mx-auto px-4 md:px-8 relative text-center">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[15rem] leading-none text-gray-50 font-serif select-none -z-10 block">"</span>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="relative z-10"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-16 italic text-black max-w-4xl mx-auto">
                Un véritable professionnel qui comprend les puissants enjeux du sport. La qualité cinématographique et l'intensité de ses productions a littéralement transformé notre communication.
              </p>
              
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 rounded-full border border-gray-200 p-2 overflow-hidden bg-white shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/fr/a/ab/Logo_CS_Meaux_AF.svg" alt="CS Meaux" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">CS Meaux Academy</h4>
                  <p className="text-sm uppercase tracking-widest text-gray-500 mt-1">Club Partenaire Historique</p>
                </div>
              </div>
            </motion.div>
         </div>
      </section>

      {/* 6. CALL TO ACTION & LOCALISATION */}
      <section className="bg-black relative py-40 rounded-t-[4rem] text-white overflow-hidden z-20">
        <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <MapPin className="w-6 h-6 text-white" />
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Situés au cœur de<br/><span className="italic font-light text-gray-400">l'Île-de-France.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light mb-14 max-w-2xl mx-auto leading-relaxed">
              Nous accompagnons des dizaines de clubs de football de la région parisienne pour propulser leur image au niveau supérieur.
            </p>
            
            <button
              onClick={() => { trackEvent('Footer CTA', 'Click Discutons projet'); navigate('/contact'); }}
              className="px-12 py-5 bg-white text-black rounded-full font-medium sm:text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 mx-auto"
            >
              Échanger sur votre projet <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;