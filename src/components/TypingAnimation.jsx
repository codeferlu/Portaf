import React, { useEffect, useState } from 'react';
import './TypingAnimation.css'; // Asegúrate de tener el archivo styles.css en tu proyecto con el contenido CSS proporcionado

function TypingAnimation() {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    const name = "Fernando Olivares";
    let currentIndex = 0;

    const interval = setInterval(() => {
      setAnimatedText((prevText) => prevText + name[currentIndex]);
      currentIndex++;

      if (currentIndex === name.length) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="ache2">
      {animatedText}
      <span className="cursor" />
    </h1>
  );
}

export default TypingAnimation;
