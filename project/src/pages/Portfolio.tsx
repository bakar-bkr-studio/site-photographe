import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import ReactPlayer from 'react-player';
import classNames from 'classnames';
import { Play, Image as ImageIcon, Clock, Tag } from 'lucide-react';
import 'react-photo-view/dist/react-photo-view.css';

const Portfolio = () => {
  const [mediaType, setMediaType] = useState<'photos' | 'videos'>('photos');
  const [activeCategory, setActiveCategory] = useState('Tous');

  const photoCategories = ['Tous', 'Mariage', 'Portrait', 'Événement', 'Nature', 'Sport'];
  const videoCategories = ['Tous', 'Mariage', 'Corporate', 'Sport', 'Événement', 'Interview'];

  const photos = [
    // Mariage
    { id: '1', category: 'Mariage', url: 'https://i.imgur.com/JIjjRP2.jpeg', title: 'Mariage - Photo de couple' },
    { id: '2', category: 'Mariage', url: 'https://i.imgur.com/wmFZbza.jpeg', title: 'Mariage - Préparatifs' },
    { id: '3', category: 'Mariage', url: 'https://i.imgur.com/K4Y18mM.jpeg', title: 'Mariage - Cérémonie' },
    
    // Portrait
    { id: '4', category: 'Portrait', url: 'https://i.imgur.com/j34Uwrg.jpeg', title: 'Portrait en extérieur' },
    { id: '5', category: 'Portrait', url: 'https://i.imgur.com/TusfVeK.jpeg', title: 'Portrait artistique' },
    { id: '6', category: 'Portrait', url: 'https://i.imgur.com/MlWrSWX.jpeg', title: 'Portrait lifestyle' },
    { id: '7', category: 'Portrait', url: 'https://i.imgur.com/qgs8aIF.jpeg', title: 'Portrait studio' },
    
    // Nature
    { id: '8', category: 'Nature', url: 'https://i.imgur.com/REvU6Ra.jpeg', title: 'Nature sauvage' },
    { id: '9', category: 'Nature', url: 'https://i.imgur.com/K6QUwtM.jpeg', title: 'Paysage naturel' },
    { id: '10', category: 'Nature', url: 'https://i.imgur.com/xV8tUz4.jpeg', title: 'Faune sauvage' },
    { id: '23', category: 'Nature', url: 'https://i.imgur.com/ZPGdAaK.jpeg', title: 'Paysage montagneux' },
    
    // Sport
    { id: '11', category: 'Sport', url: 'https://i.imgur.com/BuP8W0m.jpeg', title: 'Football - Action de jeu' },
    { id: '12', category: 'Sport', url: 'https://i.imgur.com/EDWNki1.jpeg', title: 'Football - Duel' },
    { id: '13', category: 'Sport', url: 'https://i.imgur.com/VbD673J.jpeg', title: 'Football - Technique' },
    { id: '14', category: 'Sport', url: 'https://i.imgur.com/qe2MoNG.jpeg', title: 'Football - Équipe' },
    { id: '15', category: 'Sport', url: 'https://i.imgur.com/9bvOcy8.jpeg', title: 'Football - Match' },
    { id: '16', category: 'Sport', url: 'https://i.imgur.com/irwFTuH.jpeg', title: 'Football - Célébration' },
    { id: '17', category: 'Sport', url: 'https://i.imgur.com/2toUB9N.jpeg', title: 'Football - Portrait' },
    
    // Événement
    { id: '18', category: 'Événement', url: 'https://i.imgur.com/YAeTnOQ.jpeg', title: 'Événement culturel' },
    { id: '19', category: 'Événement', url: 'https://i.imgur.com/55Is0NH.jpeg', title: 'Concert live' },
    { id: '20', category: 'Événement', url: 'https://i.imgur.com/ElhlqKV.jpeg', title: 'Festival' },
    { id: '21', category: 'Événement', url: 'https://i.imgur.com/Zq1KUsJ.jpeg', title: 'Soirée' },
    { id: '22', category: 'Événement', url: 'https://i.imgur.com/GeMGohi.jpeg', title: 'Événement corporate' }
  ];

  const videos = [
    {
      id: '1',
      category: 'Mariage',
      url: 'https://vimeo.com/1079550026',
      title: 'Mariage religieux',
      thumbnail: 'https://i.imgur.com/KLve6B3.jpeg',
      duration: '1:24',
      description: 'Un mariage magique sur Paris',
      tags: ['Mariage', 'religieux', 'Été']
    },
    {
      id: '2',
      category: 'Interview',
      url: 'https://vimeo.com/1078498776',
      title: 'Interview de Nassima',
      thumbnail: 'https://i.imgur.com/3fFcCB1.jpeg',
      duration: '7:58',
      description: 'Interview de Nassima pour la journée internationale des droits de la femme',
      tags: ['interview', 'élocution', 'communication face caméra']
    },
    {
      id: '3',
      category: 'Sport',
      url: 'https://vimeo.com/1079550401',
      title: 'Journée sportive avec l"Ecole de la 2e chance"',
      thumbnail: 'https://i.imgur.com/cusGwVF.jpeg',
      duration: '2:11',
      description: 'Récapitulatif vidéo de la journée 100% sportive',
      tags: ['Sport', 'football', 'Compétition', 'bubble foot']
    }
  ];

  const filteredMedia = mediaType === 'photos'
    ? (activeCategory === 'Tous' ? photos : photos.filter(photo => photo.category === activeCategory))
    : (activeCategory === 'Tous' ? videos : videos.filter(video => video.category === activeCategory));

  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">Notre Portfolio</h1>

          {/* Media Type Switcher */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => {
                setMediaType('photos');
                setActiveCategory('Tous');
              }}
              className={classNames(
                'flex items-center gap-2 px-6 py-2 rounded-full transition-colors',
                mediaType === 'photos' ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'
              )}
            >
              <ImageIcon className="h-5 w-5" />
              Photos
            </button>
            <button
              onClick={() => {
                setMediaType('videos');
                setActiveCategory('Tous');
              }}
              className={classNames(
                'flex items-center gap-2 px-6 py-2 rounded-full transition-colors',
                mediaType === 'videos' ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'
              )}
            >
              <Play className="h-5 w-5" />
              Vidéos
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {(mediaType === 'photos' ? photoCategories : videoCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={classNames(
                  'px-6 py-2 rounded-full transition-colors',
                  activeCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {mediaType === 'photos' ? (
            <PhotoProvider>
              <Masonry
                breakpointCols={breakpointColumns}
                className="flex -ml-4 w-auto"
                columnClassName="pl-4 bg-clip-padding"
              >
                {filteredMedia.map((photo: any) => (
                  <motion.div
                    key={photo.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    <PhotoView src={photo.url}>
                      <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                        <img
                          src={photo.url}
                          alt={photo.title}
                          className="w-full transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                          <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {photo.title}
                          </p>
                        </div>
                      </div>
                    </PhotoView>
                  </motion.div>
                ))}
              </Masonry>
            </PhotoProvider>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredMedia.map((video: any) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative aspect-video">
                    {video.id === '2' ? (
                      <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                        <iframe 
                          src="https://player.vimeo.com/video/1078498776?h=965d778016&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                          style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                          frameBorder="0" 
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          title="Nassima Interview"
                        />
                      </div>
                    ) : video.id === '1' ? (
                      <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                        <iframe 
                          src="https://player.vimeo.com/video/1079550026?h=9ed397897b&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                          style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                          frameBorder="0" 
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          title="Mariage religieux sur Paris"
                        />
                      </div>
                    ) : video.id === '3' ? (
                      <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                        <iframe 
                          src="https://player.vimeo.com/video/1079550401?h=596705560e&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479" 
                          style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                          frameBorder="0" 
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                          title="Vidéo entreprise et association"
                        />
                      </div>
                    ) : (
                      <ReactPlayer
                        url={video.url}
                        width="100%"
                        height="100%"
                        light={video.thumbnail}
                        controls
                        playIcon={
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-black bg-opacity-50 rounded-full p-4">
                              <Play className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        }
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                    <p className="text-gray-600 mb-4">{video.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {video.duration}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {video.category}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {video.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Portfolio;