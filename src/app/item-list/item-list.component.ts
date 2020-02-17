import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];
  columnHeaders = ['Location', 'Item Number', 'Date', 'Description'];

  constructor() {}

  ngOnInit() {}
}
