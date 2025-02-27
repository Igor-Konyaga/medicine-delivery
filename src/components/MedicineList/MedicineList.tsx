import { MedicineCard } from './MedicineCard/MedicineCard';
import { StyledMedicineList, StyledSectionMidicines } from './MedicineList.styled';
import React from 'react';
import { getShopName } from '../../entities/shops';
import { getAllMedicines, getMedicinesByShop } from '../../entities/medicines';
import { useAppSelector } from '../../shared/model/hooks/redux';

export const MedicineList = () => {
  const medicines = useAppSelector(getMedicinesByShop);
  const allMedicine = useAppSelector(getAllMedicines);
  const shopName = useAppSelector(getShopName);

  const renderMedicines = medicines.length === 0 ? allMedicine : medicines;

  const validList = Array.isArray(renderMedicines) && renderMedicines.length > 0;

  return (
    <StyledSectionMidicines>
      <h3 className="midicines__title">{medicines.length === 0 ? 'All medicine' : shopName}</h3>
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
