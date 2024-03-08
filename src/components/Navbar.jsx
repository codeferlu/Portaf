import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Header = (props) => {
    const setActiveClass = ({isActive}) => isActive ? 'active' : ''
    return (
        <Navbar className="navbar" bg="dark" data-bs-theme="dark">
             <Container>
                <NavLink className={setActiveClass} to="/" >Who i'm i</NavLink>
                <NavLink className={setActiveClass} to="/projects" >Proyects</NavLink>
                <NavLink className={setActiveClass} to="/work" >Lets Work Together!</NavLink>
             </Container>
        </Navbar>
    )
}
export default Header;
