import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiPlay, FiPause, FiChevronLeft, FiChevronRight } = FiIcons;

const FamilyTribute = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const familyMemories = [
    {
      id: 1,
      title: 'Wedding Day',
      date: '1983-06-15',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'The beginning of our journey together, just two years before I enlisted.',
      quote: 'From that day forward, you were my anchor in every storm.'
    },
    {
      id: 2,
      title: 'First Deployment Return',
      date: '1991-03-20',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Coming home from the Persian Gulf to see how much Sarah had grown.',
      quote: 'Every homecoming reminded me what I was fighting for.'
    },
    {
      id: 3,
      title: 'Family Vacation',
      date: '1995-07-04',
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Our first family vacation after my promotion to Petty Officer First Class.',
      quote: 'These moments made all the sacrifices worthwhile.'
    },
    {
      id: 4,
      title: 'Retirement Ceremony',
      date: '2015-01-15',
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'The end of one chapter and the beginning of another, with family by my side.',
      quote: 'Thirty years of service, but a lifetime of love and support from you.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % familyMemories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + familyMemories.length) % familyMemories.length);
  };

  const currentMemory = familyMemories[currentSlide];

  return (
    <section id="family" className="py-20 bg-gradient-to-br from-white to-gunmetal-50 dark:from-navy-900 dark:to-gunmetal-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
            Family & Love
          </h2>
          <p className="text-xl text-gunmetal-600 dark:text-gunmetal-300 max-w-3xl mx-auto font-inter">
            To my beloved wife and children, who stood by me through every deployment and homecoming
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentMemory.id}
                  src={currentMemory.image}
                  alt={currentMemory.title}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
              >
                <SafeIcon icon={FiChevronLeft} className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-all duration-200"
              >
                <SafeIcon icon={FiChevronRight} className="w-6 h-6" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {familyMemories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide ? 'bg-gold-500' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMemory.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gunmetal-200 dark:border-gunmetal-700"
              >
                <div className="flex items-center mb-4">
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-gold-500 mr-3" />
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white">
                      {currentMemory.title}
                    </h3>
                    <p className="text-gold-600 dark:text-gold-400 font-inter">
                      {new Date(currentMemory.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter text-lg leading-relaxed mb-6">
                  {currentMemory.description}
                </p>
                
                <blockquote className="border-l-4 border-gold-500 pl-6 italic text-gold-600 dark:text-gold-400 text-xl font-playfair">
                  {currentMemory.quote}
                </blockquote>
              </motion.div>
            </AnimatePresence>

            {/* Love Letter Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20 rounded-2xl p-8 border border-gold-200 dark:border-gold-700"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white">
                  A Letter to My Love
                </h3>
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
                >
                  <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {isPlaying ? 'Pause' : 'Play'} Audio
                  </span>
                </button>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:text-gold-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">
                  My dearest Mary, through thirty years of service, you were my constant. When the seas were rough and the missions were long, the thought of coming home to you gave me strength. You raised our children with grace while I was deployed, never letting them forget that their father was serving something greater than himself.
                </p>
                
                <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter leading-relaxed mt-4">
                  Every promotion, every achievement, every moment of pride in my naval career was made possible by your unwavering support. You are the true hero of this story, and I am forever grateful for the life we built together.
                </p>
                
                <p className="text-gold-600 dark:text-gold-400 font-playfair text-xl italic mt-6 text-center">
                  With all my love and devotion,<br />
                  Your devoted husband, John
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilyTribute;