
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  accentColor?: string;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ 
  title, 
  children, 
  defaultOpen = false,
  accentColor = "blue"
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const colors: Record<string, string> = {
    blue: "border-blue-500/30 text-blue-400 bg-blue-900/10",
    cyan: "border-cyan-500/30 text-cyan-400 bg-cyan-900/10",
    emerald: "border-emerald-500/30 text-emerald-400 bg-emerald-900/10",
    purple: "border-purple-500/30 text-purple-400 bg-purple-900/10",
  };

  const activeColor = colors[accentColor] || colors.blue;

  return (
    <div className={`border rounded-xl overflow-hidden mb-3 transition-all duration-300 ${isOpen ? 'ring-1 ring-blue-500/20' : ''} bg-gray-900/20`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/5 ${isOpen ? activeColor : 'border-transparent text-gray-300'}`}
      >
        <span className="text-base font-bold uppercase tracking-wider">{title}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="w-6 h-6 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-5 pt-0 text-base md:text-lg leading-relaxed text-gray-400 border-t border-white/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapsibleSection;
