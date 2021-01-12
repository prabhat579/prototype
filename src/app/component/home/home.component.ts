import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
 
  weight: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Wordpress', weight: '1.0079'},
  { name: 'Debug Mode', weight: '1.0079'},
  { name: 'PHP version', weight: 'disable'},
  { name: 'Wordpress', weight: '1.0079'},
  { name: 'Debug Mode', weight: '1.0079'},
  { name: 'PHP version', weight: 'disable'},
  { name: 'Wordpress', weight: '1.0079'},
  { name: 'PHP version', weight: 'disable'},
  { name: 'Wordpress', weight: '1.0079'},

 
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['name', 'weight'];
  dataSource = ELEMENT_DATA;
  constructor() { }


  ngOnInit() {
  }

}
