import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface SoundControlProps {
  isMuted: boolean;
  onToggle: () => void;
}

export function SoundControl({ isMuted, onToggle }: SoundControlProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 left-4 z-10 text-white p-2 rounded-full bg-[#2a1f6f] hover:bg-[#372985] transition-colors shadow-lg"
    >
      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </button>
  );
}