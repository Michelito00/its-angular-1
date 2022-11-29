import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }
    // search a cocktail by name
    searchCocktailByName(name: string) {
      return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)
    }
    // search a cocktail by first letter
    searchCocktailByFirstLetter(firstLetter: string) {
      return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter)
    }
    // randomly cocktail
    searchCocktailRandomly() {
      return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    }
    // get an ingredient by name
    getIngredient(ingredient: string): any {
      return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient)
    }
    //
    getDrinksByIngredient(ingredient: string) {
      return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient);
    }

    // lookup
    // list
    // filter
}
