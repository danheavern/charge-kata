import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss']
})
export class NewItemFormComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<any>();
  @Output() dismissed = new EventEmitter<any>();
  itemForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.itemForm = this.setDefaultForm();
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
}
