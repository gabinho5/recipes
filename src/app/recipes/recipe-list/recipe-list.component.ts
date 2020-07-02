import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      "Risotto",
      "Creamy and delicious",
      "https://www.recipetineats.com/wp-content/uploads/2019/10/Mushroom-Risotto_7.jpg"
    ),
    new Recipe(
      "Risotto",
      "Creamy and delicious",
      "https://www.recipetineats.com/wp-content/uploads/2019/10/Mushroom-Risotto_7.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
