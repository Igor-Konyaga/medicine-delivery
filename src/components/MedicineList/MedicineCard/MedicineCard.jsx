import { useState } from 'react';
import { StyledMedicineCard } from './MedicineCard.styled';
import { GiMedicines } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMedicine,
  deleteMedicine,
} from '../../../redux/medicines/medicinesReducer';
import { shoppingCartData } from '../../../redux/medicines/medicinesSelectors';
import Notiflix from 'notiflix';

export const MedicineCard = ({ name, id, price }) => {
  const [addCart, setAddCart] = useState(false);
  const dispatch = useDispatch();

  const shoppingCart = useSelector(shoppingCartData);

  const isAdded = shoppingCart.some((medicine) => medicine.id === id);

  const medicine = {
    id,
    name,
    price,
  };

  const handleClickBtn = () => {
    if (!isAdded) {
      setAddCart(true);
      dispatch(addMedicine(medicine));
      Notiflix.Notify.success('Added to cart!');

      return;
    }
    setAddCart(false);
    dispatch(deleteMedicine(id));
    Notiflix.Notify.success('Removed from cart!');
  };
  return (
    <StyledMedicineCard>
      <div className="wrapper-content">
        <GiMedicines className="card__icon" />
        <div>
          <h3>{name}</h3>
          <p>Price: {price} UA</p>
        </div>
      </div>

      <button onClick={handleClickBtn} className="card__btn" type="button">
        {addCart || isAdded ? 'remove from cart' : 'add to Cart'}
      </button>
    </StyledMedicineCard>
  );
};
