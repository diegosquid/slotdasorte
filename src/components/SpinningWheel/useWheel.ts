import { useState, useEffect } from 'react';
import { playSound, preloadAudio } from '../../utils/audio';

export function useWheel() {
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

  const closeWinModal = () => setShowWin(false);

  return {
    rotation,
    isSpinning,
    showWin,
    isMuted,
    attempts,
    spinWheel,
    setIsMuted,
    closeWinModal
  };
}