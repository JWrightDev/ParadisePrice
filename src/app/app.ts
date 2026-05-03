import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {initFlowbite} from 'flowbite';
import {Header} from './component/ui/header/header';
import {Footer} from './component/ui/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('ParadisePrice');

  ngOnInit(): void {
    initFlowbite();
  }
}
