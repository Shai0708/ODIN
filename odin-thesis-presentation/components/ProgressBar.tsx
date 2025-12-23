
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <div className="fixed bottom-0 left-0 w-full h-1.5 bg-gray-800 z-50">
      <div 
        className="h-full bg-blue-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
