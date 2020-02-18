import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-are-you-sure',
  templateUrl: './are-you-sure.component.html',
  styleUrls: ['./are-you-sure.component.scss']
})
export class AreYouSureComponent implements OnInit {
  @Output() delete = new EventEmitter<any>();
  @Output() cancel = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}
}
