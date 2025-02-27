import { useDispatch, useSelector } from 'react-redux';
import { StyledSectionShops, StyledShopItem, StyledShopList, StyledTitle } from './ShopList.styled';
import { useState } from 'react';
import React from 'react';
import { getAllShops, setShopName } from '../../entities/shops';
import { getMedicinesByShopThunk } from '../../entities/medicines';
import { useAppDispatch, useAppSelector } from '../../shared/model/hooks/redux';
import { log } from 'console';

export const ShopList = () => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const handleClick = (btnId: string) => {
    setActiveBtn(btnId);
  };

  const handleClickBtn = (shopId: string, shopName: string) => {
    dispatch(getMedicinesByShopThunk(shopId));
    dispatch(setShopName(shopName));
  };

  const shopList = useAppSelector(getAllShops);

  console.log(shopList);

  const validList = Array.isArray(shopList) && shopList.length > 0;

  return (
    <StyledSectionShops>
      <StyledTitle>Shops</StyledTitle>
      <StyledShopList>
        {validList &&
          shopList.map((shop) => {
            return (
              <StyledShopItem onClick={() => handleClick(shop._id ?? '')} key={shop.name}>
                <button
                  className={activeBtn === shop._id ? 'shop-btn active' : 'shop-btn'}
                  onClick={() => handleClickBtn(shop._id ?? '', shop.name)}
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
