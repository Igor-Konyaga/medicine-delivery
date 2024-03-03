import styled from 'styled-components';

export const StyledShoppingCart = styled.section`
  padding: 40px 0;

  ul {
    padding: 20px;
    min-height: calc(100vh - 162px);

    display: flex;
    flex-wrap: wrap;
    column-gap: 60px;
    row-gap: 30px;

    border: 2px solid #737373;

    border-radius: 8px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      row-gap: 16px;

      flex-basis: calc(33.333% - 40px);

      padding: 16px;

      max-height: 220px;

      border: 2px solid #737373;
      border-radius: 8px;

      font-size: 20px;
      font-weight: 600;

      .card__icon {
        width: 100px;
        height: 90px;
      }
      .card__btn {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 80%;
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
    }
  }
`;
