
import React from 'react';
import { motion as m } from 'framer-motion';

// Fix for motion props type errors
const motion = m as any;

const Challenges: React.FC = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-pink-900/5 z-0 pointer-events-none skew-y-3 transform scale-110"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl text-pink-800 mb-8 italic">Through the Quiet Storms</h2>
          <p className="font-serif text-lg md:text-xl text-pink-700/80 leading-relaxed max-w-2xl mx-auto">
            Eight years haven't always been easy. We've weathered the distances, the long days apart, the misunderstandings, and the challenges life threw our way. 
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30"
            >
              <h4 className="font-display text-xl text-pink-900 mb-4 italic">Distance</h4>
              <p className="font-serif text-pink-800/70">The miles that tried to keep us apart only proved that our connection knows no physical bounds.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30"
            >
              <h4 className="font-display text-xl text-pink-900 mb-4 italic">Growth</h4>
              <p className="font-serif text-pink-800/70">Even when it hurt to change, we grew together instead of apart. That is our superpower.</p>
            </motion.div>
          </div>
          <p className="mt-12 font-script text-4xl text-pink-800">
            "And I would do it all over again."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Challenges;
