import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { BarcodeComponent } from './barcode.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [BarcodeComponent],
  exports: [BarcodeComponent],
  bootstrap: [BarcodeComponent]
})
export class BarcodeModule {}
