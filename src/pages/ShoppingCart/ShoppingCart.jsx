import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartData } from '../../redux/medicines/medicinesSelectors';
import { StyledShoppingCart } from './ShoppingCart.styled';
import { GiMedicines } from 'react-icons/gi';
import { deleteMedicine } from '../../redux/medicines/medicinesReducer';

export const ShoppingCart = () => {
  const shoppingCart = useSelector(shoppingCartData);

  const dispatch = useDispatch();

  const validList = Array.isArray(shoppingCart) && shoppingCart.length > 0;

  return (
    <StyledShoppingCart>
      <ul>
        {validList &&
          shoppingCart.map((medicine) => {
            return (
              <li key={medicine.id}>
                {medicine.name}
                <GiMedicines className="card__icon" />
                <button
                  onClick={() => dispatch(deleteMedicine(medicine.id))}
                  className="card__btn"
                  type="button"
                >
                  remove from cart
                </button>
              </li>
            );
          })}
      </ul>
    </StyledShoppingCart>
  );
};
