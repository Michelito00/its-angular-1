import { Component, Input } from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() drinks:any[] = [];

  constructor(public router: Router){}
}
