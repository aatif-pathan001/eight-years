
import React from 'react';
import { motion as m } from 'framer-motion';

// Fix for motion props type errors
const motion = m as any;

const LoveLetter: React.FC = () => {
  const text = "Looking back at these past eight years, it feels like a lifetime and a heartbeat all at once. We've grown from who we were into who we are now, navigating every high and low with a hand held tight. Thank you for choosing me every single day, for seeing the parts of me I tried to hide, and for loving me through it all. You are my home, my anchor, and my greatest adventure. Eight years down, and I still can't wait to see what tomorrow brings with you.";

  const sentenceVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="letter" className="py-24 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl w-full bg-white/30 backdrop-blur-xl border border-white/40 rounded-[2rem] p-8 md:p-16 shadow-2xl shadow-pink-100/50 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-6 opacity-20">
          <svg width="120" height="120" viewBox="0 0 100 100" className="text-pink-400">
             <path d="M50 30 C50 10, 20 10, 20 35 C20 60, 50 80, 50 85 C50 80, 80 60, 80 35 C80 10, 50 10, 50 30" fill="currentColor" />
          </svg>
        </div>

        <h3 className="font-script text-4xl text-pink-800 mb-8">Dearest Love,</h3>
        
        <div className="space-y-6">
          {text.split('. ').map((sentence, i) => (
            <motion.p
              key={i}
              variants={sentenceVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: i * 0.4, duration: 1 }}
              viewport={{ once: true }}
              className="font-serif text-lg md:text-xl leading-relaxed text-pink-900/80"
            >
              {sentence}{i < text.split('. ').length - 1 ? '.' : ''}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-right"
        >
          <p className="font-serif italic text-pink-700">Always yours,</p>
          <p className="font-script text-3xl text-pink-800 mt-2">Your Forever Person</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
