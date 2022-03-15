import { useState, useEffect } from 'react';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    setPlaying(!playing)
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    playing ? audio.play() : audio.pause();
    audio.volume = 0.3;
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle] as const;
};

export default useAudio;