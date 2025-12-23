
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideData } from '../types';

interface SlideProps {
  data: SlideData;
  isActive: boolean;
  direction: number;
}

const Slide: React.FC<SlideProps> = ({ data, isActive, direction }) => {
  const isIntroOrTitle = 
    data.chapter === "Title Slide" || 
    data.chapter === "Closing" || 
    data.type === 'intro';

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div 
          initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -500 : 500, opacity: 0 }}
          transition={{ type: 'spring', damping: 35, stiffness: 200 }}
          className="absolute inset-0 flex flex-col p-6 md:p-8 lg:p-10 overflow-hidden bg-gray-950/40"
        >
          {/* Header for Content Slides */}
          {!isIntroOrTitle && (
            <div className="flex-none mb-4 md:mb-6">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 mb-2"
              >
                {data.chapter && (
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-md font-black text-[10px] md:text-xs uppercase border border-blue-500/30 tracking-[0.3em]">
                    {data.chapter}
                  </span>
                )}
                <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-500/40 via-blue-500/10 to-transparent"></div>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight border-l-8 border-blue-600 pl-4 py-1"
              >
                {data.title}
              </motion.h2>
            </div>
          )}

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="flex-1 flex flex-col justify-center min-h-0 relative z-10"
          >
            <div className={`w-full h-full flex flex-col justify-center ${!isIntroOrTitle ? 'text-gray-100' : ''} custom-scrollbar overflow-y-auto pr-2`}>
               {data.content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Slide;
