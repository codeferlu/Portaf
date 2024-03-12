import React, { useState, useEffect } from 'react';
import './Projects.css';

function Proyects() {
  const [clicks, setClicks] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [showCounter, setShowCounter] = useState(true);

  useEffect(() => {
    if (clicks >= 100) {
      setBackgroundColor('#FFD700'); // Cambia el color a dorado cuando se alcanzan 100 clics
      setShowCounter(false); // Oculta el contador cuando se alcanzan 100 clics
    } else {
      setBackgroundColor('white'); // Vuelve al color blanco si se reducen los clics por debajo de 100
      setShowCounter(true); // Vuelve a mostrar el contador si los clics vuelven a ser menos de 100
    }
  }, [clicks]);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className="Projects" style={{ backgroundColor: backgroundColor }}>
      {showCounter && (
        <div>
          <h1>Contador de Clicks: {clicks}</h1>
          <button onClick={handleClick}>Click Me</button>
        </div>
      )}
      {!showCounter && <p>¡Has alcanzado los 100 clics!</p>}
    </div>
  );
}

export default Proyects;