import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/models/Item';
import { trigger, state, style, transition, animate } from '@angular/animations';

import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          'max-height': '200px',
          'margin-bottom': '1.5rem',
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          'max-height': '0px',
          'margin-bottom': '0rem',
          opacity: 0
        })
      ),
      transition('open => closed', [animate('0.15s')]),
      transition('closed => open', [animate('0.25s')])
    ])
  ]
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() select = new EventEmitter<any>();

  columnHeaders = ['Location', 'Item Number', 'Date', 'Description'];
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

  createBarcode(itemNumber: string) {
    this.showBarcode = !this.showBarcode;
    if (this.showBarcode)
      JsBarcode(`#barcode${itemNumber}`, itemNumber, {
        width: 2,
        height: 40
      });
  }
}
