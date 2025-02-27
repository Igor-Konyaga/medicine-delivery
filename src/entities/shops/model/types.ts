export type Shop = {
  _id?: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export type ShopsState = {
  shopList: Shop[];
  shopName: string;
  error: string | null;
};

export type ShopsResponse = {
  message: string;
  allShop: Shop[];
};
