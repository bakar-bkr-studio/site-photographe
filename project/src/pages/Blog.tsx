import React, { useState } from 'react';
import { Calendar, User, ArrowRight, ArrowLeft, Film, Circle, Leaf, PlaneTakeoff, Building, Compass, Landmark, Home, Camera, Bot, Brain, Palette, Rocket, Target, Moon, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BlogPreview() {
  const [showArticle, setShowArticle] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: 'Les tendances photo mariage 2025',
      excerpt: 'Découvrez les dernières tendances en matière de photographie de mariage pour cette année.',
      image: 'https://i.imgur.com/UL2OYe4.jpeg',
      date: '15 Mars 2025',
      author: 'Sophie',
      category: 'Mariage',
      link: '#',
      fullContent: {
        title: "Les tendances photo de mariage 2024-2025",
        intro: "Le monde de la photographie de mariage évolue constamment, reflétant les aspirations des couples modernes. Pour 2024-2025, plusieurs tendances émergent, offrant des approches innovantes pour capturer l'essence de ce jour unique.",
        sections: [
          {
            title: "Photographie cinématographique",
            icon: <Film className="w-6 h-6" />,
            content: "Inspirée du septième art, cette tendance mise sur des compositions soignées, des jeux de lumière dramatiques et des mouvements fluides pour créer des images dignes d'un film. Elle vise à raconter une histoire visuelle captivante, pleine d'émotions et d'authenticité."
          },
          {
            title: "Retour du noir et blanc",
            icon: <Circle className="w-6 h-6" />,
            content: "Le noir et blanc fait un retour remarqué, apportant une touche intemporelle et élégante aux clichés. Cette esthétique met en valeur les émotions, les textures et les contrastes, offrant des images à la fois artistiques et profondes."
          },
          {
            title: "Mariages éco-responsables",
            icon: <Leaf className="w-6 h-6" />,
            content: "La conscience écologique influence également la photographie de mariage. Les couples privilégient des lieux naturels, des décors durables et des approches minimalistes, permettant de capturer des moments authentiques dans des environnements respectueux de l'environnement."
          },
          {
            title: "Photographie documentaire",
            icon: <Camera className="w-6 h-6" />,
            content: "Cette approche vise à capturer les moments spontanés et sincères, sans mise en scène. Le photographe devient un observateur discret, immortalisant les émotions brutes et les interactions naturelles tout au long de la journée."
          },
          {
            title: "Vues aériennes et perspectives innovantes",
            icon: <PlaneTakeoff className="w-6 h-6" />,
            content: "L'utilisation de drones et de techniques innovantes permet de capturer des perspectives uniques, mettant en valeur les lieux de cérémonie et offrant des souvenirs spectaculaires. Ces vues aériennes ajoutent une dimension époustouflante à l'album de mariage."
          }
        ],
        conclusion: "En tant que photographe basé à Meaux, je m'engage à intégrer ces tendances pour offrir à chaque couple des souvenirs uniques et personnalisés. Si vous planifiez votre mariage en 2025 et souhaitez une approche moderne et authentique, n'hésitez pas à me contacter pour discuter de votre projet."
      }
    },
    {
      id: 4,
      title: 'Les meilleurs spots photo à Meaux',
      excerpt: 'Découvrez les endroits les plus photogéniques de la ville de Meaux et ses environs.',
      image: 'https://i.imgur.com/EkHlbcb.jpeg',
      date: '1 Mars 2025',
      author: 'Bakar',
      category: 'Inspiration',
      link: '#',
      fullContent: {
        title: "Les meilleurs spots photo à Meaux et ses environs",
        intro: "Meaux, ville d'art et d'histoire en Île-de-France, offre une multitude de lieux photogéniques. Des ruelles médiévales aux vastes espaces naturels, découvrez les spots incontournables pour capturer des images mémorables.",
        sections: [
          {
            title: "La Cité Épiscopale de Meaux",
            icon: <Building className="w-6 h-6" />,
            content: "Au cœur de Meaux, la Cathédrale Saint-Étienne, chef-d'œuvre gothique, domine la ville. Ses façades sculptées et ses vitraux colorés offrent un cadre majestueux pour des clichés architecturaux. Le Jardin Bossuet, attenant, avec ses allées symétriques et ses parterres fleuris, est idéal pour des portraits élégants."
          },
          {
            title: "Le Parc du Pâtis",
            icon: <Leaf className="w-6 h-6" />,
            content: "Plus grand parc urbain d'Île-de-France, le Parc du Pâtis s'étend sur plus de 150 hectares. Ses sentiers bordés d'arbres, ses plans d'eau et ses prairies offrent une diversité de décors naturels pour des séances photo en plein air."
          },
          {
            title: "Les bords de Marne",
            icon: <Compass className="w-6 h-6" />,
            content: "Les rives de la Marne, avec leurs berges arborées et leurs reflets changeants, sont propices à des prises de vue paisibles. Que ce soit pour des photos de paysage ou des scènes de vie, ce cadre naturel apporte une touche de sérénité à vos clichés."
          },
          {
            title: "Le Musée de la Grande Guerre",
            icon: <Landmark className="w-6 h-6" />,
            content: "Avec son architecture contemporaine et ses expositions en plein air, le Musée de la Grande Guerre propose un contraste intéressant entre modernité et mémoire historique. Les espaces autour du musée sont propices à des compositions originales."
          },
          {
            title: "Le Jardin Bossuet",
            icon: <Leaf className="w-6 h-6" />,
            content: "Situé à proximité de la cathédrale, le Jardin Bossuet est un jardin à la française offrant des allées symétriques, des parterres fleuris et des perspectives harmonieuses. C'est un cadre idéal pour des portraits élégants ou des photos de couple romantiques."
          }
        ],
        extendedSections: [
          {
            title: "Château de Champs-sur-Marne",
            icon: <Home className="w-6 h-6" />,
            content: "À environ 30 km de Meaux, ce château du XVIIIe siècle est entouré de jardins à la française. Son architecture élégante et ses allées symétriques offrent un cadre princier pour des séances photo romantiques."
          },
          {
            title: "Parc de Rentilly à Bussy-Saint-Martin",
            icon: <Leaf className="w-6 h-6" />,
            content: "Ce parc de 120 hectares combine nature et art contemporain. Le château de Rentilly, avec sa façade en miroir, et les vastes espaces verts offrent des décors variés, particulièrement magnifiques en automne."
          },
          {
            title: "Forêt de Fontainebleau – Sables du Cul de Chien",
            icon: <Compass className="w-6 h-6" />,
            content: "À environ 65 km de Meaux, ce site naturel est célèbre pour ses formations rocheuses et ses étendues de sable fin. Un lieu unique pour des photos en pleine nature, offrant des décors sauvages et dépaysants."
          },
          {
            title: "Parc naturel de Coupvray",
            icon: <Leaf className="w-6 h-6" />,
            content: "Ce parc champêtre est idéal pour des séances photo en couple. Ses sentiers verdoyants, ses plans d'eau et ses paysages bucoliques créent une atmosphère intime et romantique."
          }
        ],
        conclusion: "Que vous soyez photographe professionnel ou amateur passionné, Meaux et ses environs offrent une richesse de décors pour exprimer votre créativité. N'hésitez pas à explorer ces lieux et à partager vos plus beaux clichés."
      }
    },
    {
      id: 5,
      title: 'Photographes vs IA : menace ou opportunité ?',
      excerpt: 'L\'intelligence artificielle est-elle en train de remplacer les créateurs visuels ? Décryptage.',
      image: 'https://i.imgur.com/tS8LLre.jpeg',
      date: '25 Février 2025',
      author: 'Bakar',
      category: 'Réflexion',
      link: '#',
      fullContent: {
        title: "Photographes vs IA : menace ou opportunité ?",
        intro: "L'intelligence artificielle (IA) transforme le paysage de la photographie. Entre automatisation des tâches et génération d'images, elle suscite autant d'enthousiasme que d'inquiétudes. Alors, l'IA est-elle une menace pour les photographes ou une opportunité à saisir ?",
        sections: [
          {
            title: "L'IA : une alliée pour les photographes",
            icon: <Camera className="w-6 h-6" />,
            content: "De nombreux outils basés sur l'IA facilitent le travail des photographes. Des logiciels comme Adobe Photoshop et Lightroom intègrent des fonctionnalités automatisées pour la retouche, la suppression d'éléments indésirables ou l'amélioration de la netteté. Certains appareils photo utilisent également l'IA pour améliorer l'autofocus, détecter les visages et prédire les mouvements des sujets. Ces avancées permettent aux photographes de gagner du temps en post-production et de se concentrer davantage sur la créativité et la relation avec leurs clients."
          },
          {
            title: "L'IA générative : une concurrence pour certains secteurs",
            icon: <Bot className="w-6 h-6" />,
            content: "L'émergence de l'IA générative, capable de créer des images réalistes à partir de simples descriptions textuelles, pose des défis pour certains domaines de la photographie, notamment la photographie de stock. Des outils comme Midjourney ou DALL·E peuvent produire des milliards d'images par an, surpassant la productivité des photographes traditionnels. Certaines agences intègrent désormais ces images générées par IA dans leurs catalogues, obligeant les photographes à se démarquer en proposant des images de qualité supérieure ou en se concentrant sur des niches spécifiques."
          },
          {
            title: "L'humain au cœur de la photographie",
            icon: <Brain className="w-6 h-6" />,
            content: "Malgré les avancées de l'IA, la sensibilité artistique, l'émotion et la capacité à raconter une histoire restent des attributs propres aux photographes humains. L'IA peut reproduire des styles, mais elle ne peut pas remplacer l'expérience vécue, l'interaction avec le sujet ou l'intuition du photographe. Des photographes renommés, comme Annie Leibovitz, voient l'IA non pas comme une menace, mais comme un outil supplémentaire pour enrichir leur travail."
          },
          {
            title: "S'adapter et innover",
            icon: <Rocket className="w-6 h-6" />,
            content: "Plutôt que de craindre l'IA, les photographes peuvent l'adopter pour améliorer leur efficacité et explorer de nouvelles avenues créatives. En combinant leur expertise avec les capacités de l'IA, ils peuvent offrir des services innovants et personnalisés à leurs clients."
          }
        ],
        conclusion: "En conclusion, l'IA représente à la fois un défi et une opportunité pour les photographes. Ceux qui sauront s'adapter et intégrer ces nouvelles technologies tout en préservant leur authenticité et leur créativité continueront à prospérer dans un environnement en constante évolution."
      }
    },
    {
      id: 6,
      title: 'Les bases de la photo pour débutant',
      excerpt: 'Un guide pratique pour comprendre les réglages de base, la lumière et la composition.',
      image: 'https://i.imgur.com/PPAfJfo.png',
      date: '20 Février 2025',
      author: 'Bakar',
      category: 'Débutant',
      link: '#',
      fullContent: {
        title: "Les bases de la photo pour débutant",
        intro: "La photographie est un art accessible qui combine technique et créativité. Pour les débutants, maîtriser quelques principes fondamentaux peut considérablement améliorer la qualité des images. Voici un guide pratique pour vous aider à explorer différents types de photographie.",
        sections: [
          {
            title: "Photographier le sport (ex. : football)",
            icon: <Target className="w-6 h-6" />,
            content: "La photographie sportive exige de figer l'action rapide. Pour cela : Utilisez une vitesse d'obturation rapide, au minimum 1/500 s, voire 1/1000 s pour des sports comme le football, afin d'éviter le flou de mouvement. Privilégiez une grande ouverture (petit chiffre f/) pour laisser entrer plus de lumière et obtenir une vitesse d'obturation plus rapide. Ajustez la sensibilité ISO en fonction de la lumière disponible, en gardant à l'esprit qu'une valeur ISO plus élevée peut introduire du bruit. Un téléobjectif (200 mm ou plus) est souvent nécessaire pour capturer l'action à distance. Utilisez le mode autofocus continu (AI Servo ou AF-C) pour suivre les sujets en mouvement."
          },
          {
            title: "Photographier de nuit",
            icon: <Moon className="w-6 h-6" />,
            content: "La photographie de nuit présente des défis uniques en raison de la faible luminosité. Voici quelques conseils : Un trépied est indispensable pour stabiliser l'appareil lors de longues expositions. Utilisez une grande ouverture (f/2.8 ou plus) pour capter davantage de lumière. Ralentissez la vitesse d'obturation (par exemple 1/25 s ou plus lent) pour permettre à plus de lumière d'atteindre le capteur. Augmentez la sensibilité ISO, mais attention au bruit numérique. En mode manuel, faites la mise au point sur une source de lumière ou utilisez la mise au point automatique si votre appareil le permet. N'hésitez pas à tester différentes combinaisons de réglages pour obtenir l'effet désiré."
          },
          {
            title: "Photographier un mariage",
            icon: <Heart className="w-6 h-6" />,
            content: "La photographie de mariage combine portrait, reportage et gestion d'événements. Voici quelques points essentiels : Rencontrez les mariés en amont pour comprendre leurs attentes et établir une \"shot list\" des moments clés à capturer. Prévoyez un équipement fiable, avec des batteries et cartes mémoire de rechange. Un flash externe peut être utile pour les lieux peu éclairés. Adoptez une approche discrète pour capturer des moments naturels et spontanés. Planifiez les photos de groupe à l'avance pour gagner du temps et éviter le stress. Soyez attentif aux détails et aux émotions pour raconter l'histoire unique de chaque couple."
          }
        ],
        conclusion: "En maîtrisant ces bases et en adaptant vos techniques aux différents types de photographie, vous développerez votre œil artistique et votre confiance en tant que photographe. N'oubliez pas que la pratique régulière et l'analyse de vos clichés sont essentielles pour progresser."
      }
    }
  ];

  const openArticle = (post) => {
    setSelectedArticle(post);
    setShowArticle(true);
    window.scrollTo(0, 0);
  };

  const closeArticle = () => {
    setShowArticle(false);
    setSelectedArticle(null);
  };

  if (showArticle && selectedArticle) {
    return (
      <div className="min-h-screen py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <button 
            onClick={closeArticle}
            className="flex items-center mb-8 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour au blog
          </button>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-80 overflow-hidden relative">
              <img 
                src={selectedArticle.image}
                alt={selectedArticle.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold px-6 text-center">
                  {selectedArticle.fullContent.title}
                </h1>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center text-sm text-gray-500 mb-8">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{selectedArticle.date}</span>
                <User className="h-4 w-4 ml-6 mr-2" />
                <span>{selectedArticle.author}</span>
                <span className="ml-6 bg-black text-white px-3 py-1 rounded-full text-sm">
                  {selectedArticle.category}
                </span>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-xl text-gray-700 mb-12 italic">
                  {selectedArticle.fullContent.intro}
                </p>
                
                <div className="space-y-12">
                  {selectedArticle.fullContent.sections.map((section, index) => (
                    <div key={index} className="flex">
                      <div className="mr-6 mt-1 flex-shrink-0 bg-black text-white p-3 rounded-full">
                        {section.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-4">
                          {index + 1}. {section.title}
                        </h2>
                        <p className="text-gray-700">{section.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {selectedArticle.fullContent.extendedSections && (
                  <>
                    <h2 className="text-2xl font-bold mt-16 mb-8 text-center">
                      Spots photo aux alentours de Meaux
                    </h2>
                    <div className="space-y-12">
                      {selectedArticle.fullContent.extendedSections.map((section, index) => (
                        <div key={index} className="flex">
                          <div className="mr-6 mt-1 flex-shrink-0 bg-black text-white p-3 rounded-full">
                            {section.icon}
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold mb-4">
                              {selectedArticle.fullContent.sections.length + index + 1}. {section.title}
                            </h2>
                            <p className="text-gray-700">{section.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
                
                <div className="mt-16 p-6 bg-gray-100 rounded-lg border-l-4 border-black">
                  <p className="text-lg">
                    {selectedArticle.fullContent.conclusion}
                  </p>
                </div>
                
                {selectedArticle.id === 1 && (
                  <div className="mt-16 flex justify-center">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Me contacter pour votre mariage
                    </button>
                  </div>
                )}
                
                {selectedArticle.id === 4 && (
                  <div className="mt-16 flex justify-center">
                    <button 
                      onClick={() => navigate('/services')}
                      className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Réserver une séance photo
                    </button>
                  </div>
                )}
                
                {selectedArticle.id === 6 && (
                  <div className="mt-16 flex justify-center">
                    <button 
                      onClick={() => navigate('/contact')}
                      className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      S'inscrire aux ateliers pour débutants
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Notre Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils, astuces et actualités du monde de la photographie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <a href="#" onClick={(e) => {
                e.preventDefault();
                openArticle(post);
              }}>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
              </a>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-6">{post.excerpt}</p>
                <a 
                  href="#" 
                  className="flex items-center text-black font-medium hover:text-gray-700 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    openArticle(post);
                  }}
                >
                  Lire la suite
                  <ArrowRight className="h-4 w-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}