import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Drink } from '../_models/drink.model';

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
    // get drinks per ingredient
    getDrinksByIngredient(ingredient: string) {
      return this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient);
    }

    // lookup drink by id
    lookupDrinkById(id: string) {
      return this.httpClient
        .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        .pipe( map( (response: any) => {
          const drink: Drink = response.drinks[0] as Drink;
          drink.ingredients = [];
          drink.instructions = [];
          Object.keys(drink).forEach( (key) => {
            const keyName = key as keyof typeof drink;
            if(key.startsWith('strIngredient') && drink[keyName]) {
              const index = key.replace('strIngredient', '');
              const keyMeasure = 'strMeasure' + index as keyof typeof drink;
              console.log(index);
              drink.ingredients.push({
                name: drink[keyName],
                measure: drink[keyMeasure]
              });
            }
            if(key.startsWith('strInstructions') && drink[keyName]) {
              let lang = key.replace('strInstructions', '');
              if (!lang) {
                lang = 'EN';
              }
              drink.instructions[lang] = drink[keyName]
            }
          });
          return drink;
        }))
    }

    // list
    // filter
}
