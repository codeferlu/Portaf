import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


import './Navbar.css'

const Header = (props) => {
    const setActiveClass = ({isActive}) => isActive ? 'active' : ''
    return (
        <Navbar className="navbar">
             <Container>
                <NavLink className={setActiveClass} to="/" >About me</NavLink>
                <NavLink className={setActiveClass} to="/projects" >Proyects</NavLink>
                <NavLink className={setActiveClass} to="/work" >Contact Me</NavLink>
             </Container>
        </Navbar>
    )
}
export default Header;
