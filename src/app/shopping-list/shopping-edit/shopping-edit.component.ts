import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  // @ViewChild('typeInput', { static: false }) typeInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;
  // @ViewChild('unitOfMeasurementInput', { static: false }) measurementInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    console.log(this.amountInputRef, this.nameInputRef);
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value, 
      'Oil', 
      this.amountInputRef.nativeElement.value, 
      'oz'
    );
    this.ingredientAdded.emit(newIngredient);
  }

  onDeleteItem() {

  }

  onClearText() {

  }
}
