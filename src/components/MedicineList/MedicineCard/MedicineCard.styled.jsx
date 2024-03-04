import styled from 'styled-components';

export const StyledMedicineCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  row-gap: 16px;

  flex-basis: calc(50% - 30px);

  padding: 16px;

  min-height: 200px;

  border: 2px solid #737373;
  border-radius: 8px;

  font-size: 20px;
  font-weight: 600;

  .wrapper-content {
    display: flex;
    column-gap: 20px;

    justify-content: space-between;

    .card__title {
      margin-bottom: 12px;
    }

    .card__price {
      margin-bottom: 16px;

      font-weight: 400;
      font-size: 14px;
    }
    .card__amount {
      padding: 6px 10px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 120px;

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
    width: 100px;
    height: 100px;
  }
  .card__btn {
    display: flex;
    justify-content: center;
    align-items: center;

    align-self: center;

    width: 100%;
    padding: 8px 12px;

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
`;
