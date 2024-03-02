import { StyledShopItem } from './ShopItem.styled';

export const ShopItem = ({ name }) => {
  return (
    <StyledShopItem>
      <button type="button">{name}</button>
    </StyledShopItem>
  );
};
