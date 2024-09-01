import { Component, inject, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private router = inject(Router)
  initialSearch = input<string>("");
  searchTerm = ""

  ngOnInit(){
    console.log(this.initialSearch())
    if(this.initialSearch()){
      this.searchTerm = this.initialSearch() ;

    }
  }

  search(): void{
    if(this.searchTerm){
      this.router.navigate(["/search/", this.searchTerm])
    }
  }
}
