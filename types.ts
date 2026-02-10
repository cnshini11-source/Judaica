export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export enum AppView {
  LANDING = 'LANDING',
  CHECKOUT = 'CHECKOUT',
  SUCCESS = 'SUCCESS',
  REGULATIONS = 'REGULATIONS', // תקנון
  TERMS = 'TERMS',             // תנאי שימוש
  ACCESSIBILITY = 'ACCESSIBILITY' // נגישות
}

export interface CartItem {
  product: Product;
  quantity: number;
}