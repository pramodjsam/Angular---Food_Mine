import { Component, inject, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css',
})
export class TagsComponent implements OnInit {
  private foodService = inject(FoodService);
  tags?: Tag[];
  @Input() foodPageTags: string[] | undefined = [];
  @Input() justifyContent: string = "center";

  
  ngOnInit() {
    if(!this.foodPageTags){
      this.tags = this.foodService.getAllTags();
    }
  }
}
