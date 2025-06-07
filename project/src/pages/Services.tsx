import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Users, Heart, Building, Calendar, Clock, Film, Package, Gift } from 'lucide-react';
import BookingModal from '../components/BookingModal';

interface ServicePackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
}

const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<{ name: string; price: string } | null>(null);
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');

  const handleBooking = (packageName: string, packagePrice: string) => {
    setSelectedPackage({ name: packageName, price: packagePrice });
    setModalOpen(true);
  };

  const photoServices = [
    {
      icon: Heart,
      title: 'Mariage',
      description: "Immortalisez chaque moment précieux de votre journée spéciale, des préparatifs jusqu'à la soirée.",
      packages: [
        {
          name: 'Essentiel à partir de',
          price: '450€',
          duration: '8 heures',
          features: [
            'Reportage photo complet',
            "Préparatifs jusqu'au vin d'honneur",
            '400+ photos retouchées',
            'Galerie privée en ligne',
            'Clé USB haute résolution'
          ]
        },
        {
          name: 'Premium à partir de',
          price: '900€',
          duration: '12 heures',
          features: [
            'Reportage photo complet',
            'Séance couple avant mariage',
            "Préparatifs jusqu'à la soirée",
            '600+ photos retouchées avec choix de la retouche',
            'Album photo luxe 30x30cm',
            'Galerie privée en ligne',
            'Clé USB haute résolution'
          ]
        }
      ]
    },
    {
      icon: Users,
      title: 'Portrait & Famille',
      description: "Des séances photo personnalisées pour capturer l'essence de votre personnalité ou les liens familiaux.",
      packages: [
        {
          name: 'Découverte à partir de',
          price: '150€',
          duration: '1h30',
          features: [
            'Séance en studio ou extérieur',
            '20 photos retouchées',
            'Galerie privée en ligne',
            'Fichiers HD'
          ]
        },
        {
          name: 'Famille à partir de',
          price: '200€',
          duration: '2h',
          features: [
            'Séance en studio ou extérieur',
            "Jusqu'à 6 personnes",
            '25 photos retouchées avec choix de la retouche',
            'Galerie privée en ligne',
            'Fichiers HD'
          ]
        }
      ]
    },
    {
      icon: Building,
      title: 'Corporate',
      description: 'Photos professionnelles pour entreprises : portraits corporate, événements, locaux et produits.',
      packages: [
        {
          name: 'Business à partir de',
          price: '300€',
          duration: '4 heures',
          features: [
            "Photos d'équipe",
            'Portraits individuels',
            "Photos d'ambiance",
            '50 photos retouchées',
            "Droits d'utilisation commerciale",
            'Livraison express (48h)'
          ]
        },
        {
          name: 'Événementiel à partir de',
          price: '450€',
          duration: '1 journée',
          features: [
            'Couverture événement complet',
            "Photos d'ambiance",
            'Portraits sur place',
            '100+ photos retouchées',
            'Galerie privée en ligne',
            "Droits d'utilisation commerciale"
          ]
        }
      ]
    },
    {
      icon: Calendar,
      title: 'Événements',
      description: 'Capturez l\'intensité et l\'émotion de vos événements sportifs et autres avec des photos professionnelles dynamiques.',
      packages: [
        {
          name: 'Sport à partir de',
          price: '70€',
          duration: '1h30',
          features: [
            'Couverture complète du match',
            'Photos d\'action haute vitesse',
            'Photos d\'équipes',
            'Galerie en ligne avec téléchargement',
            'Livraison express pour communication',
            'Jusqu\'à 200 photos retouchées'
          ]
        },
        {
          name: 'Festival & Forum',
          price: '150€',
          duration: '1 jour',
          features: [
            'Couverture complète de l\'événement',
            'Photos des performances',
            'Photos d\'ambiance',
            'Portraits des intervenants',
            'Photos du public',
            'Galerie en ligne',
            'Jusqu\'à 150 photos',
            'Livraison rapide pour communication'
          ]
        }
      ]
    }
  ];

  const videoServices = [
    {
      icon: Film,
      title: 'Film de Mariage',
      description: "Des films de mariage cinématiques qui racontent votre histoire d'amour.",
      packages: [
        {
          name: 'Film Court à partir de',
          price: '700€',
          duration: '8 heures de tournage',
          features: [
            'Film de 5-7 minutes',
            'Préparatifs aux premiers pas de danse',
            'Drone (selon conditions)',
            'Musiques licenciées',
            'Format 4K',
            'Livraison sous 4 semaines'
          ]
        },
        {
          name: 'Film Complet à partir de',
          price: '1100€',
          duration: '12 heures de tournage',
          features: [
            'Film de 15-20 minutes',
            'Teaser de 3 minutes offert',
            'Couverture complète',
            'Drone (selon conditions)',
            'Musiques licenciées',
            'Format 4K',
            'Livraison sous 1 mois et demi'
          ]
        }
      ]
    },
    {
      icon: Building,
      title: 'Vidéo Corporate',
      description: 'Films professionnels pour promouvoir votre entreprise et vos services.',
      packages: [
        {
          name: 'Présentation à partir de',
          price: '600€',
          duration: '1 journée de tournage',
          features: [
            'Vidéo de 2-3 minutes',
            'Interviews',
            "Plans d'entreprise",
            'Musique licenciée',
            'Format 4K',
            'Livraison sous 3 semaines'
          ]
        },
        {
          name: 'Premium à partir de',
          price: '2000€',
          duration: '2 jours de tournage',
          features: [
            'Vidéo principale de 3-7 minutes',
            '3 versions courtes pour réseaux sociaux',
            'Drone (selon conditions)',
            'Motion design',
            'Format 4K',
            'Livraison sous 4 semaines'
          ]
        }
      ]
    },
    {
      icon: Calendar,
      title: 'Événementiel',
      description: "Captation vidéo professionnelle de vos événements d'entreprise ou privés.",
      packages: [
        {
          name: 'Conférence à partir de',
          price: '400€',
          duration: '1 journée',
          features: [
            'Captation multi-caméras',
            'Son professionnel',
            'Montage simple',
            'Format HD ou 4K',
            'Livraison sous 2 semaines'
          ]
        },
        {
          name: 'Événement Complet à partir de',
          price: '700€',
          duration: '1 journée',
          features: [
            'Captation multi-caméras',
            'Film résumé de 5-7 minutes',
            'Interviews sur place',
            'Son professionnel',
            'Format 4K',
            'Livraison sous 3 semaines'
          ]
        }
      ]
    },
    {
      icon: Film,
      title: 'Montage Vidéo',
      description: "Service de montage vidéo professionnel pour tous vos projets.",
      packages: [
        {
          name: 'Montage Simple',
          price: '30€/heure',
          duration: 'Variable selon projet',
          features: [
            'Montage de base',
            'Corrections colorimétriques',
            'Transitions professionnelles',
            'Ajout de musique',
            'Format au choix',
            'Révisions incluses'
          ]
        },
        {
          name: 'Montage Avancé',
          price: '30€/heure',
          duration: 'Variable selon projet',
          features: [
            'Montage complexe',
            'Étalonnage avancé',
            'Effets spéciaux',
            'Motion design',
            'Sound design',
            'Format au choix',
            'Révisions illimitées'
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des prestations sur mesure pour capturer vos moments les plus précieux. Me déplace sur la ville de Meaux (Seine et Marne) et plus largement en Ile de France, ainsi que à Reims dans le Grand-Est
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveTab('photo')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-colors ${
                activeTab === 'photo'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Camera className="h-5 w-5" />
              Photographie
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-colors ${
                activeTab === 'video'
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <Video className="h-5 w-5" />
              Vidéo
            </button>
          </div>
        </motion.div>

        {activeTab === 'video' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-12"
          >
            <h2 className="text-lg font-semibold text-amber-800 mb-2">INFORMATION IMPORTANTE</h2>
            <p className="text-amber-700">
              Les tarifs affichés pour nos services vidéo sont donnés à titre indicatif. Les prix définitifs peuvent varier à la hausse ou à la baisse selon :
            </p>
            <ul className="list-disc list-inside mt-2 text-amber-700">
              <li>Le nombre d\'heures de tournage requises</li>
              <li>La complexité du montage</li>
              <li>Les spécificités de votre projet</li>
            </ul>
            <p className="mt-2 text-amber-700">
              Nous vous invitons à nous contacter pour obtenir un devis personnalisé adapté à vos besoins.
            </p>
          </motion.div>
        )}

        <div className="grid gap-8">
          {(activeTab === 'photo' ? photoServices : videoServices).map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <service.icon className="h-12 w-12 text-black" />
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {service.packages.map((pkg, pkgIndex) => (
                    <div key={pkgIndex} className="border rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold">{pkg.name}</h4>
                        <span className="text-2xl font-bold">{pkg.price}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{pkg.duration}</span>
                      </div>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Package className="h-4 w-4 mr-3 text-gray-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleBooking(pkg.name, pkg.price)}
                        className="mt-6 w-full btn btn-primary transition-all duration-200 active:bg-gray-900 active:scale-[0.98]"
                      >
                        Demande de réservation
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 py-12 rounded-xl text-center shadow-md mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-4">Forfaits Sur Mesure</h3>
              <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                Vous avez un projet spécifique ? Contactez-moi pour un devis personnalisé, adapté à vos besoins créatifs :
                événements, tournages, reportages d\'entreprise ou projets artistiques.
              </p>
              <button
                onClick={() => {
                  setSelectedPackage({ name: 'Forfait sur mesure', price: '0€' });
                  setModalOpen(true);
                }}
                className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Demander un devis
              </button>
            </motion.div>
          </div>
        </motion.div>

        {selectedPackage && (
          <BookingModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            packageName={selectedPackage.name}
            packagePrice={selectedPackage.price}
          />
        )}
      </div>
    </div>
  );
};

export default Services;