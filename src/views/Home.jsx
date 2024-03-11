import React from 'react';
import videoBg from '../assets/videobgg.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faHtml5, faCss3, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Home.css'; // Asegúrate de importar tu archivo CSS

const Home = (props) => {
  return (
    <>
      <div className='video-container'>
        
        <video className='video' src={videoBg} autoPlay loop muted/>
      </div>
      
      <div className='content'>
        <div className='ache1-container'>
          <h1 className='ache2'>I am Fernando Olivares, a Chilean Junior Fullstack JavaScript developer, exploring new technologies and honing my skills. I am proactive, resourceful, and work well in a team.</h1>
          <h1 className='ache1'>
            <span style={{ '--i': 1 }}>JavaScript<FontAwesomeIcon icon={faJs} /></span>
          </h1>
          <h1 className='ache1'>
            <span style={{ '--i': 1 }}>HTML5<FontAwesomeIcon icon={faHtml5} /></span>
            <span style={{ '--i': 1 }}>CSS<FontAwesomeIcon icon={faCss3} /></span>
            <span style={{ '--i': 1 }}>React<FontAwesomeIcon icon={faReact} /></span>
            <span style={{ '--i': 1 }}>Github<FontAwesomeIcon icon={faGithub} /></span>
            </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
