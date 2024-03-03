import { MedicineList } from '../../../src/components/MedicineList/MedicineList';
import { ShopList } from '../../../src/components/ShopList/ShopList';
import { StyledShopPage } from './Shop.styled';

export const Shop = () => {
  return (
    <StyledShopPage>
      <ShopList />
      <MedicineList />
    </StyledShopPage>
  );
};
