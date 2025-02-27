import { GiMedicines } from 'react-icons/gi';
import { TfiShoppingCart } from 'react-icons/tfi';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import Notiflix from 'notiflix';
import React, { FormEvent } from 'react';
import {
  deleteAllMedicine,
  deleteMedicine,
  getShoppingCartData,
} from '../../../entities/medicines';
import { createOrderThunk } from '../../../entities/orders';
import { StyledForm, StyledShoppingCart } from './ShoppingCart.styled';
import { useAppDispatch, useAppSelector } from '../../../shared/model/hooks/redux';

export const ShoppingCart = () => {
  const shoppingCart = useAppSelector(getShoppingCartData);
  const dispatch = useAppDispatch();

  const totalPrice = shoppingCart.reduce((acc, medicine) => {
    return medicine.price * medicine.amount + acc;
  }, 0);

  const handleAmountChange = (medicineId: string, newAmount: string) => {
    // dispatch(updateAmount({ medicineId, newAmount }));
  };

  const validList = Array.isArray(shoppingCart) && shoppingCart.length > 0;

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
    const phone = (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value;
    const address = (e.currentTarget.elements.namedItem('address') as HTMLInputElement).value;

    const orderData = {
      name,
      email,
      phone: Number(phone),
      address,
      medicineList: shoppingCart,
    };

    if (shoppingCart.length === 0) {
      Notiflix.Notify.warning('Your shopping cart is empty!');
      return;
    }

    dispatch(createOrderThunk(orderData));
    dispatch(deleteAllMedicine());

    e.currentTarget.reset();

    Notiflix.Notify.success('Your order has been sent!');
  };

  return (
    <StyledShoppingCart>
      <StyledForm onSubmit={handleSubmitForm}>
        <div className="form__wrapper-order">
          <div className="form__info-customer">
            <label>
              Name
              <input type="text" name="name" placeholder="your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="your email" required />
            </label>
            <label>
              Phone
              <input type="number" name="phone" placeholder="your phone" required />
            </label>
            <label>
              Address
              <input type="text" name="address" placeholder="your address" required />
            </label>
          </div>
          <div className="form__list-medicine">
            <ul className="form__list">
              {validList &&
                shoppingCart.map((medicine) => {
                  return (
                    <li className="form__list-item" key={medicine.id}>
                      <div className="wrapper-content">
                        <GiMedicines className="card__icon" />
                        <div>
                          <h3 className="form__medicine-title">{medicine.name}</h3>
                          <p className="form__medicine-price">Price: {medicine.price} UA</p>
                          <div className="card__amount">
                            <button
                              onClick={() => {
                                if (medicine.amount <= 1) {
                                  return;
                                }
                                handleAmountChange(medicine._id, medicine.amount - 1);
                              }}
                              type="button"
                            >
                              <FaMinus />
                            </button>
                            {medicine.amount}
                            <button
                              onClick={() => {
                                handleAmountChange(medicine._id, medicine.amount + 1);
                              }}
                              type="button"
                            >
                              <FaPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          dispatch(deleteMedicine(medicine._id));
                          Notiflix.Notify.success('Removed from cart!');
                        }}
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
        <div className="form__wrapper-btn">
          <p className="form__total-price">Total price: {totalPrice} UA</p>
          <button className="form__btn" type="submit">
            Submit
          </button>
        </div>
      </StyledForm>
    </StyledShoppingCart>
  );
};
