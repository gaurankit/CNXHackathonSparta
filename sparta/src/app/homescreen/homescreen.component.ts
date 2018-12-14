import { Component, OnInit } from '@angular/core';
import { TRIPS } from '../mock.trips';


@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  
  trips = TRIPS;

  constructor() { }

  ngOnInit() {
   
  }

}
