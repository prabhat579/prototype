import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  desc: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {desc:'This is post section.', name: 'post', weight: 1.0079, symbol: 'H'},
  {desc:'This is post section.', name: 'post', weight: 1.0079, symbol: 'H'},
  {desc:'This is post section.', name: 'post', weight: 1.0079, symbol: 'H'},
  {desc:'This is post section.', name: 'post', weight: 1.0079, symbol: 'H'},
];


@Component({
  selector: 'app-resent-post',
  templateUrl: './resent-post.component.html',
  styleUrls: ['./resent-post.component.css']
})
export class ResentPostComponent implements OnInit {
  displayedColumns: string[] = ['desc', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
