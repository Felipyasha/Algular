import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ItemList } from "./itemlist";

@Component({
  selector: 'app-wish-list',
  imports: [ FormsModule ],
  templateUrl: './wish-list.html',
  styleUrl: './wish-list.scss',
})
export class WishList {
  item: string = '';
  list: ItemList[] = []; 
  
  addItem(){
    let itemlist = new ItemList();
    itemlist.name = this.item;
    itemlist.id = this.list.length +1;

    this.list.push(itemlist);
    
    this.item = '';  
  }
}
