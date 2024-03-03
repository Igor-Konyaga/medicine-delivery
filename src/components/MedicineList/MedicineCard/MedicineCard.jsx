import { StyledMedicineCard } from './MedicineCard.styled';
import { GiMedicines } from 'react-icons/gi';

export const MedicineCard = ({ name }) => {
  return (
    <StyledMedicineCard>
      <GiMedicines className='card__icon'/>
      {name}
		<button className='card__btn' type='button'>add to Cart</button>
    </StyledMedicineCard>
  );
};
