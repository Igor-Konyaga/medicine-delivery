import { useState } from 'react';
import { StyledMedicineCard } from './MedicineCard.styled';
import { GiMedicines } from 'react-icons/gi';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  addMedicine,
  deleteMedicine,
} from '../../../redux/medicines/medicinesReducer';
import { shoppingCartData } from '../../../redux/medicines/medicinesSelectors';
import Notiflix from 'notiflix';

export const MedicineCard = ({ name, id, price }) => {
  const [addCart, setAddCart] = useState(false);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const shoppingCart = useSelector(shoppingCartData);

  const isAdded = shoppingCart.some((medicine) => medicine.id === id);

  const medicine = {
    id,
    name,
    price,
    amount,
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
          <h3 className="card__title">{name}</h3>
          <p className="card__price">Price: {price} UA</p>
          <div className="card__amount">
            <button
              onClick={() => {
                if (amount <= 1) {
                  return;
                }
                setAmount(amount - 1);
              }}
              type="button"
            >
              <FaMinus />
            </button>
            {amount}
            <button onClick={() => setAmount(amount + 1)} type="button">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>

      <button onClick={handleClickBtn} className="card__btn" type="button">
        {addCart || isAdded ? 'remove from cart' : 'add to Cart'}
      </button>
    </StyledMedicineCard>
  );
};
