import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string;
  
  constructor() {}

  ngOnInit() {
  }

  fuzzySearch(input: string){
    this.searchText = input;
    // TODO: implement fuzzy search on the item list
  }
}
