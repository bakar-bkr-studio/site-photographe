import { useEffect } from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const selectedArticle = posts.find(post => post.slug === slug);

  useEffect(() => {
    if (selectedArticle) {
      document.title = `${selectedArticle.title} - BKR Studio`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', selectedArticle.excerpt);
      }
    }
  }, [selectedArticle]);

  if (!selectedArticle) {
    return (
      <div className="min-h-screen py-32 bg-gray-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4">Article introuvable</h1>
        <p className="text-gray-400 mb-8">Cet article n'existe pas ou a été supprimé.</p>
        <Link to="/blog" className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
          Retour au blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/blog"
          className="inline-flex items-center mb-8 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour au blog
        </Link>

        <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="h-80 overflow-hidden relative">
            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold px-6 text-center">
                {selectedArticle.fullContent.title}
              </h1>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap items-center text-sm text-gray-400 mb-8 gap-4">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{selectedArticle.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{selectedArticle.author}</span>
              </div>
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                {selectedArticle.category}
              </span>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-12 italic">
                {selectedArticle.fullContent.intro}
              </p>

              <div className="space-y-12">
                {selectedArticle.fullContent.sections.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex"
                  >
                    <div className="mr-6 mt-1 flex-shrink-0 bg-white/10 text-white p-3 rounded-full">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">
                        {index + 1}. {section.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">{section.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-6 bg-white/5 rounded-lg border border-white/10">
                <p className="text-lg text-gray-200">
                  {selectedArticle.fullContent.conclusion}
                </p>
              </div>

              <div className="mt-16 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/contact')}
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Discutons de votre projet
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
