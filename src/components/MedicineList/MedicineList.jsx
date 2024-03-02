import { useSelector } from 'react-redux';
import { StyledMedicineList } from './MedicineList.styled';
import { medicinesData } from '../../redux/medicines/medicinesSelectors';

export const MedicineList = () => {
  const medicines = useSelector(medicinesData);

  const validList = Array.isArray(medicines) && medicines.length > 0;

  return (
    <StyledMedicineList>
      {validList && medicines.map((medicine) => console.log(medicine.name))}
    </StyledMedicineList>
  );
};
