import { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, Zap, Users, ArrowRight, Activity, Star } from 'lucide-react';
import BookingModal from '../components/BookingModal';


const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string } | null>(null);

  const handleQuote = (packageName: string) => {
    setSelectedPackage({ name: packageName });
    setModalOpen(true);
  };

  const packages = [
    {
      icon: Film,
      title: 'Pack Matchday',
      price: 'À partir de 80€',
      tagline: 'Couverture complète d\'un match',
      description: 'Pour valoriser votre prestation sur le terrain et générer du contenu immédiat.',
      features: [
        'Couverture photo & vidéo du match',
        'Highlight officiel (2-3 minutes)',
        '3-4 reels réseaux sociaux',
        'Livraison rapide (24-48h)'
      ]
    },
    {
      icon: Zap,
      title: 'Pack Saison',
      price: 'À partir de 350€/mois',
      tagline: 'Production mensuelle continue',
      description: 'Suivi régulier de votre club avec contenus réseaux et couvertures matchs clés.',
      features: [
        '1 production vidéo mensuelle',
        'Couverture des 2 matchs clés par mois',
        'Contenus réseaux sociaux réguliers',
        'Immersion académique (entraînements, vestiaire)',
        'Adaptation Instagram / TikTok / YouTube'
      ]
    },
    {
      icon: Users,
      title: 'Pack Branding Club',
      price: 'À partir de 800€',
      tagline: 'Structuration de votre image',
      description: 'Identité visuelle et contenus fondateurs pour votre communication d\'image.',
      features: [
        'Vidéo identité club (3-5 minutes)',
        'Présentation staff et projet sportif',
        'Storytelling saison',
        'Templates réseaux sociaux',
        'Charte de production personnalisée'
      ]
    },
    {
      icon: Activity,
      title: 'Pack Sports (hors football)',
      price: 'À partir de 150€',
      tagline: 'Couverture multi-sports',
      description: 'Couverture photo et vidéo pour autres disciplines sportives (rugby, athlétisme, équitation, etc.)',
      features: [
        'Couverture photo & vidéo',
        'Formats adaptés aux réseaux sociaux',
        'Mise en valeur des athlètes',
        'Livraison rapide post-événement'
      ]
    },
    {
      icon: Star,
      title: 'Pack Événementiel & Projets spéciaux',
      price: 'Sur devis',
      tagline: 'Événements & Corporate',
      description: 'Mariage, événements, concerts, corporate, projets personnalisés.',
      features: [
        'Étude personnalisée de votre projet',
        'Couverture sur-mesure (photo/vidéo)',
        'Livraison en très haute qualité',
        'Cession des droits d\'image détaillée'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-black mb-20">
        <img
          src="https://i.imgur.com/DqTM7wQ.jpeg"
          alt="Production Football"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos offres pour clubs ambitieux
            </h1>
            <p className="text-xl text-white/90">
              Des solutions complètes pour structurer votre image et amplifier votre visibilité
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-black hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <pkg.icon className="h-10 w-10 text-black" />
                </div>

                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="mb-4">
                  <span className="inline-block font-semibold text-sm text-black bg-gray-100 px-4 py-1.5 rounded-full">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-sm font-semibold text-gray-600 mb-2">{pkg.tagline}</p>
                <p className="text-gray-700 mb-6">{pkg.description}</p>

                <div className="bg-gray-50 rounded-lg p-6 mb-8 flex-grow">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-black font-bold text-lg">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleQuote(pkg.title)}
                  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors mt-auto flex items-center justify-center gap-2"
                >
                  Demander un devis
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gradient-to-br from-black to-gray-900 text-white p-12 rounded-xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Un projet spécifique ?</h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Nos offres peuvent être adaptées selon vos besoins. Parlons de votre club, vos objectifs et comment nous pouvons structurer votre communication visuelle.
          </p>
          <button
            onClick={() => {
              setSelectedPackage({ name: 'Devis personnalisé' });
              setModalOpen(true);
            }}
            className="inline-flex items-center bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Demander un devis personnalisé
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </motion.div>

        {selectedPackage && (
          <BookingModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            packageName={selectedPackage.name}
            packagePrice=""
          />
        )}
      </div>
    </div>
  );
};

export default Services;