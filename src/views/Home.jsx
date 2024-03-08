import React from 'react';
import videoBg from '../assets/videobgg.mp4'

const Home = (props) => {
  return (
    <>
      <div className='video'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
      </div>
      <div className='content'>
        <div className='ache1-container'>
          <h1 className='ache1'>
            <span style={{ '--i': 1 }}>F</span>
            <span style={{ '--i': 2 }}>e</span>
            <span style={{ '--i': 3 }}>r</span>
            <span style={{ '--i': 4 }}>n</span>
            <span style={{ '--i': 5 }}>a</span>
            <span style={{ '--i': 6 }}>n</span>
            <span style={{ '--i': 7 }}>d</span>
            <span style={{ '--i': 8 }}>o</span>

            <span style={{ '--i': 9 }}>O</span>
            <span style={{ '--i': 10 }}>l</span>
            <span style={{ '--i': 11 }}>i</span>
            <span style={{ '--i': 12 }}>v</span>
            <span style={{ '--i': 13 }}>a</span>
            <span style={{ '--i': 14 }}>r</span>
            <span style={{ '--i': 15 }}>e</span>
            <span style={{ '--i': 16 }}>s</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
