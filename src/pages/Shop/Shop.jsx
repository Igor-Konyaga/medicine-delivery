import { MedicineList } from '../../components/MedicineList/MedicineList';
import ShopList from '../../components/shopList/shopList';
import { StyledShopPage } from './Shop.styled';

export const Shop = () => {
  return (
    <StyledShopPage>
      <ShopList />
      <MedicineList />
    </StyledShopPage>
  );
};
