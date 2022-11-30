import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  drinkss:any[] = [];
  cocktail:string = '';
  firstsLetters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letter:string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.search();
  }

  search(): void {
    this.apiService.searchCocktailByName(this.cocktail)
      .subscribe( (response: any) => {
        console.log(response);
        this.drinkss = response.drinks;
    })
  }

}
