import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Film, ArrowRight } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">

        {/* Numéro 404 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10rem] font-bold leading-none text-gray-100 select-none block">
            404
          </span>
        </motion.div>

        {/* Message principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="-mt-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page non trouvée
          </h1>
          <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            Cette page n'existe pas ou a été déplacée. Retrouvez nos productions et services ci-dessous.
          </p>
        </motion.div>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour à l'accueil
          </button>

          <button
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center justify-center gap-2 border-2 border-black text-black px-8 py-4 rounded-full font-semibold hover:bg-black hover:text-white transition-colors"
          >
            <Film className="w-5 h-5" />
            Voir le portfolio
          </button>

          <button
            onClick={() => navigate('/services')}
            className="inline-flex items-center justify-center gap-2 text-gray-600 hover:text-black transition-colors px-4 py-4 font-semibold"
          >
            Nos services
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default NotFound;
