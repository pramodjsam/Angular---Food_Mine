import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartItem } from '../../shared/models/CartItem';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  constructor() { }

  addToCart(food: Food){
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(food));
  }

  changeQuantity(foodId: number, quantity: number){
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);
    if(!cartItem){
      return;
    }
    cartItem.quantity = quantity;
  }

  getCart(): Cart{
    return this.cart;
  }

  removeFromCart(foodId: number){
    this.cart.items = this.cart.items.filter((item) => item.food.id !== foodId);
  }
}
