
import React from 'react';
import { motion as m } from 'framer-motion';

// Fix for motion props type errors
const motion = m as any;

const Future: React.FC = () => {
  return (
    <section className="py-32 px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <span className="font-serif text-pink-400 uppercase tracking-widest text-xs mb-4 block">To the years ahead</span>
        <h2 className="font-display text-4xl md:text-6xl text-pink-800 mb-10">Our Love Language</h2>
        
        <div className="space-y-8 font-serif text-lg md:text-2xl text-pink-900/60 leading-relaxed italic">
          <p>No meetings.</p>
          <p>No touch.</p>
          <p>No voice in the same room.</p>
          <p>And still —</p>
          <p>we fell in love.</p>
        </div>

        <div className="mt-16 flex justify-center gap-4">
           {[1, 2, 3].map(i => (
             <motion.div
               key={i}
               animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
               transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
               className="w-1.5 h-1.5 bg-pink-400 rounded-full"
             ></motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Future;
