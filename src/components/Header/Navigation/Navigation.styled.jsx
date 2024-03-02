import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  column-gap: 30px;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding: 26px 0;

  color: #737373;

  font-size: 26px;
  font-weight: 600;

  transition: all 0.3s;

  &::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 16px;
    left: 0;

    width: 0;
    height: 3px;

    border-radius: 4px;

    background-color: #ffbf29;
  }

  &.active {
    color: #ffbf29;

    &::before {
      width: 100%;
      transition: all 0.3s;
    }
  }

  &:hover {
    &::before {
      width: 100%;
      transition: all 0.3s;
    }
    color: #ffbf29;
  }
`;
