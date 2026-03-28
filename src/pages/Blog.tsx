import { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { posts } from '../data/posts';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const categories = ['Tous', 'Football Media', 'Matchday Stories', 'Behind the Scenes', 'Creator Tips'];

  const filteredPosts = activeCategory === 'Tous'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Notre Blog</h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Articles, conseils et coulisses de la production visuelle dans le football.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeCategory === category
                  ? 'bg-white text-black'
                  : 'bg-gray-800 text-white/70 hover:bg-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 hover:border-white/20 transition-colors"
            >
              <Link to={`/blog/${post.slug}`}>
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity" />
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <User className="h-4 w-4 ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  <Link to={`/blog/${post.slug}`} className="hover:text-gray-300 transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-400 mb-6 line-clamp-2">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-white font-semibold hover:text-gray-300 transition-colors"
                >
                  Lire la suite
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
