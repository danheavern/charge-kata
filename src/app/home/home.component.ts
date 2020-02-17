import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string;
  selectedItem: Item;
  items = [
    new Item('location', 145645234586, '02/16/2020', 'this is test data'),
    new Item('new location', 143541324586, '02/16/2020', 'this is test data'),
    new Item('location 3', 1456425444126, '02/16/2020', 'this is test data'),
    new Item('location 4', 14564888443211, '02/16/2020', 'this is test data')
  ];

  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

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
    // TODO: implement fuzzy search on the item list
  }

  handleItemCreated(form: any, modal?: any) {
    this.items.push(this.createItemFromForm(form));
    if (modal) {
      modal.dismiss();
    }
  }

  updateItem(form: any, modal?: any) {
    this.items = this.items.map(i => {
      if (i === this.selectedItem) {
        return this.createItemFromForm(form);
      }
      return i;
    });
    if (modal) {
      modal.dismiss();
    }
  }

  deleteItem() {
    this.items = this.items.filter(i => i !== this.selectedItem);
  }

  createItemFromForm(form: any): Item {
    return new Item(form.location, form.number, form.date, form.description);
  }
}
