import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [RouterLink, CurrencyPipe, NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent implements OnInit {
  private cartService = inject(CartService);
  // private foodService = inject(FoodService);
  private router = inject(Router)
  cart!: Cart;

  ngOnInit(){
    // let foods = this.foodService.getAll();
    // this.cartService.addToCart(foods[1])
    // this.cartService.addToCart(foods[3])
    // this.cartService.addToCart(foods[4])
    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
    this.router.navigate(["/"])
  }

  setCart() {
    this.cart = this.cartService.getCart();
    // if(this.cart.items.length === 0){
    //   this.router.navigate(["/"])
    // }
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
}
