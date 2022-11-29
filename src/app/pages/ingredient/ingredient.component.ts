import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../_service/api.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.compononent.html',
})
export class IngredientComponent implements OnInit {
  ingredient: any = []
  drinks: any = []

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const ingredientName = this.route.snapshot.paramMap.get('ingredientName')!;

    this.apiService.getIngredient(ingredientName).subscribe((response: any) => {
      console.log(response)
      this.ingredient = response.ingredients[0]
    })

    this.apiService.getDrinksByIngredient(ingredientName).subscribe((response: any) => {
      console.log(response)
      this.drinks = response.drinks;
    })
  }

}
