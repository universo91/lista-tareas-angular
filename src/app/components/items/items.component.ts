import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total: number = 0;

  constructor(private itemService: ItemService ) { }

  ngOnInit(): void {

   this.itemService.getItems().subscribe( data => {
    this.items = data;
    this.getTotal();
   });

  }

  onDeleteItem( itemParaEliminar: Item) {

    this.itemService.deleteItem(itemParaEliminar).subscribe()
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.itemService.toogleItem(item).subscribe();
    this.getTotal();
  }

  getTotal() {
    this.total = this.items.filter( item => !item.completed)
                           .reduce( (acum, current) => acum + current.price * current.quantity, 0 );
  }

}
