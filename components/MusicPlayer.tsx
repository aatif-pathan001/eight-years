
import React, { useState, useRef } from 'react';
import { motion as m } from 'framer-motion';
import { Music, Volume2, VolumeX } from 'lucide-react';

// Fix for motion props type errors
const motion = m as any;

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("User interaction needed for audio"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.5 }}
      className="fixed bottom-8 right-8 z-40"
    >
      <button
        onClick={togglePlay}
        className="group relative flex items-center gap-3 bg-white/40 backdrop-blur-md border border-pink-200 p-3 rounded-full shadow-lg hover:bg-white/60 transition-all overflow-hidden"
      >
        <div className="relative z-10 p-2 bg-pink-400 text-white rounded-full">
          {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </div>
        <span className="font-serif text-sm text-pink-800 pr-4 hidden md:block">
          {isPlaying ? "Our Song Playing" : "Tap for Music"}
        </span>
        
        {/* Subtle Visualizer Animation */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-[2px] opacity-20 pointer-events-none">
            {[1, 2, 3, 4, 5].map(i => (
              <motion.div
                key={i}
                animate={{ height: [4, 12, 4] }}
                transition={{ duration: 0.5 + i * 0.1, repeat: Infinity }}
                className="w-[2px] bg-pink-800"
              />
            ))}
          </div>
        )}
      </button>

      {/* Using a placeholder romantic royalty-free track URL or silent loop if none provided */}
      <audio
        ref={audioRef}
        loop
        src="song.mp3" // Placeholder romantic-style instrumental
      />
    </motion.div>
  );
};

export default MusicPlayer;
