import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrinkComponent } from './pages/drink/drink.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from "./pages/ingredient/ingredient.component";
import { DrinkDetailResolver } from './_resolvers/drink-detail.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'drink/:idDrink', component: DrinkComponent, resolve: {drink: DrinkDetailResolver} },
  { path: 'ingredient/:ingredientName', component: IngredientComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
