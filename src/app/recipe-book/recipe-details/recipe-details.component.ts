import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
})
export class RecipeDetailsComponent implements OnInit {
  collapsed: boolean = true

  constructor() { }

  ngOnInit(): void {
  }
}
