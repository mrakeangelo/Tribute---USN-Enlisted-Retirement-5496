import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronDown } = FiIcons;

const Hero = () => {
  const scrollToTimeline = () => {
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-gunmetal-800 to-navy-900">
        <div className="absolute inset-0 bg-flag-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent"></div>
      </div>

      {/* Hero Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Chief Petty Officer
            <span className="block text-gold-500 mt-2">John M. Anderson</span>
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl sm:text-2xl text-gunmetal-200 mb-8 font-inter"
          >
            <span className="block">U.S. Navy • 1985 - 2015</span>
            <span className="block text-gold-400 mt-2">30 Years of Dedicated Service</span>
          </motion.div>

          <motion.blockquote
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-2xl sm:text-3xl font-playfair italic text-white mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            "Forged in Service. Remembered Forever."
          </motion.blockquote>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTimeline}
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-lg font-inter font-semibold transition-all duration-300 shadow-lg hover:shadow-xl animate-glow"
          >
            View My Legacy
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToTimeline}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/70 hover:text-white transition-colors duration-300"
        >
          <SafeIcon icon={FiChevronDown} className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;