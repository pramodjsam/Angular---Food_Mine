import { CurrencyPipe } from '@angular/common';
import {
  Component,
  computed,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { SearchComponent } from '../search/search.component';
import { FoodService } from '../services/food/food.service';
import { StarRatingComponent } from '../shared/components/star-rating/star-rating.component';
import { Food } from '../shared/models/Food';
import { TagsComponent } from '../tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    StarRatingComponent,
    CurrencyPipe,
    SearchComponent,
    TagsComponent,
    RouterLink,
    NotFoundComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private foodService = inject(FoodService);
  allFoods = signal<Food[]>([]);
  searchTerm = input<string>('');
  tag = input<string>('');

  foods = computed(() => {
    if (this.searchTerm()) {
      return this.foodService.getAlFoodsBySearchTerm(this.searchTerm());
    } else if (this.tag()) {
      return this.foodService.getAllFoodsByTag(this.tag());
    }

    return this.allFoods();
  });

  ngOnInit() {
    this.allFoods.set(this.foodService.getAll());
  }
}
