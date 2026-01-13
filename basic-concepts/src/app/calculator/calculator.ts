import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss',
})
export class Calculator {
    number1: number = 0;
    number2: number = 0;
    value: number = 0;

    calcResult(){
        this.value = this.number1 + this.number2;
    }


}