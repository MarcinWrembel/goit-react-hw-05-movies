import nav from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const StyledNav = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }`;
 

const Nav = () => {
    
   return (
    <nav className={nav.nav}>
        <StyledNav to="/" className={nav.navItem}>Home</StyledNav>
        <StyledNav to="/movies" className={nav.navItem}>Movies</StyledNav>
    </nav>
   ) 
}

export default Nav