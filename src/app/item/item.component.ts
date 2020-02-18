import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/models/Item';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          'max-height': '500px',
          'padding-bottom': '1.5rem',
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          'max-height': '0px',
          'padding-bottom': '0rem',
          opacity: 0
        })
      ),
      transition('open => closed', [animate('0.15s')]),
      transition('closed => open', [animate('0.25s')])
    ])
  ]
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() selected: boolean;
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() select = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
