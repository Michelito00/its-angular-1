import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';

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

  reload(): void{
    this.ngOnInit()
  }

  searchRandomly() {
    this.apiService.searchCocktailRandomly()
    .subscribe((response: any) => {
      this.drinks = response.drinks;
    })}
}
