import { Component } from '@angular/core';
import {Ingredient} from '../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients : Ingredient[] = [
    new Ingredient("Apple",600),
    new Ingredient("Mango",200)
  ];
    
}
