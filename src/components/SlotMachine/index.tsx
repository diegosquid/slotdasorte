import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { SlotReel } from './SlotReel';
import { playSound } from '../../utils/audio';
import { useWinState } from '../../hooks/useWinState';
import { getRegistrationUrl } from '../../utils/url';

const SYMBOLS = [
  'BÔNUS 500%',
  'BÔNUS 200%',
  'TENTE NOVAMENTE',
  '100 GIROS',
  '200 GIROS',
  '50 GIROS',
  '25 GIROS',
  'CASHBACK 50%',
  'CASHBACK 25%',
  'BÔNUS 100%'
];

export function SlotMachine() {
  const [spinning, setSpinning] = useState(false);
  const [attempts, setAttempts] = useState(2);
  const [isMuted, setIsMuted] = useState(false);
  const [reelPositions, setReelPositions] = useState([0, 0, 0]);
  const { hasWon, setHasWon, showWin, setShowWin } = useWinState();
  const [showTryAgain, setShowTryAgain] = useState(false);

  useEffect(() => {
    if (hasWon) {
      setShowWin(true);
    }
  }, []);

  const spin = () => {
    if (spinning || attempts <= 0) return;

    setSpinning(true);
    setShowWin(false);
    playSound('SPIN', isMuted);

    const isWinningAttempt = attempts === 1;
    const winningIndex = SYMBOLS.indexOf('BÔNUS 500%');
    
    const finalPositions = isWinningAttempt
      ? [winningIndex, winningIndex, winningIndex]
      : [
          Math.floor(Math.random() * SYMBOLS.length),
          Math.floor(Math.random() * SYMBOLS.length),
          Math.floor(Math.random() * SYMBOLS.length),
        ];

    setAttempts(prev => prev - 1);

    setTimeout(() => {
      setSpinning(false);
      setReelPositions(finalPositions);
      
      if (isWinningAttempt) {
        setTimeout(() => {
          setShowWin(true);
          setHasWon(true);
          playSound('WIN', isMuted);
        }, 500);
      } else {
        setTimeout(() => {
          setShowTryAgain(true);
        }, 500);
      }
    }, 3000);
  };

  const handleTryAgain = () => {
    setShowTryAgain(false);
    spin();
  };

  return (
    <div className="relative">
      {/* Slot Machine */}
      <div className="bg-black/40 rounded-lg backdrop-blur-sm shadow-2xl">
        <div className="flex justify-between gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
          {[0, 1, 2].map((index) => (
            <SlotReel
              key={index}
              symbols={SYMBOLS}
              spinning={spinning}
              stopIndex={reelPositions[index]}
              delay={index * 200}
            />
          ))}
        </div>

        <button
          onClick={spin}
          disabled={spinning || attempts <= 0}
          className="w-full py-3 sm:py-4 bg-[#007bff] hover:bg-[#0056b3] text-white font-bold text-sm sm:text-base rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        >
          {spinning ? 'Girando...' : 'GIRAR'}
        </button>
      </div>

      {/* Modal de vitória */}
      {showWin && (
        <div className="fixed inset-0 bg-black/80 flex items-start sm:items-center justify-center z-50 animate-fade-in">
          <div className="bg-[#2a1f6f] p-6 sm:p-8 rounded-lg text-center transform animate-scale-in w-full max-w-sm mt-12 sm:mt-0 mx-4">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-[#ffd700]">🎉 PARABÉNS! 🎉</h2>
            <p className="text-xl sm:text-2xl text-white">Você ganhou um bônus de 500%!</p>
            <button
              onClick={() => window.location.href = getRegistrationUrl()}
              className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-[#ffd700] text-black font-bold rounded-full hover:bg-[#ffed4a] transition-all transform hover:scale-105 active:scale-95"
            >
              Resgatar Agora
            </button>
          </div>
        </div>
      )}

      {/* Modal de tentar novamente */}
      {showTryAgain && (
        <div className="fixed inset-0 bg-black/80 flex items-start sm:items-center justify-center z-50 animate-fade-in">
          <div className="bg-[#2a1f6f] p-6 sm:p-8 rounded-lg text-center transform animate-scale-in w-full max-w-sm mt-12 sm:mt-0 mx-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">Não foi dessa vez...</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-6">Mas você ainda tem uma chance!</p>
            <button
              onClick={handleTryAgain}
              className="px-6 sm:px-8 py-2 sm:py-3 bg-[#007bff] text-white font-bold rounded-full hover:bg-[#0056b3] transition-all transform hover:scale-105 active:scale-95"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}