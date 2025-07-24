import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiPause, FiVolumeX, FiVolume2 } = FiIcons;

const WhyIServed = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="why-served" className="py-20 bg-gradient-to-br from-navy-900 to-gunmetal-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-flag-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-6">
              Why I Served
            </h2>
            <p className="text-xl text-gunmetal-300 font-inter">
              A personal reflection on duty, honor, and the call to serve
            </p>
          </div>

          {/* Audio Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center items-center space-x-4 mb-12"
          >
            <button
              onClick={toggleAudio}
              className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-full transition-colors duration-300 font-inter font-medium"
            >
              <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-5 h-5" />
              <span>{isPlaying ? 'Pause' : 'Play'} Narration</span>
            </button>
            <button
              onClick={toggleMute}
              className="p-3 bg-gunmetal-700 hover:bg-gunmetal-600 text-white rounded-full transition-colors duration-300"
            >
              <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-12 border border-gunmetal-700"
          >
            <div className="prose prose-lg max-w-none">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-white font-inter text-lg leading-relaxed mb-8 first-letter:text-6xl first-letter:font-playfair first-letter:text-gold-500 first-letter:float-left first-letter:mr-3 first-letter:mt-1"
              >
                Growing up in a small town in Ohio, I watched my grandfather polish his Navy medals every Sunday morning. He never spoke much about his service during World War II, but his quiet dignity and unwavering sense of duty spoke volumes. When I turned eighteen, I knew that I wanted to carry on that legacy of service.
              </motion.p>

              <motion.blockquote
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="border-l-4 border-gold-500 pl-6 my-8 italic text-gold-300 text-xl font-playfair"
              >
                "Service isn't just about what you do—it's about who you become in the process."
              </motion.blockquote>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gunmetal-200 font-inter text-lg leading-relaxed mb-8"
              >
                The Navy taught me that true strength comes not from individual achievement, but from the collective power of people working toward a common goal. Every day at sea, every watch stood, every mission completed was a reminder that we were part of something greater than ourselves.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="text-gunmetal-200 font-inter text-lg leading-relaxed mb-8"
              >
                Through three decades of service, I learned that leadership isn't about commanding others—it's about serving them. The young sailors who looked to me for guidance taught me more about courage and resilience than any manual ever could. Their trust was a responsibility I never took lightly.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="text-white font-inter text-lg leading-relaxed"
              >
                I served because I believed in the ideals that our flag represents: freedom, justice, and the opportunity for every person to pursue their dreams. These weren't just words to me—they were principles worth dedicating my life to defend. And I would do it all again, without hesitation.
              </motion.p>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center mt-12"
          >
            <p className="text-gold-400 font-playfair text-2xl italic">
              — Chief Petty Officer John M. Anderson, USN (Ret.)
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIServed;