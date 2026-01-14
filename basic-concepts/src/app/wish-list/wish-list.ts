import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-wish-list',
  imports: [ FormsModule ],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.scss',
})
export class WishList {
  item: string = '';

  addItem(){
    console.log(this.item);
    this.item = '';      
  }
}
