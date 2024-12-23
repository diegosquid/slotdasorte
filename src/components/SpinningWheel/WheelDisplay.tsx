import React from 'react';

const PRIZES = [
  { text: '70 GIROS GRÁTIS', color: '#1a1b25' },
  { text: 'SEM PRÊMIO', color: '#1a1b25' },
  { text: 'BÔNUS 500%', color: '#1a1b25' },
  { text: 'TENTE NOVAMENTE', color: '#1a1b25' },
  { text: '50 GIROS GRÁTIS', color: '#1a1b25' },
  { text: 'BÔNUS 500%', color: '#1a1b25' },
  { text: 'SEM PRÊMIO', color: '#1a1b25' },
  { text: 'TENTE NOVAMENTE', color: '#1a1b25' },
];

interface WheelDisplayProps {
  rotation: number;
  isSpinning: boolean;
  disabled: boolean;
  onSpin: () => void;
}

export function WheelDisplay({ rotation, isSpinning, disabled, onSpin }: WheelDisplayProps) {
  return (
    <div className="relative w-[400px] h-[400px] mx-auto">
      {/* Base da roleta com segmentos */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: isSpinning ? 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none',
        }}
      >
        <img 
          src="/wheel-base.png"
          alt="" 
          className="w-full h-full object-contain"
          draggable="false"
        />
        
        {/* Textos dos prêmios */}
        {PRIZES.map((prize, index) => {
          const angle = (360 / PRIZES.length) * index;
          return (
            <div
              key={index}
              className="absolute w-full h-full flex items-center justify-center"
              style={{
                transform: `rotate(${angle}deg)`,
              }}
            >
              <div 
                className="absolute text-center"
                style={{
                  transform: 'translateY(-120px) rotate(180deg)',
                  color: '#ffd700',
                  fontWeight: 'bold',
                  textShadow: '0 0 4px rgba(0,0,0,0.5)',
                  fontSize: '14px',
                  width: '120px'
                }}
              >
                {prize.text}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Borda decorativa */}
      <img 
        src="/wheel-border.png"
        alt="" 
        className="absolute inset-0 w-full h-full pointer-events-none object-contain"
        draggable="false"
      />
      
      {/* Botão central */}
      <button
        onClick={onSpin}
        disabled={disabled}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none group"
      >
        <div className="absolute inset-0 bg-blue-500 rounded-full blur-md group-hover:blur-lg transition-all opacity-50"></div>
        <div className="relative bg-[#007bff] hover:bg-[#0056b3] rounded-full w-full h-full flex items-center justify-center font-bold text-white text-2xl shadow-lg">
          GIRAR
        </div>
      </button>
    </div>
  );
}