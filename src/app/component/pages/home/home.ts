import { Component } from '@angular/core';
import { Pricetable } from '../../ui/pricetable/pricetable';

@Component({
  selector: 'app-home',
  imports: [Pricetable],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
