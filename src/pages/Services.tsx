import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Zap, Users, ArrowRight, Activity, Star, Check } from 'lucide-react';
import BookingModal from '../components/BookingModal';
import { trackEvent } from '../hooks/useAnalytics';

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string } | null>(null);

  const handleQuote = (packageName: string) => {
    trackEvent('Services', `Click Devis - ${packageName}`);
    setSelectedPackage({ name: packageName });
    setModalOpen(true);
  };

  const flagshipPackages = [
    {
      icon: Film,
      title: 'Pack Matchday',
      price: 'À partir de 80€',
      tagline: 'Couverture immédiate',
      description: 'Pour valoriser votre prestation sur le terrain et générer du contenu percutant instantanément.',
      features: [
        'Couverture photo & vidéo du match',
        'Highlight officiel (2-3 minutes)',
        '3-4 reels réseaux sociaux exclusifs',
        'Livraison ultra-rapide (24-48h)'
      ],
      highlight: false
    },
    {
      icon: Zap,
      title: 'Pack Saison',
      price: 'Sur devis, dès 350€/mois',
      tagline: 'L\'Immersion Totale',
      description: 'Suivi régulier de votre club avec contenus réseaux et couvertures immersives des moments clés.',
      features: [
        '1 production vidéo documentaire mensuelle',
        'Couverture "Inside" des 2 matchs cruciaux',
        'Contenus réseaux sociaux réguliers',
        'Immersion académie, entraînements, vestiaire',
        'Adaptation parfaite Instagram / TikTok'
      ],
      highlight: true
    },
    {
      icon: Users,
      title: 'Branding Club',
      price: 'À partir de 800€',
      tagline: 'Structuration Visuelle',
      description: 'L\'identité de votre projet. Les contenus fondateurs pour asseoir votre communication institutionnelle.',
      features: [
        'Film manifesto du club (3-5 minutes)',
        'Présentation premium du staff et projet',
        'Storytelling complet de la saison',
        'Pack graphique et templates réseaux',
        'Charte de production personnalisée'
      ],
      highlight: false
    }
  ];

  const secondaryPackages = [
    {
      icon: Activity,
      title: 'Sports Multiples',
      price: 'À partir de 150€',
      tagline: 'Couverture Omnisports',
      description: 'L\'intensité BKR Studio appliquée aux autres disciplines sportives : rugby, basket, athlétisme, etc.',
      features: [
        'Couverture ciblée photo & vidéo',
        'Mise en valeur des athlètes & de l\'effort',
        'Livraison rapide post-événement'
      ]
    },
    {
      icon: Star,
      title: 'Événementiel & Spécial',
      price: 'Sur devis',
      tagline: 'Projets Personnalisés',
      description: 'Corporate, remise de trophées, galas, événements associatifs.',
      features: [
        'Étude millimétrée de votre projet',
        'Couverture VIP sur-mesure',
        'Livraison très haute définition'
      ]
    }
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
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black pb-0">

      {/* 1. HERO SECTION (Cinematic Entry) */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-black flex items-center justify-center">
        {/* Ken Burns effect */}
        <motion.div
           className="absolute inset-0"
           initial={{ scale: 1.15 }}
           animate={{ scale: 1 }}
           transition={{ duration: 15, ease: "easeOut" }}
        >
          <img
            src="https://i.imgur.com/DqTM7wQ.jpeg"
            alt="BKR Studio Production Football"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/80" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUpVariant} className="w-12 h-[1px] bg-white/50 mb-8" />
            <motion.p variants={fadeUpVariant} className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] mb-6 font-medium">
              Notre expertise
            </motion.p>
            
            <motion.h1 variants={fadeUpVariant} className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[1] max-w-4xl">
              Façonnez <br/><span className="italic font-light text-gray-300">votre légende.</span>
            </motion.h1>
            
            <motion.p variants={fadeUpVariant} className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Des solutions de production premium conçues exclusivement pour les clubs exigeants.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* 2. FLAGSHIP PACKAGES (Deep Dark Theme) */}
      <section className="py-32 relative bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-20"
          >
            <div className="flex items-center gap-4 mb-6">
              <Film className="w-6 h-6 text-gray-500" strokeWidth={1.5} />
              <span className="text-sm uppercase tracking-[0.2em] text-gray-500">L'Élite du Football</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Nos formats <span className="italic font-light text-gray-400">Signature.</span>
            </h2>
          </motion.div>

          {/* Luxury Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {flagshipPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col p-1 rounded-3xl overflow-hidden group ${pkg.highlight ? '' : 'bg-white/5 border border-white/10'}`}
              >
                {/* Highlight Glow background */}
                {pkg.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 opacity-100 group-hover:opacity-75 transition-opacity duration-500" />
                )}

                <div className={`relative h-full flex flex-col p-10 rounded-[1.4rem] ${pkg.highlight ? 'bg-[#111] border-0' : 'bg-transparent'}`}>
                  {pkg.highlight && (
                    <div className="absolute top-0 right-0 p-4">
                      <span className="bg-white text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                        Recommandé
                      </span>
                    </div>
                  )}

                  <pkg.icon className={`w-12 h-12 mb-8 ${pkg.highlight ? 'text-white' : 'text-gray-400'}`} strokeWidth={1} />
                  
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{pkg.title}</h3>
                  <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">{pkg.tagline}</p>
                  
                  <div className="mb-8">
                    <span className="text-xl font-light text-gray-300">
                      {pkg.price}
                    </span>
                  </div>

                  <p className="text-gray-400 font-light leading-relaxed mb-10 min-h-[80px]">
                    {pkg.description}
                  </p>

                  <div className="mb-12 flex-grow">
                    <div className="w-full h-px bg-white/10 mb-8" />
                    <ul className="space-y-4">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-4">
                          <Check className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-gray-300 font-light text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleQuote(pkg.title)}
                    className={`w-full py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-3 ${
                      pkg.highlight 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    Demander le détail <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECONDARY PACKAGES (White / Light Grey Section) */}
      <section className="py-32 bg-[#FAF9F6] text-black rounded-t-[4rem] relative z-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Autre terrain,<br/><span className="italic font-light text-gray-500">même exigence.</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {secondaryPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-100 rounded-[2rem] p-10 lg:p-12 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col md:flex-row gap-8 lg:gap-12 group"
              >
                <div className="flex-1">
                  <pkg.icon className="w-10 h-10 mb-6 text-black" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{pkg.title}</h3>
                  <div className="mb-6 inline-block bg-gray-100 px-4 py-1.5 rounded-full text-sm font-medium">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 font-light leading-relaxed mb-8">
                    {pkg.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-2" />
                        <span className="text-gray-700 text-sm font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex md:flex-col justify-end">
                  <button
                    onClick={() => handleQuote(pkg.title)}
                    className="group-hover:bg-black group-hover:text-white bg-gray-50 text-black border border-gray-200 p-4 md:p-6 rounded-full transition-colors duration-500 flex items-center justify-center shrink-0"
                    aria-label="Contacter pour un devis"
                  >
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" strokeWidth={1.5} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION & CONTACT (Dark Footer) */}
      <section className="bg-black relative py-40 text-white overflow-hidden z-20">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-[100%] blur-[120px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Un projet <br/><span className="italic font-light text-gray-400">sur-mesure ?</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light mb-12 max-w-xl mx-auto leading-relaxed">
              Considérez-nous comme le réalisateur de votre saison. Échangeons sur vos enjeux pour une offre qui vous ressemble.
            </p>
            
            <button
              onClick={() => {
                trackEvent('Footer CTA', 'Click Devis Personnalisé');
                setSelectedPackage({ name: 'Devis personnalisé' });
                setModalOpen(true);
              }}
              className="px-12 py-5 bg-white text-black rounded-full font-medium sm:text-lg hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 mx-auto"
            >
              Établir un devis personnalisé <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPackage && (
          <BookingModal
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
              setTimeout(() => setSelectedPackage(null), 300); // Allow exit animation
            }}
            packageName={selectedPackage.name}
            packagePrice=""
          />
        )}
      </AnimatePresence>

    </div>
  );
};

export default Services;