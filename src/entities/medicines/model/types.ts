export type Medicine = {
  _id: string;
  name: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
  price: number;
};

export type MedicinesState = {
  allMedicine: Medicine[];
  medicineList: Medicine[];
  shoppingCart: Medicine[];
  error: string | null;
};
