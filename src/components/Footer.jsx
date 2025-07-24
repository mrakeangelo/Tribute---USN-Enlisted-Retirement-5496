import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAnchor, FiHeart, FiFlag } = FiIcons;

const Footer = () => {
  const quotes = [
    "Honor. Courage. Commitment.",
    "Non sibi sed patriae - Not for self, but for country",
    "Semper Fortis - Always Courageous",
    "A legacy of service, a lifetime of memories"
  ];

  const [currentQuote, setCurrentQuote] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <footer className="relative bg-gradient-to-br from-navy-900 via-gunmetal-900 to-navy-900 text-white overflow-hidden">
      {/* Flag Background */}
      <div className="absolute inset-0 bg-flag-pattern opacity-10"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start mb-4">
              <SafeIcon icon={FiAnchor} className="w-8 h-8 text-gold-500 mr-3" />
              <h3 className="text-2xl font-playfair font-bold">Legacy</h3>
            </div>
            <p className="text-gunmetal-300 font-inter leading-relaxed">
              Honoring the service and sacrifice of Chief Petty Officer John M. Anderson, 
              U.S. Navy (Retired). A life dedicated to duty, honor, and country.
            </p>
          </motion.div>

          {/* Quote Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-4">
              <SafeIcon icon={FiFlag} className="w-6 h-6 text-gold-500 mr-2" />
              <h4 className="text-lg font-playfair font-semibold">Words to Live By</h4>
            </div>
            <motion.blockquote
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gold-300 font-playfair italic text-lg min-h-[3rem] flex items-center justify-center"
            >
              "{quotes[currentQuote]}"
            </motion.blockquote>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' })}
                className="block w-full md:w-auto text-gunmetal-300 hover:text-gold-400 transition-colors duration-200 font-inter"
              >
                Career Timeline
              </button>
              <button
                onClick={() => document.getElementById('story').scrollIntoView({ behavior: 'smooth' })}
                className="block w-full md:w-auto text-gunmetal-300 hover:text-gold-400 transition-colors duration-200 font-inter"
              >
                Visual Stories
              </button>
              <button
                onClick={() => document.getElementById('awards').scrollIntoView({ behavior: 'smooth' })}
                className="block w-full md:w-auto text-gunmetal-300 hover:text-gold-400 transition-colors duration-200 font-inter"
              >
                Awards & Recognition
              </button>
              <button
                onClick={() => document.getElementById('messages').scrollIntoView({ behavior: 'smooth' })}
                className="block w-full md:w-auto text-gunmetal-300 hover:text-gold-400 transition-colors duration-200 font-inter"
              >
                Messages of Honor
              </button>
              <Link
                to="/admin"
                className="block w-full md:w-auto text-gunmetal-300 hover:text-gold-400 transition-colors duration-200 font-inter"
              >
                Admin Dashboard
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent my-12"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <SafeIcon icon={FiHeart} className="w-5 h-5 text-red-500 mr-2" />
            <p className="text-gunmetal-300 font-inter">
              Built with love and respect for all who serve
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-gunmetal-400">
            <p>© 2024 Military Legacy Tribute</p>
            <p>Powered by Mrake Agency</p>
            <p>1985 - 2015 • 30 Years of Service</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;