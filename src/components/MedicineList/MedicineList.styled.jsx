import styled from 'styled-components';

export const StyledSectionMidicines = styled.div`
  padding: 30px 40px;

  width: 100%;
  max-height: calc(100vh - 162px);

  overflow-y: auto;

  border: 2px solid #737373;

  border-radius: 8px;

  .midicines__title {
    margin-bottom: 16px;

    font-size: 26px;

	 @media only screen and (max-width: 1000px) {
    text-align: center;
  }
  }
`;

export const StyledMedicineList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`;
