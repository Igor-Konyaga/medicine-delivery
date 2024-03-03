import { useSelector } from 'react-redux';
import {
  StyledSectionShops,
  StyledShopList,
  StyledTitle,
} from './shopList.styled';
import { shops } from '../../redux/shops/shopsSelectors';
import { ShopItem } from './ShopItem/ShopItem';

export const ShopList = () => {
  const shopList = useSelector(shops);

  const validList = Array.isArray(shopList) && shopList.length > 0;

  return (
    <StyledSectionShops>
      <StyledTitle>Shops</StyledTitle>
      <StyledShopList>
        {validList &&
          shopList.map((shop) => {
            return <ShopItem id={shop._id} key={shop.name} name={shop.name} />;
          })}
      </StyledShopList>
    </StyledSectionShops>
  );
};
