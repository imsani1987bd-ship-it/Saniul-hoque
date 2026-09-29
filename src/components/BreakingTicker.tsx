import React, { useState, useEffect } from 'react';
import { Flame, Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { BREAKING_TICKERS, BREAKING_TICKERS_EN } from '../data/mockNews';

interface BreakingTickerProps {
  lang: 'bn' | 'en';
  onSelectHeadline: (index: number) => void;
}

export const BreakingTicker: React.FC<BreakingTickerProps> = ({
  lang,
  onSelectHeadline,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const headlines = lang === 'bn' ? BREAKING_TICKERS : BREAKING_TICKERS_EN;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, headlines.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % headlines.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + headlines.length) % headlines.length);
  };

  return (
    <div className="bg-red-700 text-white shadow-sm border-b border-red-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-10 overflow-hidden">
        {/* Badge Indicator */}
        <div className="flex items-center gap-1.5 shrink-0 bg-red-800 px-3 py-1 font-bold text-xs uppercase tracking-wider text-white">
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>{lang === 'bn' ? 'ব্রেকিং নিউজ' : 'Breaking'}</span>
        </div>

        {/* Ticker Content */}
        <div
          className="flex-1 px-4 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button
            onClick={() => onSelectHeadline(currentIndex)}
            className="w-full text-left truncate text-xs sm:text-sm font-medium hover:text-amber-200 transition-colors cursor-pointer"
          >
            {headlines[currentIndex]}
          </button>
        </div>

        {/* Ticker Controls */}
        <div className="flex items-center gap-1 shrink-0 text-red-200">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 hover:text-white transition-colors cursor-pointer"
            title={isPaused ? 'Resume' : 'Pause'}
            aria-label="Pause or resume ticker"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={handlePrev}
            className="p-1 hover:text-white transition-colors cursor-pointer"
            title="Previous"
            aria-label="Previous headline"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleNext}
            className="p-1 hover:text-white transition-colors cursor-pointer"
            title="Next"
            aria-label="Next headline"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
