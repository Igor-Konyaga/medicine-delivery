import styled from 'styled-components';

export const StyledSectionShops = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  align-items: center;

  padding: 30px;

  border: 2px solid lightblue;

  flex-basis: 33%;

  height: calc(100vh - 162px);
`;

export const StyledTitle = styled.h3`
  font-size: 26px;
`;

export const StyledShopList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
