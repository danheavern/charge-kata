import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ItemListComponent } from '@app/item-list/item-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ItemListComponent],
  exports: [LoaderComponent, ItemListComponent]
})
export class SharedModule {}
