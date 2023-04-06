import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled(NavLink)`
  display: block;
  width:120px;
  color: black;
  border-radius: 25px;

  &.active {
    color: white;
    background:#1069bda5;
  }
`;
