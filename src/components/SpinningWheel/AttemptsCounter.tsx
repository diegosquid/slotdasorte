import React from 'react';

interface AttemptsCounterProps {
  attempts: number;
}

export function AttemptsCounter({ attempts }: AttemptsCounterProps) {
  return (
    <div className="absolute top-4 right-4 bg-[#2a1f6f] text-white px-4 py-2 rounded-lg shadow-lg">
      <div className="text-sm opacity-80">Tentativas</div>
      <div className="text-2xl font-bold text-center">{attempts}</div>
    </div>
  );
}