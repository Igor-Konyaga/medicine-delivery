import React from 'react';
import { StyledHeader } from './Header.styled';
import { Navigation } from './Navigation/Navigation';

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-body__wrapper">
        <Navigation />
      </div>
    </StyledHeader>
  );
};
