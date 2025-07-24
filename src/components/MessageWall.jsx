import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiUser, FiCalendar, FiEdit3, FiSend } = FiIcons;

const MessageWall = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: 'Sarah Anderson',
      relationship: 'Daughter',
      message: 'Dad, your service has always been an inspiration to our family. Thank you for showing us what dedication and honor look like.',
      date: '2024-01-15',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      relationship: 'Shipmate',
      message: 'Chief, it was an honor serving alongside you. Your leadership made all the difference during our deployment.',
      date: '2024-01-14',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 3,
      name: 'Linda Rodriguez',
      relationship: 'Neighbor',
      message: 'John, thank you for your service to our country. Your dedication to community and family is truly admirable.',
      date: '2024-01-13',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    },
    {
      id: 4,
      name: 'Captain James Wilson',
      relationship: 'Former CO',
      message: 'Chief Anderson was one of the finest sailors I had the privilege to serve with. A true leader and mentor.',
      date: '2024-01-12',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    name: '',
    relationship: '',
    message: '',
    email: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.name && newMessage.message) {
      const message = {
        id: messages.length + 1,
        ...newMessage,
        date: new Date().toISOString().split('T')[0],
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80`
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', relationship: '', message: '', email: '' });
      setShowForm(false);
    }
  };

  return (
    <section id="messages" className="py-20 bg-gradient-to-br from-white to-gunmetal-50 dark:from-navy-900 dark:to-gunmetal-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
            Messages of Honor
          </h2>
          <p className="text-xl text-gunmetal-600 dark:text-gunmetal-300 max-w-3xl mx-auto font-inter">
            A digital wall where family, friends, and fellow service members share their tributes
          </p>
        </motion.div>

        {/* Add Message Button */}
        <div className="text-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
          >
            <SafeIcon icon={FiEdit3} className="w-5 h-5" />
            <span>Leave a Message</span>
          </motion.button>
        </div>

        {/* Message Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-navy-800 rounded-2xl p-8 max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-6">
                  Share Your Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={newMessage.name}
                      onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
                      Relationship
                    </label>
                    <input
                      type="text"
                      value={newMessage.relationship}
                      onChange={(e) => setNewMessage({ ...newMessage, relationship: e.target.value })}
                      placeholder="e.g., Son, Shipmate, Friend"
                      className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      value={newMessage.message}
                      onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                      rows="4"
                      className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
                      required
                    />
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 text-gunmetal-700 dark:text-gunmetal-300 rounded-lg hover:bg-gunmetal-50 dark:hover:bg-gunmetal-700 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <SafeIcon icon={FiSend} className="w-4 h-4" />
                      <span>Send</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gunmetal-200 dark:border-gunmetal-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={message.avatar}
                  alt={message.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-500 mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-playfair font-bold text-gunmetal-900 dark:text-white">
                    {message.name}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gunmetal-600 dark:text-gunmetal-300">
                    <span className="flex items-center">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-1" />
                      {message.relationship}
                    </span>
                    <span className="flex items-center">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                      {new Date(message.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter leading-relaxed mb-4">
                {message.message}
              </p>
              <div className="flex justify-end">
                <SafeIcon icon={FiHeart} className="w-5 h-5 text-gold-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageWall;