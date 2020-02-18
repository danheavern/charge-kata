import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';
import { ItemListComponent } from '@app/item-list/item-list.component';
import { NewItemFormComponent } from '@app/new-item-form/new-item-form.component';
import { ItemComponent } from '@app/item/item.component';
import { BarcodeComponent } from '@app/barcode/barcode.component';
import { AreYouSureComponent } from '@app/are-you-sure/are-you-sure.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    LoaderComponent,
    ItemListComponent,
    NewItemFormComponent,
    ItemComponent,
    BarcodeComponent,
    AreYouSureComponent
  ],
  exports: [LoaderComponent, ItemListComponent, NewItemFormComponent, AreYouSureComponent]
})
export class SharedModule {}
