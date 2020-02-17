import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/models/Item';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          height: '60px',
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0
        })
      ),
      transition('open => closed', [animate('0.07s')]),
      transition('closed => open', [animate('0.1s')])
    ])
  ]
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  columnHeaders = ['Location', 'Item Number', 'Date', 'Description'];
  selectedItem: Item;

  constructor() {}

  ngOnInit() {}

  selectItem(item: Item) {
    this.selectedItem === item ? (this.selectedItem = null) : (this.selectedItem = item);
  }
}
