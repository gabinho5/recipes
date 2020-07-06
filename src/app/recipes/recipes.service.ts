import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      "Risotto",
      "Creamy and delicious",
      "https://www.recipetineats.com/wp-content/uploads/2019/10/Mushroom-Risotto_7.jpg",
      [new Ingredient("Rice", 5), new Ingredient("Mushrooms", 10)]
    ),
    new Recipe(
      "Burger",
      "Damn good burger",
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // slice returns a COPY of this recipes array (not a pointer to the original one)
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
