import nav from './Nav.module.css';
import { Link } from 'react-router-dom';


const Nav = () => {
    
   return (
    <nav className={nav.nav}>
        <Link to="/" className={nav.navItem}>Home</Link>
        <Link to="/movies" className={nav.navItem}>Movies</Link>
    </nav>
   ) 
}

export default Nav