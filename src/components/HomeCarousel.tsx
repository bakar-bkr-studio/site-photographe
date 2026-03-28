import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackEvent } from '../hooks/useAnalytics';

const carouselImages = [
  { id: '1', url: 'https://i.imgur.com/XLh5Die.jpeg', title: 'Action intense', category: 'Matchday' },
  { id: '2', url: 'https://i.imgur.com/k1cPeJG.jpeg', title: 'Focus terrain', category: 'Matchday' },
  { id: '3', url: 'https://i.imgur.com/ZWk9tSc.jpeg', title: 'Émotion du jeu', category: 'Matchday' },
  { id: '4', url: 'https://i.imgur.com/kAYWLmo.jpeg', title: 'Performance athlétique', category: 'Matchday' },
  { id: '5', url: 'https://i.imgur.com/vQL4RkK.jpeg', title: 'Détail technique', category: 'Matchday' },
  { id: '6', url: 'https://i.imgur.com/EUaYSWn.jpeg', title: 'Célébration', category: 'Matchday' },
  { id: '7', url: 'https://i.imgur.com/YtBZore.jpeg', title: 'Immersion totale', category: 'Matchday' },
  { id: '8', url: 'https://i.imgur.com/zWBt3zr.jpeg', title: 'Esprit d\'équipe', category: 'Matchday' },
  { id: '9', url: 'https://i.imgur.com/sFJ5FwJ.jpeg', title: 'Ambiance club', category: 'Atmosphère' },
  { id: '10', url: 'https://i.imgur.com/LzFNFhx.jpeg', title: 'Passion football', category: 'Atmosphère' }
];

export const HomeCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isHovered) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRef.current.scrollBy({ left: clientWidth > 600 ? 500 : clientWidth * 0.8, behavior: 'smooth' });
          }
        }
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 600 ? 500 : clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 flex items-end justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4">Nos réalisations</h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Un aperçu de notre travail au cœur de l'action, de l'académie aux jours de match.
          </p>
        </motion.div>
        
        <div className="hidden md:flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md hover:bg-gray-50 transition-all"
            aria-label="Image précédente"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-3 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md hover:bg-gray-50 transition-all"
            aria-label="Image suivante"
          >
            <ArrowRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scroll-bar px-4 md:px-8 pb-12 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {carouselImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative min-w-[300px] md:min-w-[450px] aspect-[4/5] md:aspect-video rounded-3xl overflow-hidden snap-center group cursor-pointer shadow-lg"
              onClick={() => { trackEvent('Carousel Image', `Click ${img.title}`); navigate('/portfolio'); }}
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-semibold tracking-wider text-white/80 uppercase mb-2 block">
                  {img.category}
                </span>
                <h3 className="text-xl md:text-3xl font-bold text-white">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
          {/* Spacer to allow scrolling to the end cleanly */}
          <div className="min-w-[4px] md:min-w-[20px] flex-shrink-0" />
        </div>
      </div>

      <div className="text-center mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { trackEvent('Home Carousel', 'Click Voir portfolio complet'); navigate('/portfolio'); }}
          className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-900 transition-colors text-lg inline-flex items-center justify-center gap-2"
        >
          Voir le portfolio complet
          <ArrowIcon className="w-5 h-5" />
        </motion.button>
      </div>

      <style>{`
        .hide-scroll-bar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
