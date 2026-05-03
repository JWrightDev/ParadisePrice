import { Component } from '@angular/core';
import { Pricing } from '../../../services/pricing';
import { Product } from '../../../Models/product';

@Component({
  selector: 'app-pricetable',
  imports: [],
  templateUrl: './pricetable.html',
  styleUrl: './pricetable.css',
})
export class Pricetable {
  products: Product[] = [];
  searchTerm: string = '';

  constructor(pricingService: Pricing) {
    this.products = pricingService.getPrices();
  }

  get filteredProducts(): Product[] {
    if (!this.searchTerm) {
      return this.products;
    }
    const searchLower = this.searchTerm.toLowerCase();
    return this.products.filter(product =>
      product.name.toLowerCase().includes(searchLower)
    );
  }
}
