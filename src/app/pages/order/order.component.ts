import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  drinks:any[] = [];
  cocktail:string = '';
  firstsLetters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letter:string = '';


  ngOnInit(): void {
    this.searchByFirstLetter('a');
  }

  reload(): void{
    this.ngOnInit()
  }

  searchByFirstLetter(letter: string) {
    this.apiService.searchCocktailByFirstLetter(letter)
    .subscribe((response: any) => {
      this.drinks = response.drinks;
      this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink))
    })}

  search(): void {
    this.apiService.searchCocktailByName(this.cocktail)
      .subscribe( (response: any) => {
        console.log(response);
        this.drinks = response.drinks;
    })
  }

}
