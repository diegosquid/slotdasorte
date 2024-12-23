import { useState, useEffect } from 'react';

const WIN_STATE_KEY = 'slot_machine_win';

export function useWinState() {
  const [hasWon, setHasWon] = useState(() => {
    const savedState = localStorage.getItem(WIN_STATE_KEY);
    return savedState === 'true';
  });
  
  const [showWin, setShowWin] = useState(false);

  useEffect(() => {
    if (hasWon) {
      localStorage.setItem(WIN_STATE_KEY, 'true');
    }
  }, [hasWon]);

  return {
    hasWon,
    setHasWon,
    showWin,
    setShowWin
  };
}