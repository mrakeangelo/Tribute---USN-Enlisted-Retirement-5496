import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiAnchor } = FiIcons;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Story', href: '#story' },
    { name: 'Awards', href: '#awards' },
    { name: 'Messages', href: '#messages' },
    { name: 'Family', href: '#family' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-navy-900/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <SafeIcon icon={FiAnchor} className="w-8 h-8 text-gold-500" />
            <span className="text-xl font-playfair font-bold text-gunmetal-900 dark:text-white">
              Legacy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gunmetal-700 dark:text-gunmetal-300 hover:text-gold-500 dark:hover:text-gold-400 transition-colors duration-200 font-inter font-medium"
              >
                {item.name}
              </button>
            ))}
            <Link
              to="/admin"
              className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-inter font-medium"
            >
              Admin
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gunmetal-700 dark:text-gunmetal-300 hover:bg-gunmetal-100 dark:hover:bg-gunmetal-800 transition-colors duration-200"
          >
            <SafeIcon icon={isOpen ? FiX : FiMenu} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        className="md:hidden bg-white/95 dark:bg-navy-900/95 backdrop-blur-lg border-t border-gunmetal-200 dark:border-gunmetal-700"
      >
        <div className="px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-3 py-2 text-gunmetal-700 dark:text-gunmetal-300 hover:text-gold-500 dark:hover:text-gold-400 hover:bg-gunmetal-50 dark:hover:bg-gunmetal-800 rounded-lg transition-colors duration-200 font-inter"
            >
              {item.name}
            </button>
          ))}
          <Link
            to="/admin"
            className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 font-inter font-medium"
          >
            Admin
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;