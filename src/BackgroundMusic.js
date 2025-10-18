import React, { useRef, useEffect } from 'react';
import './BackgroundMusic.css';

const BackgroundMusic = ({ src, isPlaying, onTogglePlay, visible = true }) => {
  const audioRef = useRef(null);

  // Initialize audio element only once
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = true;
    }
  }, [src]);

  // Effect to play/pause audio when isPlaying prop changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.error("Audio play failed:", error));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleToggle = () => {
    onTogglePlay(!isPlaying);
  };

  return (
    <div className="background-music-controls" style={{ display: visible ? 'block' : 'none' }}>
      <button onClick={handleToggle} className="music-button" title={isPlaying ? "Pause Music" : "Play Music"}>
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  );
};

export default BackgroundMusic;
