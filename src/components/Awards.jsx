import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiStar, FiShield, FiTarget, FiGlobe } = FiIcons;

const Awards = () => {
  const [activeCategory, setActiveCategory] = useState('medals');

  const categories = [
    { id: 'medals', name: 'Medals & Ribbons', icon: FiAward },
    { id: 'warfare', name: 'Warfare Badges', icon: FiShield },
    { id: 'ranks', name: 'Rank Progression', icon: FiStar }
  ];

  const awards = {
    medals: [
      {
        name: 'Navy Commendation Medal',
        description: 'For meritorious service during Operation Desert Storm',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1991'
      },
      {
        name: 'Navy Achievement Medal',
        description: 'For exceptional performance as Division Leading Petty Officer',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1998'
      },
      {
        name: 'Good Conduct Medal',
        description: 'For exemplary conduct and service (6 awards)',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1988-2015'
      },
      {
        name: 'Navy Expeditionary Medal',
        description: 'For service in multiple overseas deployments',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1990-2010'
      }
    ],
    warfare: [
      {
        name: 'Surface Warfare Specialist',
        description: 'Qualified in surface warfare operations',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1989'
      },
      {
        name: 'Enlisted Aviation Warfare Specialist',
        description: 'Qualified in aviation warfare operations',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1995'
      }
    ],
    ranks: [
      {
        name: 'Seaman Recruit (E-1)',
        description: 'Initial enlistment rank',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1985'
      },
      {
        name: 'Petty Officer 3rd Class (E-4)',
        description: 'First promotion to Petty Officer',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1987'
      },
      {
        name: 'Petty Officer 2nd Class (E-5)',
        description: 'Advanced leadership responsibilities',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1990'
      },
      {
        name: 'Petty Officer 1st Class (E-6)',
        description: 'Senior enlisted leadership role',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '1995'
      },
      {
        name: 'Chief Petty Officer (E-7)',
        description: 'Achieved the prestigious rank of Chief',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
        year: '2005'
      }
    ]
  };

  return (
    <section id="awards" className="py-20 bg-gradient-to-br from-gunmetal-50 to-white dark:from-gunmetal-900 dark:to-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gunmetal-600 dark:text-gunmetal-300 max-w-3xl mx-auto font-inter">
            Honors earned through dedicated service and exceptional performance
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/70 dark:bg-navy-800/70 backdrop-blur-lg rounded-2xl p-2 border border-gunmetal-200 dark:border-gunmetal-700">
            <div className="flex space-x-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 font-inter font-medium ${
                    activeCategory === category.id
                      ? 'bg-gold-500 text-white shadow-lg'
                      : 'text-gunmetal-600 dark:text-gunmetal-300 hover:bg-gunmetal-100 dark:hover:bg-gunmetal-700'
                  }`}
                >
                  <SafeIcon icon={category.icon} className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {awards[activeCategory].map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gunmetal-200 dark:border-gunmetal-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={award.image}
                  alt={award.name}
                  className="w-16 h-16 object-cover rounded-full mr-4 border-2 border-gold-500"
                />
                <div>
                  <h3 className="text-lg font-playfair font-bold text-gunmetal-900 dark:text-white">
                    {award.name}
                  </h3>
                  <p className="text-gold-600 dark:text-gold-400 font-inter font-medium">
                    {award.year}
                  </p>
                </div>
              </div>
              <p className="text-gunmetal-600 dark:text-gunmetal-300 font-inter leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Rank Progress Tracker */}
        {activeCategory === 'ranks' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gunmetal-200 dark:border-gunmetal-700"
          >
            <h3 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-8 text-center">
              30-Year Progression Timeline
            </h3>
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-2 bg-gradient-to-r from-gold-500 to-gold-700 rounded-full"></div>
              <div className="flex justify-between items-center relative">
                {awards.ranks.map((rank, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-4 h-4 bg-gold-500 rounded-full border-4 border-white dark:border-navy-800 shadow-lg mb-2"></div>
                    <div className="text-center">
                      <p className="text-sm font-inter font-medium text-gunmetal-900 dark:text-white">
                        {rank.year}
                      </p>
                      <p className="text-xs text-gunmetal-600 dark:text-gunmetal-300 max-w-20">
                        {rank.name.split(' ')[0]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Awards;