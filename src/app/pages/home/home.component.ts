import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { CardComponent } from "src/app/components/card/card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drinks:any[] = [];
  cocktail:string = '';
  firstsLetters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  letter:string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.searchRandomly();
  }

  searchRandomly() {
    this.apiService.searchCocktailRandomly()
    .subscribe((response: any) => {
      this.drinks = response.drinks;
  })}

  searchByFirstLetter(letter: string) {
    this.apiService.searchCocktailByFirstLetter(letter)
    .subscribe((response: any) => {
      this.drinks = response.drinks;
      this.drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink))
  })}
}
