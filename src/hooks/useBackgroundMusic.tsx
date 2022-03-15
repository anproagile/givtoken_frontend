import { useState, useEffect } from 'react';

const useBackgroundMusic = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);
    const [musicVolume, setMusicVolume] = useState(0);

    const setVolume = (volume: number) => {
        if (volume === 0) {
            setMusicVolume(0);
            setPlaying(false);
        } else if (volume === 0.01) {
            setMusicVolume(0.01);
            setPlaying(true);
        } else if (volume === 0.1) {
            setMusicVolume(0.1);
            setPlaying(true);
        } else if (volume === 1) {
            setMusicVolume(1);
            setPlaying(true);
        }
    };

    useEffect(() => {
        // audio.autoplay = true;
        // audio.muted = true;
        // eslint-disable-next-line no-unused-expressions
        playing ? audio.play() : audio.pause();
        audio.volume = musicVolume;
    }, [audio, playing, musicVolume]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [musicVolume, setVolume] as const;
};

export default useBackgroundMusic;