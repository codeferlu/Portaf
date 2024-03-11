import videoBg from '../assets/videobgg.mp4'

const Proyects = (props) => {
    return (
        <>
        <div className='video'>
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted/>
      </div>
      
        <h2>Este es un componente simple de Proyects</h2>
        </>
  
    );
  };
  
  export default Proyects;