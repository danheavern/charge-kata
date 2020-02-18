import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() select = new EventEmitter<any>();

  columnHeaders = ['Location', 'Date', 'Description'];
  selectedItem: Item;
  showBarcode = false;

  constructor() {}

  ngOnInit() {}

  selectItem(item: Item) {
    this.selectedItem === item ? (this.selectedItem = null) : (this.selectedItem = item);
    this.showBarcode = false;
    this.select.emit(item);
  }

  editItem(item: Item) {
    this.edit.emit(item);
  }

  deleteItem(item: Item) {
    this.delete.emit(item);
  }
}
