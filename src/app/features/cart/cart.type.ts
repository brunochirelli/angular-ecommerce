import { Product } from '../products/product.type';

export type Cart = {
  products: CartProduct[];
  total?: number;
  id?: number;
  userId?: number;
};

export type CartProduct = {
  quantity: number;
} & Product;
