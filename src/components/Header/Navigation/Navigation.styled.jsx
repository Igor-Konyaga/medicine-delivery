import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
display: flex;
column-gap: 30px;
`

export const StyledLink = styled(NavLink)`
  padding: 20px 0;

  color: #ffffff;

  font-size: 22px;

  &.active {
    color: #3d973f;
  }
`;
