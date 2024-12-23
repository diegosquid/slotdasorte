import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playSound, preloadAudio } from '../utils/audio';

// Imagens da roleta
const WHEEL_BASE = '/wheel-base.png'; // Imagem da roleta com segmentos
const WHEEL_BORDER = '/wheel-border.png'; // Borda roxa com luzes
const WHEEL_CENTER = '/wheel-center.png'; // Botão central azul

export function SpinningWheel() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showWin, setShowWin] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [attempts, setAttempts] = useState(2);
  
  useEffect(() => {
    preloadAudio();
  }, []);

  const spinWheel = () => {
    if (isSpinning || attempts <= 0) return;
    
    setIsSpinning(true);
    setShowWin(false);
    playSound('SPIN', isMuted);
    setAttempts(prev => prev - 1);
    
    // Garante que a roleta sempre pare no 500%
    const extraSpins = 5;
    const finalRotation = rotation + (360 * extraSpins) + 45; // 45 graus = posição do 500%
    
    setRotation(finalRotation);
    
    setTimeout(() => {
      setIsSpinning(false);
      setShowWin(true);
      playSound('WIN', isMuted);
    }, 5000);
  };

  return (
    <div className="relative">
      {/* Contador de tentativas */}
      <div className="absolute top-4 right-4 bg-[#2a1f6f] text-white px-4 py-2 rounded-lg">
        <div className="text-sm">Attempts</div>
        <div className="text-2xl font-bold text-center">{attempts}</div>
      </div>

      {/* Controle de som */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute top-4 left-4 z-10 text-white p-2 rounded-full bg-[#2a1f6f] hover:bg-[#372985] transition-colors"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Container da roleta */}
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
            src={WHEEL_BASE} 
            alt="" 
            className="w-full h-full"
          />
        </div>
        
        {/* Borda decorativa */}
        <img 
          src={WHEEL_BORDER} 
          alt="" 
          className="absolute inset-0 w-full h-full pointer-events-none"
        />
        
        {/* Botão central */}
        <button
          onClick={spinWheel}
          disabled={isSpinning || attempts <= 0}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[#007bff] hover:bg-[#0056b3] transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-blue-300 flex items-center justify-center"
        >
          <img 
            src={WHEEL_CENTER} 
            alt="SPIN" 
            className="w-full h-full"
          />
        </button>
      </div>

      {/* Modal de vitória */}
      {showWin && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-[#2a1f6f] p-8 rounded-lg text-center transform animate-scale-in">
            <h2 className="text-4xl font-bold mb-4 text-[#ffd700]">🎉 CONGRATULATIONS! 🎉</h2>
            <p className="text-2xl text-white">You won a 500% bonus!</p>
            <button
              onClick={() => setShowWin(false)}
              className="mt-6 px-6 py-2 bg-[#ffd700] text-black font-bold rounded-full hover:bg-[#ffed4a] transition-colors"
            >
              Claim Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}