import styled from 'styled-components';

export const StyledSectionMidicines = styled.div`
  padding: 30px 40px;

  width: 100%;
  max-height: calc(100vh - 162px);

  overflow-y: auto;

  border: 2px solid #737373;

  border-radius: 8px;

  .midicines__title {
    margin-bottom: 12px;

    font-size: 26px;
  }
`;

export const StyledMedicineList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
