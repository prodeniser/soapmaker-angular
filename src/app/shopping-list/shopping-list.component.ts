import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Coconut', 'Oil', 32, 'oz'),
    new Ingredient('Olive', 'Oil', 8, 'oz'),
    new Ingredient('Patchouli', 'Oil', 2, 'oz'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
