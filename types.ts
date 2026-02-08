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
  SUCCESS = 'SUCCESS'
}

export interface CartItem {
  product: Product;
  quantity: number;
}