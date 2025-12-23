
import React from 'react';
import { motion } from 'framer-motion';

const RADDiagram: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <motion.h3 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-[#D14D96] mb-16 text-center uppercase tracking-tight"
      >
        Rapid Application Development (RAD)
      </motion.h3>
      
      <div className="relative w-full max-w-7xl flex items-center justify-between gap-0">
        {/* Requirements Planning Arrow */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative flex-[1.2] h-24 bg-[#BFDBFE] rounded-l-2xl flex items-center pl-10 shadow-[10px_10px_30px_rgba(0,0,0,0.3)] z-0"
        >
          <span className="text-blue-900 font-black text-xl md:text-2xl leading-none">Requirements<br/>Planning</span>
          <div className="absolute top-0 -right-8 w-0 h-0 border-t-[48px] border-t-transparent border-b-[48px] border-b-transparent border-l-[32px] border-l-[#BFDBFE]"></div>
        </motion.div>

        {/* User Design Iterative Core */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15, delay: 0.4 }}
          className="relative z-30 mx-[-20px]"
        >
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border-[6px] border-gray-900 bg-[#020617] flex items-center justify-center relative shadow-[0_0_60px_rgba(209,77,150,0.2)]">
            {/* Iterative Arrows Circle */}
            <svg className="absolute inset-0 w-full h-full rotate-[-10deg]" viewBox="0 0 100 100">
              <defs>
                <marker id="pink-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#D14D96" />
                </marker>
                <marker id="blue-head" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#3B82F6" />
                </marker>
              </defs>
              {/* Upper pink arrow */}
              <path d="M 20,40 A 35,35 0 0,1 80,40" fill="none" stroke="#D14D96" strokeWidth="2.5" markerEnd="url(#pink-head)" />
              {/* Lower blue arrow */}
              <path d="M 80,65 A 35,35 0 0,1 20,65" fill="none" stroke="#3B82F6" strokeWidth="2.5" markerEnd="url(#blue-head)" />
            </svg>
            
            <div className="text-center z-10 px-4">
              <motion.p 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#D14D96] font-black text-3xl md:text-5xl uppercase tracking-tighter"
              >
                User Design
              </motion.p>
            </div>

            {/* Stage Labels */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-black text-sm md:text-lg uppercase tracking-widest bg-gray-900/80 px-4 py-1 rounded-full border border-white/10">Prototype</div>
            <div className="absolute bottom-10 left-6 text-white font-black text-sm md:text-lg uppercase tracking-widest bg-gray-900/80 px-4 py-1 rounded-full border border-white/10">Refine</div>
            <div className="absolute bottom-10 right-10 text-white font-black text-sm md:text-lg uppercase tracking-widest bg-gray-900/80 px-4 py-1 rounded-full border border-white/10">Test</div>
          </div>
        </motion.div>

        {/* Construction Arrow */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative flex-1 h-24 bg-[#2563EB] flex items-center justify-center shadow-[10px_10px_30px_rgba(0,0,0,0.3)] z-10 pl-4"
        >
          <span className="text-white font-black text-xl md:text-2xl uppercase tracking-widest">Construction</span>
          <div className="absolute top-0 -right-8 w-0 h-0 border-t-[48px] border-t-transparent border-b-[48px] border-b-transparent border-l-[32px] border-l-[#2563EB]"></div>
        </motion.div>

        {/* Cutover Arrow */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="relative flex-1 h-24 bg-[#1D4ED8] rounded-r-2xl flex items-center justify-center shadow-[10px_10px_30px_rgba(0,0,0,0.3)] z-0 pl-4"
        >
          <span className="text-white font-black text-xl md:text-2xl uppercase tracking-widest">Cutover</span>
        </motion.div>
      </div>
    </div>
  );
};

export default RADDiagram;
