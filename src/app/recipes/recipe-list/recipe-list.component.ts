import { Component } from '@angular/core';
import {Recipe} from '../../models/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  Recipes : Recipe[] = [

    new Recipe("Recipe Name","This is Description","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/10/14/0/FNK_TORTILLA_BREAKFAST_WRAP_H_f_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1602696910893.jpeg"),
    new Recipe("Recipe Name","This is Description","https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/10/14/0/FNK_TORTILLA_BREAKFAST_WRAP_H_f_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1602696910893.jpeg"),
    

  ]

}
