import { Product } from './product';

export class ShoppingCartItem {
  title: string;
  imageUrl: number;
  price: number;
  key: string;
  quantity: number;


  constructor(init?: Partial<ShoppingCartItem>) {
    Object.assign(this, init);
  }

  get totalPrice() {
    return this.price * this.quantity;
  }
}