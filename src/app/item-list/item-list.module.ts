import { NgModule } from '@angular/core';
import { ItemListComponent } from './item-list.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ItemModule } from '@app/item/item.module';

@NgModule({
  imports: [CommonModule, SharedModule, ItemModule],
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
  bootstrap: [ItemListComponent]
})
export class ItemListModule {}
