import React from 'react';
import musicP from '../assets/dreamland.mp3';

const MusicPlayer = () => {
  return (
    <div>
      
      <audio controls loop>
        <source src={musicP} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  );
};

export default MusicPlayer;
