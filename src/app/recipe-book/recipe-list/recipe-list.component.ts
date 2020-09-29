import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  // recipeCreated = new EventEmitter<{
  //   recipeName: string, 
  //   recipeDetails: string,
  //   recipeSize: number,
  //   recipeIngredients: any[]
  // }>();

  @Output() passSelectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Patchouli Peaks', 
      'Uses patchouli and other fresh mountain scents',
      80,
      ['Patchouli Oil', 'Orange Oil', 'Spearmint Oil']
    ),
    new Recipe(
      'Cedarwood Ridge', 
      'Uses patchouli and other fresh mountain scents',
      80,
      ['Patchouli Oil', 'Orange Oil', 'Spearmint Oil']
    ),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.passSelectedRecipe.emit(recipe);
  }
}
