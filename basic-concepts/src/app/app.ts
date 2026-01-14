import { Component, signal } from '@angular/core';
import { WishList } from "./wish-list/wish-list";


@Component({
  selector: 'app-root',
  imports: [WishList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('basic-concepts');
}
