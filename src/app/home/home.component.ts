import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/models/Item';
import { testItems } from 'src/models/TestData';

import * as FuzzySearch from 'fuzzy-search';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string;
  selectedItem: Item;
  items = testItems;
  filteredList: Item[];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.syncLists();
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      result => {
        // this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        console.log('Dismissed by ' + reason);
      }
    );
  }

  fuzzySearch(input: string) {
    this.searchText = input;
    const searcher = new FuzzySearch(this.items, ['location', 'number', 'date', 'description'], {
      sort: true
    });
    this.filteredList = searcher.search(input);
  }

  handleItemCreated(form: any, modal?: any) {
    this.addItem(this.createItemFromForm(form));
    if (modal) {
      modal.dismiss();
    }
  }

  updateItem(form: any, modal?: any) {
    const newItem = this.createItemFromForm(form);
    this.editItem(this.selectedItem, newItem);
    if (modal) {
      modal.dismiss();
    }
  }

  editItem(item: Item, newItem: Item) {
    this.items = this.items.map(i => {
      if (i === item) {
        return newItem;
      }
      return i;
    });
    this.syncLists();
  }

  addItem(item: Item) {
    this.items.push(item);
    this.syncLists();
  }

  removeItem(item: Item) {
    this.items = this.items.filter(i => i !== item);
    this.syncLists();
  }

  deleteItem() {
    this.removeItem(this.selectedItem);
  }

  createItemFromForm(form: any): Item {
    return new Item(form.location, form.number, form.date, form.description);
  }

  syncLists() {
    this.filteredList = this.items;
  }
}
