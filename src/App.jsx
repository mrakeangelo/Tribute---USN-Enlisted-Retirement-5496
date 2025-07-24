import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import StoryBlocks from './components/StoryBlocks';
import WhyIServed from './components/WhyIServed';
import Awards from './components/Awards';
import MessageWall from './components/MessageWall';
import TimeCapsules from './components/TimeCapsules';
import FamilyTribute from './components/FamilyTribute';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
        <div className="bg-gunmetal-50 dark:bg-navy-900 text-gunmetal-900 dark:text-gunmetal-50">
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          <Navigation />
          
          <Routes>
            <Route path="/" element={
              <main className="relative">
                <Hero />
                <Timeline />
                <StoryBlocks />
                <WhyIServed />
                <Awards />
                <MessageWall />
                <TimeCapsules />
                <FamilyTribute />
                <Footer />
              </main>
            } />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;