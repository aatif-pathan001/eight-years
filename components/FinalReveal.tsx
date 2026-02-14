
import React, { useState } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';

// Fix for motion props type errors
const motion = m as any;

const FinalReveal: React.FC = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="max-w-4xl w-full text-center">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <p className="font-serif text-pink-600 italic mb-12 opacity-80">
                I have one more thing to tell you...
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(255 182 193 / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setRevealed(true)}
                className="px-12 py-5 bg-gradient-to-r from-pink-400 to-pink-500 text-white font-serif text-lg rounded-full shadow-2xl transition-all"
              >
                Click for My Final Promise
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="promise"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="space-y-12"
            >
              <h2 className="font-script text-5xl md:text-7xl text-pink-800 leading-tight">
                "If I had to choose again 8 years ago, I would still choose you. In every life."
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1.5 }}
                className="font-serif text-2xl text-pink-600/70"
              >
                Thank you for being my today, and all of my tomorrows.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
                className="pt-12"
              >
                <div className="w-16 h-[1px] bg-pink-300 mx-auto mb-6"></div>
                <p className="font-script text-5xl text-pink-800">— Your Forever Love ❤️</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalReveal;
