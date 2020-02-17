import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ItemListComponent } from '@app/item-list/item-list.component';
import { NewItemFormComponent } from '@app/new-item-form/new-item-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [LoaderComponent, ItemListComponent, NewItemFormComponent],
  exports: [LoaderComponent, ItemListComponent, NewItemFormComponent]
})
export class SharedModule {}
