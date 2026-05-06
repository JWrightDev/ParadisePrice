import { Component } from '@angular/core';
import { ANNUALS } from '../../../Models/annualdb';
import { Annual } from '../../../Models/annual';

@Component({
  selector: 'app-annualstable',
  imports: [],
  templateUrl: './annualstable.html',
  styleUrl: './annualstable.css',
})
export class Annualstable {
  annuals: Annual[] = [];
  searchTerm: string = '';

  constructor() {
    this.annuals = ANNUALS;
  }

  get filteredProducts(): Annual[] {
    if (!this.searchTerm) {
      return this.annuals;
    }
    const searchLower = this.searchTerm.toLowerCase();
    return this.annuals.filter(product =>
      product.name.toLowerCase().includes(searchLower)
    );
  }
}
