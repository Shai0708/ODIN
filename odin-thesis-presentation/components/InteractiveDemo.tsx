
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InteractiveDemo: React.FC = () => {
  const [detected, setDetected] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const objects = [
    { id: 'chair', name: 'Chair', x: 20, y: 30, color: 'bg-yellow-500' },
    { id: 'person', name: 'Person Walking', x: 60, y: 50, color: 'bg-blue-500' },
    { id: 'door', name: 'Glass Door (Ultrasonic Only)', x: 40, y: 80, color: 'bg-cyan-500' }
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const found = objects.find(obj => 
      Math.abs(obj.x - x) < 10 && Math.abs(obj.y - y) < 10
    );

    if (found) {
      if (detected !== found.name) {
        setDetected(found.name);
        const synth = window.speechSynthesis;
        if (!synth.speaking) {
          const utterance = new SpeechSynthesisUtterance(found.name);
          utterance.rate = 1.8;
          synth.speak(utterance);
        }
      }
    } else {
      setDetected(null);
    }
  };

  return (
    <div className="flex flex-col gap-4 h-full max-h-full overflow-hidden">
      <div className="flex justify-between items-center bg-blue-900/20 p-4 md:p-6 rounded-3xl border border-blue-500/30 flex-none">
        <p className="text-base md:text-xl text-blue-300">Hover the feed below to simulate ODIN's detection scan.</p>
        <div className="flex items-center gap-4">
          <div className={`w-4 h-4 md:w-6 md:h-6 rounded-full animate-pulse ${detected ? 'bg-red-500 shadow-[0_0_15px_red]' : 'bg-green-500 shadow-[0_0_15px_green]'}`}></div>
          <span className="text-sm md:text-lg font-mono uppercase tracking-widest font-black">{detected ? 'Target Found' : 'Scanning'}</span>
        </div>
      </div>

      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative flex-1 bg-gray-900 rounded-[3rem] overflow-hidden border-4 border-gray-800 cursor-crosshair group min-h-[200px]"
      >
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="h-full w-px bg-blue-500 absolute left-1/4"></div>
          <div className="h-full w-px bg-blue-500 absolute left-2/4"></div>
          <div className="h-full w-px bg-blue-500 absolute left-3/4"></div>
          <div className="w-full h-px bg-blue-500 absolute top-1/4"></div>
          <div className="w-full h-px bg-blue-500 absolute top-2/4"></div>
          <div className="w-full h-px bg-blue-500 absolute top-3/4"></div>
        </div>

        {objects.map(obj => (
          <div 
            key={obj.id}
            style={{ left: `${obj.x}%`, top: `${obj.y}%` }}
            className={`absolute w-16 h-16 md:w-24 md:h-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-xl opacity-20 transition-all group-hover:opacity-40 ${obj.color}`}
          ></div>
        ))}

        <AnimatePresence>
          {detected && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 px-8 py-3 rounded-full shadow-2xl flex items-center gap-4 border-2 border-blue-400 z-10"
            >
              <svg className="w-6 h-6 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M12 4v2m0 14v2m8-8h-2M6 12H4m14 0l-1 1" />
              </svg>
              <span className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">{detected}</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default InteractiveDemo;
