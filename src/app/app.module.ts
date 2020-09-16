import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryItemComponent } from './inventory/inventory-item/inventory-item.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeComponent } from './recipe-book/recipe/recipe.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './recipe-book/recipe-details/recipe-details.component';
import { InventoryItemEditComponent } from './inventory/inventory-item-edit/inventory-item-edit.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InventoryComponent,
    InventoryItemComponent,
    RecipeBookComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    InventoryItemEditComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
