import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() producto: Item = new Item();
  @Output() itemAEliminar: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteItem(itemRemove: Item) {
    this.itemAEliminar.emit(itemRemove);
  }

  onTogleItem(toggleItem: Item) {
    toggleItem.completed = !toggleItem.completed;
    this.toggleItem.emit( toggleItem );
  }

}
