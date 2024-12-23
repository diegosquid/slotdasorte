import React from 'react';

interface SlotReelProps {
  symbols: string[];
  spinning: boolean;
  stopIndex: number;
  delay: number;
}

export function SlotReel({ symbols, spinning, stopIndex, delay }: SlotReelProps) {
  return (
    <div className="relative flex-1 h-[72px] sm:h-20 md:h-24 bg-gradient-to-b from-[#1a1b25] to-[#2a1f6f] overflow-hidden rounded-lg border-2 sm:border-4 border-[#ffd700] shadow-lg shadow-black/50">
      {/* Highlight effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent h-1/2 pointer-events-none" />
      
      <div
        className="absolute w-full transition-transform"
        style={{
          transitionDuration: spinning ? '3000ms' : '200ms',
          transitionTimingFunction: spinning 
            ? 'cubic-bezier(.17,.67,.83,.67)'
            : 'cubic-bezier(0,0,0.2,1)',
          transform: spinning
            ? `translateY(-${(symbols.length * 30) * 72}px)`
            : `translateY(-${stopIndex * 72}px)`,
          transitionDelay: `${delay}ms`,
        }}
      >
        {[...Array(20)].flatMap(() => symbols).map((symbol, index) => (
          <div
            key={index}
            className="h-[72px] sm:h-20 md:h-24 flex items-center justify-center text-xs sm:text-xl md:text-2xl font-bold text-white px-1 sm:px-2 text-center transition-all"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.5)',
              background: index % 2 ? 'rgba(255,255,255,0.08)' : 'transparent',
              transform: `scale(${spinning ? '0.95' : '1'})`,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {symbol}
          </div>
        ))}
      </div>
    </div>
  );
}