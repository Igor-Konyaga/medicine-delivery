import { StyledLink, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledLink to={'/'}>Shop</StyledLink>
      <StyledLink to={'shopping-cart'}>Shopping Cart</StyledLink>
    </StyledNav>
  );
};
