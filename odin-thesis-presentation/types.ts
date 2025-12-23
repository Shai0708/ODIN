
import React from 'react';

export interface SlideData {
  id: number;
  chapter?: string;
  title: string;
  content: React.ReactNode;
  summary?: string; // For TTS narration
  type?: 'standard' | 'interactive' | 'technical' | 'intro';
}
