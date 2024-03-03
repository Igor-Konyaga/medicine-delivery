import { useSelector } from 'react-redux';
import { StyledMedicineList } from './MedicineList.styled';
import { medicinesData } from '../../redux/medicines/medicinesSelectors';
import { MedicineCard } from './MedicineCard/MedicineCard';

export const MedicineList = () => {
  const medicines = useSelector(medicinesData);

  const validList = Array.isArray(medicines) && medicines.length > 0;

  return (
    <StyledMedicineList>
      {validList &&
        medicines.map((medicine) => {
          return (
            <MedicineCard key={medicine._id} name={medicine.name}/>
          );
        })}
    </StyledMedicineList>
  );
};
