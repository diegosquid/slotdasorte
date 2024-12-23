import React from 'react';

interface WinModalProps {
  show: boolean;
  onClose: () => void;
}

export function WinModal({ show, onClose }: WinModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-[#2a1f6f] p-8 rounded-lg text-center transform animate-scale-in shadow-2xl">
        <h2 className="text-4xl font-bold mb-4 text-[#ffd700]">🎉 PARABÉNS! 🎉</h2>
        <p className="text-2xl text-white">Você ganhou um bônus de 500%!</p>
        <button
          onClick={onClose}
          className="mt-6 px-8 py-3 bg-[#ffd700] text-black font-bold rounded-full hover:bg-[#ffed4a] transition-all transform hover:scale-105 active:scale-95"
        >
          Resgatar Agora
        </button>
      </div>
    </div>
  );
}