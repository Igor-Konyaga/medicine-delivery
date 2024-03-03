import { useState } from 'react';
import { StyledMedicineCard } from './MedicineCard.styled';
import { GiMedicines } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMedicine,
  deleteMedicine,
} from '../../../redux/medicines/medicinesReducer';
import { shoppingCartData } from '../../../redux/medicines/medicinesSelectors';

export const MedicineCard = ({ name, id }) => {
  const [addCart, setAddCart] = useState(false);
  const dispatch = useDispatch();

  const shoppingCart = useSelector(shoppingCartData);

  const isAdded = shoppingCart.some((medicine) => medicine.id === id);

  const medicine = {
    id,
    name,
  };

  const handleClickBtn = () => {
    if (!isAdded) {
      setAddCart(true);
      dispatch(addMedicine(medicine));
      return;
    }
    setAddCart(false);
    dispatch(deleteMedicine(id));
  };
  return (
    <StyledMedicineCard>
      <GiMedicines className="card__icon" />
      {name}
      <button onClick={handleClickBtn} className="card__btn" type="button">
        {addCart || isAdded ? 'added' : 'add to Cart'}
      </button>
    </StyledMedicineCard>
  );
};
