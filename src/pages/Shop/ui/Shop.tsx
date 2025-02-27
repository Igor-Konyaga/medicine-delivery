import React from 'react';

import { StyledShopPage } from './Shop.styled';
import { ShopList } from '../../../components/ShopList/ShopList';
import { MedicineList } from '../../../components/MedicineList/MedicineList';

export const Shop = () => {
  return (
    <StyledShopPage>
      <ShopList />
      <MedicineList />
    </StyledShopPage>
  );
};
