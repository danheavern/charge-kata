import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoaderComponent } from './loader/loader.component';
import { NewItemFormComponent } from '@app/new-item-form/new-item-form.component';
import { BarcodeComponent } from '@app/barcode/barcode.component';
import { AreYouSureComponent } from '@app/are-you-sure/are-you-sure.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoaderComponent, NewItemFormComponent, AreYouSureComponent],
  exports: [LoaderComponent, NewItemFormComponent, AreYouSureComponent]
})
export class SharedModule {}
