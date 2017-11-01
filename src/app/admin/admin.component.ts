import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayedColumns = ['position', 'name'];
  dataSource = new ExampleDataSource();

  constructor() { }

  ngOnInit() {
  }

  

}

export interface Element {
  name: string;
  position: number;

}

const data: Element[] = [
  {position: 1, name: 'Kleur'},
  {position: 2, name: 'Product'},
  {position: 3, name: 'Materiaal'},
  
];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return Observable.of(data);
  }

  disconnect() {}
}

