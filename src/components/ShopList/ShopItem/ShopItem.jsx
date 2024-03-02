import { useDispatch } from 'react-redux';
import { StyledShopItem } from './ShopItem.styled';
import { fetchAllMedicine } from '../../../redux/medicines/medicinesReducer';

export const ShopItem = ({ id, name }) => {
  const dispatch = useDispatch();

  return (
    <StyledShopItem>
      <button onClick={() => dispatch(fetchAllMedicine(id))} type="button">
        {name}
      </button>
    </StyledShopItem>
  );
};
