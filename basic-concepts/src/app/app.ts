import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWolrdComponent } from "./hellowolrd/helloworld.component";
import { Mypage } from "./mypage/mypage";

@Component({
  selector: 'app-root',
  imports: [HelloWolrdComponent, Mypage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('basic-concepts');
}
