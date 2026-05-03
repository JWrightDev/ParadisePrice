import { Component } from '@angular/core';
import { LandscapeItem } from '../../../Models/LandscapeItems';
import { LandscapeItems } from '../../../Models/Landscapedb';

@Component({
  selector: 'app-landscape-table',
  imports: [],
  templateUrl: './landscape-table.html',
  styleUrl: './landscape-table.css',
})
export class LandscapeTable {
  products: LandscapeItem[] = [];
  searchTerm: string = '';

  constructor() {
    this.products = LandscapeItems;
  }

  get filteredProducts(): LandscapeItem[] {
    if (!this.searchTerm) {
      return this.products;
    }
    const searchLower = this.searchTerm.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchLower)
    );
  }

  protected readonly HTMLInputElement = HTMLInputElement;
}
