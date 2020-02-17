import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  columnHeaders = ['Location', 'Item Number', 'Date', 'Description'];
  testData = [
    {
      location: 'location',
      itemNumber: 1,
      date: '02/16/2020',
      description: 'this is test data'
    },
    {
      location: 'location',
      itemNumber: 2,
      date: '02/16/2020',
      description: 'this is test data'
    },
    {
      location: 'location',
      itemNumber: 3,
      date: '02/16/2020',
      description: 'this is test data'
    },
    {
      location: 'location',
      itemNumber: 4,
      date: '02/16/2020',
      description: 'this is test data'
    },
    {
      location: 'location',
      itemNumber: 5,
      date: '02/16/2020',
      description: 'this is test data'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
