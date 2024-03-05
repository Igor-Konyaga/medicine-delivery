import styled from 'styled-components';

export const StyledShopPage = styled.section`
  display: flex;
  column-gap: 30px;

  padding-top: 40px;
  padding-bottom: 40px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    row-gap: 20px;
    column-gap: 0;
  }
`;
