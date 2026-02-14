
import React from 'react';
import { motion as m } from 'framer-motion';

// Fix for motion props type errors
const motion = m as any;

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl"
      >
        <h2 className="font-serif text-pink-400 tracking-[0.3em] uppercase text-sm mb-6 opacity-80">
          Our Anniversary
        </h2>
        <h1 className="font-script text-7xl md:text-9xl text-pink-800 mb-6 drop-shadow-sm">
          Eight Years. Still You.
        </h1>
        <p className="font-serif text-lg md:text-xl text-pink-600/70 italic max-w-lg mx-auto mb-10 leading-relaxed">
          "If I had a flower for every time I thought of you... I could walk through my garden forever."
        </p>
        
        <motion.button
          onClick={() => document.getElementById('letter')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="group relative inline-flex items-center justify-center"
        >
          <span className="absolute inset-0 w-full h-full bg-pink-100/50 rounded-full blur-xl group-hover:bg-pink-200/60 transition-all"></span>
          <span className="relative px-8 py-3 bg-white/40 border border-pink-200 backdrop-blur-md rounded-full font-serif text-pink-800 tracking-wide hover:bg-pink-50 transition-colors">
            Open My Heart
          </span>
        </motion.button>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-pink-400 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
