import { useSelector } from 'react-redux';

import {
  allMedicineData,
  medicinesData,
} from '../../redux/medicines/medicinesSelectors';
import { MedicineCard } from './MedicineCard/MedicineCard';
import { shopData } from '../../redux/shops/shopsSelectors';
import {
  StyledMedicineList,
  StyledSectionMidicines,
} from './MedicineList.styled';
import React from 'react';

export const MedicineList = () => {
  const medicines = useSelector(medicinesData);
  const allMedicine = useSelector(allMedicineData);
  const shopName = useSelector(shopData);

  const renderMedicines = medicines.length === 0 ? allMedicine : medicines;

  const validList =
    Array.isArray(renderMedicines) && renderMedicines.length > 0;

  return (
    <StyledSectionMidicines>
      <h3 className="midicines__title">
        {medicines.length === 0 ? 'All medicine' : shopName}
      </h3>
      <StyledMedicineList>
        {validList &&
          renderMedicines.map((medicine) => {
            return (
              <MedicineCard
                key={medicine._id}
                id={medicine._id}
                name={medicine.name}
                price={medicine.price}
              />
            );
          })}
      </StyledMedicineList>
    </StyledSectionMidicines>
  );
};
