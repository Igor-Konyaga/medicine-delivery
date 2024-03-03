import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartData } from '../../redux/medicines/medicinesSelectors';
import { StyledForm, StyledShoppingCart } from './ShoppingCart.styled';
import { GiMedicines } from 'react-icons/gi';
import { deleteMedicine } from '../../redux/medicines/medicinesReducer';

export const ShoppingCart = () => {
  const shoppingCart = useSelector(shoppingCartData);

  const dispatch = useDispatch();

  const validList = Array.isArray(shoppingCart) && shoppingCart.length > 0;

  return (
    <StyledShoppingCart>
      <StyledForm>
        <div className="form__wrapper-order">
          <div className="form__info-customer"></div>
          <div className="form__list-medicine">
            <ul>
              {validList &&
                shoppingCart.map((medicine) => {
                  return (
                    <li key={medicine.id}>
                      <div className="wrapper-content">
                        <GiMedicines className="card__icon" />
                        <div>
                          <h3>{medicine.name}</h3>
                          <p>Price: {medicine.price} UA</p>
                        </div>
                      </div>

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
          </div>
        </div>
        <button className="form__btn" type="submit">
          Submit
        </button>
      </StyledForm>
    </StyledShoppingCart>
  );
};
