import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAnchor, FiStar, FiGlobe, FiAward, FiHome } = FiIcons;

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const timelineData = [
    {
      year: '1985',
      title: 'Enlisted in U.S. Navy',
      description: 'Began journey at Naval Station Great Lakes for boot camp',
      rank: 'Seaman Recruit (E-1)',
      icon: FiAnchor,
      color: 'from-blue-500 to-blue-700'
    },
    {
      year: '1987',
      title: 'First Promotion',
      description: 'Advanced to Petty Officer Third Class',
      rank: 'Petty Officer 3rd Class (E-4)',
      icon: FiStar,
      color: 'from-green-500 to-green-700'
    },
    {
      year: '1990',
      title: 'First Deployment',
      description: 'Deployed to Persian Gulf during Operation Desert Storm',
      rank: 'Petty Officer 2nd Class (E-5)',
      icon: FiGlobe,
      color: 'from-orange-500 to-orange-700'
    },
    {
      year: '1995',
      title: 'Leadership Role',
      description: 'Promoted to Petty Officer First Class',
      rank: 'Petty Officer 1st Class (E-6)',
      icon: FiAward,
      color: 'from-purple-500 to-purple-700'
    },
    {
      year: '2005',
      title: 'Chief Petty Officer',
      description: 'Achieved the prestigious rank of Chief',
      rank: 'Chief Petty Officer (E-7)',
      icon: FiStar,
      color: 'from-gold-500 to-gold-700'
    },
    {
      year: '2015',
      title: 'Honorable Retirement',
      description: 'Completed 30 years of distinguished service',
      rank: 'Retired Chief Petty Officer',
      icon: FiHome,
      color: 'from-red-500 to-red-700'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-gunmetal-50 to-gunmetal-100 dark:from-navy-900 dark:to-gunmetal-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
            Career Timeline
          </h2>
          <p className="text-xl text-gunmetal-600 dark:text-gunmetal-300 max-w-3xl mx-auto font-inter">
            A journey of dedication, growth, and service spanning three decades
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-gold-500 to-gold-700 rounded-full hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white/70 dark:bg-navy-800/70 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gunmetal-200 dark:border-gunmetal-700 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${item.color} mr-4`}>
                        <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white">
                          {item.year}
                        </h3>
                        <p className="text-gold-600 dark:text-gold-400 font-inter font-medium">
                          {item.rank}
                        </p>
                      </div>
                    </div>
                    <h4 className="text-xl font-inter font-semibold text-gunmetal-800 dark:text-gunmetal-200 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gunmetal-600 dark:text-gunmetal-300 font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold-500 rounded-full border-4 border-white dark:border-navy-900 shadow-lg hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;