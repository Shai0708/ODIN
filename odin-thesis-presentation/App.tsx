
import React, { useState, useEffect, useCallback } from 'react';
import Slide from './components/Slide';
import ProgressBar from './components/ProgressBar';
import { slides } from './data';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isNarrating, setIsNarrating] = useState(false);

  const navigate = useCallback((target: number) => {
    setDirection(target > currentSlide ? 1 : -1);
    setCurrentSlide(target);
    window.speechSynthesis.cancel();
    setIsNarrating(false);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) navigate(currentSlide + 1);
  }, [currentSlide, navigate]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) navigate(currentSlide - 1);
  }, [currentSlide, navigate]);

  const toggleNarration = () => {
    if (isNarrating) {
      window.speechSynthesis.cancel();
      setIsNarrating(false);
    } else {
      const summary = slides[currentSlide].summary;
      if (summary) {
        const utterance = new SpeechSynthesisUtterance(summary);
        utterance.onend = () => setIsNarrating(false);
        window.speechSynthesis.speak(utterance);
        setIsNarrating(true);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight': 
        case ' ': // Correctly handle spacebar
          nextSlide(); 
          break;
        case 'ArrowLeft': 
          prevSlide(); 
          break;
        case 's': 
        case 'S': 
          toggleNarration(); 
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, isNarrating]);

  return (
    <div className="relative h-screen w-screen bg-gray-950 overflow-hidden font-sans text-white flex flex-col">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <header className="fixed top-0 left-0 w-full p-6 md:p-8 z-50 flex justify-between items-center pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded-lg font-bold text-white neon-glow">O</div>
          <span className="font-mono text-xs tracking-widest text-gray-500 uppercase">ODIN Assistive Tech v3.0</span>
        </div>
        <div className="pointer-events-auto">
           <button 
             onClick={toggleNarration}
             className={`p-3 rounded-full border transition-all ${isNarrating ? 'bg-blue-600 border-blue-400 animate-pulse' : 'bg-gray-900/50 border-gray-700 hover:border-blue-500'}`}
             title="Toggle Narration (S)"
           >
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
           </button>
        </div>
      </header>

      <main className="relative z-10 flex-1 w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <Slide 
            key={slide.id} 
            data={slide} 
            isActive={index === currentSlide} 
            direction={direction}
          />
        ))}
      </main>

      <div className="fixed bottom-12 right-12 flex items-center gap-6 z-50">
        <div className="hidden md:flex flex-col items-end mr-4">
           <span className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em]">Current Chapter</span>
           <span className="text-xs font-mono text-blue-400">{slides[currentSlide].chapter}</span>
        </div>
        
        <div className="flex items-center gap-2 p-1 bg-gray-900/80 backdrop-blur rounded-full border border-gray-800 shadow-2xl pointer-events-auto">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-4 rounded-full hover:bg-gray-800 disabled:opacity-20 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          
          <div className="h-8 w-px bg-gray-800"></div>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-4 rounded-full bg-blue-600 hover:bg-blue-500 disabled:opacity-20 transition-all shadow-lg shadow-blue-500/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>

      <ProgressBar current={currentSlide} total={slides.length} />
    </div>
  );
};

export default App;
