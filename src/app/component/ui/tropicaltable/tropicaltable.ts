import { Component } from '@angular/core';
import { Tropical } from '../../../Models/tropical';
import { TROPICALS } from '../../../Models/tropicaldb';

@Component({
  selector: 'app-tropicaltable',
  imports: [],
  templateUrl: './tropicaltable.html',
  styleUrl: './tropicaltable.css',
})
export class Tropicaltable {
  tropicals: Tropical[] = [];
  searchTerm: string = '';

  constructor() {
    this.tropicals = TROPICALS;
  }

  get filteredProducts(): Tropical[] {
    if (!this.searchTerm) {
      return this.tropicals;
    }
    const searchLower = this.searchTerm.toLowerCase();
    return this.tropicals.filter((product) => product.name.toLowerCase().includes(searchLower));
  }
}
