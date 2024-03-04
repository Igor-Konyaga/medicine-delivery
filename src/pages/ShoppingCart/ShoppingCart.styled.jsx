import styled from 'styled-components';

export const StyledShoppingCart = styled.section`
  padding-top: 40px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  row-gap: 20px;

  .form__wrapper-order {
    display: flex;
    column-gap: 20px;

    height: calc(100vh - 220px);
  }

  .form__info-customer,
  .form__list-medicine {
    padding: 30px;
    flex-basis: calc(50% - 10px);

    border: 2px solid #737373;
    border-radius: 8px;
  }

  .form__info-customer {
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    justify-content: space-around;

    label {
      display: flex;
      flex-direction: column;
      row-gap: 6px;

      color: #737373;

      font-size: 18px;

      input {
        padding: 10px 14px;

        background-color: inherit;
        border: 2px solid #737373;
        border-radius: 8px;

        color: inherit;

        &:hover,
        &:focus {
          outline: none;

          border-color: #ffbf29;
        }
      }
    }
  }

  .form__list-medicine {
    position: relative;
    overflow-y: auto;

    .form__wrapper-message-icon {
      display: flex;
      column-gap: 20px;
      justify-content: center;
      align-items: center;

      width: 100%;

      position: absolute;
      top: 50%;
      left: 50%;

      transform: translate(-50%, -50px);

      .form__shopping-cart-icon {
        width: 50px;
        height: 50px;
        fill: #737373;
      }

      .form__message {
        color: #737373;
        font-weight: 600;
        font-size: 26px;
      }
    }
  }

  .form__list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 24px;

    .form__list-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      row-gap: 14px;

      flex-basis: 100%;

      padding: 16px;

      min-height: 200px;

      border: 2px solid #737373;
      border-radius: 8px;

      font-size: 20px;
      font-weight: 600;

      .wrapper-content {
        display: flex;
        column-gap: 20px;

        justify-content: space-evenly;

        .form__medicine-title {
          margin-bottom: 12px;
        }

        .form__medicine-price {
			margin-bottom: 16px;
          font-weight: 400;
          font-size: 14px;
        }

        .card__amount {
          padding: 6px 10px;

          display: flex;
          justify-content: space-between;
          align-items: center;

          width: 150px;

          background-color: #e3e3e3;
          color: #737373;
          border-radius: 8px;

          font-weight: 400;
          font-size: 16px;

          button {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 24px;
            height: 24px;

            background-color: inherit;
            border: none;

            svg {
              fill: #737373;
              transition: all 0.3s;
            }

            &:hover,
            &:focus {
              svg {
                fill: #ffbf29;

                transition: all 0.3s;
              }
            }
          }
        }
      }

      .card__icon {
        width: 110px;
        height: 110px;
      }
      .card__btn {
        display: flex;
        justify-content: center;
        align-items: center;

        align-self: center;

        width: 90%;
        padding: 10px 12px;

        border: 2px solid #737373;
        border-radius: 8px;

        background-color: inherit;

        transition: all 0.3s;

        font-size: 16px;
        font-weight: 400;

        &:hover,
        &:focus {
          background-color: #ffbf29;
          color: #fff;

          transition: all 0.3s;
        }
      }
    }
  }

  .form__btn {
    align-self: flex-end;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px 16px;

    min-width: 200px;

    border: 2px solid #737373;
    border-radius: 10px;

    background-color: inherit;

    transition: all 0.3s;

    font-size: 18px;
    font-weight: 400;

    &:hover,
    &:focus {
      background-color: #ffbf29;
      color: #fff;

      transition: all 0.3s;
    }
  }
`;
