import styled from 'styled-components';

export const StyledMedicineCard = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  row-gap: 16px;

  flex-basis: calc(50% - 30px);

  padding: 16px;

  min-height: 220px;

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
`;
