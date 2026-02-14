
import React from 'react';
import { motion as m } from 'framer-motion';
import { Heart } from 'lucide-react';

// Fix for motion props type errors
const motion = m as any;

const years = [
  { year: "2019", text: "The year it all began. That first nervous 'hello' that changed everything." },
  { year: "2020", text: "Learning our rhythms, the late night talks, and realizing this was different." },
  { year: "2021", text: "Building dreams together. Discovering our favorite places and hidden jokes." },
  { year: "2022", text: "Facing the quiet world together. You were the light in a difficult year." },
  { year: "2023", text: "First time seeing you with my own eyes. Our First Hug and First Kiss." },
  { year: "2024", text: "Your First Birthday, celebrated together and my longest time with you." },
  { year: "2025", text: "Deeper understanding, unwavering support, and so much more." },
  { year: "2026", text: "Eight years of choosing you, over and over again." },
];

const Timeline: React.FC = () => {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto overflow-hidden">
      <h2 className="font-display text-4xl text-center text-pink-800 mb-20 relative">
        Our Journey
        <span className="block w-12 h-1 bg-pink-300 mx-auto mt-4 rounded-full"></span>
      </h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200 hidden md:block"></div>

        <div className="space-y-16 md:space-y-24">
          {years.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Year Bubble */}
              <div className="z-10 bg-white shadow-xl shadow-pink-100 border border-pink-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 md:mb-0 md:mx-12 shrink-0">
                <span className="font-display font-bold text-pink-500">{item.year}</span>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 px-6 py-8 bg-white/40 backdrop-blur-sm border border-pink-100/50 rounded-2xl shadow-sm ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`flex items-center gap-2 mb-3 justify-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
                </div>
                <p className="font-serif text-lg text-pink-900/70 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
