import styled from 'styled-components';

export const StyledShopItem = styled.li`
  .shop-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px 16px;
    min-width: 160px;

    border-radius: 8px;
    border: 2px solid #737373;

    background-color: inherit;

    transition: all 0.3s;

    &:hover,
    &:focus {
      background-color: #ffbf29;
      color: #fff;

      transition: all 0.3s;

      outline: none;
    }
    &.active {
      background-color: #ffbf29;
    }
  }
`;
