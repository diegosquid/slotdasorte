import React from 'react';
import { WheelDisplay } from './WheelDisplay';
import { AttemptsCounter } from './AttemptsCounter';
import { SoundControl } from './SoundControl';
import { WinModal } from './WinModal';
import { useWheel } from './useWheel';

export function SpinningWheel() {
  const {
    rotation,
    isSpinning,
    showWin,
    isMuted,
    attempts,
    spinWheel,
    setIsMuted,
    closeWinModal
  } = useWheel();

  return (
    <div className="relative">
      <AttemptsCounter attempts={attempts} />
      <SoundControl isMuted={isMuted} onToggle={() => setIsMuted(!isMuted)} />
      
      <WheelDisplay
        rotation={rotation}
        isSpinning={isSpinning}
        disabled={isSpinning || attempts <= 0}
        onSpin={spinWheel}
      />

      <WinModal show={showWin} onClose={closeWinModal} />
    </div>
  );
}