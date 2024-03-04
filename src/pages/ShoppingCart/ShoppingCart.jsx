import { useDispatch, useSelector } from 'react-redux';
import { shoppingCartData } from '../../redux/medicines/medicinesSelectors';
import { StyledForm, StyledShoppingCart } from './ShoppingCart.styled';
import { GiMedicines } from 'react-icons/gi';
import { TfiShoppingCart } from 'react-icons/tfi';
import {
  deleteAllMedicine,
  deleteMedicine,
} from '../../redux/medicines/medicinesReducer';
import { fetchCreateOrder } from '../../redux/orders/ordersReducer';

export const ShoppingCart = () => {
  const shoppingCart = useSelector(shoppingCartData);

  const dispatch = useDispatch();

  const validList = Array.isArray(shoppingCart) && shoppingCart.length > 0;

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const orderData = {
      name: 'Igor',
      email: 'igor@gmail.com',
      phone: Number('0994568158'),
      address: 'street',
      medicineList: shoppingCart,
    };

    dispatch(fetchCreateOrder(orderData));
    dispatch(deleteAllMedicine());
  };

  return (
    <StyledShoppingCart>
      <StyledForm onSubmit={handleSubmitForm}>
        <div className="form__wrapper-order">
          <div className="form__info-customer"></div>
          <div className="form__list-medicine">
            <ul className="form__list">
              {validList &&
                shoppingCart.map((medicine) => {
                  return (
                    <li className="form__list-item" key={medicine.id}>
                      <div className="wrapper-content">
                        <GiMedicines className="card__icon" />
                        <div>
                          <h3 className="form__medicine-title">
                            {medicine.name}
                          </h3>
                          <p className="form__medicine-price">
                            Price: {medicine.price} UA
                          </p>
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
            {shoppingCart.length === 0 && (
              <div className="form__wrapper-message-icon">
                <TfiShoppingCart className="form__shopping-cart-icon" />
                <p className="form__message">Shopping cart is empty</p>
              </div>
            )}
          </div>
        </div>
        <button className="form__btn" type="submit">
          Submit
        </button>
      </StyledForm>
    </StyledShoppingCart>
  );
};
