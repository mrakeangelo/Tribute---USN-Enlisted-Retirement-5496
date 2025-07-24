import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiSun, FiMoon } = FiIcons;

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-white/90 dark:bg-navy-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gunmetal-200 dark:border-gunmetal-700"
    >
      <SafeIcon 
        icon={darkMode ? FiSun : FiMoon} 
        className="w-5 h-5 text-gold-500" 
      />
    </motion.button>
  );
};

export default ThemeToggle;