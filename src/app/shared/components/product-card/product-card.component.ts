import { Component , Input} from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Product } from '../../models/product';
import { ShoppingCart } from '../../models/cart';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input('product') product;
  // tslint:disable-next-line:no-input-rename
  @Input('show-actions') actions;
  // tslint:disable-next-line:no-input-rename
  @Input('shopping-cart') cart: ShoppingCart;
  constructor(private cartService: ShoppingCartService) { }

  addToCart() {
   this.cartService.addToCart(this.product);
  }
}
