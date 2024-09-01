import { Component, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css',
})
export class StarRatingComponent {
  @Input() value: number = 0;
  @Input() totalstars: number = 5;
  @Input() checkedcolor: string = 'red';
  @Input() uncheckedcolor: string = 'black';
  @Input() size: string = '24px';

  stars: number[] = [];

  constructor() {
    this.stars = Array(this.totalstars)
      .fill(0)
      .map((_, index) => index + 1);
  }
}
