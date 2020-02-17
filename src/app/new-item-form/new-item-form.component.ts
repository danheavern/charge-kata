import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/models/Item';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss']
})
export class NewItemFormComponent implements OnInit {
  @Input() itemToEdit: Item;
  @Output() itemCreated = new EventEmitter<any>();
  @Output() dismissed = new EventEmitter<any>();
  itemForm: FormGroup;

  constructor() {}

  ngOnInit() {
    if (this.itemToEdit) {
      this.itemForm = this.editItemForm(this.itemToEdit);
    } else {
      this.itemForm = this.setDefaultForm();
    }
  }

  addItem() {
    this.itemCreated.emit(this.itemForm.value);
    this.itemForm = this.setDefaultForm();
  }

  dismiss() {
    this.dismissed.emit();
  }

  setDefaultForm() {
    return new FormGroup({
      location: new FormControl('', Validators.required),
      itemNumber: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  editItemForm(item: Item) {
    return new FormGroup({
      location: new FormControl(item.location, Validators.required),
      itemNumber: new FormControl(item.number, Validators.required),
      date: new FormControl(item.date, Validators.required),
      description: new FormControl(item.description, Validators.required)
    });
  }
}
