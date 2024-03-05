import styled from 'styled-components';

export const StyledSectionShops = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;

  padding: 30px;

  flex-basis: 33%;

  height: calc(100vh - 162px);

  border: 2px solid #737373;

  border-radius: 8px;

  @media only screen and (max-width: 1000px) {
    padding: 16px;
    row-gap: 16px;
  }
`;

export const StyledTitle = styled.h3`
  font-size: 26px;
`;

export const StyledShopList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media only screen and (max-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;

    column-gap: 20px;
  }
`;

export const StyledShopItem = styled.li`
  .shop-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 12px 16px;
    width: 100%;

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
      color: #fff;
    }
  }
`;
