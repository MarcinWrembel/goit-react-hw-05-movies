import nav from './Navigation.module.css';
import { StyledNav } from './Navigation.styled';
import React from 'react';

const Nav = () => {
  //StyledNav taken from Navigation.styled
  return (
    <nav className={nav.nav}>
      <StyledNav to="/" className={nav.navItem}>
        Home
      </StyledNav>
      <StyledNav to="/movies" className={nav.navItem}>
        Movies
      </StyledNav>
    </nav>
  );
};

export default Nav;
