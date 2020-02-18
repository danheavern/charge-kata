import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          'max-height': '200px',
          'margin-bottom': '1.5rem',
          opacity: 1
        })
      ),
      state(
        'closed',
        style({
          'max-height': '0px',
          'margin-bottom': '0rem',
          opacity: 0
        })
      ),
      transition('open => closed', [animate('0.15s')]),
      transition('closed => open', [animate('0.25s')])
    ])
  ]
})
export class BarcodeComponent implements OnInit {
  @Input() textToEncode: string;

  showBarcode = false;

  constructor() {}

  ngOnInit() {}

  createBarcode() {
    this.showBarcode = !this.showBarcode;
    if (this.showBarcode)
      JsBarcode(`#barcode${this.textToEncode}`, this.textToEncode, {
        width: 2,
        height: 40
      });
  }
}
