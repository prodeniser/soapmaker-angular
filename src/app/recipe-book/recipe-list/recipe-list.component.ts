import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
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

}
