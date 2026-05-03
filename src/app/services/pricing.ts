import { Injectable } from '@angular/core';
import {PRODUCTS} from '../Models/productdb';

@Injectable({
  providedIn: 'root',
})
export class Pricing {
  constructor() {}

  getPrices() {
    return PRODUCTS;
  }
}
