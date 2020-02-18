import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ItemComponent } from './item.component';
import { BarcodeModule } from '@app/barcode/barcode.module';

@NgModule({
  imports: [CommonModule, SharedModule, BarcodeModule],
  declarations: [ItemComponent],
  exports: [ItemComponent],
  bootstrap: [ItemComponent]
})
export class ItemModule {}
