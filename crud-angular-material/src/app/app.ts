import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from "@angular/material/toolbar";
import { Consultation } from "./consultation/consultation";
import { Register } from "./register/register";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, Consultation, Register],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('crud-angular-material');
}
