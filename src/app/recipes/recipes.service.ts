import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: "root",
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Risotto",
      "Creamy and delicious",
      "https://www.recipetineats.com/wp-content/uploads/2019/10/Mushroom-Risotto_7.jpg"
    ),
    new Recipe(
      "Risotto",
      "Creamy and delicious",
      "https://www.recipetineats.com/wp-content/uploads/2019/10/Mushroom-Risotto_7.jpg"
    ),
  ];

  constructor() {}

  getRecipes() {
    // slice returns a COPY of this recipes array (not a pointer to the original one)
    return this.recipes.slice();
  }

}
