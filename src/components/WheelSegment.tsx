import React from 'react';

interface WheelSegmentProps {
  text: string;
  index: number;
  totalSegments: number;
}

export function WheelSegment({ text, index, totalSegments }: WheelSegmentProps) {
  const rotation = (360 / totalSegments) * index;
  
  return (
    <div
      className="absolute w-full h-full"
      style={{
        transform: `rotate(${rotation}deg)`,
        transformOrigin: '50% 50%',
      }}
    >
      <div 
        className="absolute w-full h-full"
        style={{
          clipPath: `polygon(50% 50%, 50% 0%, ${50 + Math.cos(Math.PI / totalSegments) * 50}% ${50 - Math.sin(Math.PI / totalSegments) * 50}%)`,
          background: '#1a1b25',
          borderLeft: '2px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div 
          className="absolute left-1/2 top-[20%] -translate-x-1/2 text-center"
          style={{ transform: `rotate(-${rotation}deg)` }}
        >
          <div className="text-[#ffd700] text-lg font-bold">{text}</div>
        </div>
      </div>
    </div>
  );
}