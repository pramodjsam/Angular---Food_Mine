import { CurrencyPipe } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { StarRatingComponent } from '../shared/components/star-rating/star-rating.component';
import { Food } from '../shared/models/Food';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [StarRatingComponent, TagsComponent, CurrencyPipe, NotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css',
})
export class FoodPageComponent implements OnInit {
  private foodService = inject(FoodService);
  private cartService = inject(CartService);
  private router = inject(Router);
  foodId = input.required<string>();
  food?: Food;

  ngOnInit() {
    this.food = this.foodService.getFoodById(parseInt(this.foodId()));
    console.log(this.food!);
  }

  addToCart() {
    if (this.food) {
      this.cartService.addToCart(this.food);

      this.router.navigate(['/cart-page']);
    }
  }
}
