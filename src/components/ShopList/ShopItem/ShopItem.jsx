import { useDispatch } from 'react-redux';
import { StyledShopItem } from './ShopItem.styled';
import { fetchAllMedicine } from '../../../redux/medicines/medicinesReducer';
import { useState } from 'react';

export const ShopItem = ({ id, name }) => {
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchAllMedicine(id));
    setIsActive(!isActive);
  };

  return (
    <StyledShopItem>
      <button
        className={isActive ? 'shop-btn active' : 'shop-btn'}
        onClick={handleClick}
        type="button"
      >
        {name}
      </button>
    </StyledShopItem>
  );
};
