import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { AnimationComponent } from './components/animation/animation.component';

  @NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    AnimationComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ProductCardComponent,
    ProductQuantityComponent,
    AnimationComponent,
  ],
  providers: [
    AuthService ,
     AuthGuard ,
      UserService ,
    CategoryService ,
     ProductService ,
      ShoppingCartService,
       OrderService
  ]
})
export class SharedModule { }
