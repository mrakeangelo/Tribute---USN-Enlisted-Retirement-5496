import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiEdit, FiUpload, FiMessageSquare, FiClock, FiSettings, FiLogOut, FiEye, FiTrash2, FiPlus } = FiIcons;

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication check (in real app, use proper auth)
    if (loginForm.email === 'admin@legacy.com' && loginForm.password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: FiHome },
    { id: 'timeline', name: 'Timeline', icon: FiEdit },
    { id: 'media', name: 'Media', icon: FiUpload },
    { id: 'messages', name: 'Messages', icon: FiMessageSquare },
    { id: 'capsules', name: 'Time Capsules', icon: FiClock },
    { id: 'settings', name: 'Settings', icon: FiSettings },
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-900 to-gunmetal-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-gunmetal-700"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-playfair font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gunmetal-300 font-inter">Access the legacy management dashboard</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gunmetal-300 font-inter font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white placeholder-gunmetal-400"
                placeholder="admin@legacy.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-gunmetal-300 font-inter font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-white placeholder-gunmetal-400"
                placeholder="Enter password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 rounded-lg font-inter font-semibold transition-colors duration-200"
            >
              Login
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-gold-400 hover:text-gold-300 font-inter transition-colors duration-200"
            >
              ← Back to Legacy Site
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gunmetal-50 to-gunmetal-100 dark:from-navy-900 dark:to-gunmetal-900">
      {/* Header */}
      <header className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg border-b border-gunmetal-200 dark:border-gunmetal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-playfair font-bold text-gunmetal-900 dark:text-white">
              Legacy Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center space-x-2 text-gunmetal-600 dark:text-gunmetal-300 hover:text-gold-500 transition-colors duration-200"
              >
                <SafeIcon icon={FiEye} className="w-5 h-5" />
                <span className="font-inter">View Site</span>
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex items-center space-x-2 text-gunmetal-600 dark:text-gunmetal-300 hover:text-red-500 transition-colors duration-200"
              >
                <SafeIcon icon={FiLogOut} className="w-5 h-5" />
                <span className="font-inter">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-2xl p-6 border border-gunmetal-200 dark:border-gunmetal-700">
              <div className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-inter ${
                      activeTab === tab.id
                        ? 'bg-gold-500 text-white shadow-lg'
                        : 'text-gunmetal-600 dark:text-gunmetal-300 hover:bg-gunmetal-100 dark:hover:bg-gunmetal-700'
                    }`}
                  >
                    <SafeIcon icon={tab.icon} className="w-5 h-5" />
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 dark:bg-navy-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gunmetal-200 dark:border-gunmetal-700"
            >
              {activeTab === 'overview' && <OverviewTab />}
              {activeTab === 'timeline' && <TimelineTab />}
              {activeTab === 'media' && <MediaTab />}
              {activeTab === 'messages' && <MessagesTab />}
              {activeTab === 'capsules' && <CapsulesTab />}
              {activeTab === 'settings' && <SettingsTab />}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

const OverviewTab = () => (
  <div>
    <h2 className="text-3xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-8">
      Dashboard Overview
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-inter font-semibold mb-2">Total Messages</h3>
        <p className="text-3xl font-bold">47</p>
      </div>
      <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-inter font-semibold mb-2">Time Capsules</h3>
        <p className="text-3xl font-bold">3</p>
      </div>
      <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-inter font-semibold mb-2">Media Items</h3>
        <p className="text-3xl font-bold">152</p>
      </div>
    </div>
    
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-4">
          Recent Activity
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gunmetal-50 dark:bg-gunmetal-800 rounded-lg">
            <span className="font-inter text-gunmetal-700 dark:text-gunmetal-300">
              New message from Sarah Anderson
            </span>
            <span className="text-sm text-gunmetal-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gunmetal-50 dark:bg-gunmetal-800 rounded-lg">
            <span className="font-inter text-gunmetal-700 dark:text-gunmetal-300">
              Media uploaded: Family vacation photos
            </span>
            <span className="text-sm text-gunmetal-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TimelineTab = () => (
  <div>
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-playfair font-bold text-gunmetal-900 dark:text-white">
        Timeline Management
      </h2>
      <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-colors duration-200 flex items-center space-x-2">
        <SafeIcon icon={FiPlus} className="w-5 h-5" />
        <span>Add Event</span>
      </button>
    </div>
    
    <div className="space-y-4">
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-playfair font-bold text-gunmetal-900 dark:text-white">
            Enlisted in U.S. Navy (1985)
          </h3>
          <div className="flex space-x-2">
            <button className="text-gold-500 hover:text-gold-600 transition-colors duration-200">
              <SafeIcon icon={FiEdit} className="w-5 h-5" />
            </button>
            <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
              <SafeIcon icon={FiTrash2} className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-gunmetal-600 dark:text-gunmetal-300 font-inter">
          Began journey at Naval Station Great Lakes for boot camp
        </p>
      </div>
      
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-playfair font-bold text-gunmetal-900 dark:text-white">
            First Deployment (1990)
          </h3>
          <div className="flex space-x-2">
            <button className="text-gold-500 hover:text-gold-600 transition-colors duration-200">
              <SafeIcon icon={FiEdit} className="w-5 h-5" />
            </button>
            <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
              <SafeIcon icon={FiTrash2} className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-gunmetal-600 dark:text-gunmetal-300 font-inter">
          Deployed to Persian Gulf during Operation Desert Storm
        </p>
      </div>
    </div>
  </div>
);

const MediaTab = () => (
  <div>
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-playfair font-bold text-gunmetal-900 dark:text-white">
        Media Library
      </h2>
      <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-colors duration-200 flex items-center space-x-2">
        <SafeIcon icon={FiUpload} className="w-5 h-5" />
        <span>Upload Media</span>
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Boot Camp"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-playfair font-bold text-gunmetal-900 dark:text-white mb-2">
            Boot Camp Graduation
          </h3>
          <p className="text-sm text-gunmetal-600 dark:text-gunmetal-300 font-inter">
            Naval Station Great Lakes - 1985
          </p>
        </div>
      </div>
      
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Deployment"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-playfair font-bold text-gunmetal-900 dark:text-white mb-2">
            Persian Gulf Deployment
          </h3>
          <p className="text-sm text-gunmetal-600 dark:text-gunmetal-300 font-inter">
            USS Enterprise - 1990
          </p>
        </div>
      </div>
      
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          alt="Ceremony"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="font-playfair font-bold text-gunmetal-900 dark:text-white mb-2">
            Chief Promotion
          </h3>
          <p className="text-sm text-gunmetal-600 dark:text-gunmetal-300 font-inter">
            Promotion Ceremony - 2005
          </p>
        </div>
      </div>
    </div>
  </div>
);

const MessagesTab = () => (
  <div>
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-playfair font-bold text-gunmetal-900 dark:text-white">
        Message Management
      </h2>
      <div className="flex space-x-2">
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-inter font-medium transition-colors duration-200">
          Approve All
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-inter font-medium transition-colors duration-200">
          Moderate
        </button>
      </div>
    </div>
    
    <div className="space-y-4">
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b789?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
              alt="Sarah"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-playfair font-bold text-gunmetal-900 dark:text-white">
                Sarah Anderson
              </h3>
              <p className="text-sm text-gunmetal-600 dark:text-gunmetal-300">Daughter</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-green-500 hover:text-green-600 transition-colors duration-200">
              Approve
            </button>
            <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
              <SafeIcon icon={FiTrash2} className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter">
          "Dad, your service has always been an inspiration to our family. Thank you for showing us what dedication and honor look like."
        </p>
      </div>
      
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80"
              alt="Michael"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="font-playfair font-bold text-gunmetal-900 dark:text-white">
                Michael Thompson
              </h3>
              <p className="text-sm text-gunmetal-600 dark:text-gunmetal-300">Shipmate</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="text-green-500 hover:text-green-600 transition-colors duration-200">
              Approve
            </button>
            <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
              <SafeIcon icon={FiTrash2} className="w-5 h-5" />
            </button>
          </div>
        </div>
        <p className="text-gunmetal-700 dark:text-gunmetal-300 font-inter">
          "Chief, it was an honor serving alongside you. Your leadership made all the difference during our deployment."
        </p>
      </div>
    </div>
  </div>
);

const CapsulesTab = () => (
  <div>
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-playfair font-bold text-gunmetal-900 dark:text-white">
        Time Capsule Management
      </h2>
      <button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-inter font-semibold transition-colors duration-200 flex items-center space-x-2">
        <SafeIcon icon={FiPlus} className="w-5 h-5" />
        <span>Create Capsule</span>
      </button>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-playfair font-bold text-gunmetal-900 dark:text-white">
            Letter to Future Sailors
          </h3>
          <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
            Locked
          </span>
        </div>
        <p className="text-gunmetal-600 dark:text-gunmetal-300 font-inter mb-4">
          Unlock Date: May 15, 2025
        </p>
        <div className="flex space-x-2">
          <button className="text-gold-500 hover:text-gold-600 transition-colors duration-200">
            <SafeIcon icon={FiEdit} className="w-5 h-5" />
          </button>
          <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
            <SafeIcon icon={FiTrash2} className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-playfair font-bold text-gunmetal-900 dark:text-white">
            Retirement Reflections
          </h3>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
            Unlocked
          </span>
        </div>
        <p className="text-gunmetal-600 dark:text-gunmetal-300 font-inter mb-4">
          Unlocked: January 1, 2020
        </p>
        <div className="flex space-x-2">
          <button className="text-gold-500 hover:text-gold-600 transition-colors duration-200">
            <SafeIcon icon={FiEdit} className="w-5 h-5" />
          </button>
          <button className="text-red-500 hover:text-red-600 transition-colors duration-200">
            <SafeIcon icon={FiTrash2} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
);

const SettingsTab = () => (
  <div>
    <h2 className="text-3xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-8">
      Site Settings
    </h2>
    
    <div className="space-y-8">
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <h3 className="text-xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-4">
          General Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Chief Petty Officer John M. Anderson"
              className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-gunmetal-700 dark:text-gunmetal-300 font-inter font-medium mb-2">
              Service Years
            </label>
            <input
              type="text"
              defaultValue="1985 - 2015"
              className="w-full px-4 py-2 border border-gunmetal-300 dark:border-gunmetal-600 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent bg-white dark:bg-navy-700 text-gunmetal-900 dark:text-white"
            />
          </div>
        </div>
      </div>
      
      <div className="border border-gunmetal-200 dark:border-gunmetal-600 rounded-lg p-6">
        <h3 className="text-xl font-playfair font-bold text-gunmetal-900 dark:text-white mb-4">
          Privacy Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-inter text-gunmetal-700 dark:text-gunmetal-300">
              Allow public messages
            </span>
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg font-inter font-medium transition-colors duration-200">
              Enabled
            </button>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-inter text-gunmetal-700 dark:text-gunmetal-300">
              Moderate comments
            </span>
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg font-inter font-medium transition-colors duration-200">
              Enabled
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-inter font-semibold transition-colors duration-200">
          Save Settings
        </button>
      </div>
    </div>
  </div>
);

export default AdminDashboard;