import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ApiService } from "../_service/api.service";

@Injectable({ providedIn: 'root' })
export class DrinkDetailResolver implements Resolve<any> {

  constructor(private service: ApiService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getIngredient(route.paramMap.get('ingredientName')!);
  }
}
