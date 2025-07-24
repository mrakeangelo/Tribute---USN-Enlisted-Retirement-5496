import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiLock, FiUnlock, FiPlus, FiCalendar, FiEye } = FiIcons;

const TimeCapsules = () => {
  const [capsules, setCapsules] = useState([
    {
      id: 1,
      title: 'Letter to Future Sailors',
      message: 'A message of wisdom and encouragement for the next generation of Navy personnel.',
      unlockDate: '2025-05-15',
      isLocked: true,
      createdDate: '2024-01-01'
    },
    {
      id: 2,
      title: 'Family Memories',
      message: 'Stories and reflections to share with grandchildren when they come of age.',
      unlockDate: '2030-12-25',
      isLocked: true,
      createdDate: '2024-01-01'
    },
    {
      id: 3,
      title: 'Retirement Reflections',
      message: 'My thoughts on transitioning from military to civilian life, to be opened on my 10th retirement anniversary.',
      unlockDate: '2020-01-01',
      isLocked: false,
      createdDate: '2015-01-01',
      fullMessage: 'Retirement has been both a challenge and a blessing. The structure and purpose that the Navy provided for 30 years doesn\'t simply disappear overnight. I\'ve learned to find new meaning in mentoring young veterans, volunteering at the VA, and spending quality time with family. The skills and values the Navy instilled in me continue to guide every decision I make. To any sailor reading this: your service doesn\'t end when you take off the uniform. It transforms into something new, something equally important.'
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [newCapsule, setNewCapsule] = useState({
    title: '',
    message: '',
    unlockDate: ''
  });

  const handleCreateCapsule = (e) => {
    e.preventDefault();
    if (newCapsule.title && newCapsule.message && newCapsule.unlockDate) {
      const capsule = {
        id: capsules.length + 1,
        ...newCapsule,
        isLocked: new Date(newCapsule.unlockDate) > new Date(),
        createdDate: new Date().toISOString().split('T')[0]
      };
      setCapsules([...capsules, capsule]);
      setNewCapsule({ title: '', message: '', unlockDate: '' });
      setShowCreateForm(false);
    }
  };

  const getTimeRemaining = (unlockDate) => {
    const now = new Date();
    const unlock = new Date(unlockDate);
    const diff = unlock - now;
    
    if (diff <= 0) return 'Unlocked';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const years = Math.floor(days / 365);
    
    if (years > 0) {
      return `${years} year${years > 1 ? 's' : ''} remaining`;
    } else {
      return `${days} day${days > 1 ? 's' : ''} remaining`;
    }
  };

  return (
    <section id="time-capsules" className="py-20 bg-gradient-to-br from-gunmetal-50 to-gunmetal-100 dark:from-gunmetal-900 dark:to-navy-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
            Time Capsules
          </h2>
          <p className="text-xl text-gunmetal-600 dark:text-gunmetal-300 max-w-3xl mx-auto font-inter">
            Messages from the past, preserved for the future
          </p>
        </motion.div>

        {/* Create Capsule Button */}
        <div className="text-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowCreateForm(true)}
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span>Create Time Capsule</span>
          </motion.button>
        </div>

        {/* Time Capsules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capsules.map((capsule, index) => (
            <motion.div
              key={capsule.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gunmetal-200 dark:border-gunmetal-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${
                  capsule.isLocked ? 'bg-red-100 dark:bg-red-900/30' : 'bg-green-100 dark:bg-green-900/30'
                } mr-4`}>
                  <SafeIcon 
                    icon={capsule.isLocked ? FiLock : FiUnlock} 
                    className={`w-6 h-6 ${
                      capsule.isLocked ? 'text-red-600 dark:text-red-400' : 'text-green-600 dark:text-green-400'
                    }`} 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-playfair font-bold text-gunmetal-900 dark:text-white">
                    {capsule.title}
                  </h3>
                  <p className="text-sm text-gunmetal-600 dark:text-gunmetal-300 flex items-center">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                    {new Date(capsule.unlockDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter mb-4">
                {capsule.message}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gunmetal-600 dark:text-gunmetal-300">
                  <SafeIcon icon={FiClock} className="w-4 h-4 mr-1" />
                  {getTimeRemaining(capsule.unlockDate)}
                </div>
                
                {!capsule.isLocked && (
                  <button
                    onClick={() => setSelectedCapsule(capsule)}
                    className="flex items-center space-x-1 text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 transition-colors duration-200"
                  >
                    <SafeIcon icon={FiEye} className="w-4 h-4" />
                    <span className="text-sm font-medium">View</span>
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Create Capsule Modal */}
        <AnimatePresence>
          {showCreateForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowCreateForm(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-navy-800 rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
                  Create Time Capsule
                </h3>
                <form onSubmit={handleCreateCapsule} className="space-y-4">
                  <div>
                    <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={newCapsule.title}
                      onChange={(e) => setNewCapsule({ ...newCapsule, title: e.target.value })}
                      className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
                      Unlock Date *
                    </label>
                    <input
                      type="date"
                      value={newCapsule.unlockDate}
                      onChange={(e) => setNewCapsule({ ...newCapsule, unlockDate: e.target.value })}
                      className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      value={newCapsule.message}
                      onChange={(e) => setNewCapsule({ ...newCapsule, message: e.target.value })}
                      rows="4"
                      className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="flex-1 px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 text-gunmetal-700 dark:text-gunmetal-300 rounded-lg hover:bg-gunmetal-50 dark:hover:bg-gunmetal-700 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      Create
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View Capsule Modal */}
        <AnimatePresence>
          {selectedCapsule && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedCapsule(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-navy-800 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full mr-4">
                    <SafeIcon icon={FiUnlock} className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white">
                      {selectedCapsule.title}
                    </h3>
                    <p className="text-gunmetal-600 dark:text-gunmetal-300 font-inter">
                      Unlocked on {new Date(selectedCapsule.unlockDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter leading-relaxed">
                    {selectedCapsule.fullMessage || selectedCapsule.message}
                  </p>
                </div>
                
                <div className="mt-8 text-right">
                  <button
                    onClick={() => setSelectedCapsule(null)}
                    className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TimeCapsules;