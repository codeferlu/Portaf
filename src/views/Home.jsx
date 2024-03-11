import React, { useState, useRef, useEffect } from 'react';
import videoBg from '../assets/videobgg.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faReact, faGithub, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import './Home.css';

const Home = (props) => {
  const [hovered, setHovered] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const timerRef = useRef(null);

  const texts = [
    { text: 'JavaScript', icon: faJs },
    { text: 'HTML5', icon: faHtml5 },
    { text: 'CSS', icon: faCss3 },
    { text: 'Bootstrap', icon: faBootstrap },
    { text: 'React', icon: faReact },
    { text: 'Github', icon: faGithub }
  ];

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setShowText(false);
    clearTimeout(timerRef.current);
  };

  useEffect(() => {
    if (hovered) {
      timerRef.current = setTimeout(() => {
        setShowText(true);
        timerRef.current = setTimeout(() => {
          setShowText(false);
          timerRef.current = setTimeout(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 150); // Cambiado a 1000ms (1 segundo)
        }, 150); // Cambiado a 1000ms (1 segundo)
      }, 300);
    }
    return () => clearTimeout(timerRef.current);
  }, [hovered, textIndex]);

  return (
    <>
      <div className='video-container' onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
        <video className='video' src={videoBg} autoPlay loop muted />
        {showText && (
          <div className="text-overlay">
            <h1 className='ache1'>
              <span style={{ '--i': 1 }}>{texts[textIndex].text}<FontAwesomeIcon icon={texts[textIndex].icon} /></span>
            </h1>
          </div>
        )}
      </div>
      <div className='content'>
        <div className='ache1-container'>
          <h1 className='ache2'>I am Fernando Olivares, a Chilean Junior Fullstack JavaScript developer, exploring new technologies and honing my skills. I am proactive, resourceful, and work well in a team.</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
