import { useDispatch, useSelector } from 'react-redux';
import { StyledSectionShops, StyledShopItem, StyledShopList, StyledTitle } from './ShopList.styled';
import { shops } from '../../entities/shops/model/shopsSelectors';
import { fetchMedicines } from '../../entities/medicines/model/medicinesSlice';
import { useState } from 'react';
import { setShopName } from '../../entities/shops/shopsSlice';
import React from 'react';

export const ShopList = () => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);
  const dispatch = useDispatch();

  const handleClick = (btnId: string) => {
    setActiveBtn(btnId);
  };

  const handleClickBtn = (shopId: string, shopName: string) => {
    dispatch(fetchMedicines(shopId));
    dispatch(setShopName(shopName));
  };

  const shopList = useSelector(shops);

  const validList = Array.isArray(shopList) && shopList.length > 0;

  return (
    <StyledSectionShops>
      <StyledTitle>Shops</StyledTitle>
      <StyledShopList>
        {validList &&
          shopList.map((shop) => {
            return (
              <StyledShopItem onClick={() => handleClick(shop._id)} key={shop.name}>
                <button
                  className={activeBtn === shop._id ? 'shop-btn active' : 'shop-btn'}
                  onClick={() => handleClickBtn(shop._id, shop.name)}
                  type="button"
                >
                  {shop.name}
                </button>
              </StyledShopItem>
            );
          })}
      </StyledShopList>
    </StyledSectionShops>
  );
};
