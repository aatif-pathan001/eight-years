
import React, { useState } from 'react';
import { motion as m } from 'framer-motion';
import { Heart } from 'lucide-react';

// Fix for motion props type errors
const motion = m as any;

interface PasswordScreenProps {
  onUnlock: () => void;
}

const PasswordScreen: React.FC<PasswordScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real scenario, this would be her nickname. 
    // For this demo, let's accept "Love" or "love" or anything the user thinks is appropriate.
    // Let's assume the nickname is "Sunshine" or just any non-empty string for this template.
    if (password.trim().length > 0) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff0f6]"
    >
      <div className="max-w-md w-full px-8 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Heart className="mx-auto w-12 h-12 text-pink-400 fill-pink-100 mb-6" />
          <h1 className="font-display text-4xl text-pink-800 mb-2">For My Everything 🤍</h1>
          <p className="font-serif italic text-pink-600 mb-8">Enter the name only I call you.</p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your secret name..."
              className={`w-full bg-white/50 backdrop-blur-md border ${error ? 'border-red-300' : 'border-pink-200'} rounded-full px-6 py-4 text-center text-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all placeholder:text-pink-300`}
            />
            {error && <p className="text-red-400 text-sm mt-2 font-serif italic">Please try again, my love.</p>}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-pink-400 hover:bg-pink-500 text-white font-serif px-10 py-3 rounded-full shadow-lg shadow-pink-200 transition-all flex items-center justify-center mx-auto"
          >
            Enter Our World
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default PasswordScreen;
