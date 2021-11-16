export interface ICreateProduct {
  name: string;
  type: string;
  cost: string;
  paragraph: string;
  userId: string;
  image: any;
}

export interface IFormBuyProduct {
  name: string;
  phone: string;
  address: string;
  totalAmount: string;
  order: Array<any>;
}
export interface ILcalBuyAddress {
  name: string;
  phone: string;
  address: string;
}
