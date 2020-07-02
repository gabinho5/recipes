import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameRef: ElementRef;
  @ViewChild('amountInput') ingredientAmountRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    const name = this.ingredientNameRef.nativeElement.value;
    const amount = this.ingredientAmountRef.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name, amount));
  }
}
