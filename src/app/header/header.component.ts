import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export  class HeaderComponent {
  @Output() feautureSelected = new EventEmitter<string>();

  onRecipes() {
    this.feautureSelected.emit('recipe');
  }

  onShoppingList() {
    this.feautureSelected.emit('shopping-list');
  }

}
