import React, { useState, useEffect } from 'react';
import { useT } from './PropelProvider';

export const QuoteRotator: React.FC = () => {
  const t = useT();
  const quotes = t('quotes') as unknown as string[];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <div className="relative h-32 overflow-hidden">
      {quotes.map((quote, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <blockquote className="text-xl md:text-2xl text-green-800 italic text-center max-w-4xl mx-auto leading-relaxed">
            "{quote}"
          </blockquote>
        </div>
      ))}
    </div>
  );
};