
import React, { useState, useEffect } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import PasswordScreen from './components/PasswordScreen';
import HeartBackground from './components/HeartBackground';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import Challenges from './components/Challenges';
import Future from './components/Future';
import FinalReveal from './components/FinalReveal';
import MusicPlayer from './components/MusicPlayer';

// Fix for motion props type errors
const motion = m as any;

const App: React.FC = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Smooth scroll logic
  useEffect(() => {
    if (isUnlocked) {
      window.scrollTo(0, 0);
    }
  }, [isUnlocked]);

  return (
    <div className="relative min-h-screen selection:bg-pink-200 selection:text-pink-900">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <PasswordScreen key="password" onUnlock={() => setIsUnlocked(true)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-[#fff0f6] via-[#ffd6e8] to-[#ffc2dc]"
          >
            <HeartBackground />
            <MusicPlayer />
            
            <main className="relative z-10 overflow-hidden">
              <Hero />
              <LoveLetter />
              <Timeline />
              <Challenges />
              <Future />
              <FinalReveal />
            </main>

            <footer className="py-12 text-center relative z-10 border-t border-pink-200/30">
              <p className="font-serif italic text-pink-400 opacity-70">
                Happy Valentine's Day, Baby
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
