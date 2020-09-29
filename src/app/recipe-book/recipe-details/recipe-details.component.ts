import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  collapsed: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
}
