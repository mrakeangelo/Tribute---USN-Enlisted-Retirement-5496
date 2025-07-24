import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiX, FiPlay, FiImage, FiUsers, FiFlag } = FiIcons;

const StoryBlocks = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: 'The Beginning',
      subtitle: 'From Civilian to Sailor',
      description: 'The transformation that began at Naval Station Great Lakes',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: FiFlag,
      content: {
        text: 'Walking through the gates of Naval Station Great Lakes, I knew my life was about to change forever. The crisp morning air, the sound of marching feet, and the sight of the American flag waving proudly in the distance - these would become the defining moments of my transformation from civilian to sailor.',
        media: [
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Naval Station Great Lakes - Boot Camp'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Deployments',
      subtitle: 'Serving Around the World',
      description: 'Stories from the Persian Gulf, Mediterranean, and beyond',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: FiImage,
      content: {
        text: 'Each deployment brought new challenges, new friendships, and new perspectives. From the scorching heat of the Persian Gulf to the historic ports of the Mediterranean, every mission taught me something about duty, honor, and the bonds that form between shipmates.',
        media: [
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'USS Enterprise during Mediterranean deployment'
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Brotherhood',
      subtitle: 'Bonds That Last Forever',
      description: 'The friendships forged in service transcend time',
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: FiUsers,
      content: {
        text: 'The men and women I served alongside became more than colleagues - they became family. Through long nights at sea, challenging operations, and moments of triumph, we learned that the Navy\'s greatest strength lies not in its ships or weapons, but in the unbreakable bonds between sailors.',
        media: [
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Shipmates during shore leave'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Ceremony Moments',
      subtitle: 'Milestones and Memories',
      description: 'The formal moments that marked each chapter',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: FiPlay,
      content: {
        text: 'From promotion ceremonies to retirement, each formal moment carried the weight of tradition and the promise of the future. These ceremonies weren\'t just about recognition - they were about passing the torch to the next generation of sailors.',
        media: [
          {
            type: 'image',
            src: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            caption: 'Chief Petty Officer promotion ceremony'
          }
        ]
      }
    }
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-white to-gunmetal-50 dark:from-gunmetal-900 dark:to-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
            Visual Stories
          </h2>
          <p className="text-xl text-gunmetal-600 dark:text-gunmetal-300 max-w-3xl mx-auto font-inter">
            Moments captured in time, stories that define a life of service
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedStory(story)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] bg-cover bg-center relative">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-gold-500/20 backdrop-blur-sm rounded-full mr-3">
                    <SafeIcon icon={story.icon} className="w-5 h-5 text-gold-400" />
                  </div>
                  <span className="text-gold-400 font-inter font-medium">{story.subtitle}</span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                  {story.title}
                </h3>
                <p className="text-gunmetal-200 font-inter">
                  {story.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gold-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <SafeIcon icon={FiPlay} className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-inter font-medium">View Story</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-navy-800 rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative">
                <img 
                  src={selectedStory.image} 
                  alt={selectedStory.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <SafeIcon icon={FiX} className="w-6 h-6" />
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent rounded-t-2xl"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-playfair font-bold text-white mb-2">
                    {selectedStory.title}
                  </h3>
                  <p className="text-gold-400 font-inter font-medium">
                    {selectedStory.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter text-lg leading-relaxed mb-8">
                  {selectedStory.content.text}
                </p>

                {/* Media Gallery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedStory.content.media.map((media, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={media.src} 
                        alt={media.caption}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <p className="text-white text-center font-inter">
                          {media.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StoryBlocks;