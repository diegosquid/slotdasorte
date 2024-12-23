// Map of preloaded audio elements
const audioCache: { [key: string]: HTMLAudioElement } = {};

// List of all sound effects used in the app
export const SOUND_EFFECTS = {
  SPIN: '/sounds/spin.mp3',
  WIN: 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3',
} as const;

// Preload all audio files
export function preloadAudio() {
  Object.entries(SOUND_EFFECTS).forEach(([key, url]) => {
    const audio = new Audio();
    audio.src = url;
    audioCache[key] = audio;
  });
}

// Play a sound effect
export function playSound(soundKey: keyof typeof SOUND_EFFECTS, isMuted: boolean) {
  if (isMuted) return;
  
  const audio = audioCache[soundKey];
  if (audio) {
    audio.currentTime = 0; // Reset to start
    audio.play().catch(() => {
      // Silently handle autoplay restrictions
    });
  }
}