import React from 'react';
import { motion } from 'framer-motion';

const ConceptualFramework: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 20 } }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 max-h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-7xl relative h-full max-h-[72vh]">
        {/* INPUT COLUMN */}
        <motion.div 
          variants={cardVariants}
          className="border-2 border-white/60 rounded-none p-3 bg-black/40 text-white flex flex-col gap-2 shadow-[4px_4px_0px_rgba(255,255,255,0.15)] overflow-hidden"
        >
          <h3 className="text-base md:text-lg font-black text-center uppercase tracking-[0.15em] border-b-2 border-white/20 pb-1.5 flex-none">Input</h3>
          <div className="flex-1 text-[11px] md:text-xs space-y-2 font-sans leading-tight overflow-y-auto custom-scrollbar pr-1">
            <div className="bg-white/5 p-2 rounded-lg border border-white/5">
              <p className="font-black text-blue-400 mb-0.5 uppercase tracking-tighter text-[10px]">Sensor Inputs</p>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-300">
                <li>Smartphone Camera</li>
                <li>Ultrasonic Sensors (HC-SR04 Array, BLE)</li>
                <li>Integrated (GPS, Accel, Compass, Gyro)</li>
              </ul>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/5">
              <p className="font-black text-blue-400 mb-0.5 uppercase tracking-tighter text-[10px]">User Inputs</p>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-300">
                <li>Voice Commands / Requests</li>
                <li>System Control & Settings</li>
                <li>Gesture, Touch, Physical Manipulation</li>
              </ul>
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-white/5">
              <p className="font-black text-blue-400 mb-0.5 uppercase tracking-tighter text-[10px]">Context</p>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-300">
                <li>Location, Environment, Weather, Acoustic</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* PROCESS COLUMN */}
        <motion.div 
          variants={cardVariants}
          className="border-2 border-white/60 rounded-none p-3 bg-black/40 text-white flex flex-col gap-2 shadow-[4px_4px_0px_rgba(255,255,255,0.15)] overflow-hidden"
        >
          <h3 className="text-base md:text-lg font-black text-center uppercase tracking-[0.15em] border-b-2 border-white/20 pb-1.5 flex-none">Process</h3>
          <div className="flex-1 text-[11px] md:text-xs space-y-2 font-sans leading-tight overflow-y-auto custom-scrollbar pr-1">
            <div className="text-center mb-1">
              <p className="font-black text-emerald-400 uppercase text-sm">RAD Lifecycle</p>
            </div>
            <ul className="space-y-1.5">
              <li className="pl-3 border-l-2 border-emerald-500/50 py-1 bg-white/5 rounded-r-lg">
                <span className="font-black text-white block uppercase text-[10px]">Phase 1: Planning</span>
                <span className="text-gray-400">Stakeholder analysis and user needs.</span>
              </li>
              <li className="pl-3 border-l-2 border-emerald-500/50 py-1 bg-white/5 rounded-r-lg">
                <span className="font-black text-white block uppercase text-[10px]">Phase 2: User Design</span>
                <span className="text-gray-400">Iterative prototyping and design sessions.</span>
              </li>
              <li className="pl-3 border-l-2 border-emerald-500/50 py-1 bg-white/5 rounded-r-lg">
                <span className="font-black text-white block uppercase text-[10px]">Phase 3: Construction</span>
                <span className="text-gray-400">Sensor integration and algorithm build.</span>
              </li>
              <li className="pl-3 border-l-2 border-emerald-500/50 py-1 bg-white/5 rounded-r-lg">
                <span className="font-black text-white block uppercase text-[10px]">Phase 4: Cutover</span>
                <span className="text-gray-400">Deployment, testing, and system transition.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* OUTPUT COLUMN */}
        <motion.div 
          variants={cardVariants}
          className="border-2 border-white/60 rounded-none p-3 bg-black/40 text-white flex flex-col gap-2 shadow-[4px_4px_0px_rgba(255,255,255,0.15)]"
        >
          <h3 className="text-base md:text-lg font-black text-center uppercase tracking-[0.15em] border-b-2 border-white/20 pb-1.5">Output</h3>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
            <motion.div 
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-blue-600/10 border border-blue-500/30 p-4 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.1)]"
            >
              <p className="text-base md:text-lg font-black leading-tight uppercase text-blue-400">
                ODIN Assistant
              </p>
              <p className="text-[10px] md:text-xs text-gray-300 mt-2 font-medium">
                Obstacle Detection and Intelligent Navigation Aid for Visually Impaired Individuals
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Connecting Arrows */}
        <div className="hidden md:block absolute top-1/2 left-[31.5%] -translate-y-1/2 text-white/30 text-3xl font-serif">→</div>
        <div className="hidden md:block absolute top-1/2 left-[65.5%] -translate-y-1/2 text-white/30 text-3xl font-serif">→</div>
      </div>

      {/* Feedback Loop */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 flex items-center gap-4 w-full max-w-6xl justify-center relative flex-none"
      >
        <div className="absolute top-0 left-[18%] w-[64%] h-6 border-l-2 border-r-2 border-b-2 border-dashed border-white/20 -translate-y-1/2 rounded-b-2xl"></div>
        <div className="px-8 py-1.5 border-2 border-white/40 bg-gray-900 text-xs font-black uppercase tracking-[0.4em] text-white shadow-lg z-10 rounded-full">
           Feedback Loop
        </div>
      </motion.div>
    </div>
  );
};

export default ConceptualFramework;
