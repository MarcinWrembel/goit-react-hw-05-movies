import nav from './Nav.module.css';
import { StyledNav } from './Nav.styled';

const Nav = () => {
  //StyledNav taken from Nav.styled
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
