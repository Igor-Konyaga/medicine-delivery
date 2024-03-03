import { MedicineList } from '../../components/MedicineList/MedicineList';
import { ShopList } from '../../components/ShopList/ShopList';
import { StyledShopPage } from './Shop.styled';

export const Shop = () => {
  return (
    <StyledShopPage>
      <ShopList />
      <MedicineList />
    </StyledShopPage>
  );
};
